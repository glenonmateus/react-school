import { FaWindowClose } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router";
import * as actions from "store/modules/student/actions";

const LinkIconDelete = ({ studentId, size, ...rest }) => {
  const dispatch = useDispatch();

  const handleOnClick = () => {
    dispatch(actions.deleteStudentRequest(studentId));
  };

  return (
    <Link onClick={handleOnClick} reloadDocument {...rest}>
      <FaWindowClose size={size}></FaWindowClose>
    </Link>
  );
};

export default LinkIconDelete;
