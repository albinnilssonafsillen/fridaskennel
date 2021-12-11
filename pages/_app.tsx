import { NextSeo } from "next-seo";
import styled from "styled-components";


function MyApp({ Component, pageProps }) {
  return(
  <HTML>
    <NextSeo title="Ronjas Kennel" description="dansksvenska gårdshundar från Skåne"></NextSeo>
      <Component {...pageProps} />
  </HTML>
  )
}

const HTML = styled.html`
padding: 0;
margin: 0;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
 Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
 color: green;
 background-color: wheat;
`      

export default MyApp;
