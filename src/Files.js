import React from "react";

const Files = () => {
  const items = [
    {
      index: 1,
      title: "meats",
      price: "$1.09",
      image:
        "https://media.istockphoto.com/photos/balanced-diet-food-background-picture-id1151799593?k=20&m=1151799593&s=612x612&w=0&h=jRs5hyc8u1QZ1hqL5IrPQTwyXqG_i2KGyYDlN7IbCzY=",
      description: `pork,beef,chicken,sharki,roundabout,gizzards,
              meat,pork,beef,roundabout,gizzards,
              meat,pork,beef,chicken,porkroundabout,gizzards,
              meat,pork,beef,chicken,sharki,roundabout,gizzards,
              meat,pork,beef,chicken,sharki,roundabout,gizzards`,
    },

    {
      index: 2,
      title: "swallow",
      price: "$5.76",
      image:
        "https://www.radianthealthmag.com/wp-content/uploads/2015/01/Eba-11.jpg",
      description: `ponmo,eba,ian,egusi soup,afang soup,ewedu,stew,
        eela,fufu,semovita,peppersoup,whiite soup,donkwa,sharki,fuku 
        edoh,ori eja,banga soup`,
    },

    {
      index: 3,
      title: "Non-alcholic",
      price: "$2.76",
      image:
        "https://7omcu3a78zp40klds2w28klr-wpengine.netdna-ssl.com/wp-content/uploads/2021/03/GettyImages-900247658-350x233.jpg",
      description: `milkshakes juice, wine,smoothies,water,enegry,milkshakes juice
        wine,smoothies,water,enegry drinks,milkshakes juice,
        wine,smoothies,water,enegry drinks,milkshakes`,
    },

    {
      index: 4,
      title: "Launch",
      price: "$3.45",
      image:
        "https://media.istockphoto.com/photos/field-of-different-types-of-donuts-picture-id465529983?b=1&k=20&m=465529983&s=170667a&w=0&h=wZ403DEEzskTZ7GFDTya4apixOM-iRoVYd7CIOPvcOI=",
      description: `donuts,meatpies,fishpie,sausageroll,meatballs,
        donuts,meatpies,fishpie,sausageroll,meatballs eggrolls,
        donuts,meatpies,fishpie,sausageroll,meatballs`,
    },
  ];

  return (
    <div className="sub-container">
      
        {items.map((data) => {
          return (
          <div key={data.index}>
               <h2 key={data.index}>{data.title}</h2>
                 <h5 key={data.price}>{data.price}</h5>
                 <img key={data.image} src={data.image} alt=""></img><hr/>
                 <p key={data.description}>{data.description}</p>
          </div>
          )

        })}

    </div>
  );
};

export default Files;
