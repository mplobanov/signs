import { Layout } from "../layout/_Layout";
import { SimplePage } from "../../components/Page/SimplePage";
import styled from "styled-components";
import { Person } from "./Person";
import { Charges } from "./Charges";
import { Decor } from "./Decor";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 35px;
  position: relative;
`;

const DecorPosition = styled.div`
  position: absolute;
  right: 0;
  top: 15px;
`;

export const InCharge = () => {
  return (
    <Layout formTitle={"Ответсвенный за этаж"}>
      <SimplePage height={500} width={500 * Math.sqrt(2)}>
        <Container>
          <Person />
          <Charges />
          <DecorPosition>
            <Decor />
          </DecorPosition>
        </Container>
      </SimplePage>
    </Layout>
  );
};
