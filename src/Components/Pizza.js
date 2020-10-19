import React from "react";
import './Pizza.css';
import Data from "./data.json";
import MediaCard from "./MediaCard";

function Pizza() {
  return (
    <div className="pizza">
      <h1>Pizza</h1>
      <p>Who eats pizza never dies.</p>
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

export default Pizza;
