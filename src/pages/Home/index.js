import Loading from "components/Loading";
import { get } from "lodash";
import { useEffect, useState } from "react";
import { FaUserCircle, FaUserEdit, FaWindowClose } from "react-icons/fa";
import { useSelector } from "react-redux";
import { Link } from "react-router";
import { toast } from "react-toastify";
import axios from "services/axios";
import { Container } from "styles/GlobalStyles";
import { ProfilePicture, StudentContainer } from "./styled";

const Home = () => {
  const isLoading = useSelector((state) => state.auth.isLoading);
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await axios.get("/students");
        setStudents(response.data);
      } catch (error) {
        if (error.response.status === 401) {
          toast.error("Usuário não autenticado");
        }
      }
    };

    fetchStudents();
  }, []);

  return (
    <Container>
      <Loading isLoading={isLoading}></Loading>

      <h1>Alunos</h1>

      <StudentContainer>
        {students.map((student) => {
          return (
            <div key={student.id}>
              <ProfilePicture>
                {get(student, "Photos[0].url", false) ? (
                  <img src={student.Photos[0].url} alt="" />
                ) : (
                  <FaUserCircle size={36} />
                )}
              </ProfilePicture>
              <span>{student.name}</span>
              <span>{student.email}</span>
              <Link to={`/students/${student.id}/edit`}>
                <FaUserEdit size={16}></FaUserEdit>
              </Link>
              <Link to={`/students/${student.id}/delete`}>
                <FaWindowClose size={16}></FaWindowClose>
              </Link>
            </div>
          );
        })}
      </StudentContainer>
    </Container>
  );
};

export default Home;
