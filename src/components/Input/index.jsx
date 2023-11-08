import { Container } from "./styles";

export function Input({ icon: Icon, value, id, ...rest }) {
  return (
    <Container>
      {Icon && <Icon size={20} />}
      <input type="text" value={value} {...rest} id={id} />
    </Container>
  );
}
