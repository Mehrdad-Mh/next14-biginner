import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div>
        <h1>
            همچین صفحه ای وجود ندارد
        </h1>
        <h5>
            متاسفانه صفحه ای که به دنبال آن میگردید وجود ندارد
        </h5>

        <Link href="/">  بازگشت به صفحه اصلی  </Link>

    </div>
  )
}

export default NotFound