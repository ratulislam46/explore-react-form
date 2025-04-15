import React, { useState } from 'react';

const UseInputField = (defaultValue) => {

    const [ fieldValue, setFieldValue] = useState(defaultValue);

    const handleFieldOnchange = (event) => {
        setFieldValue(event.target.value);
    };

    return [ fieldValue, handleFieldOnchange];

};

export default UseInputField;