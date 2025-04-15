import React from 'react';

const ProductTable = ({ products }) => {

    // console.log(products);

    return (
        <div>
            <h3>Products Length : {products.length}</h3>


            {/* products data show table row and column  */}
            <table>
                <thead>
                    <tr>
                        <th>List</th>
                        <th>Name</th>
                        <th>Price</th>
                        <th>Quantity</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
                            <tr key={index}>
                                <td>{index + 1}.</td>
                                <td>{product.name}</td>
                                <td>{product.price}</td>
                                <td>{product.quantity}</td>
                            </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ProductTable;