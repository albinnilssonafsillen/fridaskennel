import React from "react";
import Header from "../components/UI/Header/Header";
import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Image from "next/image";

const dummyDogArray = [
  {
    name: "Ronja",
    imgUrl: "https://media.istockphoto.com/photos/happy-puppy-dog-smiling-on-isolated-yellow-background-picture-id1267466399?k=20&m=1267466399&s=612x612&w=0&h=er4M0jxDijF9_1Uli_W8gNhVV3dO08l7zRiYto_b9QI=",
  },
  {
    name: "Iggy",
    imgUrl: "https://media.istockphoto.com/photos/happy-puppy-dog-smiling-on-isolated-yellow-background-picture-id1267466399?k=20&m=1267466399&s=612x612&w=0&h=er4M0jxDijF9_1Uli_W8gNhVV3dO08l7zRiYto_b9QI=",

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
            <Image src={dog.imgUrl} width={144} height={144}/> 
          </>
        ))}
      </DogWrapper>
    </div>
  );
};

export default Dogs;

const DogName = styled.div`
  font-weight: bold;
  line-height: 24px;
  font-size: 20px;
  color: purple;
`;

const DogWrapper = styled.div`
  color: blue;
`;
