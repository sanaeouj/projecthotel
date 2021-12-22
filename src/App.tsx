import React from "react";
import "./app.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import ErrorPage from "./pages/ErrorPage";
import CustomNavbar from "./components/Customnavbar";
import SingleRooms from "./pages/SingleRooms";

function App() {
  return (
    <>
      <CustomNavbar />
     
      <Router>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/SingleRooms" element={<SingleRooms />} />
          <Route path="/Rooms" element={<Rooms />} />
          <Route path="/ErrorPage" element={<ErrorPage />} />
        </Routes>
        </Router>
    </>
  );
}

export default App;
