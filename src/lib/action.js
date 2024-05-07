"use server";

import { Post, User } from "./models";
import { connectToDb } from "./utils";
import { signIn, signOut } from "./auth";
import bcrypt from "bcryptjs"
import { revalidatePath } from "next/cache";



export const addPost = async (previousState,formData) => {
  const { title, desc, slug, userId ,img } = Object.fromEntries(formData);

  try {
    connectToDb();
    const newPost = new Post({
      title,
      desc,
      slug,
      userId,
      img
    });

    await newPost.save();
    revalidatePath("/blog");
    revalidatePath("/admin");
    console.log("saved to db");
  } catch (err) {
    console.log(err);
    return{error: "error in sending post to database"};
  }

  console.log(title, desc, slug, userId, "form data is actionjs is");
};

export const deletePost = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDb();

    await Post.findByIdAndDelete(id);
    console.log("deleted from db");
    revalidatePath("/blog");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    return {error : "error in deleting post from database"} ;
  }

  // console.log(title , desc , slug, userId,"form data is actionjs is")
};


export const addUser = async (previousState,formData) => {
  const { username, password, email, img } = Object.fromEntries(formData);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password , salt)

  try {
    connectToDb();
    const newUser = new User({
      username,
      password : hashedPassword,
      email,
      img,
    });
   
    await newUser.save();
    revalidatePath("/admin");
    console.log(newUser,"new user added to db")
    return {success : true}
   
  } catch (err) {
    console.log(err);
    throw new Error("error in sending post to database");
  }

 
};

export const deleteUser = async (formData) => {
  const { userId } = Object.fromEntries(formData);

  try {
    connectToDb();
    console.log(connectToDb,"db is connectd")
    await Post.deleteMany({userId})
    await User.findByIdAndDelete(userId);
    console.log("deleted from db");
    revalidatePath("/admin");
  } catch (err) {
    console.log(err);
    throw new Error("error in deleting user from database");
  }

  // console.log(title , desc , slug, userId,"form data is actionjs is")
};

export const handleGithubLogin = async () => {
  "use server";

  await signIn("github");
};

export const handleLogout = async () => {
  "use server";

  await signOut();
};

export const register = async (previousState,formData) => {
  const { username, email, password, confirmPass, img } =
    Object.fromEntries(formData); // getting user data that entered in form 

  if (password !== confirmPass) { // if password that user entered doesnt matched the confirm password it gives error
    return {error : "password doesnt match"};
  }

  try {
    connectToDb();

    const user = await User.findOne({ username }); // compare the username that user entered with the username in db
   

    if (user) {  // if it matched we show message that this user already exist
      return {error : "user already exist in database"};
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password , salt)

    // else if the username wasnt in database we create new one by below function

    const newUser = new User({
      username,
      email,
      password : hashedPassword,
      confirmPass,
      img,
    });

    await newUser.save(); // if everything was ok we save the new user to the database
    console.log(newUser,"new user added to db")
    return {success : true}
  } catch (err) {
    console.log(err);
    throw new Error("error in creating new user with credentials");
  }
};

export const login = async (previousState,formData) =>{
 
    const {username , password} = Object.fromEntries(formData);

    // const router = useRouter()
 
    try{
       
      await signIn("credentials" , {username , password})

       return {success : true}

    }catch(err){
        console.log(err)

        if(err.message.includes("CredentialsSignin")){
          return {error : "invalid username or password"}
        }
       throw err
    }


} 