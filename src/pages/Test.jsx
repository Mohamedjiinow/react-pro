import testimg from "../images/three.jpg"
import testimg2 from "../images/two.jpg"
import testimg3 from "../images/one.jpg"

function Test(){
    return <dive>
            <h1 className="text-white text-3xl font-semibold bg-slate-600 text text-center">Testimonials</h1>  
    <div className=" sm:flex flex-wrap bg-slate-600 pt-10 justify-between px-10 pb-8">
        <div  className="w-[300px] h-[330px] bg-red-500 ml-2 rounded-lg mb-6">
            <img className="w-20 h-16 rounded-full  justify-center flex items-center ml-24"src={testimg} alt="" />
        <p className="mt-5 text-2xl font-normal text-white pl-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eveniet.</p>
        <i class="fa-solid fa-star text-slate-600 pl-7 pt-4"></i>
        <i class="fa-solid fa-star text-slate-600 pl-7 pt-4"></i>
        <i class="fa-solid fa-star text-slate-600 pl-7 pt-4"></i>
        <i class="fa-solid fa-star-half  text-slate-600 pl-7 pt-4"></i>
        <h1 className="text-3xl font-semibold text-slate-600 pl-6">mr-salman</h1>
        </div>
          <div  className="w-[300px] h-[330px] bg-red-500 ml-2 rounded-lg mb-6">
            <img className="w-20 h-16 rounded-full  justify-center flex items-center ml-24" src={testimg2} alt="" />
        <p className="mt-5 text-2xl font-normal text-white pl-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eveniet.</p>
        <i class="fa-solid fa-star text-slate-600 pl-7 pt-4"></i>
        <i class="fa-solid fa-star text-slate-600 pl-7 pt-4"></i>
        <i class="fa-solid fa-star text-slate-600 pl-7 pt-4"></i>
        <i class="fa-solid fa-star-half  text-slate-600 pl-7 pt-4"></i>
        <h1 className="text-3xl font-semibold text-slate-600 pl-6">mr-salman</h1>
        </div>
          <div className="w-[300px] h-[330px] bg-red-500 ml-2 rounded-lg mb-6">
            <img className="w-20 h-16 rounded-full  justify-center flex items-center ml-24" src={testimg3} alt="" />
        <p className="mt-5 text-2xl font-normal text-white pl-5">Lorem ipsum dolor sit amet consectetur, adipisicing elit. A, eveniet.</p>
        <i class="fa-solid fa-star text-slate-600 pl-7 pt-4"></i>
        <i class="fa-solid fa-star text-slate-600 pl-7 pt-4"></i>
        <i class="fa-solid fa-star text-slate-600 pl-7 pt-4"></i>
        <i class="fa-solid fa-star-half  text-slate-600 pl-7 pt-4"></i>
        <h1 className="text-3xl font-semibold text-slate-600 pl-6">mr-salman</h1>
        </div>
    </div>
    </dive>
}export default Test
