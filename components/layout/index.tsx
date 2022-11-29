import { ReactNode } from "react"
import Footer from "../footer-main/footer"
import Header from "../header-main/main.header"

function Layout({children}:{children:ReactNode}) {
  return (
    <div className="grid grid-rows-[auto,_1fr,_auto] h-screen">
        <Header/>
        {children}
        <Footer/>
    </div>
  )
}

export default Layout