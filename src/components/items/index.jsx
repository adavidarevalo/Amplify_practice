/** @format */

import React, { useState, useEffect } from 'react';
import _ from 'lodash';
import { API, graphqlOperation } from 'aws-amplify';
import { Box, Flex, CircularProgress, Text, Center, useToast } from '@chakra-ui/react';
import { listLists } from './../../graphql/queries';
import Item from './item';
import { onCreateList, onDeleteList, onUpdateList } from './../../graphql/subscriptions';

export default function ItemsContainer() {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const fetchList = async () => {
    setLoading(true);
    try {
      const { data } = await API.graphql(graphqlOperation(listLists));
      setList(_.get(data, 'listLists.items', []));
    } catch (error) {
      toast({
        title: 'There was error.',
        description: error?.message || 'Unexpected error',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchList();
  }, []);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onCreateList)).subscribe({
      next: ({ provider, value }) => {
        setList(prevState => [_.get(value, 'data.onCreateList'), ...prevState]);
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onDeleteList)).subscribe({
      next: ({ provider, value }) => {
        setList(prevState => prevState.filter(list => list.id !== _.get(value, 'data.onDeleteList.id')));
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  useEffect(() => {
    const subscription = API.graphql(graphqlOperation(onUpdateList)).subscribe({
      next: ({ provider, value }) => {
        setList(prevState => prevState.map(list => {
          if (list.id === _.get(value, 'data.onUpdateList.id')) {
            return _.get(value, 'data.onUpdateList');
          }
          return list;
        }));
      },
    });

    return () => subscription.unsubscribe();
  }, []);

  if (loading) {
    return (
      <Flex minH={'50vh'} justify={'center'} align={'center'}>
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
    <Flex justify={'center'}>
      <Flex gap={8} justify={'center'} wrap={'wrap'} mt={10} maxW="7xl" w={'auto'} ml={10} mr={10}>
        {list.map(item => (
          <Item key={item.id} item={item} />
        ))}
      </Flex>
    </Flex>
  );
}
