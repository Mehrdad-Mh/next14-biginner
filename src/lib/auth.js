import NextAuth from "next-auth";
import GitHub from "next-auth/providers/github";
import CredentialsProvider from "next-auth/providers/credentials";
import { connectToDb } from "./utils";
import { User } from "./models";
import bcrypt from "bcryptjs";
import { authConfig } from "./auth.config";
// import Google from "next-auth/providers/google"

const login = async (credentials) => {
  try {
    connectToDb();
    const user = await User.findOne({ username: credentials.username });

    if (!user) throw new Error("wrong credentials");

    const isPasswordCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );

    if (!isPasswordCorrect) {
      throw new Error("the password you entered is incorrect");
    }

    return user;
  } catch (err) {
    console.log(err);
    throw new Error("error in login auth.js line 16");
  }
};

export const {
  auth,
  handlers: { GET, POST },
  signIn,
  signOut,
} = NextAuth({
  ...authConfig,
  providers: [
    GitHub({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),

    CredentialsProvider({
      // first we use database to find user , if user and pass was correct we return the user
      //if its not correct authentication will be faild
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile }) {
      // console.log( profile,user,account )
      if (account.provider === "github") {
        connectToDb();

        try {
          const user = await User.findOne({ email: profile.email }); // checking if user email is exist in our db or not
          // if it doesnt exist we gonna create a new one
          if (!user) {
            const newUser = new User({
              //creating new user when its not in our database
              username: profile.login,
              email: profile.email,
              image: profile.avatar_url,
            });

            await newUser.save(); // save the user in our database
          }
        } catch (err) {
          console.log(err);
          return false; // when we return false even if user signIn with github and we cant find it in
          //our database user is not authenticated so we have to check it in our db first
        }
      }
      return true; // we return true when we have our user in database
    },

    ...authConfig.callbacks,
  },
});
