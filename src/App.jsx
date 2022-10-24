import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import Home         from '@/pages/Home/index.jsx'
import Business     from '@/pages/Business/index.jsx'
import Faq          from '@/pages/Faq/index.jsx'
import Verification from '@/pages/Verification'

// import Globals from "@/tools/Globals";
// import {languagesPattern} from '.././i18n';
//const globals = Globals.getInstance();
// import Status from "./pages/Status";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/business' element={<Business />} />  
        <Route path='/verification' element={<Verification />} />  
        <Route path='/faq' element={<Faq />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App