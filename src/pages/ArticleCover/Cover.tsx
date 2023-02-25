import { Layout } from "../layout/_Layout";
import { SimplePage } from "../../components/Page/SimplePage";
import styled from "styled-components";
import { DecorSet } from "./Decor";
import { InputWrapper } from "../../forms/InputWrapper";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const CentralPart = styled.div`
  flex-grow: 1;
  font-size: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
`;

export const Cover = () => {
  const size = 500 / 9;
  return (
    <Layout formTitle={"Galileo"}>
      <SimplePage height={size * 9} width={size * 16}>
        <Container>
          <DecorSet lineSize={21} lineCount={5} />
          <CentralPart>
            <InputWrapper name={"article-title"} title={"Заголовок статьи"}>
              {(text) => text}
            </InputWrapper>
          </CentralPart>
          <DecorSet lineSize={21} lineCount={5} />
        </Container>
      </SimplePage>
    </Layout>
  );
};
