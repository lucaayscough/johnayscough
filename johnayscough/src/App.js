import {BrowserRouter, Routes, Route, Link} from "react-router-dom";
import logo from './logo.svg';
import Footer from "./Footer.js";
import Content from "./Content.js";
import Header from "./Header.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />

        <Routes>
          <Route path="/painting" element={<Content page="painting" />} />
          <Route path="/sculpture" element={<Content page="sculpture" />} />
          <Route path="/ots" element={<Content page="ots" />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}

export default App;

