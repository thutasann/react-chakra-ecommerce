import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Footer from '../Components/Footer';
import NavBar from '../Components/Navbar';
import Home from '../Pages/Home';
import Reviews from '../Pages/Reviews';
import About from '../Pages/About';
import FAQ from '../Pages/FAQ';
import Help from '../Pages/Help';
import Products from '../Pages/Products';
import PgaeNotFound from '../Pages/404';

const AllROutes = () => {
    return (
        <>
            <NavBar/>
                <Routes>
                    <Route path="/" element={<Home/>} />
                    <Route path="/review" element={<Reviews/>} />
                    <Route path="/about" element={<About/>} />
                    <Route path="/faq" element={<FAQ/>} />
                    <Route path="/help" element={<Help/>} />
                    <Route path="/:category" element={<Products/>} />
                    <Route path="*" element={<PgaeNotFound/>} />
                </Routes>   
            <Footer/>
        </>
    )
}

export default AllROutes