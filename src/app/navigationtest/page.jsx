"use client"

import Link from "next/link"
import { usePathname, useRouter, useSearchParams } from "next/navigation"

const NavigationTestpage = () => {

    const router = useRouter();
    const pathName = usePathname();
    const searchParams = useSearchParams()

    const q = searchParams.get("q")
    console.log(q)

   const handleClick = () => {
    console.log("go to home clicked")
     router.push("/");
   }


  return (
    <div>
      <Link href="/" prefetch={false} > back home </Link>{" "}<br/>

      <button onClick={handleClick} >  go to home page   </button>
    </div>
  )
}

export default NavigationTestpage
