import { Link, useNavigate } from "react-router-dom";
import { useState, useRef, useEffect } from "react";
import { api } from "../../../services/api";
import { useAlert } from "react-alert";
import { FiUpload } from "react-icons/fi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import { FiSearch } from "react-icons/fi";

import { Container, Content, Form, Image } from "./styles";
import { Header } from "../../../components/Header";
import { Footer } from "../../../components/Footer";
import { NewTag } from "../../../components/NewTag";
import { Button } from "../../../components/Button";
import { Input } from "../../../components/Input";

export function New() {
  const [ingredients, setIngredients] = useState([]);
  const [newIngredient, setNewIngredient] = useState("");

  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const imageLabelRef = useRef();
  const alert = useAlert();
  const navigate = useNavigate();

  const handleNewDishe = async () => {
    if (!name || !category || !price || !description) {
      return alert.error("Todos os campos devem ser preenchidos.");
    }

    if (category === "") {
      return alert.error("Escolha uma categoria");
    }

    if (!imageFile) {
      return alert.error("Selecione uma imagem para o prato.");
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
      const response = await api.post("/admin/dishes", {
        name,
        category,
        price: formatedPrice,
        description,
        ingredients,
      });

      const createdDishId = response.data.id;

      const formData = new FormData();
      formData.append("image", imageFile);

      await api.patch(`/admin/dishes/${createdDishId}/image`, formData);

      setName("");
      setCategory("");
      setDescription("");
      setPrice("");
      setIngredients([]);

      alert.success("Prato cadastrado com sucesso!");
      navigate("/");
    } catch (error) {
      if (error.response) {
        alert.error(error.response.data.message);
      } else {
        alert.error("Não foi possível cadastrar o prato");
      }
    }
  };

  function handleAddIngredients() {
    if (newIngredient === "") {
      return alert.error("Não é possível adicionar um ingrediente sem nome");
    }

    setIngredients((prevState) => [...prevState, newIngredient]);
    setNewIngredient("");
  }

  function handleRemoveIngredients(deleted) {
    setIngredients((prevState) =>
      prevState.filter((ingredient) => ingredient !== deleted)
    );
  }

  useEffect(() => {
    if (imageFile) {
      imageLabelRef.current.classList.add("file-selected");
    }
  }, [imageFile]);

  return (
    <Container>
      <Header>
        <Input
          placeholder="Busque por pratos ou ingredientes"
          icon={FiSearch}
        />
      </Header>
      <Content>
        <Form>
          <Link to={-1}>
            <MdKeyboardArrowLeft /> voltar
          </Link>
          <h1>Novo Prato</h1>

          <div>
            <Image>
              <p>Imagem</p>
              <label className="imageLabel" htmlFor="image" ref={imageLabelRef}>
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
                placeholder="Ex.: Saladinha"
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
                <option value="">Selecione uma opção</option>
                <option value="refeicao">Refeição</option>
                <option value="sobremesa">Sobremesa</option>
                <option value="bebida">Bebida</option>
              </select>
            </label>
          </div>

          <div>
            <div>
              <p>Ingredientes</p>
              <div className="ingredientPlace">
                <NewTag
                  isNew
                  placeholder="Adicionar"
                  value={newIngredient}
                  onChange={(e) => setNewIngredient(e.target.value)}
                  onClick={handleAddIngredients}
                />

                {ingredients.map((ingredient, index) => (
                  <NewTag
                    key={index}
                    value={ingredient}
                    onClick={() => handleRemoveIngredients(ingredient)}
                  />
                ))}
              </div>
            </div>

            <div>
              <label htmlFor="price">
                Preço
                <input
                  type="number"
                  placeholder="R$00,00"
                  onChange={(e) => setPrice(e.target.value)}
                  value={price}
                  id="price"
                />
              </label>
            </div>
          </div>

          <label htmlFor="description">
            Descrição
            <textarea
              id="description"
              placeholder="Fale brevemente sobre o prato, seus ingredientes e composição"
              cols="30"
              rows="10"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
          </label>

          <Button title="Salvar alterações" onClick={handleNewDishe} />
        </Form>
      </Content>
      <Footer />
    </Container>
  );
}
