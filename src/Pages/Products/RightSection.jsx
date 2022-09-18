import React, { useEffect, useState } from 'react'
import {
    Box,
    Heading,
    Select,
    SimpleGrid,
    Skeleton,
    Stack,
    Tag,
    TagCloseButton,
    TagLabel
} from '@chakra-ui/react'
import axios from 'axios'
import ProductCard from '../../Components/ProductCom/ProductCard'
import Pagination from '../../Components/ProductCom/Pagination'
import { useParams, useSearchParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { ADD_FILLTER } from '../../Redux/FilterReducer/actionType'

const RightSection = () => {

    const [ loading, setLoading ] = useState(true);
    const [ searchParams, setSearchParams ] = useSearchParams();
    const Fillter = useSelector((store) => store.Fillters.Fillter);
    const [ currentpage, setcurrentpage ] = useState(
        Number(searchParams.get('page')) || 1
    );
    const [ products, setproducts ] = useState([]);
    const [ sort, setsort ] = useState("");
    const dispatch = useDispatch();
    const { category } = useParams();

    const HandleSort = (str) => {
        switch(str) {
            case "priceLowToHigh":
                setproducts(products.sort((a,b) => a.price - b.price));
                setsort(str);
            break;
            
            case "PriceHighToLow":
                setproducts(products.sort((a,b) => b.price - a.price));
                setsort(str);
            break;

            default:
            break;
        }
        console.log(products, str);
    }

    const onPageChange = (direction) => {
        if(direction === "Prev"){
            setcurrentpage(currentpage - 1);
        }
        else if (direction === "Next"){
            setcurrentpage(currentpage + 1);
        } 
        else{
            setcurrentpage(direction);
        }
    }

    const RemoveTag = (category) => {
        let newFillter = [...Fillter];
        if(Fillter.includes(category)){
            newFillter.splice(newFillter.indexOf(category), 1);
        }
        dispatch({
            type: ADD_FILLTER,
            payload: newFillter
        });
        console.log(newFillter);
    }

    const FetchDataFromServer = () => {
        setSearchParams({ currentpage });
        axios.get(
            `https://ecommercecombine.herokuapp.com/${category}?page=${currentpage}`
        ).then((res) => {
            setproducts(res.data.data);
            setLoading(false);
        })
        .catch((err) => {
            console.log("Fetching Err =>",err);
        });
    };

    useEffect(() => {
        FetchDataFromServer();
        setLoading(true);
    }, [currentpage, category]);

    return (
        <Box color={"#5F6F94"}>
            <Box borderBottom={'1px solid'} h={'82px'}>
                <Stack direction={'row'} justifyContent={'space-between'}>
                    <Heading textTransform={'uppercase'}>{category}</Heading>
                    <Stack direction={'row'} align={'center'} pt={'5'}>
                        <Heading>SORT BY</Heading>
                        <Stack spacing={3}>
                            <Select
                                variant={'outline'}
                                onChange={(e) => {
                                    HandleSort(e.target.value);
                                }}
                            >
                                <option value="BestSellers">Best Sellers</option>
                                <option value="PriceLowToHigh">Price, Low to High</option>
                                <option value="PriceHighToLow">Price, High to Low</option>
                            </Select>
                        </Stack>
                    </Stack>
                </Stack>
            </Box>
            <Stack direction="row" justifyContent="space-between" mt="2" mb={5}>
                <Heading size={"sm"}>{Fillter.length} FILTERS APPLIED</Heading>
            </Stack>
            <Box my={2}>
                {
                    Fillter.map((item, index) => {
                        return (
                            <Tag
                                m={2}
                                size={'md'}
                                key={index}
                                borderRadius="full"
                                variant="outline"
                                colorScheme="gray"
                            >   
                                <TagLabel>{item}</TagLabel>
                                <TagCloseButton onClick={() => RemoveTag(item)} />
                            </Tag>
                        )
                    })
                }
            </Box>
            {
                loading ? (
                    <SimpleGrid columns={[1,2,2,2,4]} spacing={10}>
                        <Box w="100%" h="270">
                            <Skeleton height={'270px'} />
                        </Box>
                        <Box w="100%" h="270">
                            <Skeleton height="270px" />
                        </Box>
                        <Box w="100%" h="270">
                            <Skeleton height="270px" />
                        </Box>
                        <Box w="100%" h="270">
                            <Skeleton height="270px" />
                        </Box>

                        <Box w="100%" h="270">
                            <Skeleton height="270px" />
                        </Box>
                        <Box w="100%" h="270">
                            <Skeleton height="270px" />
                        </Box>
                        <Box w="100%" h="270">
                            <Skeleton height="270px" />
                        </Box>
                        <Box w="100%" h="270">
                            <Skeleton height="270px" />
                        </Box>
                    </SimpleGrid>
                ) : (
                    <SimpleGrid columns={[1,1,2,3,4]} gap={7}>
                        {
                            products?.map((item, index) => (
                                <Box w="100%" h={category == "laptop"? "350" : "450"} key={index}>
                                    <ProductCard
                                        item={item}
                                        category={category}
                                    />
                                </Box>
                            ))
                        }
                    </SimpleGrid>
                )
            }

            <Box w={'70%'} m={'20px auto'}>
                <Pagination
                    total={10}
                    selected={currentpage}
                    onPageChange={onPageChange}
                />
            </Box>
        </Box>
    )
}

export default RightSection