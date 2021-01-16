import { useState } from "react";

const usePasswordVisibilityToggle = () => {
  const [showPassword, setShowPassword] = useState(false);

  const handleToggleVisibility = () => setShowPassword(!showPassword);

  return { showPassword, handleToggleVisibility };
};

export default usePasswordVisibilityToggle;
