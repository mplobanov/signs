import React from "react";
import styled from "styled-components";
import { InputWrapper } from "../../forms/InputWrapper";

interface MediaProps {
  name: string;
  icon: React.ReactNode;
  getLink: (handle: string) => string;
}

export const Media = ({ name, icon, getLink }: MediaProps) => {
  const Container = styled.div`
    display: flex;
    flex-direction: column;
  `;

  const Span = styled.span`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2px;
  `;

  return (
    <Container>
      <InputWrapper name={name} title={`${name} хендл`}>
        {(text) => (
          <React.Fragment>
            <img
              src={`https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=${getLink(
                text ?? ""
              )}`}
              alt={getLink(name ?? "")}
            />
            <Span>
              {icon}
              {text}
            </Span>
          </React.Fragment>
        )}
      </InputWrapper>
    </Container>
  );
};
