import { useEffect } from 'react';
import AOS from 'aos';
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import 'aos/dist/aos.css'; // You can also use <link> for styles
import "./App.css";
function App() {
  useEffect(() => {
    AOS.init();
  }, []);
  console.log("ejecutando app");
  return (
    <>
      <div className="font-serif m-0">
        <Navbar />
        <Home />
      </div>
    </>
  );
}

export default App;
