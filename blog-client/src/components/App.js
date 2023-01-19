import React, { useState } from "react";
import Header from "./Header";
import BlogPage from "./BlogPage";

function App() {
  const [isDarkMode, setIsDarkMode] = useState('light-mode');

  const toggleTheme = () => {
    if (isDarkMode === 'light-mode') {
      setIsDarkMode('dark-mode')
    } else {
      setIsDarkMode('light-mode')
    }
  }

  return (
    <div className={isDarkMode}>
      <Header isDarkMode={isDarkMode} onToggleDarkMode={toggleTheme} />
      <BlogPage />
    </div>
  );
}

export default App;

// isDarkMode ? "dark-mode" : ""