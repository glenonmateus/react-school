import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import Student from "pages/Student";
import User from "pages/User";
import { Route, Routes } from "react-router";
import ProtectedRoute from "routes/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route path="/register/user" element={<User></User>}></Route>
      <Route element={<ProtectedRoute isClosed />}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/student" element={<Student></Student>}></Route>
        <Route path="/profile" element={<User></User>}></Route>
        <Route path="/student/:id" element={<Student></Student>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default AppRoutes;
