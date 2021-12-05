import logo from "./logo.svg";
import "./App.css";
import Home from "./Pages/home";
import ItemDetail from "./Pages/item_detail";
import Collection from "./Pages/Collection";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    (
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail" element={<ItemDetail />} />
          <Route path="/collections" element={<Collection />} />
        </Routes>
      </BrowserRouter>
    )
  );
}

export default App;
