import React from 'react'
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Box } from '@chakra-ui/react';
import { HamburgerIcon, AddIcon, ExternalLinkIcon, RepeatIcon, EditIcon } from '@chakra-ui/icons';
import CreateListModal from "../list_modal"

export default function FloatingMenu() {
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
          <CreateListModal>
            <MenuItem icon={<AddIcon />} command="⌘T">
              Create List
            </MenuItem>
          </CreateListModal>
          <MenuItem icon={<ExternalLinkIcon />} command="⌘N">
            New Window
          </MenuItem>
          <MenuItem icon={<RepeatIcon />} command="⌘⇧N">
            Open Closed Tab
          </MenuItem>
          <MenuItem icon={<EditIcon />} command="⌘O">
            Open File...
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}
