import React from 'react';
import './css/common.css';


const TextField = (props) => {

    let { handleChange, name, placeholderText } = props;
    return (
        <>
            <input type="text" name={name} onChange={handleChange} placeholder={placeholderText}></input>
        </>
    );
}

export default TextField;