import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import {Box, Flex, Heading, Text} from "@chakra-ui/layout";
import style from "./App.scss";
import { Button, ButtonGroup } from "@chakra-ui/react"
import test from "./img/memeGifBack2.gif"
import demo from "./img/demo.gif"
import iphone from './img/iphone.png'
import video2 from './img/IMG_5036.gif'
import qr from './img/qr.png'

const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    zIndex:200,
    height:'100vh',
    backgroundImage:'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))'
};


const App2 = () => (
    <div style={styles} >

        <Parallax bgImage={test} strength={500}

                  bgStyle={'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))'}
                  strength={500}
                  bgImageStyle = {{objectFit:'cover',width:'100% !important'}}
                  style={{
    height:'100vh',

                      backgroundPosition: 'center',
                      backgroundSize: 'cover',

                      backgroundRepeat: 'no-repeat',

                      opacity: '60%',
                      color: 'white',
                      textAlign: 'center',
                      alignItems: 'center',
                      display: 'flex',
                      justifyContent: 'center'    }}>
            <div style={{ height: '100%' }} >

                        <Box className={style.circleInner} margin='auto' maxWidth={'1400px'} width={'100%'}  minHegiht={'100vh'} >
                            <Flex d={'flex'} direction={'column'} px={'20px'} alignItems={'center'} d={'flex'} justifyContent={'center'} >
                                <Heading  mb={6} fontWeight={'900'} as="kbd" fontSize='7xl'>Mem<Heading color={'#072950;'}  fontSize='7xl' fontWeight={'900'} as="kbd">Ass</Heading></Heading>


                                <Box fontSize={'2xl'} alignItems={'center'} d={'flex'} justifyContent={'center'} maxWidth={['80%']}>
                                    <Text style={{mixBlendMode: 'overlay'}} color={'white'} mb={4}>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                                        laboris nisi ut aliquip ex ea commodo consequat.
                                    </Text>

                                </Box>

                                <div className="button-container-3"  size="lg" w={'200px'}  mt={6}>
                                    <span className="mas">meme</span>
                                    <button type="button" name="Hover"> Get Started!</button>
                                </div>

                            </Flex>
                        </Box>
                    </div>



        </Parallax>
        <Box  bg={'linear-gradient(180deg, rgba(221,173,213,0.6811099439775911) 0%, rgba(87,94,148,0.5718662464985995) 34%, rgba(210,209,218,0.5886729691876751) 87%, rgba(140,187,232,0.4009978991596639) 100%)'}>
            <Flex d={'flex'} pt={'160px'} direction={'column'} px={'20px'} alignItems={'center'} d={'flex'} justifyContent={'center'} >
                <Heading  mb={6} fontWeight={'900'} as="kbd" fontSize='4xl'>LOREM</Heading>
                <Box fontSize={'2xl'} alignItems={'center'} d={'flex'} justifyContent={'center'} maxWidth={['80%']}>
                    <Text style={{mixBlendMode: 'overlay'}} color={'white'} mb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Text>

                </Box>
            </Flex>
            <Flex alignContent={'center'} justifyContent={'center'} pt={10} >
            <img src={iphone} alt="" style={{position:'absolute',height:'550px'}}/>
            <img src={demo}  style={{height:'525px',marginTop:'7px'}} alt=""/>
        </Flex>
            <Flex d={'flex'} pt={'160px'} direction={'column'} px={'20px'} alignItems={'center'} d={'flex'} justifyContent={'center'} >
                <Heading  mb={6} fontWeight={'900'} as="kbd" fontSize='4xl'>LOREM</Heading>
                <Box fontSize={'2xl'} alignItems={'center'} d={'flex'} justifyContent={'center'} maxWidth={['80%']}>
                    <Text style={{mixBlendMode: 'overlay'}} color={'white'} mb={4}>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </Text>

                </Box>
            </Flex>
            <Flex alignContent={'center'} justifyContent={'center'} pt={10} >
                <img src={iphone} alt="" style={{position:'absolute',height:'550px'}}/>
                <img src={video2}  style={{height:'525px',marginTop:'7px'}} alt=""/>
            </Flex>

        <Flex  alignContent={'center'} justifyContent={'center'} pt={10} mt={10} pb={10}>
            <img src={qr} alt="" style={{height:'300px'}}/>

        </Flex>
        </Box>
    </div>
);

export default App2
