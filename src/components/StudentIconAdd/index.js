import { BsPersonAdd } from "react-icons/bs";
import { Link } from "react-router";

const StudentIconAdd = ({ size }) => {
  return (
    <Link to={`/student`}>
      <BsPersonAdd size={size}></BsPersonAdd>
    </Link>
  );
};

export default StudentIconAdd;
