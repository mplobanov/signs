import React from "react";
import styled from "styled-components";
import { InputWrapper } from "../../forms/InputWrapper";

interface MediaProps {
  name: string;
  icon: React.ReactNode;
  getLink: (handle: string) => string;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Span = styled.span`
  //display: inline-flex;
  //align-items: center;
  //justify-content: center;
  gap: 2px;
  word-break: break-all;
  max-width: 130px;
  position: relative;
  text-align: center;
`;

const IconSpan = styled.span`
  //vertical-align: bottom;
  //display: inline-flex;
  //align-items: center;
  //justify-content: center;
  position: relative;
  top: 3px;
  margin-right: 4px;
`;

const QR = styled.img`
  height: 100px;
  width: 100px;
`;

export const Media = ({ name, icon, getLink }: MediaProps) => {
  return (
    <Container>
      <InputWrapper name={name} title={`${name} хендл`}>
        {(text) => (
          <React.Fragment>
            <QR
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${getLink(
                text ?? ""
              )}`}
              alt={getLink(name ?? "")}
            />
            <Span>
              <IconSpan>{icon}</IconSpan>
              {text}
            </Span>
          </React.Fragment>
        )}
      </InputWrapper>
    </Container>
  );
};
