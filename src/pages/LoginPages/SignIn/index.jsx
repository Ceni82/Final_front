import { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../../hooks/auth";
import { FiMail, FiLock } from "react-icons/fi";
import { Container, Form } from "./styles";
import { Input } from "../../../components/Input";
import { Button } from "../../../components/Button";
import logoDesktop from "../../../assets/logoDesktopLogin.png";

export function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { signIn } = useAuth();

  function handleSignIn() {
    signIn({ email, password });
  }
  return (
    <Container>
      <header>
        <img src={logoDesktop} alt="" />
      </header>
      <Form>
        <main>
          <h2>Faça o Login</h2>
          <div className="input-wrapper">
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
            <Button title={"Entrar"} onClick={handleSignIn} />
          </div>

          <Link to="/register">Criar conta</Link>
        </main>
      </Form>
    </Container>
  );
}
