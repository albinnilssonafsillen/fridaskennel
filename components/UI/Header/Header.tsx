import React from "react";
import Link from "next/link";
import Image from "next/image";
import icon from "../../../assets/icon/dog.svg";
import styled from "styled-components"

const HeaderContainer = styled.div`
 display: flex;
  align-items: center;
  padding-top: 2rem;
  padding: 0 1rem 0 1rem;
`

const LinkStyled = styled.div`
  margin: 1rem;
  cursor: pointer;
`


const Header = () => {
  return (
    <HeaderContainer>
      <LinkStyled>
        <Link href="/">
          <Image src={icon} width={144} height={144}></Image>
        </Link>
      </LinkStyled>
      <LinkStyled>
        <Link href="/dogs">Hundarna</Link>
      </LinkStyled>
      <LinkStyled>
        <Link href="/aboutme">Om mig</Link>
      </LinkStyled>
      <LinkStyled>
        <Link href="/contact">Kontakt</Link>
      </LinkStyled>
    </HeaderContainer>
  );
};

export default Header;
