/* eslint-disable default-case */
import React, { useState, createContext } from "react";
// apis
import muzzarellaApi from "../services/muzzarella-api";

// order context create
export const OrderContext = createContext();

// custom order hook
const useOrder = () => {
  // order way
  const [orderWay, setOrderWay] = useState("");

  // order items and total price
  const [items, setItems] = useState([]);
  const [price, setPrice] = useState("R$ 32,00");

  // order checkout data
  const [card_number, setCardNumber] = useState("");
  const [card_valid, setCardValid] = useState("");
  const [cvv, setCVV] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [zip, setZipCode] = useState("");

  // handle user order preference
  const handleOrderWay = (event) => {
    if (event.target.innerHTML.includes("Customize")) {
      setOrderWay("customize");
    } else {
      setOrderWay("premade");
    }
  };

  // handle order items
  const handleItems = (event, value, type, inputType) => {
    switch (inputType) {
      case "checkbox": {
        if (event.currentTarget.checked === true) {
          setItems([...items, { item: value, type: type }]);
        } else {
          setItems(items.filter((item) => item.item !== value));
        }

        break;
      }

      case "radio": {
        if (items.find((item) => item.type === type)) {
          const itemsUpdated = items.filter((item) => item.type !== type);

          setItems([...itemsUpdated, { item: value, type: type }]);
        } else {
          setItems([...items, { item: value, type: type }]);
        }
      }
    }

    console.log(items);
  };

  // handle checkbox checked
  const handleChecked = (value) => {
    return items.find((item) => item.item === value);
  };

  // handle order submit function
  const handleSubmitOrder = () => {
    return muzzarellaApi.post(
      "/orders",
      {
        items,
        card_number,
        card_valid,
        cvv,
        first_name,
        last_name,
        adress,
        city,
        zip,
        price,
      },
      {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      }
    );
  };

  return {
    orderWay,
    handleOrderWay,
    items,
    setItems,
    card_number,
    setCardNumber,
    card_valid,
    setCardValid,
    cvv,
    setCVV,
    first_name,
    setFirstName,
    last_name,
    setLastName,
    adress,
    setAdress,
    city,
    setCity,
    zip,
    setZipCode,
    handleSubmitOrder,
    handleItems,
    handleChecked,
  };
};

export const Order = ({ children }) => {
  return (
    <OrderContext.Provider value={useOrder()}>{children}</OrderContext.Provider>
  );
};
