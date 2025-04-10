import { Route, Routes } from "react-router";

import DashboardPage from "./pages/Dashboard";
import NotFoundPage from "./NotFound";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
