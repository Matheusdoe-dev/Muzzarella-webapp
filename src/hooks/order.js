import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom";
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

  const history = useHistory();

  const handleOrderWay = (event) => {
    if (event.target.innerHTML.includes("Customize")) {
      setOrderWay("customize");
    } else {
      setOrderWay("premade");
    }
  };

  const handleItems = (event, value, type) => {
    if (event.currentTarget.checked === true) {
      setItems([...items, { item: value, type: type }]);
    } else {
      setItems(items.filter((item) => item.item !== value));
    }
    console.log(items);
  };

  const handleChecked = (value, data) => {
    return data.includes(value);
  };

  // handle order submit function
  const handleSubmitOrder = async (event) => {
    event.preventDefault();

    try {
      await muzzarellaApi
        .post(
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
        )
        .then((r) => r.data);
      alert("Order created, thanks to use our services!");
      history.push("/order/end");
    } catch (error) {
      alert("Unable to create order, try again.");
    }
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
