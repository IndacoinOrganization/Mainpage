import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Home from './pages/Home'
// import Status from "./pages/Status";
import Verification from "./pages/Verification";

function App() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/verification' element={<Verification />} />
            {/* <Route path='/payment-status' element={<Status />} /> */}
        </Routes>
    </BrowserRouter>
  )
}

export default App
