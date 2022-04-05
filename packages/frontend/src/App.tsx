import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Login, Search, WebPlayback } from './Components';
import { ChakraProvider, Box, HStack, theme } from '@chakra-ui/react';

export const App = () => {
  const [token, setToken] = useState('');

  useEffect(() => {
    const getToken = async () => {
      // TODO: Phase 2: Implement getToken function
    };

    getToken();
  }, []);

  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        {token === '' ? (
          <Login />
        ) : (
          <HStack spacing={8} justifyContent="flex-start">
            <Search />
            <WebPlayback token={token} />
          </HStack>
        )}
      </Box>
    </ChakraProvider>
  );
};
