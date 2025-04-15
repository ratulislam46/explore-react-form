import React from 'react';

const ProductForm = ({handleProducts}) => {

    const handleProductSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        
        const allProducts = {name, price, quantity}
        // console.log(allProducts);

        handleProducts(allProducts);
    };

    return (
        <div>
            <form onSubmit={handleProductSubmit}>
                <input type="text" name="name" placeholder='Product Name'/>
                <br />
                <input type="text" name="price" placeholder='Product Price'/>
                <br />
                <input type="text" name="quantity" placeholder='Product Quantity'/>
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default ProductForm;