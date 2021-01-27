import React from 'react'
import { Box, Heading, Text, Center } from '@chakra-ui/react'

const RichText = ({ heading, text }) => {
    return (
        <Box p='1rem' >
            <Center display='flex' flexDir='column' textAlign='center'>
                <Heading py='1.5rem'>
                    {heading && heading}
                </Heading>
                <Text pb='1rem' >
                    {text && text}
                </Text>
            </Center>
        </Box>
    )
}

export default RichText
