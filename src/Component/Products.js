import React, { useEffect, useState } from 'react';
import Product from './Product';

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://idbdev.com/motion2/public/api/product-is-here-caught-me')
            .then(res => res.json())
            .then(data => setProducts(data.data))
    }, [])
    return (
        <div className='bg-base-100 my-8 container' data-aos='zoom-in-right'
            data-aos-duration='1000'
            data-aos-delay='200'>
            <h1 className='text-3xl text-primary text-center font-bold my-24'> Our Product </h1>
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-10 '>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                    ></Product>)
                }

            </div>
        </div>
    );
};

export default Products;