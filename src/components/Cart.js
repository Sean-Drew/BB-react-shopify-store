import React, { useContext } from 'react'
import { ShopContext } from '../context/shopProvider'
import { 
    Drawer, 
    DrawerBody, 
    DrawerFooter, 
    DrawerHeader, 
    DrawerOverlay, 
    DrawerContent, 
    DrawerCloseButton, 
    Button, 
    Grid, 
    Text,
    Flex,
    Image,
    Link
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'


const Cart = () => {

    const { isCartOpen, closeCart, checkout,removeLineItem } = useContext(ShopContext)

    // console.log('checkout is: ', checkout)

    return (
        <>
            <Drawer
            isOpen={isCartOpen}
            placement="right"
            onClose={closeCart}
            size='sm'
            >
                <DrawerOverlay>
                    <DrawerContent>
                        <DrawerCloseButton />
                        <DrawerHeader>Shopping Cart</DrawerHeader>

                        <DrawerBody>
                            {
                                checkout.lineItems?.length ? checkout.lineItems.map(item => (
                                    <Grid templateColumns='repeat(4, 1fr)' gap={1} key={item.id} >
                                        
                                        <Flex alignItems='center' justifyContent='center' >
                                            <CloseIcon cursor='pointer' onClick={() => removeLineItem(item.id)} />
                                        </Flex>
                                        <Flex alignItems='center' justifyContent='center' >
                                            <Image src={item.variant.image.src} />
                                        </Flex>
                                        <Flex alignItems='center' justifyContent='center' >
                                            <Text>
                                                {item.title}
                                            </Text>
                                        </Flex>
                                        <Flex alignItems='center' justifyContent='center' >
                                            <Text>
                                                {item.variant.price}
                                            </Text>
                                        </Flex>

                                    </Grid>
                                )) : <div>Your shopping cart is empty</div>
                            }
                        </DrawerBody>

                        { checkout.lineItems?.length ?
                            <DrawerFooter>
                                <Button w='100%' >
                                    <Link href={checkout.webUrl} w='100%' >Checkout</Link>
                                </Button>
                            </DrawerFooter> : null
                        }
                    </DrawerContent>
                </DrawerOverlay>
            </Drawer>   
        </>
    )
}

export default Cart
