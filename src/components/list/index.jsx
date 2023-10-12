/** @format */

import React from 'react';
import { Box, Flex, CircularProgress, Text, Center } from '@chakra-ui/react';
import Item from './item';
import useListManagement from "./../../hooks/useListManagement"

export default function ItemsContainer() {
  const { list, loading } = useListManagement();

  if (loading) {
    return (
      <Flex minH={'80vh'} justify={'center'} align={'center'}>
        <Box>
          <CircularProgress isIndeterminate color="#F56565" />
          <Text mt={5}>Loading...</Text>
        </Box>
      </Flex>
    );
  }

  if (!list.length && !loading) {
    return (
      <Center mt={10} mb={10}>
        <Text>There are not notes yet...🥲</Text>
      </Center>
    );
  }
  return (
    <Flex justify={'center'} maxW="7xl" m={"0 auto"}>
      <Box>
        <Flex w={'full'} justify={'center'} mt={10}>
          <Text fontSize="2xl" as={'b'} color={'red.400'} textAlign={'center'}>
            Available Lists
          </Text>
        </Flex>
        <Flex gap={8} justify={'center'} wrap={'wrap'} mt={10} w={'auto'} ml={10} mr={10}>
          {list.map(item => (
            <Item key={item.id} item={item} />
          ))}
        </Flex>
      </Box>
    </Flex>
  );
}
