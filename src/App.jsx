import { Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import Veiw from "./pages/veiw";
import Project from "./Components/project";
import Header from "./Components/Header";

function App(){
  return  <div>
    <Header />
  <Routes>   
   <Route path="/" element={ <Home />} /> 
   <Route path="/about" element={<About />} />
   <Route path="/contact" element={<Contact />}/>
   <Route path="/veiw" element={<Veiw />}/>
   <Route path="/Project" element={<Project />}/>

  </Routes>
  
  </div>
}
export default App