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
      description: "En skön hund som man är lite rädd för i början pga. hatar människor som har penis."
  },
  {
    name: "Iggy",
    imgUrl:
      "https://www.sveland.se/globalassets/bilder/hund/dansksvenskteaser.jpg",
      description: "En skön hund som man är lite bjäbbig & lite ettrig, dock super skön. Jag tappade han som valp."

  },
  {
    name: "Jussi",
    imgUrl:
      "https://www.sveland.se/globalassets/bilder/hund/dansksvenskteaser.jpg",
      description: "En skön hund som är storebror till Ubbe. Tyvärr lös i magen och som börjar gilla mig mer och mer."

  },  {
    name: "Ubbe",
    imgUrl:
      "https://www.sveland.se/globalassets/bilder/hund/dansksvenskteaser.jpg",
      description: "En skön hund som är lillebror till Jussikingen. Ettrigare av de två & äter allt som han vill äta & som ligger framme."

  },
];
const Dogs = () => {
  return (
      <GlobalStyle>
      <Header />
      <DogWrapper>
        {dummyDogArray.map((dog) => (
          <Dog>
            <DogName>{dog.name}</DogName>
            <Image src={dog.imgUrl} width={256} height={144} />
            <DogDesc>{dog.description}</DogDesc>
            <ShowDogInterest>Intresseanmäl</ShowDogInterest>
          </Dog>
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
  font-size: 2rem;
  padding: 1rem;
`;

const DogDesc = styled.div`
  font-weight: normal;
  line-height: 2rem;
  font-size: 1rem;
  padding: 1rem;

`

const DogWrapper = styled.div`
  display: flex;
  padding: 1rem;
  margin: 1rem;
  `;

const Dog = styled.div`
border: 2px solid purple;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 1rem;
padding: 1rem;
`

const ShowDogInterest = styled.button`
color: wheat;
border-radius: 25px;
background-color: purple;
padding:1rem;
`