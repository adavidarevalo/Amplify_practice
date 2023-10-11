/** @format */

import React from 'react';

import Header from '../components/header';
import ItemsContainer from "../components/items"
import FamilyHelper from '../components/hero';
import FloatingMenu from '../components/menu';
import {
  Box,
} from '@chakra-ui/react';

export default function HomePage() {
  return (
      <Box style={{overflow: "hidden"}}>
        <Header />
        <FamilyHelper />
        <ItemsContainer />
        <FloatingMenu/>
      </Box>
  );
}
