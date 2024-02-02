import "./App.css";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Owner from "./Pages/Owner/Owner";
import AddProperty from "./Pages/AddProperty/AddProperty";
import ScrollToTop from "./Common/ScrollToTop/ScrollToTop";
import Contact from "./Pages/Contact/Contact";
import Location from "./Pages/Locations/Location";
import Tenant from "./Pages/Tenant/Tenant";
import SingleLocation from "./Pages/SingleLocation/SingleLocation";
import SingleProperty from "./Pages/SinglePropety/SingleProperty";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/properties/01" element={<SingleProperty />} />
        <Route path="/locations/whitefield" element={<SingleLocation />} />
        <Route path="/search-property" element={<Tenant />} />
        <Route path="/add-your-property" element={<AddProperty />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/" element={<Owner />} />
      </Routes>
    </Router>
  );
}

export default App;
