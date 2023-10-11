/** @format */

import React, { useState, useEffect } from 'react';
// import { useForm } from 'react-hook-form';
import { API, graphqlOperation } from 'aws-amplify';
import {
  ModalOverlay,
  Modal,
  ModalContent,
  Button,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Box,
  Textarea,
  useToast
} from '@chakra-ui/react';
import UploadImage from "./upload_image"
import { createList, updateList } from '../../graphql/mutations';

export default function ListModal({ children, item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [fileToUpload, setFileToUpload] = useState();

  const [formValues, setFormValues] = useState({
    title: item?.title || '',
    description: item?.description || '',
  });

  useEffect(() => {
    if (item && isOpen) {
      setFormValues({
        title: item?.title || '',
        description: item?.description || '',
      });
    }
  }, [item, isOpen]);
  
  const toast = useToast();

  const resetFormValues = () => {
      setFormValues({
        title: '',
        description: '',
      });
  };

  const handleChange = e => {
    setFormValues(prevState => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSave = async () => {
    try {
      onClose();
      if (item) {
        await API.graphql(
          graphqlOperation(updateList, {
            input: { ...formValues, id: item.id },
          })
        );
      }
      if (!item) {
        await API.graphql(
          graphqlOperation(createList, {
            input: formValues,
          })
        );
      }
      resetFormValues();
      toast({
        title: `List Was ${item ? 'Edited' : 'Created'}.`,
        description: `Successful ${item ? 'Edited' : 'Created'} List`,
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'There was error.',
        description: error?.message || 'Unexpected error',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handlerCancel = () => {
    resetFormValues();
    onClose();
  };

  const getSelectedFile = fileName => {
    setFileToUpload(fileName);
  };

  return (
    <>
      <Box onClick={onOpen}>{children}</Box>
      <Modal isOpen={isOpen} onClose={handlerCancel} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>{item ? 'Edit' : 'Create'} List</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <FormControl as="form">
              <FormLabel as="legend">List Title</FormLabel>
              <Input type="text" value={formValues.title} name={'title'} onChange={handleChange} />
            </FormControl>
            <Textarea
              mt={4}
              placeholder="Description..."
              value={formValues.description}
              name={'description'}
              onChange={handleChange}
            />
            <FormControl as="form" mt={4}>
              <FormLabel as="legend">Upload Image</FormLabel>
              <UploadImage getSelectedFile={getSelectedFile} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button mr={3} onClick={handlerCancel}>
              Close
            </Button>
            <Button colorScheme="teal" onClick={onSave}>
              Save
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
