import styled from "styled-components";

export interface SimplePageProps {
  children: React.ReactNode;
  width: number;
  height: number;
  paddingRatio?: number;
}

export const SimplePage = ({
  children,
  width,
  height,
  paddingRatio,
}: SimplePageProps) => {
  const BigContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  `;

  const Container = styled.div`
    width: ${width}px;
    height: ${height}px;
    box-sizing: border-box;
    border: 1px ridge rgba(0, 0, 0, 0.1);
    padding: ${height / (paddingRatio ?? 10)}px
      ${width / (paddingRatio ?? 10)}px;

    @media only print {
      position: fixed;
      top: 0;
      left: 0;
      border: none;

      @page {
        size: ${width}px ${height}px;
        margin: 0;
      }
    }
  `;

  return (
    <BigContainer>
      <Container>{children}</Container>
    </BigContainer>
  );
};
