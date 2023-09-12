import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Image from "./components/Image";
import Input from "./components/Input";
import Typography from "./components/Typography";
import { Navbar } from "./components/Navbar";
import Modal from "./components/Modal";
import AlertPage from "./pages/AlertPage";
import Components from "./pages/Components";
import AvatarPage from "./pages/AvatarPage";
import BadgePage from "./pages/BadgePage";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";

function App() {
  return (
    <>
          <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/avatar" element={<AvatarPage />} />
          <Route path="/components/alert" element={<AlertPage />} />
          <Route path="/components/badge" element={<BadgePage />} />
          <Route path="/components/button" element={<ButtonPage />} />
          <Route path="/components/card" element={<CardPage  />} />
          <Route path="/components/image" element={<Image />} />
          <Route path="/components/input" element={<Input />} />
          <Route path="/components/modal" element={<Modal />} />
          <Route path="/components/typography" element={<Typography />} />
      </Routes>
    </>
  );
}

export default App;
