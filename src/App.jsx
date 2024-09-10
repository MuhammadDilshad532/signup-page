import "./App.css";
import Login from "./Login";
import Register from "./Register"
import SuccessfullyLogin from "./successfullyLogin"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import bgImage from './assets/img/bg.jpeg'; 

function App() {
  return (
    <>
      <div
        className="text-white h-[100vh] flex justify-center items-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }} 
      >
       <Routes>
       <Route path="/" element={ <Register />} />
        <Route path="/Register" element={ <Register />} />
        <Route path="/Login" element={ <Login />} />
        <Route path="/successfullyLogin" element={ <SuccessfullyLogin />} />
       </Routes>
      </div>
    </>
  );
}

export default App;
