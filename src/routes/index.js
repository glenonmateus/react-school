import Home from "pages/Home";
import Login from "pages/Login";
import NotFound from "pages/NotFound";
import RegisterUser from "pages/Register/User";
import StudentForm from "pages/StudentForm";
import UserRegister from "pages/UserRegister";
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
        <Route path="/student" element={<StudentForm></StudentForm>}></Route>
        <Route path="/profile" element={<UserRegister></UserRegister>}></Route>
        <Route
          path="/student/:id/update"
          element={<StudentForm></StudentForm>}
        ></Route>
      </Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
};

export default AppRoutes;
