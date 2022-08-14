import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Navbar from "./components/Navbar";
import "./App.css";
function App() {
  return (
    <>
      <div className="font-serif m-0">

        <Navbar />
        <Home />
        {/* <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
          </Routes>
        </Router> */}
      </div>
    </>
  );
}

export default App;
