import React from "react";
import styles from "./Tagcolor3.module.css";

const Tagcolor = (props) => {
  return (
    <div>
      <span className={styles.skillButton3}>{props.tagcolor3}</span>
    </div>
  );
};

export default Tagcolor;
