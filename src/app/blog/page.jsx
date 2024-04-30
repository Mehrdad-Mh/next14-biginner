import { getPosts } from "@/lib/data"
import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"
// import clientPromise from "@/lib/mongodb";
// import {GetPostss} from "@/lib/dataa"






// const getData = async() => {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");

//   if(!res){
//     throw new Error("eeror in fetching data")
//   }

//   return res.json()
// }

// export const GetPostss = async() => {

//   try{

//       const client = await clientPromise;
//       const db = client.db('Next14');
//       const collection = db.collection('posts');
    
//       // Use the collection to perform CRUD operations
//       const getPosts = await collection.find()
//       console.log(getPosts,"Posts are these")
//       // return getPosts;
//     //   res.status(200).json(data);

//   }catch(error){
//       console.log(error,"error in geting post")
//   }
 

// }

export const metadata = {
  title: ' blog page ',
  description: 'Next.js consist of all of our posts',
}


// const BlogPage = async () => {


//   // const posts = await getData();


//   const posts = await getPosts();



//   return (
  
//     <div className={styles.container}>
//       { posts.map((post) => (
//         <div className={styles.post} key={post.id}>
//           <PostCard post={post} />
//         </div>
//       ))}
 
//     </div>
//   );
// };

// export default BlogPage;












import clientPromise from "@/lib/mongodb";

export default async function GetData() {
  const client = await clientPromise;
  const db = client.db('Next14');
  const collection = db.collection('users');

  // Use the collection to perform CRUD operations
  const getUsers = await collection.find({}).toArray();
  console.log(getUsers,"users are these")
//   res.status(200).json(data);

const getUser = await collection.findById(id)
console.log(getUser,"single user is")

}
