
import { NavLink } from "react-router-dom"
import two from "../images/two.jpg"
import Home from "./Home"
function About(){
    return <div>
    <div className="sm:pt-0 h-screen"> 
        <h1 className="text-white text-3xl font-semibold bg-slate-600 text text-center sm:pt-0 pt-32 py-5">About Me</h1>
     <div className="sm:flex block  justify-center gap-6 bg-slate-600 py-16 w-[full] sm:h-screen px-4 sm:pb-5 pb-20">
        <div>
            <img className="w-[300px] sm:h-[250px] rounded-lg border-2 border-red-500" src={two} alt="" />
        </div>
        <div className="">
            <h1 className="text-4xl font-semibold text-red-600 sm:pt-0 pt-16"> <span className="text-white text-5xl">Hi, I'm</span> Mr-Jinow</h1>
            <p className="sm:text-2xl font-thin text-white text-xl sm:pt-0 pt-10 ">
           a creative and passionate web developer dedicated to building responsive, <br />
            user-friendly websites with clean, modern designs. Skilled in HTML, CSS, JavaScript, <br />
            and always eager to learn new technologies, I aim to turn ideas into engaging online experiences.</p>
            <ul className="text-2xl font-semibold text-center pb-6 text-red-500">
               <NavLink to="/project"><li>See My Projects</li> </NavLink> 
            </ul>
        </div>
    </div>
    </div>
    </div> 
}

export default About