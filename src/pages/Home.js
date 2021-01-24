import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Box, Grid, Text, Image } from '@chakra-ui/react'

import { ShopContext } from '../context/shopProvider'

const Home = () => {
    
    const { fetchAllProducts, products } = useContext(ShopContext)

    useEffect(() => {
        fetchAllProducts()
    }, [fetchAllProducts])

    if (!products) return <div>Loading...</div>

    return (
        <Box>
            <Grid>
                {
                products.map(product => (
                <Link to={`/products/${product.handle}`} key={product.id}>
                    <Image src={product.images[0].src} />
                    <Text>
                        {product.title}
                    </Text>
                    <Text>
                        ${product.variants[0].price}
                    </Text>
                </Link>
                ))
            }
            </Grid>
        </Box>
    )
}

export default Home
