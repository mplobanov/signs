import styled from "styled-components";
import { InputWrapper } from "../../forms/InputWrapper";

const Container = styled.div`
  grid-column: 1 / 5;
  font-size: 60px;
  font-weight: 700;
`;

export const Header = () => {
  return (
    <InputWrapper
      name={"main-header"}
      title={"Заголовок"}
      lockedText={"Стиралка"}
    >
      {(text) => <Container>{text}</Container>}
    </InputWrapper>
  );
};
