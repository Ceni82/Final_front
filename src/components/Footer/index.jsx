import { Container } from "./styles";
import logoFooter from "../../assets/logoFooter.png";
export function Footer() {
  return (
    <Container>
      <img src={logoFooter} alt="FoodExplorer" />
      <p>© Todos os direitos reservados </p>
    </Container>
  );
}
