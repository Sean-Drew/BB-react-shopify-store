import React, { useContext } from 'react'
import { Flex, Icon, Image, Text } from '@chakra-ui/react'
import { ShopContext } from '../context/shopProvider'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'

const NavBar = () => {
    
    const { openCart, openMenu, checkout } = useContext(ShopContext)
    
    return (
        <Flex backgroundColor='#FFA8E2' flexDir='row' justifyContent='space-between' p='2rem'>
            <Icon fill='white' cursor='pointer' as={MdMenu} w={30} h={30} />
            <Image img src={'/Logologo_1.svg'} w={100} h={100}/>
            <Icon fill='white' cursor='pointer' as={MdShoppingBasket} w={30} h={30} onClick={() => openCart()} />
        </Flex>
    )
}

export default NavBar
