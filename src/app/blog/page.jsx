import styles from "./blog.module.css"
import postCard from "@/components/postCard/postCard"

const BlogPage = () => {
  return (
    <div className={styles.container}>
   
     <postCard/>
     <postCard/>
     <postCard/>
     <postCard/>
 
     </div>
  )
}

export default BlogPage