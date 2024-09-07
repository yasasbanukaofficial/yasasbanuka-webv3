import React from "react";
import styles from "./ProjectTile.module.css";
import TagsBlue from "../atoms/TagsBlue";
import TagYellow from "../atoms/TagYellow";
import TagRed from "../atoms/TagRed";
import Link from "next/link";

const ProjectTile = (props) => {
  return (
    <div className={styles.ProjectTile}>
      <h1 className={styles.title}>{props.title}</h1>
      <p className={styles.description}>{props.description}</p>
      <div className={styles.tags}>
        <TagsBlue tagblue={props.tagblue} />
        <TagYellow tagyellow={props.tagyellow} />
        <TagRed tagred={props.tagred} />
      </div>
      <Link href="https://github.com/yasasbanukaofficial?tab=repositories">
        <button className={styles.linkButton}>Visit my projects</button>
      </Link>
    </div>
  );
};

export default ProjectTile;
