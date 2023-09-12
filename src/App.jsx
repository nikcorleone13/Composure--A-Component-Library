import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Avatar from "./components/Avatar";
import Badge from "./components/Badge";
import Buttons from "./components/Buttons";
import Card from "./components/Card";
import Image from "./components/Image";
import Input from "./components/Input";
import Typography from "./components/Typography";
import { Navbar } from "./components/Navbar";
import Modal from "./components/Modal";
import AlertPage from "./pages/AlertPage";
import Components from "./pages/Components";

function App() {
  return (
    <>
          <Navbar />
      <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/components" element={<Components />} />
          <Route path="/components/avatar" element={<Avatar />} />
          <Route path="/components/alert" element={<AlertPage />} />
          <Route path="/components/badge" element={<Badge />} />
          <Route path="/components/button" element={<Buttons />} />
          <Route path="/components/card" element={<Card />} />
          <Route path="/components/image" element={<Image />} />
          <Route path="/components/input" element={<Input />} />
          <Route path="/components/modal" element={<Modal />} />
          <Route path="/components/typography" element={<Typography />} />
      </Routes>
    </>
  );
}

export default App;
