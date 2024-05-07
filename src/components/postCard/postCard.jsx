import Image from "next/image"
import styles from "./postCard.module.css"
import Link from "next/link"
import { getPost } from "@/lib/data"



export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};


const PostCard = async({ post }) => {

  // const { slug } = params;
  
  // const post = await getPost(slug)

  return (
    <div className={styles.container}>

        <div className={styles.top}>

         {post.img && <div className={styles.imgContainer}>
          <Image src={post.img} alt="" className={styles.img} fill /> 
          </div>}

          <span className={styles.date}>  {post.createdAt.toString().slice(4,16)}  </span>
        </div>

        <div className={styles.bottom}>
          <h1 className={styles.title}>
           {post.title}
          </h1>
          <p className={styles.desc}>
          {post.desc}
          </p>
          <Link className={styles.link} href={`/blog/${post.slug}`} >  اطلاعات بیشتر  </Link>
        </div>

    </div>
  )
}

export default PostCard





// "https://cdn.dribbble.com/userupload/14256519/file/original-77e72b0cc9aed8dea5fc6d43901d2ed0.png?resize=1024x768"