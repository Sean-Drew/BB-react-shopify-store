import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { ShopContext } from '../context/shopProvider'
import { 
    Drawer, 
    DrawerBody, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    VStack,
    Text
} from '@chakra-ui/react'

const NavMenu = () => {

    const { isMenuOpen, closeMenu } = useContext(ShopContext)

    return (
        <Drawer isOpen={isMenuOpen} onClose={closeMenu} placement='left' size='xs' >
            <DrawerOverlay>
                <DrawerContent>
                    <DrawerCloseButton />
                    <DrawerHeader>Menu</DrawerHeader>
                    
                    <DrawerBody>
                        <VStack p='2rem' >
                            <Link to='/products/green-blast' cursor='pointer'>The Green Blast</Link>
                            <Link to='/products/blue-berry' cursor='pointer'>The Blue Berry</Link>
                            <Link to='/products/yellow-mello' cursor='pointer'>The Yellow Mello</Link>
                        </VStack>
                    </DrawerBody>

                    <DrawerFooter>
                        <Text w='100%' ></Text>
                    </DrawerFooter>

                </DrawerContent>
            </DrawerOverlay>
        </Drawer>
    )
}


export default NavMenu
