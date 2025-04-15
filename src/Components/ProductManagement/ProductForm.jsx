import React, { useState } from 'react';

const ProductForm = ({handleProducts}) => {

    // error handing 
    const [error, setError] = useState('');

    const handleProductSubmit = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        



        if(name.length === 0){
            setError('Please provide a product name !');
            return;
        }
        else if(price.length === 0){
            setError('Please provide product price !');
            return;
        }
        else if(price < 0){
            setError('Price can not be negative !');
            return;
        }
        else if(quantity.length === 0) {
            setError('Please provide product quantity');
            return;
        }
        else if(quantity < 0){
            setError('Quantity can not be negative !');
            return;
        }
        else{
            setError('');
        }




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
            
            {<p style={{ color: "red"}}><small>{error}</small></p>}

        </div>
    );
};

export default ProductForm;