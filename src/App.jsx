import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Globals from "@/tools/Globals";
// import {languagesPattern} from '.././i18n';
// Pages
import Home from '@/pages/Home/index.jsx'
import Business from '@/pages/Business/index.jsx'
import Faq from '@/pages/Faq/index.jsx'

import Verification from '@/pages/Verification'
// routes
//import { ROUTES } from './routes';


//const globals = Globals.getInstance();
// import Status from "./pages/Status";
//import Verification from "./pages/Verification";

function App() {
  return (
    <BrowserRouter>
    <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/business' element={<Business />} />  
            <Route path='/verification' element={<Verification />} />  
            <Route path='/faq' element={<Faq />} /> 
            <Route path='/verification' element={<Verification />} />
            {/* <Route path='/payment-status' element={<Status />} /> */} 
     </Routes>
    </BrowserRouter>
  )
}

export default App