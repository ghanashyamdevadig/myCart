import React from "react";
import "./Mycart.css";
import Form from "../Component/Form";
import Images from '../Assests/images/boat rockerz.jpg'

export default function Mycart() {
  return (
    <div className="main-container">
      <h3 className="my-cart-text">My cart(1)</h3>

        <div className="item-contr">
          <div className="img-cntr">
            <img
            className="img"
              src={Images}
              alt=""
            />
          </div>
          <div className="item-name-price-contr">
            <p className="item-text">
              boat Rockerz 450 - bluetooth Wireless on ear Headphone with Mic
            </p>
            <p className="rupees">&#8377; 250</p>
            <p className="rupees-dis">&#8377; 1015</p>
            <p className="perc-disc">53%</p>
            <p className="quantity">Quantity</p>
            <div className="buttons">
              
            <button className="count-cntr"></button>
            <button className="button-cntr">REMOVE</button>
           </div>
        </div>
        </div>



        <div className="main-price-cntr">
          <div className="price-contr">
            <h3 className="price">Price Details</h3>
            {/* <hr /> */}
            <p className="product">Product Charges</p>
            <p className="product">Delivery Charges</p>
            {/* <hr /> */}
            <h3 className="order">Order Total</h3>
          </div>

          <button className="button-buy">PROCEED TO BUY</button>
        </div>
      </div>

    // <div>
    //   <Form />
    // </div>
  );
}
