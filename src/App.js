import React, { createContext, useContext, useState } from "react";
import "./App.css";

// Step 1: Create a new context
const ThemeContext = createContext();

// Step 2: Create a provider component
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

// Step 3: Create a consumer hook
const useTheme = () => useContext(ThemeContext);

// Step 4: Create components that consume the theme
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
