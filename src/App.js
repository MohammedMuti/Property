import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Owner from "./Pages/Owner/Owner";
import AddProperty from "./Pages/AddProperty/AddProperty";
import ScrollToTop from "./Common/ScrollToTop/ScrollToTop";
import Contact from "./Pages/Contact/Contact";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/add-your-property" element={<AddProperty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/" element={<Owner />} />
      </Routes>
    </Router>
  );
}

export default App;
