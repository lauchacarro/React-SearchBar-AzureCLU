import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainNavbar from "./components/MainNavbar";
import Home from "./views/Home";
import Account from "./views/Account";
import Security from "./views/Security";
import PayServices from "./views/PayServices";
import Support from "./views/Support";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <MainNavbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/account" element={<Account />} />
          <Route path="/security" element={<Security />} />
          <Route path="/services" element={<PayServices />} />
          <Route path="/support" element={<Support />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
