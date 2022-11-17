import React from "react";
import "./Mycart.css";
export default function Mycart() {
  return (
    <div className="main-contr">
      <div className="left-contr">
        <div className="card-contr">
          <div className="img-cntr">
            <img className="prd-img" src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWDy062qU6e3zKR3nua26l-uLJcg_MME2d8A&usqp=CAU"}/>
          </div>
          <div className="contents">
            <p className="text">item name</p>
            <div>
              <span className="text price">item price</span>
              <span className="text price">item actual price</span>
              <spam className="text price">item discout</spam>
            </div>

            <div className="card-bottom">
              <div className="quantity-cntr">
                <span className="text">quantity</span>
                <div className="quantity-count">
                  <span className="quantity"> -</span>
                  <span className="quantity" >2</span>
                  <span className="quantity">+</span>
                </div>

                
              </div>
              <button className="remove">remove</button>
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
