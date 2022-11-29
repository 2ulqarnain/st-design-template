import React from "react"
import Navbar from "../navbar/navbar";

const navLinks=[
    {title:"Home",src:"/"},
    {title:"About",src:"/about"},
    {title:"Contact Us",src:"/contactus"},
]

function Footer(){
    return(
        <div className="bg-zinc-800 flex justify-between">
            <p>Title</p>
            <Navbar links={navLinks}/>
        </div>
    )
}

export default React.memo(Footer)