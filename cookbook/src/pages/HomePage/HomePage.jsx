import React from 'react';
import "./home.scss";
import Card from "../../components/Card/Card.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import fork from '../../images/fork.png'
import pies from '../../images/pies.PNG'
import soup from '../../images/soup.jpg'
import oatmeal from '../../images/oatmeal.jpg'


const HomePage = () => {

    return (
        <div className='homewrap'>
            <Header />
            <div className='main'>
                <p className='maintext'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, cum?</p>
            </div>

            <div className='secmain'>
                <div className='secmain1'>
                    <p className='t1'>WHO IS THE ASTIST?</p>
                    <p className='t2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Esse, ipsa fugit? Dicta labore cupiditate dolore nesciunt excepturi. Ipsam, voluptates voluptatibus.</p>
                    {/* <img src={fork} alt="fork" className='img1' /> */}
                </div>

                <div className='secmain2'>
                    <div className='sm21'>
                        <img src={pies} alt="burger" className='p1' />
                        <p> <span>food</span> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                    <div className='sm21'>
                        <img src={soup} alt="salad" className='p1' />
                        <p> <span>food</span> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                    <div className='sm21'>
                        <img src={oatmeal} alt="pancakes" className='p1' />
                        <p> <span>food</span> <br />
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                </div>
            </div>





            <Card />
            <Footer />
        </div>
    );
};

export default HomePage;
