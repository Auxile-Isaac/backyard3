import { Button } from "@material-ui/core";
import React from "react";
import "./Subtotal.css";
import PaymentIcon from "@material-ui/icons/Payment";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "./StateProvider";
import {getBasketTotal} from "./reducer"

function Subtotal() {

    const [{ basket }] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p>
              Sutotal ({basket?.length} items): <strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"Rwf "}
      />
      <Button className="subtotal__button">
        Proced to Checkout
        <PaymentIcon />
      </Button>
    </div>
  );
}

export default Subtotal;
