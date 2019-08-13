import React from 'react';
import './css/common.css';


const TextField = (props) => {

    let { handleChange, name } = props;
    return (
        <>
            <input type="text" name={name} onChange={handleChange}></input>
        </>
    );
}

export default TextField;