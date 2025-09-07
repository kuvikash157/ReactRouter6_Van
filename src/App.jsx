import React from "react"
import { createBrowserRouter, createRoutesFromElements, RouterProvider, Route } from 'react-router-dom';
import './index.css'
import "./server"

import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import Van,  { loader as vansLoader } from "./pages/Van" // Loader function to load data before rendering the route component
import VanDetail from "./pages/VanDetail"
import Dashboard from "./pages/Host/Dashboard"
import Income from "./pages/Host/Income"
import Reviews from "./pages/Host/Reviews"
import HostVan from "./pages/Host/HostVan"
import HostVanDetail from "./pages/Host/HostVanDetail"
import Pricing from "./pages/Host/HostVanComponent/Pricing"
import Photos from "./pages/Host/HostVanComponent/Photos"
import More from "./pages//Host/HostVanComponent/More"


import Layout from "./components/Layout"
import HostLayout from "./components/HostLayout"

const route = createBrowserRouter( createRoutesFromElements (
   
    <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/vans" element={<Van />}  loader={vansLoader} />
            <Route path="/vans/:id" element={<VanDetail />} />

            {/* Compound component or nested route with parent element as HostLayout which have outlet which is the rendering point of children route  */}
            <Route path="/host" element={<HostLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="income" element={<Income />} />
                <Route path="reviews" element={<Reviews />} />
                <Route path="vans" element={<HostVan />} />
                <Route path="vans/:id" element={<HostVanDetail />} >
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="photo" element={<Photos />} />
                    <Route path="more" element={<More />} />
                </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
        </Route>
    )
)
const App = () => {
    return (
        <RouterProvider router={route} />
    )
}

export default App