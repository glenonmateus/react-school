import Home from "pages/Home";
import NotFound from "pages/NotFound";
import { Route, Routes } from "react-router";
import ProtectedRoute from "routes/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<ProtectedRoute />}>
        <Route path="/" element={<Home></Home>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default AppRoutes;
