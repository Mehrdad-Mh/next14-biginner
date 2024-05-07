import { getPosts } from "@/lib/data"
import styles from "./blog.module.css"
import PostCard from "@/components/postCard/postCard"








const getData = async() => {
  const res = await fetch("http://localhost:3000/api/blog", {next:{revalidate:3600}});

  if(!res){
    throw new Error("eeror in fetching data")
  }

  return res.json()
}



export const metadata = {
  title: ' blog page ',
  description: 'Next.js consist of all of our posts',
}


const BlogPage = async () => {


  const posts = await getData();


  // const posts = await getPosts();
  console.log(posts,"posts in Blogjs is ")


  return (
  
    <div className={styles.container}>
      { posts.map((post) => (
        <div className={styles.post} key={post.id}>
          <PostCard post={post} />
        </div>
      ))}
 
    </div>
  );
};

export default BlogPage;













