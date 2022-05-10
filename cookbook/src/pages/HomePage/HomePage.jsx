import React from 'react';
import "./home.scss";
import Card from "../../components/Card/Card.jsx";
import Header from "../../components/Header/Header.jsx";
import Footer from "../../components/Footer/Footer.jsx";
import fork from '../../images/fork.png'
import pies from '../../images/pies.PNG'
import soup from '../../images/soup.jpg'
import oatmeal from '../../images/oatmeal.jpg'
import bigfork from '../../images/bigfork.png'
import bigfork2 from '../../images/bigfork2.png'


const HomePage = (props) => {
// console.log(props)
    return (
        <div className='homewrap'>
            {/* <Header /> */}

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
                        <p className='littletitle'>FOOD</p>
                        <p>  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                    <div className='sm21'>
                        <img src={soup} alt="salad" className='p1' />
                        <p className='littletitle'>FOOD</p>
                        <p>  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                    <div className='sm21'>
                        <img src={oatmeal} alt="pancakes" className='p1' />
                        <p className='littletitle'>FOOD</p>
                        <p>  
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab sunt voluptas eum iure quas odio ipsum distinctio cumque ut modi. Sequi, ipsa repellendus quae tempore debitis ratione molestias ut dicta, aliquid iure earum placeat optio tenetur provident voluptatibus reprehenderit itaque.</p>
                    </div>

                </div>
            </div>
                                                                    {/* SKILLS PART */}
            <div className='skilldiv'>
                <div className='pictureskill'></div>
              <div className='skillnote'>
                 <p className='title'>SKILLS</p>
                 <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo animi repellendus provident perspiciatis magnam eos obcaecati sunt fugit, unde veritatis error numquam et, nisi aspernatur aut. Consectetur deserunt exercitationem suscipit.</p>
              </div>
            </div>

<div className='divfork'>
<img src={fork} alt="fork" className='fork' />
</div>

                                                                     {/* CARDS PART */}

<div className='cardwrap'>
<div className='cardwrapblur'>
<p className='mealtitle mealtitle1'>READY-TO-EAT DISHES</p>
<div className='divcard'>
{props.recipes.filter(e=>e.level<=2).map(e=><Card key={e.id} setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e}/>)}
</div>

<p className='mealtitle'>EASY TO PREPARE MEALS</p>
<div className='divcard'>
{props.recipes.filter(e=>e.level<=4 && e.level>2).map(e=><Card key={e.id} setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e}/>)}
</div>


<p className='mealtitle'>COMPLEX DISHES TO MAKE</p>
<div className='divcard'>
{props.recipes.filter(e=>e.level > 4).map(e=><Card key={e.id} setShouldUpdate={props.setShouldUpdate} setSelectedRecipe={props.setSelectedRecipe} obj={e}/>)}
</div>

</div>

<div className='lastwrap'>
<div className='lastwrapblur'>
    {/* <img src={bigfork} alt="bigfork" className='bigfork' /> */}
    <button className='addbtn' onClick={()=>props.setModalToOpen(true)}>Create your <br /> recipe</button>
    {/* <img src={bigfork2} alt="bigfork2" className='bigfork' /> */}
</div>
</div>



</div>
           
            {/* <Footer /> */}
        </div>
    );
};

export default HomePage;
