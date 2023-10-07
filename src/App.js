import React, { useState, useEffect } from "react";
import SideBar from "./Components/Sidebar/Sidebar";
import SignIn from "./Pages/SignIn";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Products from "./Pages/Products";
import TopBar from "./Components/Topbar/TopBar";
import Profile from "./Pages/Profile";
import PrivateRoutes from "./utils/PrivateRoutes";
import AddBlog from "./Pages/AddBlog";
import BlogDetail from "./Pages/BlogDetail";
import AddCategory from "./Pages/AddCategory";
import AddSubCategory from "./Pages/AddSubCategory";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategory } from "./features/category/categorySlice";
import AllBlogs from "./Pages/AllBlogs";
import { GoogleOAuthProvider } from "@react-oauth/google";
import AddSupplier from "./Pages/Supplier/AddSupplier";
import OrderHistory from "./Pages/OrderHistory";

function App() {
  const dispatch = useDispatch();
  const { sideBarCategory, isCategoryChange } = useSelector(
    (state) => state.category
  );

  const [sidebarOpen, setSidebarOpen] = useState(false);

  const sidebartoggle = () => {
    setSidebarOpen(!sidebarOpen);
  };

  useEffect(() => {
    dispatch(getAllCategory());
    // eslint-disable-next-line
  }, [isCategoryChange]);

  return (
    <>
      <GoogleOAuthProvider clientId="">
        <ToastContainer
          position="top-right"
          autoClose={500}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <SideBar
          sidebarOpen={sidebarOpen}
          sidebartoggle={sidebartoggle}
          sideBarCategory={sideBarCategory}
        />
        <TopBar sidebarOpen={sidebarOpen} sidebartoggle={sidebartoggle} />
        <Routes>
          <Route element={<PrivateRoutes />}>
            <Route
              exact
              path="/admin/products/:category"
              element={<Products sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/admin/profile"
              exact
              element={<Profile sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/admin/allBlogs"
              exact
              element={<AllBlogs sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/admin/addBlog"
              exact
              element={<AddBlog sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/admin/editBlog/:id"
              exact
              element={<BlogDetail sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/admin/addCategory"
              exact
              element={<AddCategory sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/admin/addSubCategory"
              exact
              element={<AddSubCategory sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/admin/addSupplier"
              exact
              element={<AddSupplier sidebarOpen={sidebarOpen} />}
            />
            <Route
              path="/admin/orderHistory"
              exact
              element={<OrderHistory sidebarOpen={sidebarOpen} />}
            />
          </Route>
          <Route path="/" exact element={<SignIn />} />
          <Route path="/admin/" exact element={<SignIn />} />
          <Route path="/admin/*" exact element={<Navigate to="/admin/" />} />
        </Routes>
      </GoogleOAuthProvider>
    </>
  );
}

export default App;
