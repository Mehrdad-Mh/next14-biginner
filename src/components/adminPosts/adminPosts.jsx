import Image from "next/image"
import styles from "./adminPosts.module.css"
import { getPosts } from "@/lib/data"
import { deletePost } from "@/lib/action"



const AdminPosts = async () => {

  const posts = await getPosts()
     
  // {posts.map(post =>(
  //   console.log(post,"mapped post is")
  // ))}

  return (

    <>
<h1>  پست ها   </h1>
    <div className={styles.container}>
      
      {posts.map((post) => (
        <div className={styles.post}  key={post.id}>
           <div className={styles.details}>
           <Image src={post.img || "/noavatar.png" } alt="" width={50} height={50} />
           
            <span className={styles.postTitle}> {post.title} </span>
            
           </div>

          
           <form action={deletePost}>
            <input type="hidden" name="id" value={post.id} /> 
            <button className={styles.postButton}>
                حذف پست
            </button>
           </form>

        </div>
      ))}
    </div>
    </>
  )
}

export default AdminPosts
