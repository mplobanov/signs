import styled from "styled-components";

import { FaPumpSoap, FaToiletPaper } from "react-icons/fa";
import { BsFillVolumeUpFill } from "react-icons/bs";
import { MdBuild } from "react-icons/md";
import { InputWrapper } from "../../forms/InputWrapper";

const Container = styled.div`
  width: 100%;
  height: 100%;
  //background-color: aquamarine;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const Header = styled.div`
  font-weight: 900;
  font-size: 30px;
  //background-color: yellow;
  max-width: 230px;
  word-break: break-all;
`;

const Options = styled.div`
  //background-color: antiquewhite;
  display: flex;
  flex-direction: column;
`;

const OptionsHeader = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Option = styled.div`
  display: grid;
  grid-template-columns: 40px 1fr;
  height: 40px;
`;

const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: 40px;
  color: black;
`;

const OptionText = styled.div`
  font-size: 16px;
  display: flex;
  align-items: center;
`;

export const Charges = () => {
  return (
    <Container>
      <Header>
        <InputWrapper name={"inchrageOf1"} title={"Заголовок строка 1"}>
          {(text1) => <>{text1}</>}
        </InputWrapper>
      </Header>
      <Options>
        <OptionsHeader>Если вдруг</OptionsHeader>
        <Option>
          <Icon>
            <FaPumpSoap />
          </Icon>
          <OptionText>закончилось мыло</OptionText>
        </Option>
        <Option>
          <Icon>
            <FaToiletPaper />
          </Icon>
          <OptionText>закончилась бумага</OptionText>
        </Option>
        <Option>
          <Icon>
            <BsFillVolumeUpFill />
          </Icon>
          <OptionText>соседи шумят</OptionText>
        </Option>
        <Option>
          <Icon>
            <MdBuild />
          </Icon>
          <OptionText>что-то сломалось</OptionText>
        </Option>
      </Options>
      <OptionsHeader>
        <InputWrapper name={"to-whome"} title={"Напишите кому?"}>
          {(text) => `Напишите ${text}, он вам поможет.`}
        </InputWrapper>
      </OptionsHeader>
    </Container>
  );
};
