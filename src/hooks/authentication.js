// hooks
import { useState } from "react";
import { useHistory } from "react-router-dom";
// services
import muzzarellaApi from "../services/muzzarella-api";

// user authentication custom hook
const useAuthentication = () => {
  // authentication data
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const history = useHistory();

  // handle authentication submit
  const handleAuthenticationSubmit = async (event) => {
    event.preventDefault();

    await muzzarellaApi
      .post("user-authentication", {
        email,
        password,
      })
      .then((r) => r.data)
      .then(({ token }) => {
        localStorage.setItem("token", token);
        history.push("/order/checkout");
      })
      .catch((err) => {
        alert(`It's was not possible to sign in, try again. ${err}`);
      });
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
