import React, { useState } from 'react';
import ProductForm from './ProductForm';
import ProductTable from './ProductTable';

const ProductManagement = () => {

    const [products, setProducts] = useState([]);


    const handleProducts = (allProducts) => {
        const newProducts = [...products, allProducts];
        setProducts(newProducts);
        // console.log(newProducts);
    }

    return (
        <div>

            <ProductForm handleProducts={handleProducts}></ProductForm>

            <ProductTable products={products}></ProductTable>
            
        </div>
    );
};

export default ProductManagement;