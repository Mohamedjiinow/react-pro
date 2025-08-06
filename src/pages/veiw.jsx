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
    <div className="w-[30%]">
        <img src={pro3} alt="" className="w-[200px] h-[200px] rounded-lg sm:ml-0 ml-32 " />
         <p className="text-white w-60 sm:ml-0 ml-24">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>


    </div>
     <div className="w-[30%]">
        <img src={pro1} alt="" className="w-[200px] rounded-lg h-[200px] sm:ml-0 ml-32" />
         <p className="text-white w-60 sm:pb-40 sm:ml-0 ml-24">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
     <div className="w-[30%]">
        <img src={pro2} alt="" className="w-[200px] h-[200px] rounded-lg sm:ml-0 ml-32" />
        <p className="text-white w-60 sm:ml-0 ml-24">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
    </div>
    </div>

    <div>
        <div className="relative"> 
     <div className="bg-slate-600 sm:flex flex-wrap justify-between px-10 w-full sm:h-[75vh] pt-32 sm:pb-0 pb-20">
    <div className="w-[30%]">
        <img src={pro3} alt="" className="w-[200px] h-[200px] rounded-lg sm:ml-0 ml-32 " />
         <p className="text-white w-60 sm:ml-0 ml-24">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>


    </div>
     <div className="w-[30%]">
        <img src={pro1} alt="" className="w-[200px] rounded-lg h-[200px] sm:ml-0 ml-32" />
         <p className="text-white w-60 sm:pb-40 sm:ml-0 ml-24">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
     <div className="w-[30%]">
        <img src={pro2} alt="" className="w-[200px] h-[200px] rounded-lg sm:ml-0 ml-32" />
        <p className="text-white w-60 sm:ml-0 ml-24">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
    </div>

    </div> 
    </div>
     <div>
        <div className="relative"> 
     <div className="bg-slate-600 sm:flex flex-wrap justify-between px-10 w-full sm:h-screen pt-32 sm:pb-0 pb-20">
    <div className="w-[30%]">
        <img src={pro3} alt="" className="w-[200px] h-[200px] rounded-lg sm:ml-0 ml-32 " />
         <p className="text-white w-60 sm:ml-0 ml-24">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>


    </div>
     <div className="w-[30%]">
        <img src={pro1} alt="" className="w-[200px] rounded-lg h-[200px] sm:ml-0 ml-32" />
         <p className="text-white w-60 sm:pb-40 sm:ml-0 ml-24">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
     <div className="w-[30%]">
        <img src={pro2} alt="" className="w-[200px] h-[200px] rounded-lg sm:ml-0 ml-32" />
        <p className="text-white w-60 sm:ml-0 ml-24">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
    </div>

    </div> 
    </div>
    </div>

}
export default Veiw