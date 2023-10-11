/** @format */

import React, { useRef, useState } from 'react';
import { Button, Image, Flex } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';

export default function UploadImage({ getSelectedFile, item }) {
  const inputRef = useRef();
  const [image, setImage] = useState(
    item?.imageKey ? `${process.env.REACT_APP_PUBLIC_FOLDER}${item.imageKey}` :
      'https://react.semantic-ui.com/images/wireframe/image.png'
  );

  function handleInputChange(e) {
    const fileToUpload = e.target.files[0];
    if (!fileToUpload) return;
    const fileSampleUrl = URL.createObjectURL(fileToUpload);
    setImage(fileSampleUrl);
    getSelectedFile(fileToUpload);
  }

  return (
    <Flex justify={'center'} position={'relative'} maxH={'300px'}>
      <Image
        objectFit="cover"
        src={image}
        rounded={10}
        alt={item?.slug || ""}
        fallbackSrc={process.env.REACT_APP_DEFAULT_IMAGE}
      />
      <Flex w={'full'} h={'full'} position={'absolute'} rounded={10} justify={'center'} align={'end'} pb={3}>
        <Button colorScheme="teal" rounded={100} h={'40px'} w={'35px'}>
          <DeleteIcon />
        </Button>
        <Button colorScheme="teal" rounded={100} h={'40px'} w={'35px'} ml={3} onClick={() => inputRef.current.click()}>
          <EditIcon />
        </Button>
      </Flex>
      <input ref={inputRef} type="file" onChange={handleInputChange} style={{ display: 'none' }} />
    </Flex>
  );
}
