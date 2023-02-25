import styled from "styled-components";

type SquareProps = {
  colorB: string;
};

const Square = styled.div<SquareProps>`
  width: 20px;
  aspect-ratio: 1;
  border-radius: 4px;
  background-color: ${(props) => props.colorB};
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const Decor = () => {
  return (
    <Container>
      {Array.from(Array(5)).map((v, i) => (
        <Square
          colorB={i % 2 === 0 ? "rgba(171,187,234, 1)" : "rgba(241,163,100, 1)"}
          key={i}
        />
      ))}
    </Container>
  );
};
