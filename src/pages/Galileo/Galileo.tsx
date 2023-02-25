import { Layout } from "../layout/_Layout";
import { InputWrapper } from "../../forms/InputWrapper";
import { SimplePage } from "../../components/Page/SimplePage";
import styled from "styled-components";
import { Media } from "./Media";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaVk } from "@react-icons/all-files/fa/FaVk";
import { Name } from "./Name";
import { Decor } from "./Decor";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  position: relative;
`;

interface HeaderProps {
  length: number;
}

const Header = styled.span<HeaderProps>`
  font-size: ${(props) => (props.length > 10 ? 70 : 110)}px;
  font-weight: 700;
  //flex-grow: 1;
  line-height: 0.85;
  vertical-align: bottom;
  //word-break: break-all;
`;

const ManagerSection = styled.div`
  display: flex;
  gap: 40px;
`;

const MediaSection = styled.div`
  display: flex;
  gap: 20px;
`;

export const Galileo = () => {
  return (
    <Layout formTitle={"Galileo"}>
      <SimplePage height={500} width={500 * Math.sqrt(2)}>
        <Container>
          <InputWrapper name={"header"} title={"Комната"}>
            {(text) => (
              <>
                <Header length={text?.length ?? 0}>{text}</Header>
                <Decor big={(text?.length ?? 0) < 10} />
              </>
            )}
          </InputWrapper>

          <ManagerSection>
            <MediaSection>
              <Media
                name={"telegram"}
                icon={<FaTelegram />}
                getLink={(handle) => `t.me/${handle}`}
              />
              <Media
                name={"vk"}
                icon={<FaVk />}
                getLink={(handle) => `vk.com/${handle}`}
              />
            </MediaSection>
            <Name />
          </ManagerSection>
        </Container>
      </SimplePage>
    </Layout>
  );
};
