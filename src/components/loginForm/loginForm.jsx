"use client"

import { login } from "@/lib/action";
import { useFormState } from "react-dom";
// import { useRouter } from "next/navigation";
import Link from "next/link";
import styles from "./loginForm.module.css"
// import { useEffect } from "react";

const LoginForm = () => {

    // const router = useRouter()

    const [state, formAction] = useFormState(login, undefined);

    // useEffect(() => {
    //     state?.success && router.push("/")
    // },[state?.success , router])

  return (

      <form action={formAction} className={styles.form}>

      <input type='text' placeholder='  نام کاربری  ' name='username'/>
      <input type='password' placeholder='  رمز عبور  ' name='password'/>

      <button>
       ورود
      </button>

      {state?.error}
      <Link href="/register">
      {"dont have an account ?"}<b>register</b>
      </Link>
    </form>
  
  )
}

export default LoginForm
