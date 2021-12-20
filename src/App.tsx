import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import ErrorPage from "./pages/ErrorPage";
import SingleRoom from "./pages/SingleRoom";
import CustomNavbar from "./components/Customnavbar";

function App() {
  return (
    <>
      <CustomNavbar />
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SingleRoom" element={<SingleRoom />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/ErrorPage">{ErrorPage}</Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
