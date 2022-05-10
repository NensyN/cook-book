import React from 'react';
import { Link } from 'react-router-dom';
import "./card.scss";


const Card = (props) => {


    const deleteRecipe = ()=>{
        fetch(`https://626d4fa650a310b8a34ce36c.mockapi.io/recipe/${props.obj.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type' : 'application/json'
            },
            body: JSON.stringify(props.recipe) 
        }).then((res)=>res.json())
        .then((res)=> props.setShouldUpdate()
      )
  
      }


    return(
        // <Link to={`/singlePage/${props.obj.id}`}>
        <div className="card" >
           
            <img src={props.obj.image} alt="meal" className='cardimg' />
            
<div className='btnwrap'>
<button onClick={()=>props.setSelectedRecipe(props.obj.id)} className='openbtn'></button>

<p className='cardmealtitle'>~{props.obj.meal}~</p>

            <button onClick={(e)=> {
              e.stopPropagation();
              e.preventDefault();
              deleteRecipe();
            }} 
              className='closeBtn'></button>

</div>

          
        </div>
        // </Link>
    );
};


export default Card;
