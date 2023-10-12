import React from 'react'
import {
  Box,
  Flex,
  Text,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useColorModeValue,
  Stack,
  useColorMode,
  Center,
} from '@chakra-ui/react';
export default function Details() {
  return (
    <Flex mt={5} justify={"center"}>
      <Text fontSize="2xl" as={'b'} color={'red.400'} textAlign={'center'}>
        Detail List
      </Text>
    </Flex>
  );
}
