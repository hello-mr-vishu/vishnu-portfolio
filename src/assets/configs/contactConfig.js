import React from 'react';
import { AiOutlineMail, AiOutlinePhone, AiFillGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import { BsMedium } from "react-icons/bs";

const contactConfig = {
  title: "Contact Me",
  subtitle: "Open to internships, collaborations, and AI/ML opportunities.",
  contacts: [
    {
      type: "Email",
      value: "vishnurongali21@gmail.com",
      link: "mailto:vishnurongali21@gmail.com",
      icon: <AiOutlineMail size={30} />
    },
    {
      type: "Phone",
      value: "+91-7702853524",
      link: "tel:+917702853524",
      icon: <AiOutlinePhone size={30} />
    },
    {
      type: "LinkedIn",
      value: "vishnu-vardhan",
      link: "https://www.linkedin.com/in/vishnu-vardhan-36848a275/",
      icon: <FaLinkedin size={30} />
    },
    {
      type: "GitHub",
      value: "hello-mr-vishu",
      link: "https://github.com/hello-mr-vishu",
      icon: <AiFillGithub size={30} />
    },
    {
      type: "Medium",
      value: "hello-mr-vishu",
      link: "https://medium.com/@hello-mr-vishu",
      icon: <BsMedium size={30} />
    }
  ]
};

export default contactConfig;
