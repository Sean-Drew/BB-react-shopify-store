import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'

import { ShopContext } from '../context/shopProvider'
import Hero from '../components/Hero'
import ImageWithText from '../components/ImageWithText'

const textBlock = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc pretium lorem nec magna dapibus blandit. Praesent semper lectus gravida justo condimentum malesuada. Pellentesque ornare facilisis dolor, at interdum leo sodales.'
const textBlockReverse = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ullamcorper sapien sem, nec eleifend metus bibendum sit amet. Nulla at bibendum nunc. Mauris sit amet condimentum nulla. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed.'

const Home = () => {
    
    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loading...</div>

    return (
        <Box>
            <Hero />
            <Grid templateColumns='repeat(3, 1fr)'>
                {
                products.map(product => (
                <Link to={`/products/${product.handle}`} key={product.id}>
                    <Box _hover={{ opacity: '70%' }} textAlign='center'>
                    <Image src={product.images[0].src} />
                    <Text>
                        {product.title}
                    </Text>
                    <Text>
                        ${product.variants[0].price}
                    </Text>
                    </Box>
                </Link>
                ))
            }
            </Grid>
            <ImageWithText heading='First Heading' text={textBlock} image={'Bath-Bomb-Image-1.webp'} />
            <ImageWithText heading='Second Heading' reverse text={textBlockReverse} image={'Bath-Bomb-Image-2.jpg'} />
        </Box>
    )
}

export default Home
