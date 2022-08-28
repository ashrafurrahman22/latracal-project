import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Navbar from "./Pages/Home/Navbar";
import './App.css';

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <div className='flex justify-center items-center w-full bg-slate-700'>
      <Routes>
          <Route path="/" element={
            <Home></Home>
            }></Route>
          <Route path="/note/:notesId" element={
          <Home></Home>
          }></Route>
      </Routes>
     

      <ToastContainer />
    </div>
    </div>
  );
}

export default App;
