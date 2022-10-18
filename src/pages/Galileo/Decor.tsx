import styled from "styled-components";

export const Decor = () => {
  const Container = styled.div`
    //position: absolute;
    //right: 0;
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-grow: 1;
    margin-top: 20px;
  `;

  return (
    <Container>
      {Array.apply(null, Array(5)).map((v, i) => (
        <div
          style={{
            width: "30px",
            height: "30px",
            backgroundColor:
              i % 2 === 0 ? "rgba(171,187,234, 1)" : "rgba(241,163,100, 1)",
          }}
        />
      ))}
    </Container>
  );
};
