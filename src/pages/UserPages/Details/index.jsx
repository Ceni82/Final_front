import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { api } from "../../../services/api";

import { Container, Content } from "./styles";
import { Header } from "../../../components/UserHeader";
import { Footer } from "../../../components/Footer";
import { Tag } from "../../../components/Tag";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

import { MdKeyboardArrowLeft } from "react-icons/md";
import { TbReceipt } from "react-icons/tb";
import { FiSearch } from "react-icons/fi";

export function Details() {
  const [dish, setDish] = useState({});
  const [imageUrl, setImageUrl] = useState("");
  const params = useParams();

  useEffect(() => {
    async function fetchDishe() {
      const response = await api.get(`/dishes/${params.id}`);
      setDish(response.data);
    }
    fetchDishe();
  }, []);

  useEffect(() => {
    if (dish) {
      setImageUrl(`${api.defaults.baseURL}/files/${dish.image}`);
    }
  }, [dish]);

  return (
    <Container>
      <Header>
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={FiSearch}
        ></Input>
      </Header>

      <Content>
        <header>
          <Link to={-1}>
            <MdKeyboardArrowLeft /> voltar
          </Link>
        </header>
        {dish && dish.ingredients && (
          <div className="DisheInfo">
            <img src={imageUrl} alt="Imagem do Prato" />
            <div>
              <h1>{dish.name}</h1>
              <p>{dish.description}</p>
              <div className="tagPlace">
                {dish.ingredients.map((ingredient) => {
                  return <Tag title={ingredient.name}></Tag>;
                })}
              </div>
              <div className="btnWrapper">
                <div className="btnQuantity">
                  <button>-</button>
                  <input type="number" id="quantity" value={"01"} />
                  <button>+</button>
                </div>
                <Button
                  icon={TbReceipt}
                  title={`pedir - R$${dish.price.toFixed(2)}`}
                ></Button>
              </div>
            </div>
          </div>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
