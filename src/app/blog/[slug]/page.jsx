import Image from "next/image";
import React, { Suspense } from "react";
import styles from "./singlePost.module.css";
import PostUser from "@/components/postUser/postUser";
import { getPost } from "@/lib/data";

const getData = async(slug) => {

  // const res = await fetch(`http://localhost:3000/api/blog/${slug}`,{method : "DELETE"});

  const res = await fetch(`http://localhost:3000/api/blog/${slug}`,{next:{revalidate:3600}});

  if(!res){
    throw new Error("error in fetching single post")
  }

  return res.json()
}

export const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const post = await getPost(slug);

  return {
    title: post.title,
    description: post.desc,
  };
};

const SinglePostPage = async ({ params }) => {
  const { slug } = params;

console.log(params);

  const post = await getData(slug)

  // const post = await getPost(slug);

  console.log(post, "single post content");

  return (
    <div className={styles.container}>
     {post.img && <div className={styles.imgContiner}>
        <Image
          src={post.img}
          className={styles.img}
          alt=""
          width={400}
          height={250}
        />
      </div>}

      <div className={styles.textContainer}>
        <h1 className={styles.title}> {post.title} </h1>

        <div className={styles.details}>
         

           {post && (
            <Suspense fallback={<div>loading...</div>}>
              <PostUser userId={post.userId} />
            </Suspense>
          )}

          <div className={styles.detailsText}>
            <span className={styles.detailTitle}> تاریخ انتشار </span>
            <span className={styles.detailValue}> {post.createdAt.toString().slice(4,16)} </span>
          </div>
        </div>

        <div className={styles.content}>{post.desc}</div>
      </div>
    </div>
  );
};

export default SinglePostPage;
