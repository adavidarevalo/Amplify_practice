/** @format */

import React from 'react';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Box, useToast } from '@chakra-ui/react';
import { HamburgerIcon, AddIcon } from '@chakra-ui/icons';
import slugify from 'slugify';
import { API, graphqlOperation } from 'aws-amplify';

import CreateListModal from '../list_modal';
import { useS3 } from '../../hooks/useS3';
import { createList } from '../../graphql/mutations';

export default function FloatingMenu() {
  const [uploadToS3] = useS3();
  const toast = useToast();

  const handleSave = async (fileToUpload, formValues) => {
    try {
      let imageKey;
      let slug;
      const { title, description } = formValues;

      if (fileToUpload) {
        imageKey = uploadToS3(fileToUpload);
        slug = slugify(title, {
          replacement: '_',
          lower: true,
        });
      }

      await API.graphql(
        graphqlOperation(createList, {
          input: { title, description, imageKey, slug },
        })
      );
      toast({
        title: `List Was Created.`,
        description: `Successful Created List`,
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
    <Box position={'fixed'} bottom={'10px'} right={'10px'}>
      <Menu>
        <MenuButton
          as={IconButton}
          aria-label="Menu"
          icon={<HamburgerIcon />}
          variant="outline"
          bg={'#F56565'}
          color={'white'}
        />
        <MenuList>
          <CreateListModal handleSave={handleSave}>
            <MenuItem icon={<AddIcon />}>
              Create List
            </MenuItem>
          </CreateListModal>
        </MenuList>
      </Menu>
    </Box>
  );
}
