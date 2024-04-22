import Footer from '@/components/footer/Footer'
import Navbar from '@/components/navbar/Navbar'
import './globals.css'



export const metadata = {
  title: 'Next App',
  description: 'Next.js starter app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" dir='rtl' style={{fontFamily:"Vazir"}} >
      <body >
        <div className='container' >

       <Navbar/>
        {children}
        <Footer/>
        </div>
        </body>
    </html>
  )
}