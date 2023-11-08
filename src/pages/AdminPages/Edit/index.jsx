import { useState, useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useAlert } from "react-alert";
import "react-confirm-alert/src/react-confirm-alert.css";
import { confirmAlert } from "react-confirm-alert";
import { api, CancelToken } from "../../../services/api";
import { FiUpload, FiSearch } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { Container, Content, Form, Image } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { NewTag } from "../../../components/NewTag";
import { Input } from "../../../components/Input";

import { Button } from "../../../components/Button";

export function Edit() {
  const [data, setData] = useState(null);
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const imageLabelRef = useRef(null);
  const params = useParams();
  const alert = useAlert();
  const navigate = useNavigate();

  async function deleteDishe() {
    confirmAlert({
      title: "Confirmação",
      message: "Tem certeza de que deseja deletar este prato?",
      buttons: [
        {
          label: "Sim",
          onClick: () => {
            api
              .delete(`/admin/dishes/${params.id}`)
              .then(() => {
                alert.success("Prato deletado com sucesso!");
                navigate("/");
              })
              .catch((error) => {
                if (error.response) {
                  alert.error(error.response.data.message);
                } else {
                  alert.error("Não foi possível excluir o prato.");
                }
              });
          },
        },
        {
          label: "Não",
          onClick: () => {
            return;
          },
        },
      ],
      overlayClassName: "my-custom-overlay",
    });
  }

  const handleEditDishe = async () => {
    if ((!name, !category, !price, !description)) {
      return alert.error("Todos os campos devem ser preenchidos.");
    }

    if (category === "") {
      return alert.error("Escolha uma categoria");
    }

    if (newIngredient) {
      return alert.error(
        " Você deixou um ingrediente no campo para adicionar. Clique para adiciona-la"
      );
    }

    const formatedPrice = parseFloat(price).toFixed(2);
    if (isNaN(formatedPrice)) {
      return alert.error("No campo preço, digite apenas números.");
    }

    try {
      api.patch(`/admin/dishes/${params.id}`, {
        name,
        category,
        price: formatedPrice,
        description,
        ingredients,
      });

      if (imageFile) {
        const formData = new FormData();
        formData.append("image", imageFile);

        await api.patch(`/admin/dishes/${params.id}/image`, formData);
      }

      alert.success("Prato editado com sucesso!");
      navigate(-1);
    } catch (error) {
      if (error.response) {
        alert.error(error.response.data.message);
      } else {
        alert.error("Não foi possível editar o prato");
      }
    }
  };

  function handleAddIngredients() {
    if (newIngredient == "") {
      return alert.error("Não é possivel adicionar um ingrediente sem nome");
    }
    console;
    setIngredients((prevState) => [...prevState, { name: newIngredient }]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient.name !== deleted.name)
    );
  }

  useEffect(() => {
    if (imageFile) {
      imageLabelRef.current.classList.add("file-selected");
    }
  }, [imageFile]);

  useEffect(() => {
    async function fetchDishe() {
      const response = await api.get(`/admin/dishes/${params.id}`);
      setData(response.data);
      setName(response.data.name);
      setCategory(response.data.category);
      setPrice(response.data.price);
      setDescription(response.data.description);
      setIngredients(
        response.data.ingredients.map((ingredient) => {
          return { name: ingredient.name };
        })
      );
    }
    fetchDishe();
  }, []);

  return (
    <Container>
      <Header>
        <Input
          placeholder={"Busque por pratos ou ingredientes"}
          icon={FiSearch}
        ></Input>
      </Header>
      <Content>
        {data && (
          <Form>
            <Link to={-1}>
              <MdKeyboardArrowLeft /> voltar
            </Link>
            <h1>Editar Prato</h1>

            <div>
              <Image>
                <p>Imagem</p>
                <label
                  className="imageLabel"
                  htmlFor="image"
                  ref={imageLabelRef}
                >
                  <FiUpload size={20} />
                  <span>Selecione a imagem</span>
                  <input
                    id="image"
                    type="file"
                    onChange={(e) => setImageFile(e.target.files[0])}
                  />
                </label>
              </Image>

              <label htmlFor="name">
                Nome
                <input
                  type="text"
                  id="name"
                  placeholder="Ex.: Ervilhas"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>

              <label htmlFor="category">
                Categoria
                <select
                  id="category"
                  name="Categoria"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option value="entrada">Escolha uma opção</option>
                  <option value="entrada">Entrada</option>
                  <option value="refeicao">Prato Principal</option>
                  <option value="sobremesa">Sobremesa</option>
                </select>
              </label>
            </div>

            <div>
              <div>
                <p>Ingredientes</p>
                <div className="ingredientPlace">
                  <NewTag
                    isNew
                    placeholder={"Adicionar"}
                    value={newIngredient}
                    onChange={(e) => setNewIngredient(e.target.value)}
                    onClick={handleAddIngredients}
                  />

                  {ingredients.map((ingredient, index) => {
                    return (
                      <NewTag
                        key={index}
                        value={ingredient.name}
                        onClick={() => handleRemoveIngredients(ingredient)}
                      />
                    );
                  })}
                </div>
              </div>

              <div>
                <label htmlFor="price">
                  Preço
                  <input
                    type="number"
                    placeholder="R$00,00"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                  />
                </label>
              </div>
            </div>

            <label htmlFor="description">
              Descrição
              <textarea
                id="description"
                placeholder="Fale sobre o prato, ingredientes e/ou composição"
                cols="30"
                rows="10"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              ></textarea>
            </label>

            <div className="btnWrapper">
              <Button title={"Excluir Prato"} onClick={deleteDishe} />
              <Button title={"Salvar alterações"} onClick={handleEditDishe} />
            </div>
          </Form>
        )}
      </Content>
      <Footer />
    </Container>
  );
}
