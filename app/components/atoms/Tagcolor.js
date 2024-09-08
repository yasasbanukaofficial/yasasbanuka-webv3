import React from "react";
import styles from "./Tagcolor.module.css";

const Tagcolor = (props) => {
  return (
    <div>
      <span className={styles.skillButton3}>{props.tagcolor}</span>
    </div>
  );
};

export default Tagcolor;
