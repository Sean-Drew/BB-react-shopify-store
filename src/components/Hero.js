import React from 'react'
import { Box, Button, Text, Image, Center } from '@chakra-ui/react'

const Hero = () => {
    return (
        <Box backgroundColor='#FFA8E2' w='100%' position='relative' h='60vh' borderTop='1px solid white' >
            <Image h='100%' m='auto' objectFit='contain' objectPosition={['top', 'center']} img='true' src={'/Bath-Bomb-Hero-Img.webp'} />
            <Text className='tracking-in-expand' position='absolute' bottom='20%' w='100%' textAlign='center' color='white' fontWeight='bold' fontSize='4rem' >
                Luxe Bath Bombs
            </Text>
            {/* <Center>
                <Button w='10rem' backgroundColor='#FF38BD' color='white' _hover={{ opacity: '70%' }} position='absolute' bottom='10%' >
                    Shop Now
                </Button>
            </Center> */}
        </Box>
    )
}

export default Hero
