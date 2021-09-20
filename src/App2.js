import React from "react";
import { render } from "react-dom";
import { Parallax, Background } from "react-parallax";
import {Box, Flex, Heading, Text} from "@chakra-ui/layout";
import style from "./App.scss";
import { Button, ButtonGroup } from "@chakra-ui/react"
import test from "./img/memeGifBack2.gif"
import demo from "./img/demo.gif"
import backEmodji from "./img/back-emodji3.png"
import iphone from './img/iphone.png'
import video2 from './img/IMG_5036.gif'
import qr from './img/qr.png'
import { useHistory } from 'react-router-dom';
import Flip from 'react-reveal/Flip';
import Zoom from 'react-reveal/Zoom'
import Tada from 'react-reveal/Tada'
import linkedin from './img/linked-in-icon.png'
import speed from './img/fast.jpeg'
const styles = {
    fontFamily: "sans-serif",
    textAlign: "center",
    zIndex:200,
    height:'100vh',
    backgroundImage:'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))'
};


const App2 = () => {

    return (

        <div style={styles}>

            <Parallax bgImage={test} strength={500}

                      bgStyle={'linear-gradient(to bottom, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73))'}
                      strength={500}
                      bgImageStyle={{objectFit: 'cover', width: '100% !important'}}
                      style={{
                          height: '100vh',

                          backgroundPosition: 'center',
                          backgroundSize: 'cover',

                          backgroundRepeat: 'no-repeat',

                          opacity: '60%',
                          color: 'white',
                          textAlign: 'center',
                          alignItems: 'center',
                          display: 'flex',
                          justifyContent: 'center'
                      }}>
                <div style={{height: '100%'}}>

                    <Box className={style.circleInner} margin='auto' maxWidth={'1400px'} width={'100%'}
                         minHegiht={'100vh'}>
                        <Flex d={'flex'} direction={'column'} px={'20px'} alignItems={'center'} d={'flex'}
                              justifyContent={'center'}>
                            <Heading mb={6} fontWeight={'900'} as="kbd" fontSize='7xl'>Mem<Heading color={'#072950;'}
                                                                                                   fontSize='7xl'
                                                                                                   fontWeight={'900'}
                                                                                                   as="kbd">Ass</Heading></Heading>


                            <Box mt={4} fontSize={'2xl'} alignItems={'center'} d={'flex'} justifyContent={'center'}
                                 maxWidth={['80%']} flexDir={'column'}>
                                <Text style={{}} color={'white'} mb={4}>
                                    Transform your message to the meme.
                                    The bot works without adding to chat.
                                    No registration is needed.

                                </Text>


                            </Box>

                            <div className="button-container-3" size="lg" w={'200px'} mt={6}>
                                <span className="mas">Just click!</span>
                                <button type="button" name="Hover"
                                        onClick={() => window.location.href = 'https://t.me/memass_ai_bot'}> Get
                                    Started!
                                </button>
                            </div>

                        </Flex>
                    </Box>
                </div>


            </Parallax>


            <Box

                bg={'linear-gradient(180deg, rgba(221,173,213,0.6811099439775911) 0%, rgba(87,94,148,0.5718662464985995) 34%, rgba(210,209,218,0.5886729691876751) 87%, rgba(140,187,232,0.4009978991596639) 100%)'}

            >

                <Box bgImage={backEmodji} bgSize={'150px'}
                     _before={{opacity:0.5}}

                     backgroundRepeat="repeat">


                    <Flip left cascade>
                        <Flex d={'flex'} pt={'160px'} direction={'column'} px={'20px'} alignItems={'center'} d={'flex'}
                              justifyContent={'center'}>

                            <Heading mb={6} fontWeight={'900'} as="kbd" fontSize='4xl' color={"#072950"}>AI
                                Power </Heading>
                            <Box fontSize={'2xl'} alignItems={'center'} d={'flex'} justifyContent={'center'}
                                 maxWidth={['80%']}>
                                <Text style={{mixBlendMode: 'overlay'}} color={'white'} mb={4}>
                                    Smart search through 1000 memes.
                                </Text>

                            </Box>

                        </Flex>
                    </Flip>
                    <Zoom left>
                        <Flex alignContent={'center'} justifyContent={'center'} pt={10}>

                            <img src={iphone} alt="" style={{position: 'absolute', height: '550px'}}/>
                            <img src={demo} style={{height: '525px', marginTop: '7px'}} alt=""/>

                        </Flex>
                    </Zoom>
                    <Flip left cascade>
                        <Flex d={'flex'} pt={'160px'} direction={'column'} px={'20px'} alignItems={'center'} d={'flex'}
                              justifyContent={'center'}>

                            <Heading mb={6} fontWeight={'900'} as="kbd" fontSize='4xl' color={"#072950"}>Supports any
                                Language</Heading>
                            <Box fontSize={'2xl'} alignItems={'center'} d={'flex'} justifyContent={'center'}
                                 maxWidth={['80%']}>
                                <Text style={{mixBlendMode: 'overlay'}} color={'white'} mb={4}>
                                    Understands all languages of the world, despite the language you communicate.
                                </Text>

                            </Box>

                        </Flex>
                    </Flip>
                    <Zoom left>
                        <Flex alignContent={'center'} justifyContent={'center'} pt={10}>
                            <img src={iphone} alt="" style={{position: 'absolute', height: '550px'}}/>
                            <img src={video2} style={{height: '525px', marginTop: '7px'}} alt=""/>
                        </Flex>
                    </Zoom>

                    <Flip left cascade>
                        <Flex d={'flex'} pt={'160px'} direction={'column'} px={'20px'} alignItems={'center'} d={'flex'}
                              justifyContent={'center'}>

                            <Heading mb={6} fontWeight={'900'} as="kbd" fontSize='4xl' color={"#072950"}>Blazing Fast Speed</Heading>
                            <Box fontSize={'2xl'} alignItems={'center'} d={'flex'} justifyContent={'center'}
                                 maxWidth={['80%']}>
                                <Text style={{mixBlendMode: 'overlay'}} color={'white'} mb={4}>
                                    Only a few seconds to create your own meme.

                                </Text>

                            </Box>

                        </Flex>
                    </Flip>
                    <Zoom left>
                        <Flex alignContent={'center'} justifyContent={'center'} >

                            <img src={speed} style={{height: '345px',}} alt=""/>
                        </Flex>
                    </Zoom>
                    <Tada>


                        <Flip left cascade>
                            <Flex d={'flex'} pt={'160px'} direction={'column'} px={'20px'} alignItems={'center'}
                                  d={'flex'}
                                  justifyContent={'center'}>

                                <Heading mb={6} fontWeight={'900'} as="kbd" fontSize='4xl' color={"#072950"}>How to use
                                    it?</Heading>
                                <Box fontSize={'2xl'} alignItems={'center'} d={'flex'} justifyContent={'center'}
                                     maxWidth={['80%']} flexDir={'column'}>
                                    <Text color={'black'} mb={2}>
                                        1. Open any chat in Telegram 🤤
                                    </Text>
                                    <Text color={'black'} mb={2}>
                                        2. Type: @memass_ai_bot [+ text you want to turn into a meme] 📟
                                    </Text>
                                    <Text color={'black'} mb={2}>
                                        3. Wait a second… 🙄
                                    </Text>
                                    <Text color={'black'} mb={2}>
                                        4. Choose your meme and send it! 👹👹👹
                                    </Text>
                                </Box>

                            </Flex>
                        </Flip>


                        <Flex alignContent={'center'} justifyContent={'center'} pt={10} pb={10}>
                            <img src={qr} alt="" style={{height: '300px'}}/>

                        </Flex>
                        <Flex style={{cursor:'pointer'}} alignContent={'center'} justifyContent={'center'} pt={10} pb={10} onClick = {()=>window.location.href = 'https://www.linkedin.com/company/memass/'}>
                            <img src={linkedin} alt="" style={{height: '70px'}}/>

                        </Flex>
                    </Tada>
                </Box>
            </Box>
        </div>

    );
};

export default App2
