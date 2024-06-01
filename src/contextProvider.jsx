import { useState, createContext, useContext } from "react";

const colotrcontext = createContext();
const useColor = () => {
  return useContext(colotrcontext);
};

const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState("light");
  const colorToggle = () => {
    setColor((pre) => (pre === "light" ? "dark" : "light"));
  };
  return (
    <colotrcontext.Provider value={{ color, colorToggle }}>
      children
    </colotrcontext.Provider>
  );
};
