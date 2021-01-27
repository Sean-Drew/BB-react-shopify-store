import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'

import { ShopContext } from '../context/shopProvider'
import Hero from '../components/Hero'
import ImageWithText from '../components/ImageWithText'
import RichText from '../components/RichText'
import bathBombImg1 from '../assets/Bath-Bomb-Image-1.webp'
import bathBombImg2 from '../assets/Bath-Bomb-Image-2.jpg'

const textBlockStandard = 'Bath bombs take you from stressed to relaxed in seconds. All you have to do is fill your bathtub with warm water, add your bath bomb then get inside. It couldn\'t be easier!'
const textBlockReverse = 'Bath bombs are for everyone, but just like food or movies, everyone has different tastes. To make the most out of your bath bomb experience keep in mind your preferences for aroma, color, ingredients (such as essential oils and moisturizers) as well as what atmosphere most relaxes you.'
const headingStandard = 'Experience calm, soothing relaxation.'
const headingReverse = 'Which one is right for me?'

const Home = () => {
    
    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loading...</div>

    return (
        <Box>
            <Hero />
            <RichText 
                heading="The relaxation you've been waiting for." 
                text="Our bath bombs guarantee a fun, relaxing and colorful night." 
            />
            <Grid templateColumns='repeat(3, 1fr)'>
                {
                products.map(product => (
                <Link to={`/products/${product.handle}`} key={product.id}>
                    <Box _hover={{ opacity: '70%' }} textAlign='center' position='relative' >
                    <Image src={product.images[0].src} />
                    <Text position='absolute' bottom='15%' w='100%' fontWeight='bold' >
                        {product.title}
                    </Text>
                    <Text position='absolute' bottom='5%' w='100%' color='gray.500' >
                        ${product.variants[0].price}
                    </Text>
                    </Box>
                </Link>
                ))
            }
            </Grid>
            <RichText 
                heading="Treat yourself!" 
            />
            <ImageWithText heading={headingStandard} text={textBlockStandard} image={bathBombImg1} />
            <ImageWithText heading={headingReverse} reverse text={textBlockReverse} image={bathBombImg2} />
        </Box>
    )
}

export default Home
