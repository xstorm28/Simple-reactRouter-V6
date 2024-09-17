import NavBar from "./components/NavBar";
import { Routes, Route } from "react-router-dom";
import Inicio from "./pages/Inicio";
import Blog from "./pages/Blog";
import Contacto from "./pages/Contacto";
import LayoutPublic from "./layouts/LayoutPublic";
import NotFound from "./pages/NotFound";
import BlogA from "./pages/BlogA";

const App = () => {
  return(
    <>
      <NavBar/>
        <Routes>
          <Route path="/" element={<LayoutPublic/>}>
            <Route path="/"element={<Inicio />} />
            <Route path="/blog"element={<Blog />}/>
            <Route path="/blog/:id"element={<BlogA />}/>
            <Route path="/contacto" element={<Contacto />}/>
            <Route path="*" element={<NotFound/>}></Route>
          </Route>
       </Routes>
    </>
  )
}

export default App;