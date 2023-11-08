import { Container } from "./styles";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../services/api";

export function Card({ icon: Icon, data, onClick, ...rest }) {
  const navigate = useNavigate();
  const image = `${api.defaults.baseURL}/files/${data.image}`;
  function handleNavigateToDetail() {
    navigate(`/details/${data.id}`);
  }

  function handleNavigateToEdit() {
    navigate(`/edit/${data.id}`);
  }

  return (
    <Container>
      <button onClick={handleNavigateToEdit}>
        {Icon && <Icon size={24} />}
      </button>
      <div onClick={handleNavigateToDetail}>
        <img src={image} alt="" />
        <p className="disheName">{data.name}</p>
        <span className="description">{data.description}</span>
        <span className="price">{`R$${data.price.toFixed(2)}`}</span>
      </div>
    </Container>
  );
}
