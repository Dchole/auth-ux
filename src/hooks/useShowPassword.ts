import { useState } from "react";

type TShowPassword = () => [boolean, () => void];

const useShowPassword: TShowPassword = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggle = () => setShowPassword(!showPassword);

  return [showPassword, handleToggle];
};

export default useShowPassword;
