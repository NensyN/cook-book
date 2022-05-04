import React from 'react';
import "./header.scss";

const Header = () => {

    return (
        <div className='headerwrap'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Leaf_icon_15.svg/1003px-Leaf_icon_15.svg.png" alt="logo" className='headerimg' />
            <p>Biti Zdrava</p>
        </div>
    );
};

export default Header;