import React from 'react';

const SimpleForm = () => {

    const handleInput =(event) => {
        event.preventDefault()
        console.log(event.target.name.value);
        console.log(event.target.email.value)
    }

    return (
        <div>
            <form onSubmit={handleInput}>
                <input type="text" name='name' placeholder='Your Name' style={{padding: "10px"}}></input> 
                <input type="email" name='email' placeholder='Your Name' style={{padding: "10px"}}></input> <br />
                <input type='submit'></input>
            </form>
        </div>
    );
};

export default SimpleForm;