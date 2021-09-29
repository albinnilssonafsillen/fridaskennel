import React from "react";
import Header from "../components/UI/Header/Header";
import styles from "../styles/Home.module.css";


const Dogs = () => {
  return (
    <div className={styles.container}>

      <Header />
      <h3>This is dogs </h3>
    </div>
  );
};

export default Dogs;
