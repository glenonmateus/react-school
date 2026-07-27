import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import RegisterUser from "pages/Register/User";
import Student from "pages/Student";
import { Route, Routes } from "react-router";
import ProtectedRoute from "routes/ProtectedRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login></Login>}></Route>
      <Route
        path="/register/user"
        element={<RegisterUser></RegisterUser>}
      ></Route>
      <Route element={<ProtectedRoute isClosed />}>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/student" element={<Student></Student>}></Route>
        <Route path="/profile" element={<RegisterUser></RegisterUser>}></Route>
        <Route path="/student/:id" element={<Student></Student>}></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default AppRoutes;
