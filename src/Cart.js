import React from "react";
import { useStateValue } from "./StateProvider";
import CartProduct from "./CartProduct";
import "./Cart.css";
import { Link } from "@material-ui/core";
import Subtotal from "./Subtotal";

function Cart() {
  const [{ basket }] = useStateValue();

  return (
    <div className="cart">
      <div className="cart__header">
        <h4>Shopping Cart</h4>
        <p>Did you know that food can cure all sadness away?</p>
      </div>
      {basket?.length === 0 ? (
        <div>
          <p>
            Where there is good food, there is happiness! Add something to your
            cart and let us bring happinnes to you.
          </p>
          <h4>
            <Link to="/">Back Home</Link>
          </h4>
        </div>
      ) : (
        <di>
          <h4 className="cart__title">Your basket</h4>
          {basket.map((item) => (
            <CartProduct
              id={item.id}
              category={item.category}
              title={item.title}
              ImgUrl={item.Url}
              Price={item.Price}
            />
          ))}
        </di>
      )}
      {basket?.length > 0 && (
        <div className="cart__subtotal">
          <Subtotal/>
        </div>
      )}
    </div>
  );
}

export default Cart;
