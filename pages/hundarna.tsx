import React from "react";
import Header from "../components/UI/Header/Header";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Image from "next/image";

const dummyDogArray = [
  {
    name: "Ronja",
    imgUrl: 'https://www.sveland.se/globalassets/bilder/hund/dansksvenskteaser.jpg'
  },
  {
    name: "Iggy",
    imgUrl: 'https://www.sveland.se/globalassets/bilder/hund/dansksvenskteaser.jpg'
  },
];
const Dogs = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h3>This is dogs</h3>
      <DogWrapper>
        {dummyDogArray.map((dog) => (
          <>
            <DogName>{dog.name}</DogName>
            <Image src={dog.imgUrl} width={256} height={144}  /> 
          </>
        ))}
      </DogWrapper>
    </div>
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
  color: purple;
  padding:1rem 0;
`;

const DogWrapper = styled.div`
  color: blue;
`;
