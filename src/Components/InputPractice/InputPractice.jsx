import React from 'react';

const InputPractice = () => {

    const handleSubmit = (e) => {
        e.preventDefault();

        const name = e.target.name.value;
        const price = e.target.price.value;
        const quality = e.target.quality.value;
        // console.log(name,price, quality);

        const productDetails = {name , price, quality};
        console.log(productDetails);
    } 

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='name' />
                <br />
                <input type="text" name="price" placeholder='Price' />
                <br />
                <input type="text" name="quality" placeholder='Quality' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default InputPractice;