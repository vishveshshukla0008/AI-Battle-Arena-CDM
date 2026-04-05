import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import ArenaPage from "../Features/Arena/pages/ArenaPage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        {/* Redirect root to arena */}
        <Route path="/" element={<Navigate to="/arena" replace />} />
        <Route path="/arena" element={<ArenaPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
