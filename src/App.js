 import React from "react";
 import "bootstrap/dist/css/bootstrap.css";
 import { Route,Routes} from "react-router-dom";
import Navbar from "./Component/Layout/Navbar";
import About from "./Component/Pages/About";
import Contact from "./Component/Pages/Contact";
import Home from "./Component/Pages/Home";
import Adduser from "./Component/Users/Adduser";
import Edit from "./Component/Pages/Edit";



 export default function App (){

                   return(
                    <>
                    <h1 className="bg-dark text-light text-center"> Crud Operation Using Function</h1>
                    <Navbar/>
                     <Routes>
                      <Route path="/home" element={<Home/>}/>
                      <Route path="/about" element={<About/>}/>
                      <Route path="/contact" element={<Contact/>}/>
                      <Route path="/edit" element={<Edit/>}/>
                      <Route path="/edit/:id" element={<Edit/>}/>
                      <Route path="/add/user" element={<Adduser/>}/>
                     </Routes>
                    </>
                   );
 }