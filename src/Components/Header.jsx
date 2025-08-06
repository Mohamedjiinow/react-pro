import { useState } from "react"
import { NavLink } from "react-router-dom"

function Header(){
    const [isopen, setisopen]= useState(false)

    const handleisopen=()=>{
        setisopen(true)
    }
    const handleclose=()=>{
        setisopen(false)
    }
    return <div>
    <div className="flex justify-between px-10 bg-slate-600 text-white pt-5 w-full">
        <h1 className="text-4xl font-semibold">Portfolio</h1>
        <div className="sm:flex gap-5 hidden"> 
            <ul className="sm:flex gap-8 text-3xl hidden">
                <NavLink to="/" ><li>Home</li></NavLink> 
              <NavLink to="/about" >  <li>About</li> </NavLink>
               <NavLink to="/contact" > <li>Contact</li> </NavLink>
            </ul>
              <i class="fa-solid fa-bars text-3xl text-white pl-7 sm:hidden"></i>
        </div>
        {/* mobile */}
         <div className="block sm:hidden">
             <i onClick={handleisopen} style={{display:isopen===true?"none":""}} class="fa-solid fa-bars text-3xl text-red-500 pb-8 pl-20 "></i> 
             <i onClick={handleclose} style={{display:isopen ===true?"block" :""}}  class="fa-solid fa-x text-3xl text-red-500 pb-8 pl-20  hidden"></i> 
            <ul style={{display:isopen===true?"block":""}} className="text-2xl pb-10 hidden">
               <NavLink to="/" ><li>Home</li></NavLink> 
              <NavLink to="/about" >  <li>About</li> </NavLink>
               <NavLink to="/contact" > <li>Contact</li> </NavLink>
            </ul>
             
        </div>
    </div>
    </div>
}
export default Header