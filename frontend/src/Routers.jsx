import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import About from "./components/About/About"
import Skills from "./components/Skills/Skills"
import Projects from "./components/Projects/Projects"

function Routers() {
  return (
    <div>
<BrowserRouter>
<Routes>
  <Route path="/" element={<><Navbar/><Hero/><About/><Skills/><Projects/></>}></Route>
</Routes>
</BrowserRouter>
    </div>
  )
}

export default Routers
