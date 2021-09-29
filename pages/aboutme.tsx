import React from "react";
import Header from "../components/UI/Header/Header";
import styles from "../styles/Home.module.css";



const AboutMe = () => {
  return (
    <div className={styles.container}>
      <Header />
      <h3>This is about me</h3>
    </div>
  );
};

export default AboutMe;
