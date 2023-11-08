import { useState, useEffect } from "react";

import { api, CancelToken } from "../../../services/api";

import { Container, Content } from "./styles";

import { Header } from "../../../components/UserHeader";
import { Footer } from "../../../components/Footer";
import { Input } from "../../../components/Input";
import { UserCarrosel } from "../../../components/UserCarrosel";

import { FiSearch } from "react-icons/fi";

import macaronImage from "../../../assets/macaron.png";

export function Home() {
  const [dishes, setDishes] = useState([]);
  const [meals, setMeals] = useState([]);
  const [drinks, setDrinks] = useState([]);
  const [dessert, setDesserts] = useState([]);
  const [search, setSearch] = useState("");

  function filterDishes() {
    setMeals(dishes.filter((dishe) => dishe.category === "refeicao"));
    setDrinks(dishes.filter((dishe) => dishe.category === "bebida"));
    setDesserts(dishes.filter((dishe) => dishe.category === "sobremesa"));
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

  useEffect(() => {
    filterDishes();
    console.log(dishes);
  }, [dishes]);

  return (
    <Container>
      <Header>
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={FiSearch}
          onChange={(e) => setSearch(e.target.value)}
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

        {dishes && (
          <>
            {meals && meals.length > 0 ? (
              <UserCarrosel title={"Refeições"} dishesArray={meals} />
            ) : (
              <></>
            )}
            {drinks && drinks.length > 0 ? (
              <UserCarrosel title={"Bebidas"} dishesArray={drinks} />
            ) : (
              <></>
            )}
            {dessert && dessert.length > 0 ? (
              <UserCarrosel title={"Sobremesas"} dishesArray={dessert} />
            ) : (
              <></>
            )}
          </>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
