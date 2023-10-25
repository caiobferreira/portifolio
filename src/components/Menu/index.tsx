import React from 'react'
import { MdMenu, MdAddHome, MdOutlineFeedback, MdOutlineWhatsapp, MdOutlineInfo } from 'react-icons/md'
import {
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    IconButton
} from '@chakra-ui/react'
import { AiOutlineGithub, AiOutlineLinkedin } from 'react-icons/ai'

const MenuComponent = () => {
    return (
        <Menu size={'gd'}>
            <MenuButton
                as={IconButton}
                aria-label='Options'
                icon={<MdMenu />}
                variant='outline'
                px={4}
                py={2}
                transition='all 0.2s'
                borderRadius='md'
                borderWidth='1px'
                _hover={{ bg: 'gray.400' }}
                _expanded={{ bg: 'blue.400' }}
                _focus={{ boxShadow: 'outline' }}
            />
            <MenuList>
                <MenuItem icon={<AiOutlineLinkedin />}>
                    Linkedin
                </MenuItem>
                <MenuItem icon={<MdOutlineFeedback />}>
                    Curriculo
                </MenuItem>
                <MenuItem icon={<AiOutlineGithub />}>
                    GitHub
                </MenuItem>
                <MenuItem icon={<MdOutlineWhatsapp />}>
                    WhatsApp
                </MenuItem>
                <MenuItem icon={<MdOutlineInfo />}>
                    Sobre mim 
                </MenuItem>
            </MenuList>
        </Menu>
    )
}

export default MenuComponent;