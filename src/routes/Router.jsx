import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import ItroPage from "../pages/intro/IntroPage";
import LoginPage from "../pages/login/LoginPage";
import JoinPage from "../pages/join/JoinPage";

function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<ItroPage />} />
                <Route path="/login" element={<LoginPage />} />
                <Route path="/join" element={<JoinPage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;
