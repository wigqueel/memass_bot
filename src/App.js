import logo from './logo.svg';
import './App.css';
import * as React from "react"
// 1. import `ChakraProvider` component

import { Text,Flex,Heading,Box } from "@chakra-ui/react"
import shrek from "./img/memeGifBack2.gif"
import test from "./img/memeGifBack.gif"
import {Parallax} from "react-scroll-parallax/cjs";
import style from './App.scss';
import App2 from "./App2";
const App=()=> {
    const insideStyles = {
        background: "white",
        padding: 20,
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%,-50%)"
    };
    return (


<Box>

            <App2/>

</Box>
    );
}

export default App;
