import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Reviews from "./components/Reviews";
import Sidenav from "./components/Sidenav";
import FindMe from "./components/FindMe";
import Footer from "./components/Footer";
import Certifications from "./components/Certifications";

function App() {
  return (
    <div className="App">
       <Sidenav/>
       <Home/>
       <About/>
       <Reviews/>
       <Contact/>
       {/* <FindMe/> */}
       <Certifications/>
       <Footer/>
    </div>
  )
}

export default App
