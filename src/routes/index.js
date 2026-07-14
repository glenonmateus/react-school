import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Photos from "pages/Photos";
import Register from "pages/Register";
import Student from "pages/Student";
import { Route, Routes } from "react-router";
import ProtectedRoute from "routes/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register" element={<Register></Register>}></Route>
      <Route element={<ProtectedRoute isClosed />}>
        <Route path="/student/:id/edit" element={<Student></Student>}></Route>
        <Route path="/student" element={<Student></Student>}></Route>
        <Route path="/photos/:id" element={<Photos></Photos>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default AppRoutes;
