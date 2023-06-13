import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

import theme from "./themes/themes";
import "./styles.css";
import { Router } from "./router/Router";

export default function App() {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  );
}
