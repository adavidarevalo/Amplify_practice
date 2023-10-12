/** @format */

import React from 'react';

import ItemsContainer from "../components/list"
import FloatingMenu from '../components/menu';
import {
  Box,
} from '@chakra-ui/react';

export default function DashboardPage() {
  return (
      <Box style={{overflow: "hidden"}}>
        <ItemsContainer />
        <FloatingMenu/>
      </Box>
  );
}
