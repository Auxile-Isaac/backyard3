import React from "react";
import "./Pizza.css";
import MediaCard from "./MediaCard";

function Burger() {
  return (
    <div className="pizza">
      <h1>Burgers</h1>
      <p>A tasty burger is what you deserve</p>
      <div className="pizza__mediaCard">
        <MediaCard
          title="Chicken Burger"
          ImgUrl={require("../images/burger.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Chicken Burger"
          ImgUrl={require("../images/burger.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Chicken Burger"
          ImgUrl={require("../images/burger.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Chicken Burger"
          ImgUrl={require("../images/burger.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />
      </div>
      <div className="pizza__mediaCard">
        <MediaCard
          title="Chicken Burger"
          ImgUrl={require("../images/burger.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Chicken Burger"
          ImgUrl={require("../images/burger.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Chicken Burger"
          ImgUrl={require("../images/burger.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Chicken Burger"
          ImgUrl={require("../images/burger.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />
      </div>
    </div>    
  );
}

export default Burger;
