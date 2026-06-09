import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Service from "./pages/Service";
import Hymns from "./pages/Hymns";
import Prayers from "./pages/Prayers";
import Ministers from "./pages/Ministers";

import BottomNav from "./components/BottomNav";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/hymns" element={<Hymns />} />
        <Route path="/prayers" element={<Prayers />} />
        <Route path="/ministers" element={<Ministers />} />
      </Routes>

      <BottomNav />
    </>
  );
}

export default App;