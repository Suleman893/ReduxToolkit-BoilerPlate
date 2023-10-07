import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoutes = () => {
  // const { adminInfo } = useSelector((state) => state.admin);
  // return adminInfo?.token ? <Outlet /> : <Navigate to="/admin/" />;
  return <Outlet />;
};

export default PrivateRoutes;
