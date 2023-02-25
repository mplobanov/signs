import React from "react";
import styled from "styled-components";

interface DecorProps {
  color: "blue" | "orange" | "grey";
}

const colors: Record<DecorProps["color"], string> = {
  blue: "rgba(171,187,234, 1)",
  orange: "rgba(241,163,100, 1)",
  grey: "rgba(255, 255, 255, 1)",
};

const Decor = styled.div<DecorProps>`
  height: 20px;
  width: 20px;
  background-color: ${(props) => colors[props.color]};
`;

interface DecorSetProps {
  lineSize: number;
  lineCount: number;
}

const DecorContainer = styled.div<DecorSetProps>`
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(${(props) => props.lineSize}, 1fr);
  grid-template-rows: repeat(${(props) => props.lineCount}, 1fr);
`;

export const DecorSet = ({ lineCount, lineSize }: DecorSetProps) => {
  return (
    <DecorContainer lineSize={lineSize} lineCount={lineCount}>
      {Array.from(Array(lineSize * lineCount)).map((v, i) => {
        const ii = Math.floor(i / lineSize);
        const jj = i % lineSize;

        return (
          <Decor
            color={
              (ii + jj) % 2 === 0
                ? (ii + jj + 2 * (jj % 2)) % 4 === 0
                  ? "blue"
                  : "orange"
                : "grey"
            }
            key={i}
          />
        );
      })}
    </DecorContainer>
  );
};
