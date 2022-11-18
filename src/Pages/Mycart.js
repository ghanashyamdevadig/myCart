import React from "react";
import "./Mycart.css";
import Images from '../Assests/images/boat rockerz.jpg'

export default function Mycart() {
  return (
    <div className="main-contr">
      <div className="left-contr">
        <div className="card-contr">
          <div className="img-cntr">
            <img className="prd-img" src={Images}/>
          </div>
          <div className="contents">
            <p className="text">boat rockerz 450 - bluetooth wireless on ear headphone with mic</p>
            <div>
              <span className="text-price"> &#8377; 250</span>
              <span className="total-price"> &#8377; 1010</span>
              <spam className="perc-price">53%</spam>
            </div>

            <div className="card-bottom">
              <div className="quantity-cntr">
                <span className="text-qua">Quantity</span>
                <div className="quantity-count">
                  <span className="quantity"> -</span>
                  <span className="quantity" >2</span>
                  <span className="quantity">+</span>
                </div>

                
              </div>
              <button className="remove">REMOVE</button>
            </div>
          </div>
        </div>
      </div>
      <div className="right-cntr">
        <div>

        <div className="main-price-cntr">
          <div className="price-contr">
            <h3 className="price">Price Details</h3>
            {/* <hr /> */}
            <p className="product">Product Charges</p>
            <p className="product">Delivery Charges</p>
            {/* <hr /> */}
            <h3 className="order">Order Total</h3>
             <button className="button-buy">PROCEED TO BUY</button>
          </div>

         
        </div>
        </div>
      </div>
    </div>
  );
}
