import Button from "@ui/button/button";
import Dropdown from "@ui/headlessui/dropdown";
import React, { useState } from "react"
import HeaderTitle from "../header-title/header.title";
import Navbar from "../navbar/navbar";
import Search from "../search/search";

const navLinks=[
    {title:"Home",src:"/"},
    {title:"About",src:"/about"},
    {title:"Contact Us",src:"/contactus"},
    {title:"Team",src:"/team"},
    {title:"Privacy Policy",src:"/privacypolicy"},
]

const dropDownList = [
  "Markets Briefing",
  "Stock Headlines",
  "Today's Spotlight",
  "Trading Directions",
]

function Header(){

    const [showButton,setShowButton]=useState(false)
    const handleClick=()=>{
        setShowButton(prev=>!prev)
    }
    
    console.log("header rerender")
    
    return(
        <div className="bg-white p-3 text-black flex flex-col lg:flex-row justify-between">
            <HeaderTitle/>
            <Navbar links={navLinks} className={`${showButton?"":"hidden"} lg:block`}/>
            <Search className=""/>
            <Dropdown list={dropDownList} buttontext="News Links"/>
            <Button onClick={handleClick} text="menu" className="absolute right-5 p-2 lg:hidden"/>
        </div>
    )
}

export default React.memo(Header)