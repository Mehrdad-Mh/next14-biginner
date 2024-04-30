// import clientSideProviderTest from '@/components/clientSideProviderTest'
import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import './globals.css'



export const metadata = {
  title: {
    default : "nextjs 14 homepage",
    template : "%s | nextjs 14"
  },
  description: 'Next.js starter app',
}
 
export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl' style={{fontFamily:"Vazir"}} >
      <body >

      {/* <clientSideProviderTest> */}

        <div className='container' >

       <Navbar/>
        {children}
        <Footer/>
        </div>

      {/* </clientSideProviderTest> */}


        </body>
    </html>
  )
}  