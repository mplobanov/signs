import styled from "styled-components";
import React from "react";

export interface SimplePageProps extends ContainerProps {
  children: React.ReactNode;
}

interface ContainerProps {
  width: number;
  height: number;
  paddingRatio?: number;
}

const Container = styled.div<ContainerProps>`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  box-sizing: border-box;
  border: 1px ridge rgba(0, 0, 0, 0.1);
  padding: ${(props) => props.height / (props.paddingRatio ?? 10)}px
    ${(props) => props.width / (props.paddingRatio ?? 10)}px;

  @media only print {
    position: fixed;
    top: 0;
    left: 0;
    border: none;

    @page {
      size: ${(props) => props.width}px ${(props) => props.height}px;
      margin: 0;
    }
  }
`;

const BigContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const SimplePage = ({
  children,
  width,
  height,
  paddingRatio,
}: SimplePageProps) => {
  return (
    <BigContainer>
      <Container width={width} height={height} paddingRatio={paddingRatio}>
        {children}
      </Container>
    </BigContainer>
  );
};
