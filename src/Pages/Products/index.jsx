import React from 'react'
import {
    Box,
    HStack
} from '@chakra-ui/react';
import BreadCrum from '../../Components/ProductCom/BreadCrumb';
import { useParams } from "react-router-dom";
import LeftSection from './LeftSection';
import RightSection from './RightSection';


const Products = () => {

    const { category } = useParams();
    document.title = `${category} | T Ecom`

    return (
        <Box w="95%" m="auto">
            <BreadCrum/>
            <HStack w="100%" flexWrap={'wrap'} alignItems={'flex-start'} marginTop={'30px'} marginBottom={'30px'}>
                <Box w={["100%", "100%", "25%", "25%"]}>
                    <LeftSection/>
                </Box>
                <Box w={['100%', '100%', '73%', '74%']}>
                    <RightSection/>
                </Box>
            </HStack>
        </Box>
    )
}

export default Products