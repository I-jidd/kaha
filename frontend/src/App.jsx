import { Route, Routes } from "react-router";

import AppLayout from "./components/layout/AppLayout";
import HomePage from "./pages/HomePage";
import SellPage from "./pages/SellPage";
import ProductsPage from "./pages/ProductsPage";
import ReportsPage from "./pages/ReportsPage";
import MorePage from "./pages/MorePage";

function App() {
  return (
    <Routes>
      <Route element={<AppLayout />}>
        <Route index element={<HomePage />} />
        <Route path="sell" element={<SellPage />} />
        <Route path="products" element={<ProductsPage />} />
        <Route path="reports" element={<ReportsPage />} />
        <Route path="more" element={<MorePage />} />
      </Route>
    </Routes>
  );
}

export default App;
