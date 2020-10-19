import React from "react";
import "./Pizza.css";
import Data from "./Sandwiches.json";
import MediaCard from "./MediaCard";

function Sandwiches() {
  return (
    <div className="pizza">
      <h1>Sandwiches</h1>
      <p>After a good Sandwich one can forgive anybody, even one's own relations.</p>
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

export default Sandwiches;
