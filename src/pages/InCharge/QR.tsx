import { useEffect, useRef } from "react";
import QRCode from "qrcode";
import styled from "styled-components";

const QRImg = styled.canvas`
  aspect-ratio: 1;
  box-sizing: border-box;
  max-width: 100%;
`;

export const QR = ({ text }: { text: string }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (canvasRef.current !== null) {
      QRCode.toCanvas(canvasRef.current, "t.me/mplobanov", {
        margin: 0,
        color: {
          dark: "#ffffffff",
          light: "#00000000",
        },
        width: 100,
      });
    }
  }, []);

  return <QRImg ref={canvasRef} />;
};
