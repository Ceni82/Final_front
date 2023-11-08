import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAlert } from "react-alert";

import { api } from "../../../services/api";

import { Container, Form } from "./styles";
import { FiMail, FiLock, FiUser } from "react-icons/fi";
import { Button } from "../../../components/Button/index";
import { Input } from "../../../components/Input";

import logoDesktop from "../../../assets/logoDesktopLogin.png";

export function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const alert = useAlert();

  function handleSingUp() {
    if (!name || !email || !password) {
      return alert.info("Todos os campos devem ser preenchidos!");
    }

    api
      .post("/users", { name, email, password, isAdmin: false })
      .then(() => {
        alert.success("Usuário cadastrado com sucesso!");
        navigate("/");
      })
      .catch((error) => {
        if (error.response) {
          alert.error(error.response.data.message);
        } else {
          alert.error("Não foi possivel cadastrar!");
        }
      });
  }
  return (
    <Container>
      <header>
        <img src={logoDesktop} alt="" />
      </header>

      <Form>
        <main>
          <h2>Crie sua conta</h2>
          <div className="input-wrapper">
            <label htmlFor="name">Nome</label>
            <Input
              type="text"
              icon={FiUser}
              placeholder="Exemplo: Maria de Silva"
              id={"name"}
              onChange={(e) => setName(e.target.value)}
            />
            <label htmlFor="email">Email</label>
            <Input
              type="email"
              icon={FiMail}
              placeholder="Exemplo: exemplo@exemplo.com.br"
              id={"email"}
              onChange={(e) => setEmail(e.target.value)}
            />
            <label htmlFor="password">Senha</label>
            <Input
              type="password"
              icon={FiLock}
              placeholder="No mínimo 6 caracteres"
              id={"password"}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button title={"Cadastrar"} onClick={handleSingUp} />
          </div>

          <Link to="/"> Já tenho uma conta</Link>
        </main>
      </Form>
    </Container>
  );
}
