"use client"

import { register } from "@/lib/action";
import styles from "./registerForm.module.css"
import { useFormState } from "react-dom";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";


const RegisterForm = () => {

    const router = useRouter()

    const [state, formAction] = useFormState(register, undefined);

    useEffect(() => {
        state?.success && router.push("/login")
    },[state?.success , router])

  return (

      <form action={formAction} className={styles.form}>
      <input type='text' placeholder='  نام کاربری  ' name='username'/>
      <input type='email' placeholder='  ایمیل  ' name='email'/>
      <input type='password' placeholder='  رمز عبور  ' name='password'/>
      <input type='password' placeholder='  تائید رمز عبور  ' name='confirmPass'/>
      <input type='text' placeholder='   آدرس عکس  ' name='img'/>
      <button>
        ثبت نام
      </button>
      {state?.error}
      <Link href="/login">
      have an account <b>login</b>
      </Link>
    </form>
  
  )
}

export default RegisterForm
