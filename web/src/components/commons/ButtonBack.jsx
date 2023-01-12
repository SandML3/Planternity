import "../../assets//styles/components/ButtonBack.scss";

import { Link } from "react-router-dom";

const ButtonBack = ({ userId }) => {
  return (
    <nav className="back-button">
      <Link to={`/user/${userId}`} className="link">
        Volver
      </Link>
    </nav>
  );
};
export default ButtonBack;
