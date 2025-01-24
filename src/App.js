import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Products from "./components/Products";
import About from "./components/About";
import LoginPage from "./components/Login";
import Registration from "./components/registration";

export default function App() {
  return (
    <Router>
      <div>
        <ul className="nav-menu">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/products">Products</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/registration">Registrations</a>
          </li>
        </ul>

        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/registration" element={<Registration />} />
        </Routes>
      </div>
    </Router>
  );
}
