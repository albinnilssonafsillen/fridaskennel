import Head from "next/head";
import Header from "../components/UI/Header/Header";
import styled from "styled-components";
import { initMongo } from "../utils/Mongo/connection";
import {GlobalStyle} from '../styles/StyledComponents'


const Info = styled.p`
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default function Home() {
  return (
    <GlobalStyle>
      <Head>
        <title>Fridas Kennel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
        <h1>Ronjas Kennel</h1>
        <Info>THIS IS THE P STYLED COMPONENTS</Info>
      </GlobalStyle>
  );
}

// function getStaticProps() {
//   const result = initMongo();

//   console.log(result)

//   return {
//     props: {
//       result
//     }
//   }
// }
