import React, { useEffect, useContext } from 'react'
import { useParams, Link } from 'react-router-dom'

import { ShopContext } from '../context/shopProvider'

const ProductPage = () => {

    const { handle } = useParams()

    const { fetchProductWithHandle, addItemToCheckout, product } = useContext(ShopContext)

    useEffect(() => {
        fetchProductWithHandle(handle)
    }, [fetchProductWithHandle, handle])

    if (!product.title) return <div>Loading...</div>
    return (
        <div>
            <h1>{product.title}</h1>
        </div>
    )
}

export default ProductPage
