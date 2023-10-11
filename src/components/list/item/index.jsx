/** @format */

import React, { useEffect, useState } from 'react';
import moment from 'moment';
import {
  Image,
  Text,
  Card,
  Stack,
  CardBody,
  Heading,
  CardFooter,
  ScaleFade,
  Flex,
  CircularProgress,
} from '@chakra-ui/react';
import ItemMenu from './menu';

export default function Item({ item }) {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setImage(`${process.env.REACT_APP_PUBLIC_FOLDER}${item.imageKey}`);
      setLoading(false);
    }, 1000);
  }, [item]);

  return (
    <ScaleFade initialScale={0.9} in={true}>
      <Card direction={{ base: 'column', sm: 'row' }} overflow="hidden" variant="outline">
        {loading ? (
          <Flex justify={'center'} align={'center'} boxSize={{ base: '100%', sm: '200px' }}>
            <CircularProgress isIndeterminate color="#F56565" />
          </Flex>
        ) : (
          <Image
            objectFit="cover"
            boxSize={{ base: '100%', sm: '200px' }}
            src={image}
            fallbackSrc={process.env.REACT_APP_DEFAULT_IMAGE}
          />
        )}
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
