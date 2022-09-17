import React from 'react'
import {
    Box, 
    Flex,
    IconButton,
    Stack,
    Text,
    Menu,
    MenuButton,
    MenuList,
    Collapse,
    useColorModeValue,
    Image,
    useColorMode,
    useDisclosure,
    VStack,
    HStack,
    Button
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, MoonIcon, SunIcon } from '@chakra-ui/icons';
import { AiOutlineUser } from 'react-icons/ai';
import { BsFillBagPlusFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';

const NavBar = () => {

    const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
    const { isOpen, onToggle } = useDisclosure();
    const { colorMode, toggleColorMode } = useColorMode();

    return (
        <div style={{ position: "sticky", top: 0, zIndex: 99, height: "75px" }}>
            <Box>
                <Flex
                    bg={useColorModeValue("white", "gray.800")}
                    color={useColorModeValue("gray.600", "white")}
                    align="center"
                >
                    <Flex
                        flex={{ base: 1, md: "auto"}}
                        ml={{ base: -2 }}
                        display={{ base: "flex", md: "none" }}
                    >
                        <IconButton
                            onClick={onToggle}
                            icon={
                                isOpen ? (
                                    <CloseIcon w={3} h={3} />
                                ) : (
                                    <HamburgerIcon w={5} h={5} />
                                )
                            }
                            variant={'ghost'}
                            aria-label={"Toggle Navigation"}
                        />
                    </Flex>

                    <Flex
                        flex={{ base: 1 }}
                        justify={{ base: 'center', md: 'start'}}
                    >
                        <Link to="/">
                            <Image 
                                src="/thuta.png"
                                width="90px"
                                height="90px"
                                alt="Thuta Ecom"
                                style={{
                                    margin: "9px"
                                }}
                            />
                        </Link>

                        <Flex
                            display={{ base: 'none', md: 'flex'}}
                            ml={10}
                            alignItems={'center'}
                        >
                            <DesktopNav/>
                        </Flex>
                    </Flex>

                    <Stack
                        flex={{ base: 1, md: 0 }}
                        justify={'flex-end'}
                        direction={'row'}
                        spacing={4}
                        alignItems={'center'}
                        fontSize="20px"
                        mr="10px"
                    >
                        <button onClick={toggleColorMode}>
                            { colorMode === "light" ? <MoonIcon/> : <SunIcon/>}
                        </button>
                        
                        {/* Menu DropDown */}
                        <Menu>
                            <MenuButton>
                                <AiOutlineUser/>
                            </MenuButton>
                            <MenuList fontSize={"13px"} cursor="unset">
                                <HStack
                                    spacing={3}
                                    alignItems="center"
                                    justify={'center'}
                                    w="90%"
                                    m="auto"
                                >
                                    <Image
                                        fontWeight={'600'}
                                        src={isAuthenticated ? user.picture : "./thuta.png"}
                                        alt="Fluffybuns the destroyer"
                                        mr="25px"
                                        width={90}
                                    />
                                    <VStack
                                        align={'left'}
                                        textAlign={isAuthenticated ? 'left': 'center'}
                                    >
                                        <Text
                                            fontWeight={'600'}
                                            color={'linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)'}
                                            fontSize="19px"
                                            textAlign={'left'}
                                            textTransform={'capitalize'}
                                        >
                                            { isAuthenticated ? user.nickname : 'Welcome To TEcom'}
                                        </Text>
                                        <Text
                                            color={'linear-gradient(90deg, #89f7fe 0%, #66a6ff 100%)'}
                                            fontSize="15px"
                                        >
                                            { isAuthenticated ? user.name : ""}
                                        </Text>
                                    </VStack>
                                </HStack>
                                <hr/>
                                {
                                    isAuthenticated ? (
                                        <Button
                                            w="100%"
                                            size="md"
                                            colorScheme={'red'}
                                            onClick={() => logout({
                                                returnTo: window.location.origin
                                            })}
                                        >
                                            Logout
                                        </Button>
                                    ) : (
                                        <Button
                                            w="100%"
                                            size={'md'}
                                            colorScheme={'blue'}
                                            onClick={() => loginWithRedirect()}
                                        >
                                            Login
                                        </Button>
                                    )
                                }
                            </MenuList>
                        </Menu>

                        <HStack>
                            <Link to="/cart">
                                <BsFillBagPlusFill />
                            </Link>
                        </HStack>
                    </Stack>
                </Flex>
                <Collapse in={isOpen} animateOpacity>
                    <MobileNav />
                </Collapse>
                <br />
            </Box>
        </div>
    )
}

const DesktopNav = () => {
    return (
        <Stack direction={'row'} spacing={4}>
            <Box>
                <HStack spacing={"25px"} alignItems="center">
                    <Link to="/laptop">
                        <Text
                            fontSize={'15px'}
                            fontWeight={'500'}
                            _hover={{
                                fontSize: '15px',
                                borderBottom: '1px solid red'
                            }}
                        >
                            Laptop
                        </Text>
                    </Link>
                    <Link to={"/mobiles"}>
                        <Text
                        fontSize={"15px"}
                        fontWeight={"500"}
                        border="1px inherit"
                        _hover={{
                            fontSize: "15px",
                            borderBottom: "1px solid red",
                        }}
                        >
                        Mobile
                        </Text>
                    </Link>
                    <Link to={"/review"}>
                        <Text
                        border="1px inherit"
                        _hover={{
                            fontSize: "15px",
                            borderBottom: "1px solid red",
                        }}
                        fontSize={"15px"}
                        fontWeight={"500"}
                        >
                        Reviews
                        </Text>
                    </Link>
                    <Link to={"/about"}>
                        <Text
                        border="1px inherit"
                        _hover={{
                            fontSize: "15px",
                            borderBottom: "1px solid red",
                        }}
                        fontSize={"15px"}
                        fontWeight={"500"}
                        >
                        About Us
                        </Text>
                    </Link>
                    <Link to={"/faq"}>
                        <Text
                        border="1px inherit"
                        _hover={{
                            fontSize: "15px",
                            borderBottom: "1px solid red",
                        }}
                        fontSize={"15px"}
                        fontWeight={"500"}
                        >
                        Faq
                        </Text>
                    </Link>
                    <Link to={"/help"}>
                        <Text
                        border="1px inherit"
                        _hover={{
                            fontSize: "15px",
                            borderBottom: "1px solid red",
                        }}
                        fontSize={"15px"}
                        fontWeight={"500"}
                        >
                        Help
                        </Text>
                    </Link>
                </HStack>
            </Box>
        </Stack>
    )
}

const MobileNav = () => {
    return (
        <Stack
            bg={useColorModeValue("white", "gray.800")}
            p={4}
            border="1px solid #efefef"
            rounded={'md'}
        >
            <Box>
                <VStack fontWeight={"600"}>
                    <Link to={"/laptop"}>Laptop</Link>
                    <Link to={"/mobiles"}>Mobile</Link>
                    <Link to={"/review"}>Reviews</Link>
                    <Link to={"/about"}>About Us</Link>
                    <Link to={"/faq"}>Faq</Link>
                    <Link to={"/help"}>Help</Link>
                </VStack>
            </Box>
        </Stack>
    )
}

export default NavBar