import { Layout } from "../layout/_Layout";
import { InputWrapper } from "../../forms/InputWrapper";
import { SimplePage } from "../../components/Page/SimplePage";
import styled from "styled-components";
import { Media } from "./Media";
import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaVk } from "@react-icons/all-files/fa/FaVk";
import { Name } from "./Name";
import { Decor } from "./Decor";

export const Galileo = () => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
    position: relative;
  `;

  const Header = styled.span`
    font-size: 110px;
    font-weight: 700;
    //flex-grow: 1;
    line-height: 0.85;
    vertical-align: bottom;
  `;

  const ManagerSection = styled.div`
    display: flex;
    gap: 40px;
  `;

  const MediaSection = styled.div`
    display: flex;
    gap: 20px;
  `;

  return (
    <Layout formTitle={"Galileo"}>
      <SimplePage height={500} width={500 * Math.sqrt(2)}>
        <Container>
          <Header>
            <InputWrapper name={"header"} title={"Комната"}>
              {(text) => <>{text}</>}
            </InputWrapper>
          </Header>
          <Decor />
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
