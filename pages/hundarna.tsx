import React from "react";
import Header from "../components/UI/Header/Header";
import styled from "styled-components";
import Image from "next/image";
import {GlobalStyle} from '../styles/StyledComponents'

const dummyDogArray = [
  {
    name: "Ronja",
    imgUrl:
      "https://www.sveland.se/globalassets/bilder/hund/dansksvenskteaser.jpg",
  },
  {
    name: "Iggy",
    imgUrl:
      "https://www.sveland.se/globalassets/bilder/hund/dansksvenskteaser.jpg",
  },
];
const Dogs = () => {
  return (
      <GlobalStyle>
      <Header />
      <h3>This is dogs</h3>
      <DogWrapper>
        {dummyDogArray.map((dog) => (
          <>
            <DogName>{dog.name}</DogName>
            <Image src={dog.imgUrl} width={256} height={144} />
          </>
        ))}
      </DogWrapper>
    </GlobalStyle>
  );
};

export default Dogs;

// export async function getServerSideProps() {

//   let res;
//   try {
//   const request = await fetch(`http://localhost:3000'/api/getDogs`,{
//     method: 'GET'
//   })

//    res = await request.json()
//   console.log(res)
//   }
//   catch(err) {
//     console.error(err)
//   }
//   return {
//     props: {
//       res
//     }
//   }

// }

const DogName = styled.div`
  font-weight: bold;
  line-height: 24px;
  font-size: 20px;
  padding: 1rem;
`;

const DogWrapper = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
`;
