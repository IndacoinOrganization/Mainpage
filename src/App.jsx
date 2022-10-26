import React from "react";
import {Routes, Route } from "react-router-dom";

// Pages
import Home         from '@/pages/Home/index.jsx';
import Business     from '@/pages/Business/index.jsx';
import Faq          from '@/pages/Faq/index.jsx';
import Verification from '@/pages/Verification/index.jsx';
import NotFound from "@/pages/404/index.jsx"
import TermsOfUse from "./pages/TermsOfUse";
import AmlPolicyBlock from "./pages/AmlPolicy";

function App() {
  return (
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/business' element={<Business />} />  
        <Route path='/verification' element={<Verification />} />  
        <Route path='/faq' element={<Faq />} />
        <Route path='/terms' element={<TermsOfUse />} />
        <Route path='/terms/amlpolicy' element={<AmlPolicyBlock />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
  )
}

export default App;