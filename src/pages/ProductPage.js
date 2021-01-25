import React, { useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Grid, Image, Text, Button, Heading, Flex } from '@chakra-ui/react'

import { ShopContext } from '../context/shopProvider'

const ProductPage = () => {

    const { handle } = useParams()

    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if (!product.title) return <div>Loading...</div>
    return (
        <Box p='2rem' >
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(2, 1fr)']} m='auto' >
                <Flex justifyContent='center' alignItems='center' >
                    <Image border='1px solid black' borderRadius='10px' src={product.images[0].src} />
                </Flex>
                <Flex flexDirection='column' alignItems='center' justifyContent='center' px='2rem' >
                    <Heading pb='2rem' >{product.title}</Heading>
                    <Text fontWeight='bold' pb='2rem'>${product.variants[0].price}</Text>
                    <Text color='gray.600' pb='2rem'>{product.description}</Text>
                    <Button _hover={{ opacity: '70%' }} w='10rem' backgroundColor='#FF38BD' color='white' onClick={() => addItemToCheckout(product.variants[0].id, 1)}>
                        Add To Cart
                    </Button>
                </Flex>
            </Grid>
        </Box>
    )
}

export default ProductPage
