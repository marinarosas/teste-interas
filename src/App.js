import { GlobalStyles } from './GlobalStyles';
import { GlobalContext } from './contexts/GlobalContext';
import GlobalState from './contexts/GlobarState';
import { HomePage } from "./pages/HomePage";
import { ChakraProvider } from '@chakra-ui/react';

function App() {

  const context = GlobalState()

  return (
    <GlobalContext.Provider value={context}>
      <GlobalStyles />
      <ChakraProvider>
        <HomePage />
      </ChakraProvider>
    </GlobalContext.Provider>
  );
}

export default App;
