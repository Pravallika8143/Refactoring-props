import React from 'react'

function Recipe(props) {
  return (
    <div>
        <li>
            <img src={props.a.image} style={{width:"200px",height:"200px"}} alt=""/>
            <h3>{props.a.name.slice(0,20)}</h3>
            <div>
                <i>Servings:{props.a.servings}</i><br/>
                {props.a.rating} 
                <i class="bi bi-star-fill"></i><br/>
            </div>
        </li>
    </div>
  )
}

export default Recipe;