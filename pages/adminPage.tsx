import React from "react";
import DogForm from "../components/DogForm";
import { GlobalStyle } from "../styles/StyledComponents";

const adminPage = (data) => {
  console.log(data);
  return (
    <GlobalStyle>
      <h2>{data.name}</h2>
      <DogForm />
    </GlobalStyle>
  );
};

export default adminPage;

export async function getServerSideProps() {
  const res = await fetch("https://swapi.dev/api/people/2");
  const data = await res.json();
  return {
    props: data,
  };
}
