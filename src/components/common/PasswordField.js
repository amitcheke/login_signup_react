import React from 'react';
import './css/common.css';


const PasswordField = (props) => {
    let { handleChange, name } = props;
    return (
        <>
            <input type="password" name={name} onChange={handleChange}></input>
        </>
    );
}

export default PasswordField;