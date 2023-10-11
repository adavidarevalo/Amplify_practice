/** @format */

import React from 'react';
import moment from 'moment';
import { Image, Text, Card, Stack, CardBody, Heading, CardFooter, ScaleFade } from '@chakra-ui/react';
import ItemMenu from './menu';

export default function Item({ item }) {
  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
        <Image
          objectFit="cover"
          boxSize={{ base: '100%', sm: '200px' }}
          src="https://images.unsplash.com/photo-1667489022797-ab608913feeb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw5fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=800&q=60"
        />
        <Stack>
          <CardBody>
            <Heading size="md">{item.title}</Heading>
            {item?.description && <Text py="2">{item.description}</Text>}
          </CardBody>

          <CardFooter>
            <Text fontSize={'xs'} color={'gray.600'}>
              {moment(item.createdAt).format('dddd MMM DD YYYY')}
            </Text>
          </CardFooter>
        </Stack>
        <ItemMenu item={item} />
      </Card>
    </ScaleFade>
  );
}
