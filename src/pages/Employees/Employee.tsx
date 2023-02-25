import { Layout } from "../layout/_Layout";
import { SimplePage } from "../../components/Page/SimplePage";
import styled from "styled-components";
import { InputWrapper } from "../../forms/InputWrapper";

export const Employee = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 30px;
    position: relative;
    justify-content: center;
  `;

  const Header = styled.div`
    font-weight: 700;
    font-size: 72px;
    line-height: 1;
  `;

  const Position = styled.div`
    font-weight: 400;
    font-size: 24px;
    text-transform: uppercase;
    letter-spacing: 2px;
    display: flex;
    gap: 10px;
    align-items: baseline;
  `;

  const blue = `background-color: rgba(171,187,234, 1)`;
  const orange = `background-color: rgba(241,163,100, 1)`;

  const Decor = (color: "ornage" | "blue") => styled.div`
    width: 18px;
    height: 18px;
    ${color === "blue" ? blue : orange}
  `;

  const size = 400;
  const ratio = 2;

  const BlueDecor = Decor("blue");
  const OrangeDecor = Decor("ornage");

  const decor = (
    <>
      {Array.from(Array(5).keys()).map(() => (
        <>
          <BlueDecor />
          <OrangeDecor />
        </>
      ))}
    </>
  );

  const DecorContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 10px;
  `;

  return (
    <Layout formTitle={"Не шумите"}>
      <SimplePage width={size * ratio} height={size}>
        <Container>
          <Header>
            <InputWrapper name={"name"} title={"Имя"}>
              {(text) => text}
            </InputWrapper>
          </Header>
          <Position>
            <InputWrapper name={"position"} title={"Должность"}>
              {(text) => text}
            </InputWrapper>
            {/*<BlueDecor /> <OrangeDecor />*/}
          </Position>
          <DecorContainer>{decor}</DecorContainer>
        </Container>
      </SimplePage>
    </Layout>
  );
};
