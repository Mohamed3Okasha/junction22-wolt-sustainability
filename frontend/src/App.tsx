import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/Home/index";
import { Menu } from "./pages/Menu/index";
import { AppContextProvider } from "./context/AppContext";

function App() {
  return (
    <AppContextProvider>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/menu" element={<Menu />} />
      </Routes>
    </AppContextProvider>
  );
}

export default App;
