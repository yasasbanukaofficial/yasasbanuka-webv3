import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";
import SectionTopic from "../atoms/SectionTopic";
import TagsBlue from "../atoms/TagsBlue";
import TagYellow from "../atoms/TagYellow";
import TagRed from "../atoms/TagRed";
import ProjectTile from "../molecules/ProjectTile";

const Project = () => {
  return (
    <div className={styles.main}>
      <div id="projects" className={styles.Projects}>
        <SectionTopic f1="W" />
        <SectionTopic f1="o" />
        <SectionTopic f1="r" />
        <SectionTopic f1="k" />
        <SectionTopic f1="s" />
        <div className={styles.line} />
      </div>
      <div className={styles.projectTileContainer}>
        <ProjectTile
          title="To - do List"
          description="This is a text bruuh and this text could be so much long that I even cant e=keep up and this also kinda boring"
          tagblue="testing"
          tagyellow="testbruh"
          tagred="another freaking"
        />
        <ProjectTile
          title="To - do List"
          description="This is a text bruuh and this text could be so much long that I even cant e=keep up and this also kinda boring"
          tagblue="testing"
          tagyellow="testbruh"
          tagred="another freaking"
        />
        <ProjectTile
          title="To - do List"
          description="This is a text bruuh and this text could be so much long that I even cant e=keep up and this also kinda boring"
          tagblue="testing"
          tagyellow="testbruh"
          tagred="another freaking"
        />
      </div>
    </div>
  );
};

export default Project;
