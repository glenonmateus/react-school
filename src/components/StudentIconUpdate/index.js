import { FaUserEdit } from "react-icons/fa";
import { Link } from "react-router";

const StudentIconUpdate = ({ studentId, size, ...rest }) => {
  return (
    <Link to={`/student/${studentId}`} {...rest}>
      <FaUserEdit size={size}></FaUserEdit>
    </Link>
  );
};

export default StudentIconUpdate;
