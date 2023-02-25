import styled from "styled-components";
import React from "react";

export const Decor = ({ ratio }: { ratio: number }) => {
  const size = 20;
  const commonStyles = `width: ${size * ratio}px; height: ${size}px;`;

  const blue = `background-color: rgba(171,187,234, 1)`;
  const orange = `background-color: rgba(241,163,100, 1)`;

  const LeftTop = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    ${commonStyles}
    ${blue}
  `;

  const RightTop = styled.div`
    position: absolute;
    right: 0;
    top: 0;
    ${commonStyles}
    ${orange}
  `;

  const RightBottom = styled.div`
    position: absolute;
    right: 0;
    bottom: 0;
    ${commonStyles}
    ${blue}
  `;

  const LeftBottom = styled.div`
    position: absolute;
    left: 0;
    bottom: 0;
    ${commonStyles}
    ${orange}
  `;

  return (
    <React.Fragment>
      <LeftTop />
      <RightTop />
      <RightBottom />
      <LeftBottom />
    </React.Fragment>
  );
};
