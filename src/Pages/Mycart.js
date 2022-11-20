import React, { useState, useEffect } from "react";
import "./Mycart.css";
import Images from "../Assests/images/boat rockerz.jpg";

export default function Mycart() {
  // const [data, setData] = useState([1, 2, 3, 4, 5]);
  let [productData, setProductData] = useState([
    {
      id: 1,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
        image:"https://img.freepik.com/free-photo/black-wireless-earbud-with-charging-case_1268-14371.jpg?w=2000&t=st=1668953398~exp=1668953998~hmac=baf2e9a6edf7622edf902a795960d5c4781b17d6fba94ec88d41c304841ae478",
      price: "250",
      actualprice: "1010",
      discount: "53",
      quantity: 1,
    },
    {
      id: 2,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      image:"https://img.freepik.com/free-photo/pair-trainers_144627-3799.jpg?w=1480&t=st=1668953431~exp=1668954031~hmac=832ffe1d284b7fb60364296b613bdb8ce64ef3cc0842781276983235ad14c661",
      actualprice: "1010",
      discount: "53",
      quantity: 1,
    },
    {
      id: 3,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      image:"https://img.freepik.com/free-vector/smart-watch-realistic-image-black_1284-11873.jpg?w=1380&t=st=1668953459~exp=1668954059~hmac=941ccb6fa4d795c65fbc857603fd2a3d12e363b5965aea403ca0d2788fc4d8ae",
      actualprice: "1010",
      discount: "53",
      quantity: 1,
    },
    {
      id: 4,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      image:"https://img.freepik.com/premium-psd/condom-packaging-mockup_439185-453.jpg?w=1800",
      actualprice: "1010",
      discount: "53",
      quantity: 1,
    },
    {
      id: 4,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      image:"https://img.freepik.com/free-photo/white-reusable-water-bottle_53876-145536.jpg?w=2000&t=st=1668953547~exp=1668954147~hmac=6ccad71fe8f9be6859319d976ee479e3e81680a7f31c33cdb98dc0169ad95185",
      actualprice: "1010",
      discount: "53",
      quantity: 1,
    },
    {
      id: 5,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1010",
      image:"https://img.freepik.com/premium-psd/perfume-bottle-with-box-mockup_358694-1172.jpg?w=2000",
      discount: "53",
      quantity: 1,
    },
    {
      id: 6,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1010",
      image:"https://img.freepik.com/free-psd/pink-black-bagpack-mock-up_1310-135.jpg?w=2000&t=st=1668953623~exp=1668954223~hmac=ba816d260f8bb99f57bb7b3e95084ef06b121a4f3ab8ada3c958ea1ff278ed69",
      discount: "53",
      quantity: 1,
    },
    {
      id: 7,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1010",
      image:"https://img.freepik.com/free-psd/green-front-sweater-mockup_125540-575.jpg?w=2000&t=st=1668953656~exp=1668954256~hmac=0aca24eb530b3e5a075c5da9df4e2637fcde2f0789b5cf2da21f9bb0bc77ccbc",
      discount: "53",
      quantity: 1,
    },
    {
      id: 8,
      productname:
        "boat rockerz 450 - bluetooth wireless on ear headphone with mic",
      price: "250",
      actualprice: "1010",
      image:"https://img.freepik.com/free-photo/jeans_1203-8093.jpg?w=1380&t=st=1668953678~exp=1668954278~hmac=6b65af5e3c42720c0028e03f953a55f86051c60a47855092543436ec0a13ceb1",
      discount: "53",
      quantity: 1,
    },
  ]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    totalPriceCalculator();
  }, []);

  const minusHandler = (id) => {
    let data = [...productData];
    data.map((item) => {
      if (item.id == id && item.quantity !== 1) {
        item.quantity = item.quantity - 1;
      }
    });
    totalPriceCalculator();
    setProductData([...data]);
  };

  const addHandler = (id) => {
    let data = [...productData];
    data.map((item) => {
      if (item.id == id && item.quantity !== 0) {
        item.quantity = item.quantity + 1;
      }
    });
    totalPriceCalculator();
    setProductData([...data]);
  };

  const totalPriceCalculator = () => {
      let data=[...productData]
      let d=[]
     d= data.map((item,index)=>{
        return item.quantity * item.price
      })
      sumCalculator(d)
  };

  const sumCalculator = (data) => {
    const sum = data.reduce((partialSum, a) => partialSum + a, 0);
    setTotal(sum);
  };

  const removeHandler = (id) => {
    let data = [...productData];
    let updated = data.filter((item, index) => {
      return item.id !== id;
    });
    setProductData(updated);
    totalPriceCalculator()
  };
  return (
  <div>
      <div style={{width:"100%",marginLeft:"2.7em"}}>
    <h3 style={{width:"100%%" }}>
    My cart ({productData?.length})
    </h3>
    </div>
    <div className="main-contr">
      <div className="left-contr">
        {productData.map((item, index) => {
          return (
            <div className="card-contr" key={index}>
              <div className="img-cntr">
                <img className="prd-img" src={item?.image} />
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
                  <button
                    className="remove"
                    onClick={() => {
                      removeHandler(item?.id);
                    }}
                  >
                    REMOVE
                  </button>
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
            <hr />
            <div className="price-content">
              <p className="product">Product Charges</p>
              <p>{total}</p>
            </div>
            <div className="price-content">
              <p className="product2">Delivery Charges</p>
              <p>20</p>
            </div>
            <hr />
            <div className="price-content">
              <h3 className="order">Order Total</h3>
              <p className="total">{total + 20}</p>
            </div>
          </div>
        </div>
        <button className="button-buy">PROCEED TO BUY</button>
      </div>
    </div>
  </div>
  );
}
