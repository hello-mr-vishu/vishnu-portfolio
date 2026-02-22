import {
  SiPython,
  SiFastapi,
  SiDocker,
  SiReact,
  SiJavascript,
  SiCss3,
  SiHtml5,
  SiMongodb,
  SiScikitlearn,
  SiPandas,
  SiFlask,
} from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { FaGitAlt, FaAws, FaDatabase, FaBrain, FaRobot } from "react-icons/fa";
import { TbApi } from "react-icons/tb";
import React from "react";
import StorageIcon from "@mui/icons-material/Storage";
import QueryStatsIcon from "@mui/icons-material/QueryStats";
import TerminalIcon from "@mui/icons-material/Terminal";

const ICON_SIZE = 50;

const skillsConfig = {
  mainSkills: [
    { id: "skills-main-python", className: "skill-icon", icon: <SiPython size={ICON_SIZE} />, text: "Python" },
    { id: "skills-main-fastapi", className: "skill-icon", icon: <SiFastapi size={ICON_SIZE} />, text: "FastAPI" },
    { id: "skills-main-ml", className: "skill-icon", icon: <FaBrain size={ICON_SIZE} />, text: "Machine Learning" },
    { id: "skills-main-genai", className: "skill-icon", icon: <FaRobot size={ICON_SIZE} />, text: "GenAI & LLMs" },
    { id: "skills-main-powerbi", className: "skill-icon", icon: <QueryStatsIcon sx={{ fontSize: ICON_SIZE }} />, text: "Power BI" },
    { id: "skills-main-sql", className: "skill-icon", icon: <FaDatabase size={ICON_SIZE} />, text: "SQL" },
  ],
  complementarySkills: [
    { id: "skills-comp-pandas", className: "skill-icon", icon: <SiPandas size={ICON_SIZE} />, text: "Pandas" },
    { id: "skills-comp-sklearn", className: "skill-icon", icon: <SiScikitlearn size={ICON_SIZE} />, text: "Scikit-Learn" },
    { id: "skills-comp-flask", className: "skill-icon", icon: <SiFlask size={ICON_SIZE} />, text: "Flask" },
    { id: "skills-comp-aws", className: "skill-icon", icon: <FaAws size={ICON_SIZE} />, text: "AWS" },
    { id: "skills-comp-docker", className: "skill-icon", icon: <SiDocker size={ICON_SIZE} />, text: "Docker" },
    { id: "skills-comp-git", className: "skill-icon", icon: <FaGitAlt size={ICON_SIZE} />, text: "Git / GitHub" },
    { id: "skills-comp-react", className: "skill-icon", icon: <SiReact size={ICON_SIZE} />, text: "React" },
    { id: "skills-comp-mongodb", className: "skill-icon", icon: <SiMongodb size={ICON_SIZE} />, text: "MongoDB" },
    { id: "skills-comp-terminal", className: "skill-icon", icon: <TerminalIcon sx={{ fontSize: ICON_SIZE }} />, text: "Bash / Terminal" }
  ]
};

export default skillsConfig;
