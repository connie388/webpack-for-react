import React, { useState, createContext } from "react";

// To allow users choose their prefer theme dark or light
// Define a global variable theme, and functions setTheme and toggleTheme
const DataContext = createContext();

const DataProvider = (props) => {
  const [theme, setTheme] = useState("dark-theme");
  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  return (
    <div>
      <DataContext.Provider value={{ theme, setTheme, toggleTheme }}>
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export { DataContext, DataProvider };
