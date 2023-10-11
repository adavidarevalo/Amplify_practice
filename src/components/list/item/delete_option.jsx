/** @format */

import React from 'react';
import {
  AlertDialogOverlay,
  Button,
  AlertDialog,
  useDisclosure,
  MenuItem,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogBody,
  AlertDialogFooter,
  useToast,
} from '@chakra-ui/react';
import { DeleteIcon } from '@chakra-ui/icons';
import { API, graphqlOperation } from 'aws-amplify';
import { deleteList } from '../../../graphql/mutations';

export default function DeleteOption({ item }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = React.useRef();
  const toast = useToast();

  const handleDelete = async () => {
    try {
      onClose();

      await API.graphql(
        graphqlOperation(deleteList, {
          input: { id: item.id },
        })
      );

      toast({
        title: 'List Deleted.',
        description: `Successful elimination of "${item.title}"`,
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

  return (
    <>
      <MenuItem icon={<DeleteIcon />} onClick={onOpen}>
        Delete
      </MenuItem>

      <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose} isCentered>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Delete "{item.title}"
            </AlertDialogHeader>

            <AlertDialogBody>Are you sure? You can't undo this action afterwards.</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose}>
                Cancel
              </Button>
              <Button colorScheme="red" onClick={handleDelete} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
}
