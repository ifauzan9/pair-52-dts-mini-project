import "./App.css";
import HomePage from "./pages/HomePage";
import { Box } from "@mui/material";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SelectedMovie from "./pages/SelectedMovie";
import Login from "./components/Login";

import { Routes, Route, Link } from "react-router-dom";
import NotFound from "./components/NotFound";
import ProtectedComponent from "./components/ProtectedComponent";
import ManageProfile from "./components/ManageProfile";

function App() {
  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={
            <Box sx={{ backgroundColor: "#252424" }}>
              <Navbar />
              <Routes>
                <Route path="" element={<HomePage />} />
                <Route path=":id" element={<SelectedMovie />} />
                <Route path="*" element={<NotFound />} />
              </Routes>

              {/* <SelectedMovie /> */}
              <Footer />
            </Box>
          }
        />
        <Route path="/manage" element={<ManageProfile />} />
        <Route path="/login" element={<Login status={"login"} />} />
        <Route path="/register" element={<Login status={"register"} />} />
      </Routes>
    </>
  );
}

export default App;
