import { NavLink } from "react-router-dom"
import pro1 from "../images/pro1.jpg"
import pro2 from "../images/pro2.jpg"
import pro3 from "../images/pro3.jpg"
import Home from "./Home"
import Header from "../Components/Header"
import Project from "../Components/project"
function Veiw(){
    return <div>
    <div className="relative"> 
    <h1 className="bg-slate-600 text-center font-semibold text-4xl pt-10 text-white">my Projects</h1>
     <div className="bg-slate-600 sm:flex flex-wrap justify-between px-10 w-full sm:h-[75vh] pt-32 sm:pb-0 pb-20">
    <div className="sm:w-[30%]">
        <img src={pro3} alt="" className="sm:w-[200px] sm:h-[200px] w-[350px] h-[400px]  rounded-lg sm:ml-0 ml-3 " />
         <p className="text-white sm:w-60 w-80 sm:ml-0 ml-5 sm:pt-0 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>


    </div>
     <div className="sm:w-[30%]">
        <img src={pro1} alt="" className="sm:w-[200px] sm:h-[200px] w-[350px] h-[400px]  rounded-lg sm:ml-0 ml-3 " />
         <p className="text-white sm:w-60 w-80 sm:ml-0 ml-5 sm:pt-0 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
     <div className="sm:w-[30%]">
        <img src={pro2} alt=""className="sm:w-[200px] sm:h-[200px] w-[350px] h-[400px]  rounded-lg sm:ml-0 ml-3 " />
        <p className="text-white sm:w-60 w-80 sm:ml-0 ml-5 sm:pt-0 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
    </div>
    </div>

    <div>
        <div className="relative"> 
     <div className="bg-slate-600 sm:flex flex-wrap justify-between px-10 w-full sm:h-[75vh] pt-5 sm:pb-0 pb-20">
    <div className="sm:w-[30%]">
        <img src={pro3} alt=""className="sm:w-[200px] sm:h-[200px] w-[350px] h-[400px]  rounded-lg sm:ml-0 ml-3 " />
         <p className="text-white sm:w-60 w-80 sm:ml-0 ml-5 sm:pt-0 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>


    </div>
     <div className="sm:w-[30%]">
        <img src={pro1} alt=""className="sm:w-[200px] sm:h-[200px] w-[350px] h-[400px]  rounded-lg sm:ml-0 ml-3 " />
         <p className="text-white sm:w-60 w-80 sm:ml-0 ml-5 sm:pt-0 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
     <div className="asm:w-[30%]">
        <img src={pro2} alt=""className="sm:w-[200px] sm:h-[200px] w-[350px] h-[400px]  rounded-lg sm:ml-0 ml-3 " />
        <p className="text-white sm:w-60 w-80 sm:ml-0 ml-5 sm:pt-0 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
    </div>

    </div> 
    </div>
     <div>
        <div className="relative"> 
     <div className="bg-slate-600 sm:flex flex-wrap justify-between px-10 w-full sm:h-screen pt-5 sm:pb-0 pb-20">
    <div className="sm:w-[30%]">
        <img src={pro3} alt="" className="sm:w-[200px] sm:h-[200px] w-[350px] h-[400px]  rounded-lg sm:ml-0 ml-3 " />
         <p className="text-white sm:w-60 w-80 sm:ml-0 ml-5 sm:pt-0 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>


    </div>
     <div className="sm:w-[30%]">
        <img src={pro1} alt=""className="sm:w-[200px] sm:h-[200px] w-[350px] h-[400px]  rounded-lg sm:ml-0 ml-3 "/>
         <p className="text-white sm:w-60 w-80 sm:ml-0 ml-5 sm:pt-0 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
     <div className="sm:w-[30%]">
        <img src={pro2} alt="" className="sm:w-[200px] sm:h-[200px] w-[350px] h-[400px]  rounded-lg sm:ml-0 ml-3 "/>
        <p className="text-white sm:w-60 w-80 sm:ml-0 ml-5 sm:pt-0 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
    </div>

    </div> 
    </div>
    </div>

}
export default Veiw