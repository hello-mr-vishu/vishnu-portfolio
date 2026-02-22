import { AiFillGithub } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import React from "react";

const footerConfig = {
    icons: [
        {
            id: "footer-0",
            url: "https://github.com/hello-mr-vishu",
            className: "social-icon",
            target: "_blank",
            icon: <AiFillGithub size={50} />
        },
        {
            id: "footer-1",
            url: "https://www.linkedin.com/in/hello-mr-vishu/",
            className: "social-icon",
            target: "_blank",
            icon: <FaLinkedinIn size={50} />
        },
        {
            id: "footer-2",
            url: "mailto:22l31a5484@gmail.com",
            className: "social-icon",
            target: "_blank",
            icon: <MdEmail size={50} />
        }
    ]
}

export default footerConfig
