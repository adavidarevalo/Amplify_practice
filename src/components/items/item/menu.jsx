import React from 'react'
import {
  Box,
  Button,
  Menu,
  MenuList,
  MenuItem,
  MenuButton,
} from '@chakra-ui/react';
import { DragHandleIcon, EditIcon } from '@chakra-ui/icons';
import DeleteOption from "./delete_option"
import CreateListModal from "../../list_modal"

export default function ItemMenu({ item }) {
  return (
    <Box position={'absolute'} top={'0px'} w={'full'} h={'full'} opacity={'0'} _hover={{ opacity: '1' }}>
      <Menu>
        <MenuButton
          as={Button}
          bg={'#F56565'}
          position={'absolute'}
          top={'10px'}
          right={'10px'}
          rounded={100}
          h={'40px'}
          w={30}
          p={'10px'}>
          <DragHandleIcon color={'white'} />
        </MenuButton>
        <MenuList>
          <CreateListModal item={item}>
            <MenuItem icon={<EditIcon />}>Edit</MenuItem>
          </CreateListModal>
          <DeleteOption item={item} />
        </MenuList>
      </Menu>
    </Box>
  );
}
