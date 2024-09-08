import React from "react";
import Image from "next/image";
import styles from "./Projects.module.css";
import SectionTopic from "../atoms/SectionTopic";
import TagsBlue from "../atoms/TagsBlue";
import TagYellow from "../atoms/TagYellow";
import TagRed from "../atoms/TagRed";
import Tagcolor from "../atoms/Tagcolor";
import Tagcolor2 from "../atoms/Tagcolor2";
import Tagcolor3 from "../atoms/Tagcolor3";
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
          title="Yasas Banuka Portfolio V3"
          description="The website you are currently seeing is my third version of my personal web portfolio which was designed using figma and built using NextJS. This website is hosted using gihtub pages.  - 2024 Sep"
          tagcolor="Figma"
          tagcolor2="React"
          tagcolor3="NextJS"
        />
        <ProjectTile
          title="Yasas Banuka Portfolio V2"
          description="This is the second version of my web portfolio that I've built using nextjs. This web portfolio is a simple page with a theme of anime. This was built for fun, not for professional use. Used Figma to design this project.  - 2024 Aug"
          tagcolor="Figma"
          tagcolor2="React"
          tagcolor3="NextJS"
        />
        <ProjectTile
          title="Improved Version of To-do List"
          description="This todo list is an improved version from the previous ones, the speciality of this project is I used ant design and proper file organization for this project by following atom design methodology.  - 2024 Aug"
          tagcolor="NextJS"
          tagcolor2="AntD"
          tagcolor3="Javascript"
        />
        <ProjectTile
          title="NextJS To-do list"
          description="This is a nextjs project that I've built when I almost finished learning javascript and a little bit of react. This is an improved version of simple to-do list project.  - 2024 Jul"
          tagcolor="Javascript"
          tagcolor2="React"
          tagcolor3="NextJS"
        />
        <ProjectTile
          title="Simple To-do List"
          description="This is a simple javascript project that I've built when I started learning javascript for the first time. This project has a good user interface plsu more features like adding deleting and error showing messages.  - 2024 Jul"
          tagcolor="Javascript"
          tagcolor2="HTML"
          tagcolor3="CSS"
        />
        <ProjectTile
          title="Greenish Website"
          description="This is a landing page which is designed as an activity project. A Simple green themed website.  - 2024 Jun"
          tagcolor="HTML"
          tagcolor2="CSS"
          tagcolor3="Web Design"
        />
        <ProjectTile
          title="Yasas Banuka Portfolio V1"
          description="This is the first version of my web portfolio that I've built myself back when I was learning basic web design.  - 2024 Jun"
          tagcolor="HTML"
          tagcolor2="CSS"
          tagcolor3="Web Design"
        />
        <ProjectTile
          title="Tribute Page"
          description="This is a web which is not much difficult to built but this one was built for freecodecamp activity. (Desktop Version)  - 2024 Jun"
          tagcolor="HTML"
          tagcolor2="CSS"
          tagcolor3="Web Design"
        />
        <ProjectTile
          title="Landing Page"
          description="This is a web page which is an easy one that I have developed in order to receive a certificate from freeCodeCamp. Just a simple online guitar shop landing page. (Desktop Version)  - 2024 May"
          tagcolor="HTML"
          tagcolor2="CSS"
          tagcolor3="Web Design"
        />
      </div>
    </div>
  );
};

export default Project;
