import { useNavigate } from "react-router-dom";

export default function Header(props) {
  const navigate = useNavigate();

  return (
    <header className="nav-bar">
      <div className="back" onClick={() => navigate(-1)}></div>{props.title}
    </header>
  );
}