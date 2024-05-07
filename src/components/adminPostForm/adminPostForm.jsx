"use client"
import { addPost } from "@/lib/action"
import styles from "./adminPostForm.module.css"
import {useFormState} from "react-dom"
import { useRef } from "react"
import { useRouter } from "next/navigation"


const AdminPostForm = ({userId}) => {

  const [state , formAction] = useFormState(addPost, undefined)

  const router = useRouter()

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form submission logic here
    // ...
    // redirect the user
    router.push('/admin');
  };
 

  return (
    <form action={formAction} onSubmit={handleSubmit}  className={styles.container}>
      <h1>
        ساخت پست جدید
      </h1>
      <input type="text" placeholder="  عنوان پست  " name="title" />
      <input type="text" placeholder="  آدرس تصویر پست  " name="img" />
      <input type="text" placeholder="   (حتما انگلیسی وارد شود)نامک پست  " name="slug" />
      <input type="hidden" placeholder="   id نویسنده  " value={userId} name="userId" />
      <textarea type="text" placeholder="  محتوا پست  " name="desc" rows={10} />
      <button>
        ساخت پست 
      </button>
      {state && state.error} {/* if there is an error */}
    </form>
  )
}

export default AdminPostForm
