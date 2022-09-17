import React from 'react'
import { FeaturedBrands, FirstSlider, Product2, Products1, Secondslider, ThirdSlider } from './Home'

const Home = () => {

    document.title = "Home | T Ecom"

    return (
        <div>
            <FirstSlider/> 
            <FeaturedBrands/>
            <Secondslider/>
            <ThirdSlider/>
            <Products1/>
            <Product2/>
        </div>
    )
}

export default Home