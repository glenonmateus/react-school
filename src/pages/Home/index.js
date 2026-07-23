import Loading from "components/Loading";
import { get } from "lodash";
import { useEffect } from "react";
import { FaUserCircle, FaUserEdit, FaWindowClose } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router";
import * as actions from "store/modules/student/actions";
import { Container } from "styles/GlobalStyles";
import { ProfilePicture, StudentContainer } from "./styled";

const Home = () => {
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((state) => state.student);

  useEffect(() => {
    dispatch(actions.fetchStudentRequest());
  }, [dispatch]);

  return (
    <Container>
      <Loading isLoading={isLoading}></Loading>

      <h1>Alunos</h1>

      <StudentContainer>
        {data ? (
          data.map((student) => {
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
          })
        ) : (
          <div></div>
        )}
      </StudentContainer>
    </Container>
  );
};

export default Home;
