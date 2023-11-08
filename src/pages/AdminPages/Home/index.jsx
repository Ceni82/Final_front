import { api, CancelToken } from "../../../services/api";
import { useState, useEffect } from "react";
import { Container, Content } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";

import { Input } from "../../../components/Input";

import { FiSearch } from "react-icons/fi";

import { Carrosel } from "../../../components/Carrosel";
import macaronImage from "../../../assets/macaron.png";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [search, setSearch] = useState("");
  const [ingredient, setIngredient] = useState("");

  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [dessert, setDesserts] = useState([]);

  function handleSearch(value) {
    setSearch(value);
    setIngredient(value);
  }

  useEffect(() => {
    let cancelToken = CancelToken.source();

    async function fetchDishes() {
      let response = await api.get(`/dishes?name=${search}&ingredients`, {
        cancelToken: cancelToken.token,
      });

      if (response.data.length === 0) {
        response = await api.get(`/dishes?name&ingredients=${search}`, {
          cancelToken: cancelToken.token,
        });
      }

      setDishes(response.data);
    }

    fetchDishes();

    return () => {
      cancelToken.cancel("Request canceled");
    };
  }, [search]);

  function filterDishes() {
    setMeals(dishes.filter((dishe) => dishe.category === "refeicao"));
    setDrinks(dishes.filter((dishe) => dishe.category === "bebida"));
    setDesserts(dishes.filter((dishe) => dishe.category === "sobremesa"));
  }

  useEffect(() => {
    filterDishes();
  }, [dishes]);

  return (
    <Container>
      <Header>
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={FiSearch}
          onChange={(e) => handleSearch(e.target.value)}
        ></Input>
      </Header>
      <Content>
        <div className="rectangle">
          <div>
            <img src={macaronImage} alt="" />
          </div>

          <div>
            <h1>Sabores inigualáveis</h1>
            <p>Sinta o cuidado do preparo com ingredientes selecionados</p>
          </div>
        </div>
        {meals.length > 0 ? (
          <Carrosel title={"Refeições"} dishesArray={meals} />
        ) : (
          <></>
        )}

        {dessert.length > 0 ? (
          <Carrosel title={"Sobremesas"} dishesArray={dessert} />
        ) : (
          <></>
        )}

        {drinks.length > 0 ? (
          <Carrosel title={"Bebidas"} dishesArray={drinks} />
        ) : (
          <></>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
