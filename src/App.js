import { Routes, Route } from "react-router-dom";

import Header from "./components/Header/Header";

import Home from "./pages/Home";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>
      <Footer />
    </>
  );
}

export default App;
