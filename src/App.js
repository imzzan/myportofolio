import './App.css';
import NavBar from './component/navbar/Navbar';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import {AboutMe, Home, Project} from './pages';
import Footer from './component/footer/Footer';


function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/aboutme" element={<AboutMe/>}/>
          <Route path="/project" element={<Project/>}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
