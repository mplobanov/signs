import React from "react";
import styled from "styled-components";

export interface ModuleProps {
  header: string;
  children: React.ReactNode;
  color?: "blue" | "orange";
  number?: string;
  qr?: string;
}

const Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 10px;
  padding: 10px;

  display: flex;
  flex-direction: column;

  box-sizing: border-box;
  position: relative;

  z-index: 10;

  gap: 5px;

  overflow: hidden;
`;

const Header = styled.div`
  font-weight: 700;
  font-size: 10px;
  line-height: 1;
`;

const Number = styled.div`
  position: absolute;
  top: -7px;
  left: -2px;
  font-size: 17px;
  color: rgba(0, 0, 0, 0.3);
  font-weight: 900;
  z-index: 102;
`;

const BigContainer = styled.div`
  position: relative;
`;

const Text = styled.span`
  font-size: 6.5px;
  display: flex;
  flex-direction: column;
  gap: 3px;
`;

const QR = styled.img`
  position: absolute;
  width: 19px;
  height: 19px;
  bottom: 10px;
  right: 10px;
  //transform: rotate(15deg);
`;

export const Module = ({
  header,
  children,
  color,
  number,
  qr,
}: ModuleProps) => {
  const blue = `hsl(225, 60%, 95%)`;
  const orange = `hsl(27, 83%, 95%)`;

  const colorProp = color === undefined ? "" : color === "blue" ? blue : orange;

  const border =
    color === undefined ? "border: 0.5px solid rgba(0, 0, 0, 0.1);" : "";

  return (
    <BigContainer>
      {number && <Number>{number}</Number>}
      <Container
        style={{
          backgroundColor:
            color === undefined ? "" : color === "blue" ? blue : orange,
          border: color === undefined ? "0.5px solid rgba(0, 0, 0, 0.1)" : "",
        }}
      >
        <Header>{header}</Header>
        <Text>{children}</Text>
        {qr && (
          <QR
            src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&bgcolor=${
              color === undefined
                ? "ffffff"
                : color === "blue"
                ? "EBEEFA"
                : "FDF1E8"
            }&data=${qr}`}
          />
        )}
      </Container>
    </BigContainer>
  );
};
