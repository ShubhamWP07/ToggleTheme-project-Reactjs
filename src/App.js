import React, { createContext, useContext, useState } from "react";
import "./App.css";

// Creating a new context
const ThemeContext = createContext();

// Creating a provider component
const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

//Creating a consumer hook
const useTheme = () => useContext(ThemeContext);

// Creating components that consume the theme
const Dashboard = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className={`dashboard ${theme}-theme`}>
      <h1>Dashboard</h1>
      <p>Current theme: {theme}</p>
      <button className="btn" onClick={toggleTheme}>
        Toggle Theme
      </button>
    </div>
  );
};

const App = () => {
  return (
    <ThemeProvider>
      <Dashboard />
    </ThemeProvider>
  );
};

export default App;
