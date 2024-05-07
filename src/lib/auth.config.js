

export const authConfig = {  

    pages : {
        signIn : "/login"
    },

    providers : [],

 callbacks : {
    // when we are logged in nextAuth will create a token & we have user info & by that we can update the token
   async jwt ({token , user}){

    if(user){
        token.id=user.id, // here we can add other user property that user has on its model or on database
        token.isAdmin = user.isAdmin
        // token.username = user.username
    }
    return token; // now with this updated token we can update our session

   },
   async session({session , token}){

   if(token){
    session.user.id = token.id,
    session.user.isAdmin = token.isAdmin// isAdmin field is so important because we can redirect whith this field info
    // session.user.username = token.username
   }
   return session;

   },


    authorized({auth , request}){   // with this function we can define our authorization rules

     const user = auth?.user; // check our user 
     const isOnAdminPanel = request.nextUrl?.pathname.startsWith("/admin"); // check if user is on admin panel or not
     const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
     const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");



     //Only Admin Can Reach The Dashboard
     if(isOnAdminPanel && !user?.isAdmin){ //if we are on admin panel and user is not admin return false
        return false; // it will redirect us to the login page
     }



     //Only Authenticted user Can See Blog Page
      if(isOnBlogPage && !user){
        return false
      }




     //Only Unathenticated Users Can reach the Login Page
      if(isOnLoginPage && user){
        return Response.redirect(new URL("/" , request.nextUrl))
      }

      return true;
    }
 }

} 

