import React from "react";
import Files from "./Files";

const Display = () => {

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

        </div>
      </div>
    </div>
  );
};

export default Display;
