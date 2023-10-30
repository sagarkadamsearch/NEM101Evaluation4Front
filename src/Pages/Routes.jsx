import {Routes,Route} from "react-router-dom";
import Home from "../Component/Home";
import Login from "../Component/Login";
import Signup from "../Component/SIgnup";


<Routes>
    <Route path="/" element={<Home/>}/>
    <Route path="/login" element={<Login/>}/>
    <Route path="/Signup" element={<Signup/>}/>
</Routes>