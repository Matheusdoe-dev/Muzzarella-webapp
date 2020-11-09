import { useState } from "react";

const useLocationHook = () => {
  const [location, setLocation] = useState("");

  return {
    location,
    setLocation,
  };
};

export default useLocationHook;
