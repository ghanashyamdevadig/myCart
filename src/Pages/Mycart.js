import React, { useState,useEffect } from "react";
import "./Mycart.css";
import Images from "../Assests/images/boat rockerz.jpg";

export default function Mycart() {
  const [data, setData] = useState([1, 2, 3, 4, 5]);
  let [productData, setProductData] = useState([
    {
      id: 1,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1000",
      discount: "20",
      quantity: 1,
    },
    {
      id: 2,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1000",
      discount: "20",
      quantity: 1,
    },
    {
      id: 3,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1000",
      discount: "20",
      quantity: 1,
    },
    {
      id: 4,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1000",
      discount: "20",
      quantity: 1,
    },
    {
      id: 4,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1000",
      discount: "20",
      quantity: 1,
    },
    {
      id: 5,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1000",
      discount: "20",
      quantity: 1,
    },
    {
      id: 6,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1000",
      discount: "20",
      quantity: 1,
    },
    {
      id: 7,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1000",
      discount: "20",
      quantity: 1,
    },
    {
      id: 8,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1000",
      discount: "20",
      quantity: 1,
    },
  ]);
  const [total,setTotal]=useState(0)

  useEffect(()=>{
    totalPriceCalculator()
  },[])

  const minusHandler = (id) => {
    let data = [...productData];
    data.map((item) => {
      if (item.id == id && item.quantity !== 0) {
        item.quantity = item.quantity - 1;
      }
    });
    totalPriceCalculator()
    setProductData([...data]);
  };

  const addHandler = (id) => {
    let data = [...productData];
    data.map((item) => {
      if (item.id == id && item.quantity !== 0) {
        item.quantity = item.quantity + 1;
      }
    });
    totalPriceCalculator()
    setProductData([...data]);
  };

  const totalPriceCalculator=()=>{
  //   let data=[...productData]
  //   let d=[]
  //  d= data.map((item,index)=>{
  //     return item.quantity * item.price
  //   })

  //   sumCalculator(d)
  }

  const sumCalculator=(data)=>{
    const sum = data.reduce((partialSum, a) => partialSum + a, 0);
    setTotal(sum)

  }

  const removeHandler=(id)=>{
    let data=[...productData]
    let updated=data.filter((item,index)=>{
      return item.id!==id
    })
    setProductData(updated)

  }
  return (
    <div className="main-contr">
      <div className="left-contr">
        {productData.map((item, index) => {
          return (
            <div className="card-contr" key={index}>
              <div className="img-cntr">
                <img className="prd-img" src={Images} />
              </div>
              <div className="contents">
                <p className="text">{item?.productname}</p>
                <div>
                  <span className="text-price"> &#8377; {item?.price}</span>
                  <span className="total-price">
                    {" "}
                    &#8377; {item?.actualprice}
                  </span>
                  <spam className="perc-price">{item?.discount}%</spam>
                </div>

                <div className="card-bottom">
                  <div className="quantity-cntr">
                    <span className="text-qua">Quantity</span>
                    <div className="quantity-count">
                      <span
                        className="quantity minus"
                        onClick={() => {
                          minusHandler(item?.id);
                        }}
                      >
                        {" "}
                        -
                      </span>
                      <span className="quantity ">{item?.quantity}</span>
                      <span
                        className="quantity plus"
                        onClick={() => {
                          addHandler(item?.id);
                        }}
                      >
                        +
                      </span>
                    </div>
                  </div>
                  <button className="remove" onClick={()=>{removeHandler(item?.id)}}>REMOVE</button>
                </div>
              </div>
            </div>
          );
        })}
      </div>
      <div className="right-cntr">
        <div className="main-price-cntr">
          <div className="price-contr">
            <div>
              <h3 className="price">Price Details</h3>
            </div>
            {/* <hr /> */}
            <div className="price-content">
              <p className="product">Product Charges</p>
              <p>{total}</p>
            </div> 
            <div className="price-content">
            <p className="product">Delivery Charges</p>
            <p>20</p>
            </div>
            {/* <hr /> */}
            <div  className="price-content">
              <h3 className="order">Order Total</h3>
              <p>{total+20}</p>
            </div>
           
          </div>
        </div>
        <button className="button-buy">PROCEED TO BUY</button>
      </div>
    </div>
  );
}
