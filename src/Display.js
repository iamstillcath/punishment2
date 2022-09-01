import React from "react";
import Files from "./Files";
// import { useState } from 'react'

const Display = () => {
  // const [data,setData]=useState([])

  //   let imageUrl = items.map((item) => item.image);
  return (
    <div className="static">
      <div id="container">
        <h1 className="underline">Our Menu</h1>
        <nav className="buttons">
          <button>All</button>
          <button>Breakfast</button>
          <button>Lunch</button>
          <button>Dinner</button>
          <button>Shakes</button>
        </nav>
        <div className="sub-container">
          <div>
         <Files/>
          </div>

          {/* <div>
            <h2>swallow</h2>
            <h5>$5.76</h5>
            <img
              src="https://www.radianthealthmag.com/wp-content/uploads/2015/01/Eba-11.jpg"
              alt=""
            />
            <hr />
            <p>
              milkshakes juice, wine,smoothies,water,enegry,milkshakes juice<br/>
              wine,smoothies,water,enegry drinks,milkshakes juice,<br/>
              wine,smoothies,water,enegry drinks,milkshakes<br/>
            </p>
          </div> */}

          {/* <div>
            <h2>Non-alcholic</h2>
            <h5>$2.76</h5>
            <img src="https://7omcu3a78zp40klds2w28klr-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/GettyImages-900247658-350x233.jpg" alt="" />
            <hr />
            <p>
              milkshakes juice, wine,smoothies,water,enegry,milkshakes juice,<br/>
              wine,smoothies,water,enegry drinks,milkshakes juice,<br/>
              wine,smoothies,water,enegry drinks,milkshakes<br/>
            </p>
          </div> */}
{/* 
          <div>
            <h2>Launch</h2>
            <h5>$3.45</h5>
    
            <img
              src="https://media.istockphoto.com/photos/field-of-different-types-of-donuts-picture-id465529983?b=1&k=20&m=465529983&s=170667a&w=0&h=wZ403DEEzskTZ7GFDTya4apixOM-iRoVYd7CIOPvcOI="
              alt=""
            />
            <hr />
            <p>
              donuts,meatpies,fishpie,sausageroll,meatballs,<br/>
              donuts,meatpies,fishpie,sausageroll,meatballs eggrolls,<br/>
              donuts,meatpies,fishpie,sausageroll,meatballs<br/>
            </p>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Display;
