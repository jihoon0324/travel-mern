import "./App.css";
import Home from "./components/home/Home";
import Navbar from "./components/navbar/Navbar";
import { Routes, Route, Navigate } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Signup from "./components/signup/Signup";
import Login from "./components/login/Login";
import Type from "./components/type/Type";
import TypeDetail from "./components/typeDetail/TypeDetail";
import { useSelector } from "react-redux";
import Create from "./components/create/Create";

function App() {
  // const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/create" element={<Create />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/types/:type" element={<Type />} />
        <Route path="/typeDetail/:id" element={<TypeDetail />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
