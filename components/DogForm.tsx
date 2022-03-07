import React from "react";
import { GlobalStyle } from "../styles/StyledComponents";
import { Input } from "./UI/Input";
import { Label } from "./UI/Label";

export const addDogForm = () => {
  return (
    <GlobalStyle>
      <Label>Namn:</Label>
      <Input type="input" placeholder="Ange namn"></Input>
      <Label>Beskrivning:</Label>
      <Input type="textarea" placeholder="Ange beskrvining"></Input>
    </GlobalStyle>
  );
};

export default addDogForm;
