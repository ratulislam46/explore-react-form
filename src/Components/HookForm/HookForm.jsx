import React from 'react';
import UseInputField from '../../UseInputField';

const HookForm = () => {

    const [name, nameOnChange] = UseInputField('');
    const [email, emailOnChange] = UseInputField('');
    const [pass, passOnChange] = UseInputField('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit', name, email, pass);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={nameOnChange} type="text" name="name" placeholder='Name' />
                <br />
                <input onChange={emailOnChange} type="email" name="email" placeholder='email' />
                <br />
                <input onChange={passOnChange} type="password" name="password" placeholder='password' />
                <br />
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};

export default HookForm;