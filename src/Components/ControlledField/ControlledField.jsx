import React, { useState } from 'react';

const ControlledField = () => {

    const [password , setPassword ] = useState('');

    const [error, setError] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();

        if(password.length < 6) {
            setError('Password must be 6 character !')
        }
        else{
            setError('')
        }
    }

    const handlePassOnChange = (event) => {
        event.preventDefault();
        setPassword(event.target.value);

        // if(password.length < 6){
        //     setError('Password must be 6 character or longer')
        // }
        // else{
        //     setError('')
        // }
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder='Your Name' required />
                <br />
                <input type="password" name="password" onChange={handlePassOnChange} defaultValue={password} placeholder='Your Password' required />
                <br />
                <input type="submit" value="Submit" />
            </form>

                <p style={{color: 'red'}}>
                    <small>{error}</small>
                </p>
                
        </div>
    );
};

export default ControlledField;