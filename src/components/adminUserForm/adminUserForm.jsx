"use client"

import styles from "./adminUserForm.module.css"
import { addUser } from "@/lib/action"
import {useFormState} from "react-dom"

const AdminUserForm = () => {

  const [state , formAction] = useFormState(addUser,undefined)
  return (
    <form action={formAction} className={styles.container}>
      <h1>
        ساخت کاربر جدید
      </h1>
      <input type="text" placeholder="   نام کاربر  " name="username" />
      <input type="text" placeholder="  آدرس پروفایل کاربر  " name="img" />
      <input type="password" placeholder="   رمز عبور  " name="password" />
      <input type="email" placeholder="   ایمیل کاربر  " name="email"  />
      <select name="isAdmin">

        <option value="false">  ایا ادمین هستید؟  </option>
        <option value="false">  خیر </option>
        <option value="true">  بله </option>

      </select>
      <button>
        ساخت کاربر جدید 
      </button>
      {state && state.error} {/* if there is an error */}
    </form>
  )
}

export default AdminUserForm
