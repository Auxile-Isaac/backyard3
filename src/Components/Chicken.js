import React from 'react';
import "./Pizza.css";
import Data from "./chicken.json";
import MediaCard from "./MediaCard";

function Chickens() {
    return (
        <div className="pizza">
      <h1>Chicken</h1>
      <p>If you don’t lick your fingers, enjoy only half</p>
      <div className="pizza__mediaCard">
      {Data.map( post => {
          return(
            <MediaCard
            id={post.id}
            key={post.id}
            category={post.category}
            title={post.title}
            ImgUrl={post.Url}
            Ingredients= {post.Ingredients}
            Price = {post.price}
          />
          )
        })}
      </div>
    </div> 
    )
}

export default Chickens
