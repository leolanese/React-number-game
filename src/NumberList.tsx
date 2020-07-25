import React, {useState} from 'react';
import Product from "./Product";

import { Users, Location, Match, CompanyList } from './resources/objects';

import "./index.scss"

const ProductList = () => {
    const [size, changeSize] = useState("You didn't press any button yet");

    const renderedListNumbers = CompanyList.map((product, index) => {
        debugger
            return <Product product={product} order={index} key={product.number} />
        }
    );

    return (
        <div className="image-list">

            <b>{renderedListNumbers}</b>

            <div className="wrapper">
                <header className="header">Please select a number:</header>

                {CompanyList.map(co =>
                    <div className="panel" onClick={changeSize.bind(null, "big") } >
                        {co.number}
                    </div>)}

                <footer className="footer">My footer</footer>
            </div>

            <div className="App">
                <p id="para1" onClick={changeSize.bind(null, "big")}>
                    Make the text big
                </p>
                <p onClick={changeSize.bind(null, "small")}>
                    Make the text small
                </p>

                <div id="result" className={`box ${size}`}>
                    {size}
                </div>
            </div>


    </div> );
};

export default ProductList;
