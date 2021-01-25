import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Flex, Icon, Image, Badge, Box } from '@chakra-ui/react'
import { ShopContext } from '../context/shopProvider'
import { MdMenu, MdShoppingBasket } from 'react-icons/md'

const NavBar = () => {
    
    const { openCart, openMenu, checkout } = useContext(ShopContext)
    
    return (
        <Flex backgroundColor='#FFA8E2' flexDir='row' alignItems='center' justifyContent='space-between' p='2rem'>
            <Icon fill='white' cursor='pointer' as={MdMenu} w={30} h={30} onClick={() => openMenu()} > </Icon>
            <Link to='/' > <Image img='true' src={'/Logologo_1.svg'} w={100} h={100}/> </Link>
            <Box>
                <Icon fill='white' cursor='pointer' as={MdShoppingBasket} w={30} h={30} onClick={() => openCart()} />
                <Badge backgroundColor='#FF38BD' borderRadius='50%' >{checkout.lineItems?.length} </Badge>
            </Box>
        </Flex>
    )
}

export default NavBar
