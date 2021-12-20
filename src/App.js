import React from 'react';
import { ChakraProvider, Box, Grid, theme } from '@chakra-ui/react';
import { Routes, Route } from 'react-router-dom';
import About from '../src/pages/About';
import HOA from '../src/pages/Hoa';
import Landing from '../src/pages/Landing';
import Listing from '../src/pages/Listing';
import Location from '../src/pages/Location';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import PageNotFound from './pages/PageNotFound';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Box textAlign="center" fontSize="xl">
        <Grid minH="100vh" p={3}>
          <NavBar />
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="/location" element={<Location />} />
            <Route path="/hoa" element={<HOA />} />
            <Route path="/about" element={<About />} />
            <Route path="/homes/:home_id" element={<Listing />} />
            <Route path="*" element={<PageNotFound />} />
          </Routes>
          <Footer />
        </Grid>
      </Box>
    </ChakraProvider>
  );
}

export default App;
