import { Layout } from "../layout/_Layout";
import { SimplePage } from "../../components/Page/SimplePage";
import styled from "styled-components";
import { InputWrapper } from "../../forms/InputWrapper";
import { Decor } from "./Decor";

export const Dont = () => {
  const Container = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    gap: 30px;
    align-items: center;
    position: relative;
  `;
  const Image = styled.img`
    width: 210px;
    height: 210px;
    object-fit: contain;
  `;

  const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
  `;

  const DontHeader = styled.div`
    font-weight: 700;
    font-size: 72px;
    line-height: 0.75;
  `;

  const DontExplanation = styled.div`
    font-weight: 500;
    font-size: 24px;
  `;

  const size = 400;
  const ratio = 2;

  return (
    <Layout formTitle={"Не шумите"}>
      <SimplePage width={size * ratio} height={size}>
        <Container>
          <Decor ratio={ratio} />
          <InputWrapper name={"link"} title={"ling to image"}>
            {(text) => text && <Image src={text} />}
          </InputWrapper>
          <TextContainer>
            <DontHeader>
              <InputWrapper name={"header"} title={"Заголовок"}>
                {(text) => text}
              </InputWrapper>
            </DontHeader>
            <DontExplanation>
              <InputWrapper name={"explanation"} title={"Пояснение"}>
                {(text) => text}
              </InputWrapper>
            </DontExplanation>
          </TextContainer>
        </Container>
      </SimplePage>
    </Layout>
  );
};
