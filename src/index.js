import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ChakraProvider } from "@chakra-ui/react"
import { ParallaxProvider } from 'react-scroll-parallax';

import { extendTheme } from "@chakra-ui/react"
const theme = extendTheme({
    fonts: {
        heading: "IBM Plex Serif",
        body: "Inter",
    },
    components: {
        Button: {
            // 1. We can update the base styles
            baseStyle: {
                fontWeight: "bold", // Normally, it is "semibold"
            },
            // 2. We can add a new button size or extend existing
            sizes: {
                xl: {
                    h: "56px",
                    fontSize: "lg",
                    px: "32px",
                },
            },
            // 3. We can add a new visual variant
            variants: {
                "with-shadow": {
                    bg: "red.400",
                    boxShadow: "0 0 2px 2px #efdfde",
                },
                // 4. We can override existing variants
                solid: (props) => ({
                    bg: props.colorMode === "dark" ? "#453D58" : "#253D58",
                    boxShadow:props.colorMode === "dark" ? "3px 3px 2px 5px white" : "3px 3px 20px 5px black",
                    _hover: {
                        boxShadow:props.colorMode === "dark" ? "" : "3px 1px 10px 3px black",
                        bg: props.colorMode === "dark" ? "#253D58" : "#453D58",
                    },
                }),
            },
        },
    },

})
export default theme



ReactDOM.render(
  <React.StrictMode>
      <ChakraProvider theme={theme}>
          <ParallaxProvider>
    <App />
          </ParallaxProvider>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
