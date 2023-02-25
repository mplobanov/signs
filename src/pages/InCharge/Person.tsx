import styled from "styled-components";

import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaVk } from "@react-icons/all-files/fa/FaVk";
import { InputWrapper } from "../../forms/InputWrapper";
import { QR } from "./QR";

type ContainerProps = {
  imgUrl: string;
};

type ColorProps = {
  clr?: string;
};

const color = (c?: string) => {
  if (c === "black") {
    return "black";
  }
  return "white";
};

const Container = styled.div<ContainerProps>`
  width: 100%;
  height: 100%;
  //background-color: aqua;
  border-radius: 20px;
  display: flex;
  align-items: flex-end;
  background-image: url("${(props) => props.imgUrl}");
  background-size: cover; /* <------ */
  background-repeat: no-repeat;
  background-position: center center;
`;

const Details = styled.div`
  --black: rgba(0, 0, 0, 0.8);

  width: 100%;
  margin: 15px;
  display: flex;
  flex-direction: column;
  gap: 0;
  background-color: var(--black);
  padding: 0;
  border-radius: 5px;
  box-shadow: 0 0 10px 10px var(--black);
`;

type NameProps = {
  bcColor: string;
};

const Name = styled.span<NameProps & ColorProps>`
  //background: antiquewhite;
  font-weight: 900;
  font-size: 20px;
  color: ${(props) => color(props.clr)};
  padding: 5px 5px 5px 5px;
  border-radius: 5px;
  background-color: ${(props) => props.bcColor};
  line-height: 1;
  display: flex;
  align-items: center;
`;

const Room = styled.div<NameProps & ColorProps>`
  font-weight: 500;
  font-size: 15px;
  color: ${(props) => color(props.clr)};
  border-radius: 5px;
  border: solid 1px ${(props) => color(props.clr)};
  padding: 2px 5px;
  display: flex;
  align-items: center;
  justify-content: center;
  line-height: 0.8;
  background-color: ${(props) => props.bcColor};
  height: 15px;
  /* vertical-align: bottom; */
`;

const QRs = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 5px;
`;

const QRContainer = styled.div`
  box-sizing: border-box;
  width: 100%;
  //height: 140px;
  border-radius: 5px;
  //background-color: rgba(0, 0, 0, 0.7);
  display: flex;
  flex-direction: column;
  padding: 7px;
`;

const Handle = styled.span`
  //display: inline-flex;
  flex-direction: row;
  word-break: break-all;
  max-width: 100%;
  position: relative;
  text-align: left;
  align-items: center;
  gap: 4px;
  color: white;
  font-size: 15px;
`;

const Icon = styled.span`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  vertical-align: middle;
  margin-right: 4px;
  color: white;
`;

const NameContainer = styled.div`
  display: inline-flex;
  //flex-direction: row;
  align-items: center;
`;

export const Person = () => {
  return (
    <InputWrapper name={"img-url"} title={"Ссылка на фотку"}>
      {(url) => (
        <Container imgUrl={url ?? ""}>
          <Details>
            <NameContainer>
              <InputWrapper name={"bg-color"} title={"black, если имя черное"}>
                {(clr) => (
                  <>
                    <Name bcColor={"rgba(241,163,100, 0)"} clr={clr}>
                      <InputWrapper name={"full-name"} title={"Имя Фамилия"}>
                        {(text) => text}
                      </InputWrapper>
                    </Name>
                    <Room bcColor={"rgba(0, 0, 0, 0)"} clr={clr}>
                      <InputWrapper name={"room"} title={"Комната"}>
                        {(text) => `${text}`}
                      </InputWrapper>
                    </Room>
                  </>
                )}
              </InputWrapper>
            </NameContainer>
            <QRs>
              <QRContainer>
                <InputWrapper name={"telegram"} title={"Хендл Телеграм"}>
                  {(text) => (
                    <>
                      <QR text={text ?? ""} />
                      <Handle>
                        <Icon>{<FaTelegram />}</Icon>
                        {text}
                      </Handle>
                    </>
                  )}
                </InputWrapper>
              </QRContainer>
              <QRContainer>
                <InputWrapper name={"vk"} title={"Хендл ВК"}>
                  {(text) => (
                    <>
                      <QR text={text ?? ""} />
                      <Handle>
                        <Icon>{<FaVk />}</Icon>
                        {text}
                      </Handle>
                    </>
                  )}
                </InputWrapper>
              </QRContainer>
            </QRs>
          </Details>
        </Container>
      )}
    </InputWrapper>
  );
};
