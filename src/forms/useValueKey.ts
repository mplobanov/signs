import { useLocation } from "react-router-dom";

export const useValueKey = () => {
  const location = useLocation();

  return `value: ${location.pathname}`;
};
