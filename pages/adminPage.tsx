import React from "react";

const adminPage = (data) => {
  console.log(data)
  return (
      <>
      <h2>{data.name}</h2>
    <div>This is going to HUUUUUUUUUUUURRRTTTT! Lika a MOTHER FUCKER!!</div>
    </>
  );
};

export default adminPage;

export async function getServerSideProps() {
    // call disabled to show the error
    // const res = await initMongo()
    const res = await fetch('https://swapi.dev/api/people/3/')
    const data = await res.json()
    return {
      props: 
        data
      
    }
  }