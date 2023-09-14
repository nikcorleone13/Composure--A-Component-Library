import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import { Navbar } from "./components/Navbar";
import AlertPage from "./pages/AlertPage";
import Components from "./pages/Components";
import AvatarPage from "./pages/AvatarPage";
import BadgePage from "./pages/BadgePage";
import ButtonPage from "./pages/ButtonPage";
import CardPage from "./pages/CardPage";
import TypographyPage from "./pages/TypographyPage";
import ImagesPage from "./pages/ImagesPage";
import UnknownPage from "./pages/UnknownPage";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/components" element={<Components />} />
        <Route path="/components/avatar" element={<AvatarPage />} />
        <Route path="/components/alert" element={<AlertPage />} />
        <Route path="/components/badge" element={<BadgePage />} />
        <Route path="/components/button" element={<ButtonPage />} />
        <Route path="/components/card" element={<CardPage />} />
        <Route path="/components/image" element={<ImagesPage />} />
        <Route path="/components/typography" element={<TypographyPage />} />
        <Route path="/components/*" element={<UnknownPage />} />

      </Routes>
    </div>
  );
}

export default App;
