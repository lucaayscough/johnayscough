import {BrowserRouter, Routes, Route} from "react-router-dom";
import Footer from "./Footer.js";
import Content from "./Content.js";
import Header from "./Header.js";
import "./App.css";

function App() {
  return (
    <div className="App"></div>
    //<div className="App">
    //  <BrowserRouter>
    //    <Header />

    //    <Routes>
    //      <Route path="/" element={<Content />} />
    //      <Route path="/:page/" element={<Content />} />
    //      <Route path="/:page/:image" element={<Content />} />
    //    </Routes>
    //  </BrowserRouter>

    //  <Footer />
    //</div>
  );
}

export default App;

