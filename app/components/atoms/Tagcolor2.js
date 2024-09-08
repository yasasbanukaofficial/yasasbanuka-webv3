import React from "react";
import styles from "./Tagcolor2.module.css";

const Tagcolor = (props) => {
  return (
    <div>
      <span className={styles.skillButton3}>{props.tagcolor2}</span>
    </div>
  );
};

export default Tagcolor;
