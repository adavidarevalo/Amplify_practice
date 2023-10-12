/** @format */

import React, { useState } from 'react';
import { Button, Menu, MenuList, MenuItem, MenuButton, useToast } from '@chakra-ui/react';
import { DragHandleIcon, EditIcon } from '@chakra-ui/icons';
import { API, graphqlOperation } from 'aws-amplify';
import slugify from 'slugify';

import DeleteOption from './delete_option';
import CreateListModal from '../../list_modal';
import { updateList } from '../../../graphql/mutations';
import { useS3 } from '../../../hooks/useS3';

export default function ItemMenu({ item, isHover }) {
  const toast = useToast();
  const [uploadToS3] = useS3();

  const handleSave = async (fileToUpload, formValues) => {
    try {
      let imageKey;
      let slug;

      if (fileToUpload) {
        imageKey = uploadToS3(fileToUpload);
        slug = slugify(formValues.title, {
          replacement: '_',
          lower: true,
        });
      }
      if (imageKey && slug) {
        formValues.imageKey = imageKey;
        formValues.slug = slug;
      }
      await API.graphql(
        graphqlOperation(updateList, {
          input: { ...formValues, id: item.id },
        })
      );

      toast({
        title: `List Was Edited.`,
        description: `Successful Edited List`,
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
    <Menu>
      <MenuButton
        as={Button}
        bg={'#F56565'}
        position={'absolute'}
        top={'10px'}
        right={'10px'}
        opacity={+isHover}
        rounded={100}
        h={'40px'}
        w={30}
        p={'10px'}>
        <DragHandleIcon color={'white'} />
      </MenuButton>
      <MenuList>
        <CreateListModal item={item} handleSave={handleSave}>
          <MenuItem icon={<EditIcon />}>Edit</MenuItem>
        </CreateListModal>
        <DeleteOption item={item} />
      </MenuList>
    </Menu>
  );
}
