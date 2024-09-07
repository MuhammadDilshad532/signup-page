import "./App.css";
import Login from "./Login";
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
        <Route path="/Login" element={ <Login />} />
       </Routes>
      </div>
    </>
  );
}

export default App;
