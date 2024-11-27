import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import RepositoryDetails from "./components/RepositoryDetails";

const App: React.FC = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/repository-details/:owner/:repo" element={<RepositoryDetails />} />
            </Routes>
        </Router>
    );
};

export default App;
