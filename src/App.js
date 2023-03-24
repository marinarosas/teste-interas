import { GlobalStyles } from './GlobalStyles';
import { HomePage } from "./pages/HomePage";
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  return (
    <>
      <GlobalStyles />
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </>

  );
}

export default App;
