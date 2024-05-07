import { getUsers } from "@/lib/data"
import styles from "./adminUsers.module.css"
import Image from "next/image"
import { deleteUser } from "@/lib/action"

const AdminUsers =async () => {

  const users = await getUsers()

  return (

    <>
     <h1>
        کاربران سایت
      </h1>
    <div className={styles.container}>
     
      {users.map((user) => (
        <div className={styles.users} key={user.id}>
         <div className={styles.details}>
         <Image src={user.img || "/noavatar.png"} alt="" width={50} height={50} />
          <span className={styles.userName}> {user.username} </span>
         </div>


         <form action={deleteUser}>
            <input type="hidden" name="userId" value={user.id} /> 
            <button className={styles.userButton}>
                حذف کاربر
            </button>
           </form>

        </div>
      ))}
    </div>  
    </>
  )
}

export default AdminUsers
