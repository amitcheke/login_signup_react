import React from 'react';
import './css/common.css';


const PasswordField = (props) => {
    let { handleChange, name, placeholderText } = props;
    return (
        <>
            <input type="password" name={name} onChange={handleChange} placeholder={placeholderText}></input>
        </>
    );
}

export default PasswordField;