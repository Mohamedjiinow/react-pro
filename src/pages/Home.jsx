import Header from "../Components/Header"
import Project from "../Components/project"
import one from "../images/three.jpg"
import Contact from "./Contact"
import Test from "./Test"
function Home(){
    return <div>
    <div className="sm:flex block justify-center sm:gap-14 bg-slate-600 py-10 sm:w-[100%] sm:h-[60vh] px-4 pb-10">
        <div>
            <img className="sm:w-[300px] w-[280px] ml-10 sm:h-[250px] h-[300px] rounded-lg border-2 border-red-500" src={one} alt="" />
        </div>
        <div  >
            <h1 className="sm:text-4xl text-3xl font-semibold text-red-600"> <span className="text-white text-5xl font-normal">I'm</span> Mr-Jinow</h1>
            <p className="sm:text-2xl text-xl sm:font-thin font-mono text-white sm:pt-0 pt-6 ">
           a creative and passionate web developer dedicated to building responsive, <br />
            user-friendly websites with clean, modern designs. Skilled in HTML, CSS, JavaScript, <br />
            and always eager to learn new technologies, I aim to turn ideas into engaging online experiences.</p>
        </div>
    </div>
    
    <Project />
    <Test />
    <Contact />
    </div>
}

export default Home