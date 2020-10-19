import React from "react";
import "./Pizza.css";
import Data from "./burger.json";
import MediaCard from "./MediaCard";

function Burger() {
  return (
    <div className="pizza">
      <h1>Burgers</h1>
      <p>A tasty burger is what you deserve</p>
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
  );
}

export default Burger;
