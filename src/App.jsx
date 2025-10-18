import { useEffect } from "react";
import { clarity } from "react-microsoft-clarity";
import { Route, HashRouter as Router, Routes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./Pages/Home";
import Work from "./Pages/Work";

const CLARITY_ID = "ts7hslsrnm";
export default function App() {
  useEffect(() => {
    // You can add a check to run only in production, e.g.:
    // if (process.env.NODE_ENV === 'production') {
    clarity.init(CLARITY_ID);
    // }
  }, []);

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
