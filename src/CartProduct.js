import React from "react";
import "./CartProduct.css"
import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';
import {useStateValue} from "./StateProvider";

function CartProduct({ id, title, category, ImgUrl, Price }) {

  const [{ basket }, dispatch] = useStateValue();

  const removeToBasket = () =>{
    // remove to basket 
    dispatch({
      type: "REMOVE_TO_BASKET",
      id: id,
    });
  }

  return (
    <div className="cartProduct">
      <div className="cartProduct__info">
        <p className="cartProduct__category">{category}</p>
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>Rwf  </small>
          <strong>{Price}</strong>
        </p>
        <Button onClick={removeToBasket}><DeleteIcon/></Button>
      </div>
    </div>
  );
}

export default CartProduct;
