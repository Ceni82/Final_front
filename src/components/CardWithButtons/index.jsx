import { Link } from "react-router-dom";
import { Container } from "./styles";
import { api } from "../../services/api";
import { Button } from "../Button";

export function CardWithButtons({ icon: Icon, data, onClick, ...rest }) {
  const image = `${api.defaults.baseURL}/files/${data.image}`;
  return (
    <Container>
      <button onClick={onClick}>{Icon && <Icon size={24} />}</button>

      <Link to={`/details/${data.id}`}>
        <img src={image} alt="Imagem do prato" />
        <p className="disheName">{`${data.name} >`}</p>
        <span className="description">{data.description}</span>
        <span className="price">{`R$${data.price.toFixed(2)}`}</span>
      </Link>

      <div className="btnWrapper">
        <div className="btnQuantity">
          <button>-</button>
          <input type="number" id="quantity" value={"01"} />
          <button>+</button>
        </div>
        <Button title={"incluir"}></Button>
      </div>
    </Container>
  );
}
