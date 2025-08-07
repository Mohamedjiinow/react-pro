import { NavLink } from "react-router-dom"
import pro1 from "../images/pro1.jpg"
import pro2 from "../images/pro2.jpg"
import pro3 from "../images/pro3.jpg"
function Project(){
    return <div className="relative"> 
    <h1 className="bg-slate-600 text-center font-semibold text-4xl pt-10 text-white">my Projects</h1>
     <div className="bg-slate-600 sm:flex flex-wrap justify-between px-10 w-full sm:h-screen pt-32 sm:pb-0 pb-20 space-y-20 sm:space-y-0">
    <div className="sm:w-[30%]">
        <img src={pro3} alt="" className="sm:w-[200px] sm:h-[200px] w-[480px] rounded-lg" />
         <p className="text-white w-60 sm:ml-0 ml-16 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>


    </div>
     <div className="sm:w-[30%]">
        <img src={pro1} alt=""className="sm:w-[200px] sm:h-[200px] w-[480px] rounded-lg"/>
         <p className="text-white w-60 sm:pb-40 sm:ml-0 ml-16 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
     <div className="sm:w-[30%]">
        <img src={pro2} alt="" className="sm:w-[200px] sm:h-[200px] w-[480px] rounded-lg" />
        <p className="text-white w-60 sm:ml-0 ml-16 pt-5">Passionate web developer specializing in HTML and CSS, creating clean and responsive</p>

    </div>
    </div>
    <NavLink to= "/veiw" ><button className="bg-red-600 text-white px-10 absolute bottom-10 right-7 rounded-lg">View ALL</button></NavLink>
    </div>
}
export default Project