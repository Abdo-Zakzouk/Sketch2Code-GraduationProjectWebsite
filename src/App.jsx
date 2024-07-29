import "./App.css";
import LoginSignup from "./components/LoginSignup/LoginSignup";
import SignupLogin from "./components/LoginSignup/SignupLogin";
import Home from "./components/LoginSignup/home";
import Account from "./components/LoginSignup/account";
import NavBar from "./components/LoginSignup/navBar";
import MyProject from "./components/LoginSignup/MyProject";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
function App() {
  return (
    <Router>
      <div className="App">
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<LoginSignup />} />
          <Route path="/signup" element={<SignupLogin />} />
          <Route path="/account" element={<Account />} />
          <Route path="/myproject" element={<MyProject />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;
