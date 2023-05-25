import React from "react";
import { useTheme, useThemeUpdate } from "./ThemeContext";

const FunctionComponent = () => {
  const darkTheme = useTheme();
  const toggleTheme = useThemeUpdate();

  const themeStyles = {
    backgroundColor: darkTheme ? "#333" : "#ccc",
    color: darkTheme ? "#ccc" : "#333",
    padding: "2rem",
    margin: "2rem",
  };
  return (
    <div style={themeStyles}>
      <button onClick={toggleTheme}>Toggle theme</button>
      Function Theme
    </div>
  );
};

export default FunctionComponent;
