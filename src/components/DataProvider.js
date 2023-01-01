import React, { useState, createContext } from "react";

// To allow users choose their prefer theme dark or light
// Define a global variable theme, and functions setTheme and toggleTheme

// authenticate and setAuthenticate is for keep track of whether user login or not
const DataContext = createContext();

const DataProvider = (props) => {
  const [theme, setTheme] = useState("dark-theme");
  const [authenticate, setAuthenticate] = useState(false);
  function toggleTheme() {
    if (theme === "dark-theme") {
      setTheme("light-theme");
    } else {
      setTheme("dark-theme");
    }
  }

  return (
    <div>
      <DataContext.Provider
        value={{ theme, setTheme, toggleTheme, authenticate, setAuthenticate }}
      >
        {props.children}
      </DataContext.Provider>
    </div>
  );
};

export { DataContext, DataProvider };
