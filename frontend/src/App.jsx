import { Route, Routes } from "react-router";

import { AuthProvider } from "./context/AuthContext";
import PrivateRoute from "./routes/PrivateRoute";
import AppLayout from "./components/layout/AppLayout";

import HomePage from "./pages/HomePage";
import SellPage from "./pages/SellPage";
import ProductsPage from "./pages/ProductsPage";
import ReportsPage from "./pages/ReportsPage";
import MorePage from "./pages/MorePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    <AuthProvider>
      <Routes>
        {/* Public routes */}
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        {/* Protected routes */}
        <Route
          element={
            <PrivateRoute>
              <AppLayout />
            </PrivateRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="sell" element={<SellPage />} />
          <Route path="products" element={<ProductsPage />} />
          <Route path="reports" element={<ReportsPage />} />
          <Route path="more" element={<MorePage />} />
        </Route>
      </Routes>
    </AuthProvider>
  );
}

export default App;
