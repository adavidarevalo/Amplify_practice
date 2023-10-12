import React from 'react';
import { withAuthenticator } from '@aws-amplify/ui-react';
import { Amplify, Auth } from 'aws-amplify';
import { ChakraProvider } from '@chakra-ui/react';
import '@aws-amplify/ui-react/styles.css';
import awsconfig from './aws-exports';
import HomePage from "./pages/home"
import AppRouter from "./routes/index.jsx"

Amplify.configure(awsconfig);
Auth.configure(awsconfig);

function App() {
  return (
    <ChakraProvider>
      <AppRouter/>
      {/* <HomePage/> */}
    </ChakraProvider>
  );
}

export default App;
