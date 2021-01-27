import React from 'react'
import { Link } from 'react-router-dom'
import { Grid, Box, Text, Image, VStack } from '@chakra-ui/react'

const Footer = () => {
    return (
        <Box backgroundColor='#FFA8E2' >
            <Grid templateColumns={['repeat(1, 1fr)', 'repeat(3, 1fr)']} color='white' fontWeight='bold' alignItems='center' >
                <Image img='true' src={'/Bath-Bomb-Footer-Img.webp'} />
                <VStack p='2rem' >
                    <Link cursor='pointer' to='/products/green-blast'>The Green Blast</Link>    
                    <Link cursor='pointer' to='/products/blue-berry'>The Blue Berry</Link>
                    <Link cursor='pointer' to='/products/yellow-mello'>The Yellow Mello</Link>
                </VStack>
                <Image img='true' src={'/Bath-Bomb-Footer-Img.webp'} />
                {/* <VStack p='2rem' >
                    <Link cursor='pointer' to='/'>About Us</Link>    
                    <Link cursor='pointer' to='/'>Learn More</Link>
                    <Link cursor='pointer' to='/'>Sustainability</Link>
                </VStack> */}
            </Grid>
            <Box>
                <Text textAlign='center' color='white' w='100%' borderTop='1px solid white' p='1rem' >
                    Luxe Bath Bombs - 2021
                </Text>
            </Box>
        </Box>
    )
}

export default Footer
