import styled from "styled-components";
import { InputWrapper } from "../../forms/InputWrapper";

export const Name = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
  `;

  const Name = styled.span`
    font-weight: 700;
    font-size: 30px;
  `;
  const Credo = styled.span`
    font-weight: 500;
    font-size: 15px;
    font-style: italic;
  `;

  const Position = styled.span`
    text-transform: uppercase;
    font-size: 15px;
    font-weight: 500;
    letter-spacing: 2px;
  `;

  return (
    <Container>
      <Position>Ответственный</Position>
      <InputWrapper name={"name"} title={"Имя"}>
        {(text) => <Name>{text}</Name>}
      </InputWrapper>
      <InputWrapper name={"credo"} title={"Кредо"}>
        {(text) => <Credo>{text}</Credo>}
      </InputWrapper>
    </Container>
  );
};
