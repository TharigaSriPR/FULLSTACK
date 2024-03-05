import { Routes, Route, Navigate } from "react-router-dom";
import { lazy } from "react";
import LazyLayout from "./components/ui/LazyLayout";
import UserLayout from "./pages/user/UserLayout";
import AdminLayout from "./pages/admin/AdminLayout";
import Main from "./components/ui/Main";
import ProductDetails from "./pages/user/ProductDetails"; 

const LazyLogin = lazy(() => import("./pages/auth/Login"));
const LazyRegister = lazy(() => import("./pages/auth/Register"));

const LazyHome = lazy(() => import("./pages/user/Home"));
const LazyAbout = lazy(() => import("./pages/user/About"));
const LazyProduct = lazy(() => import("./pages/user/Products"));
const LazyProfile = lazy(() => import("./pages/user/Profile"));
const LazyCheckOut = lazy(() => import("./pages/user/CheckOut"));

const LazyDashboard = lazy(() => import("./pages/admin/Dashboard"));
const LazyUserInfo = lazy(() => import("./pages/admin/UserInfo"));
const LazyOrdersPlaced = lazy(() => import("./pages/admin/OrdersPlaced"));
const LazyOrderStatus = lazy(() => import("./pages/admin/OrdersStatus"));
const LazyCrud = lazy(() => import("./pages/admin/Crud"));

const UserRoutes = () => {
  return (
    <UserLayout>
      <Routes>
        <Route path="/home" element={<LazyLayout component={LazyHome} />} />
        <Route path="/about" element={<LazyLayout component={LazyAbout} />} />
        <Route path="/products" element={<LazyLayout component={LazyProduct} />} />
        <Route path="/profile" element={<LazyLayout component={LazyProfile} />} />
        <Route path="/checkout" element={<LazyLayout component={LazyCheckOut} />} />
      </Routes>
    </UserLayout>
  );
};

const AdminRoutes = () => {
  return (
    <AdminLayout>
      <Routes>
        <Route path="/dashboard" element={<LazyLayout component={LazyDashboard} />} />
        <Route path="/UserInfo" element={<LazyLayout component={LazyUserInfo} />} />
        <Route path="/ordersPlaced" element={<LazyLayout component={LazyOrdersPlaced} />} />
        <Route path="/ordersStatus" element={<LazyLayout component={LazyOrderStatus} />} />
        <Route path="/crud" element={<LazyLayout component={LazyCrud} />} />
      </Routes>
    </AdminLayout>
  );
};

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/Main" />} />
      <Route path="/Main" element={<Main />} />
      <Route path="/MYAPP/login" element={<LazyLayout component={LazyLogin} />} />
      <Route path="/MYAPP/register" element={<LazyLayout component={LazyRegister} />} />
      <Route path="/MYAPP/user/*" element={<UserRoutes />} />
      <Route path="/MYAPP/admin/*" element={<AdminRoutes />} />
      <Route path="/MYAPP/user/products/MYAPP/users/product/1" element={<ProductDetails />} /> 
    </Routes>
  );
}

export default App;
