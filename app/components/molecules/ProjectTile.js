import React from "react";
import styles from "./ProjectTile.module.css";
import TagsBlue from "../atoms/TagsBlue";
import TagYellow from "../atoms/TagYellow";
import TagRed from "../atoms/TagRed";
import Tagcolor from "../atoms/Tagcolor";
import Tagcolor2 from "../atoms/Tagcolor2";
import Tagcolor3 from "../atoms/Tagcolor3";
import Link from "next/link";

const ProjectTile = (props) => {
  return (
    <div className={styles.ProjectTile}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.tags}>
        <Tagcolor tagcolor={props.tagcolor} />
        <Tagcolor2 tagcolor2={props.tagcolor2} />
        <Tagcolor3 tagcolor3={props.tagcolor3} />
      </div>
      <Link href="https://github.com/yasasbanukaofficial?tab=repositories">
        <button className={styles.linkButton}>Visit my projects</button>
      </Link>
    </div>
  );
};

export default ProjectTile;
