import React, { useRef } from 'react';

const UnControlledField = () => {

    //when we want to input value after submited when we use to (useRef from react)
    const emailRef = useRef('');
    const passwordref = useRef('');

    const handleSubmit = (event) => {
        event.preventDefault();
        const email = (emailRef.current.value);
        const password =(passwordref.current.value);
        console.log(email, password);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input ref={emailRef} type="email" name="email" />
                <br />
                <input ref={passwordref} type="password" name="password" />
                <br />
                <input type="submit" value="Submit" />
            </form>
            
        </div>
    );
};

export default UnControlledField;