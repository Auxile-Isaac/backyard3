import React from 'react';
import "./Pizza.css";
import MediaCard from "./MediaCard";

function Chickens() {
    return (
        <div className="pizza">
      <h1>Chicken</h1>
      <p>If you don’t lick your fingers, enjoy only half</p>
      <div className="pizza__mediaCard">
        <MediaCard
          title="Inkoko Ikaranze"
          ImgUrl={require("../images/chicken.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Inkoko Ikaranze"
          ImgUrl={require("../images/chicken.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Inkoko Ikaranze"
          ImgUrl={require("../images/chicken.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Inkoko Ikaranze"
          ImgUrl={require("../images/chicken.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />
      </div>
      <div className="pizza__mediaCard">
        <MediaCard
          title="Inkoko Ikaranze"
          ImgUrl={require("../images/chicken.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Inkoko Ikaranze"
          ImgUrl={require("../images/chicken.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Inkoko Ikaranze"
          ImgUrl={require("../images/chicken.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />

        <MediaCard
          title="Inkoko Ikaranze"
          ImgUrl={require("../images/chicken.jpeg")}
          Ingredients=" 2 plum tomatoes, thinly sliced
                 1 small ball mozzarella cheese, cut into pieces                 
                 3 basil leaves, torn into pieces"
        />
      </div>
    </div> 
    )
}

export default Chickens
