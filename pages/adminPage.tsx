import React from "react";

const adminPage = (data) => {
  console.log(data)
  return (
      <>
      <h2>{data.name}</h2>
    </>
  );
};

export default adminPage;

export async function getServerSideProps() {
    const res = await fetch('https://swapi.dev/api/people/2')
    const data = await res.json()
    return {
      props: 
        data
      
    }
  }