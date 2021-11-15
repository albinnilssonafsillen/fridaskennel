import React from "react";
import styled from "styled-components";
import icon from '../assets/icon/dog.svg'
import Image from "next/image";
import Router from 'next/router'
import router from "next/router";

function checkCorrectPwd() {
    // alert(`Här ska Frida kunna logga in till sin admin sida, QUEEN!`)

    router.push('/adminPage')
}
const admin = () => {
  return (
    <Wrapper>
<Image src={icon} width={144} />
        <Title>This is Fridas Admin sida, vad roligt för henne!</Title>
      <button
        onClick={() =>
            checkCorrectPwd()
        }
      >
        Logga in
      </button>
    </Wrapper>
  );
};

export default admin;

const Title = styled.h2`
font-weight: bold;
`;

const Wrapper = styled.div`
display: flex;
justify-content: center;
flex-direction: column;
align-items:center;
`