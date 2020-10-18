import React from "react";
import "./CartProduct.css"
import { Button } from "@material-ui/core";
import DeleteIcon from '@material-ui/icons/Delete';

function CartProduct({ id, title, category, ImgUrl, Price }) {
  return (
    <div className="cartProduct">
      <div className="cartProduct__info">
        <p className="cartProduct__category">{category}</p>
        <p className="cartProduct__title">{title}</p>
        <p className="cartProduct__price">
          <small>Rwf  </small>
          <strong>{Price}</strong>
        </p>
        <Button><DeleteIcon/></Button>
      </div>
    </div>
  );
}

export default CartProduct;
