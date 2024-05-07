import { getUser, getUsers } from "@/lib/data";
import styles from "./post.module.css";
import Image from "next/image";

// const getUsers = async(userId)=>{
//     const res = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`,{cache : "no-store"})

//     if(!res){
//         throw new Error("error in fetching users");
//     }

//     return res.json()
// }

const PostUser = async ({ userId }) => {
  const user = await getUser(userId)

  //WITH OUT API
  // const user = await getUser( userId );

  return (
    <div className={styles.container}>
     <Image
        src={user.img ? user.img : "/noavatar.png"}
        alt=""
        className={styles.avatar}
        width={50}
        height={50}
      />

      <div className={styles.texts}>
        <span className={styles.title}> نویسنده </span>
        <span className={styles.username}> {user.username} </span>
      </div>
    </div>
  );
};

export default PostUser;
