import React from "react"
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import './index.css'
import "./server"

import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Van from "./pages/Van"
import VanDetail from "./pages/VanDetail"
import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"
import HostVanDetailLayout from "./components/HostVanDetailLayout"


import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVan from "./pages/Host/HostVan"
import HostVanDetail from "./pages/Host/HostVanDetail"
import Pricing from "./pages/Host/HostVanComponent/Pricing"
import Photos from "./pages/Host/HostVanComponent/Photos"
import More from "./pages//Host/HostVanComponent/More"


const App = () => {


    return (
        <BrowserRouter>
            <Routes>
                <Route element={<Layout />}>                    
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/vans" element={<Van />} />
                    <Route path="/vans/:id" element={<VanDetail />} />

                    {/* Compound component or nested route with parent element as HostLayout which have outlet which is the rendering point of children route  */}
                    <Route path="/host" element={<HostLayout />}>
                        <Route index element={<Dashboard />} />
                        <Route path="income" element={<Income />} />
                        <Route path="reviews" element={<Reviews />} />
                        <Route path="vans" element={<HostVan />} />

                        <Route path="vans/:id" element={<HostVanDetail  />} >
                            <Route path="pricing" element={<Pricing />} />
                            <Route path="photo" element={<Photos />} />
                             <Route path="more" element={<More />} />
                        </Route>
                        
                    </Route>
                    <Route path="*" element={<NotFound />} />

                </Route>
            </Routes>
        </BrowserRouter>
    )

    // return (
    //     <BrowserRouter>
    //         <header>
    //             <Link className="site-logo" to="/">Van Life</Link>
    //             <nav>
    //                 <Link to="/about">About</Link>
    //                 <Link to="/more">More</Link>
    //                 <Link to="/contact">Contact Us</Link>
    //             </nav>
    //         </header>
    //         <Routes>
    //             <Route path="/" element={<Home />} />
    //             <Route path="/about" element={< About />} />
    //             <Route path="/more" element={<More />} />
    //             <Route path="/contact" element={<ContactUs />} />
    //         </Routes>

    //     </BrowserRouter>
    // )
}

export default App