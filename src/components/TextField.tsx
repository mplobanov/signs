import { Spec as GeneralSpec } from "../types/Spec";
import React, { useContext } from "react";
import { Named } from "../forms/Former";
import { Input } from "../forms/Input";
import { SignContext } from "../pages/layout/_Layout";
import styled from "styled-components";

import { FaTelegram } from "@react-icons/all-files/fa/FaTelegram";
import { FaVk } from "@react-icons/all-files/fa/FaVk";

export namespace TextField {
  export interface FormProps extends Named {
    spec: Spec;
  }

  export interface Spec extends GeneralSpec {
    type: "Text";
    props: {
      formTitle: string;
      size?: number;
      weight?: number;
      alignSelf?: "flex-start" | "flex-end" | "center";
      icon?: "telegram" | "vk";
    };
  }

  const makeName = (name: string) => `${name}/text`;

  export const Component: (props: FormProps) => JSX.Element = ({
    name,
    spec,
  }) => {
    const vals = useContext(SignContext);
    const { size, weight, alignSelf, icon } = spec.props;

    const Container = styled.div`
      ${size ? `font-size: ${size}px` : ""};
      ${weight ? `font-weight: ${weight}` : ""};
      ${alignSelf ? `align-self: ${alignSelf};` : ""}
      vertical-align: text-bottom;
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: 3px;
    `;

    return (
      <Container>
        {icon &&
          vals[makeName(name)] &&
          (icon === "telegram" ? <FaTelegram /> : <FaVk />)}
        {vals[makeName(name)]}
      </Container>
    );
  };

  export const Form = ({ spec, name }: FormProps) => (
    <Input name={makeName(name)} title={spec.props.formTitle} />
  );
}
