import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Work from "./Pages/Work";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Home />} />
          <Route path="/work" element={<Work />} />
        </Route>
      </Routes>
    </Router>
  );
}
