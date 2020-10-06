import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
// services
import muzzarellaApi from "../services/muzzarella-api";

const useAuthentication = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  const handleAuthenticationSubmit = async (event) => {
    event.preventDefault();

    const { token } = await muzzarellaApi
      .post("user-authentication", {
        email,
        password,
      })
      .then((r) => r.data)
      .catch((err) => {
        alert("It's was not possible to sign in, try again");
      });

    if (token) {
      localStorage.setItem("token", token);
      history.push("/order/checkout");
    }
  };

  return {
    email,
    setEmail,
    password,
    setPassword,
    handleAuthenticationSubmit,
  };
};

export default useAuthentication;
