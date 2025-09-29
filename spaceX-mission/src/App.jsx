import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { FavoritesProvider } from "./context/FavoritesContext";

function App() {
  return (
    <FavoritesProvider>
      <Navbar />
      <Home />
    </FavoritesProvider>
  );
}

export default App;