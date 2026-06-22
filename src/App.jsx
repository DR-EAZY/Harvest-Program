import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Service from "./pages/Service";
import Hymns from "./pages/Hymns";
import Prayers from "./pages/Prayers";
import Ministers from "./pages/Ministers";
import Welcome from "./pages/Welcome";
import Committee from "./pages/Committee";
import Gallery from "./pages/Gallery";
import About from "./pages/About";
import Contact from "./pages/Contact";
import More from "./pages/More";
import SplashScreen from "./components/SplashScreen";
import BottomNav from "./components/BottomNav";
import HymnReader from "./pages/HymnReader";
import Felicitations from "./pages/Felicitations";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2200);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <SplashScreen />;
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/service" element={<Service />} />
        <Route path="/hymns" element={<Hymns />} />
        <Route path="/prayers" element={<Prayers />} />
        <Route path="/ministers" element={<Ministers />} />
        <Route path="/welcome" element={<Welcome />} />
        <Route path="/committee" element={<Committee />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/more" element={<More />} />
        <Route path="/hymn/:id" element={<HymnReader />} />
        <Route path="/felicitations" element={<Felicitations />} />
      </Routes>

      <BottomNav />
    </>
  );
}

export default App;