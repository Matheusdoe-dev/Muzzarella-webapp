import { useState } from "react";
import { useHistory } from "react-router-dom";
// services
import muzzarellaApi from "../services/muzzarella-api";

const useCreateAccountHook = () => {
  // user "create-account" data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // confirm email and password
  const [confirmEmail, setConfirmEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // error states
  const [errorEmail, setEmailError] = useState("");
  const [errorPassword, setPasswordError] = useState("");

  const history = useHistory();

  // handle account create submit function
  const handleCreateAccount = async (event) => {
    event.preventDefault();

    // check if the email is valid
    if (email === "") {
      setEmailError("Email is required");
    }

    // check if the email is valid
    if (email !== confirmEmail) {
      setEmailError("Emails doesn't match");
    }

    // check if the password is valid
    if (password === "") {
      setPasswordError("Password is required");
    }

    // check if the password is valid
    if (password !== confirmPassword) {
      setPasswordError("Passwords doesn't match");
    }

    // if exists any input error, the function will stop here
    if (errorEmail !== "" || errorPassword !== "") {
      return;
    }

    // creating account
    try {
      const response = await muzzarellaApi
        .post("users", {
          nome: name,
          email,
          password,
        })
        .then((r) => r.data);

      // put jwt on local storage
      localStorage.setItem("token", response.token);

      // redirecting to checkout page
      history.push("/order/checkout");
    } catch (error) {
      alert("Unable to register, try again");
      console.log(error);
    }
  };

  return {
    name,
    setName,
    email,
    setEmail,
    password,
    setPassword,
    confirmEmail,
    confirmPassword,
    setConfirmEmail,
    setConfirmPassword,
    handleCreateAccount,
    errorEmail,
    errorPassword,
  };
};

export default useCreateAccountHook;
