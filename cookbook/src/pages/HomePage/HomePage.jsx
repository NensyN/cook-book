import React from 'react';
import "./home.scss";
import Card from "../../components/Card/Card.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";


const HomePage = () => {

    return (
        <div className='homewrap'>
            <Header />
            <Card />
            <Footer />
        </div>
    );
};

export default HomePage;
