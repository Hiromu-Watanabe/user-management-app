import { Button, ChakraProvider } from "@chakra-ui/react";
import "./styles.css";

export default function App() {
  // 2. Wrap ChakraProvider at the root of your app
  return (
    <ChakraProvider>
      <Button colorScheme={"teal"}>ボタン</Button>
      <div className="App">
        <h1>Hello CodeSandbox</h1>
        <h2>Start editing to see some magic happen!</h2>
      </div>
    </ChakraProvider>
  );
}
