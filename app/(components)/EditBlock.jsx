import { faEdit, faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const EditBlock = () => {
  return (
    <FontAwesomeIcon
      icon={faEdit}
      className="text-gray-400 hover:cursor-pointer hover:text-gray-200 mr-2"
    />
  );
};

export default EditBlock;
