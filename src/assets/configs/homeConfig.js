import React from "react";
import { BsClipboardData } from "react-icons/bs";
import { FaLaptopCode, FaUniversity } from "react-icons/fa";

const homeConfig = {
  greeting_i18n: {
    en: (
      <h1 className="heading">
        Hi! I'm <strong className="main-name">Vishnu </strong>
      </h1>
    ),
    es: (
      <h1 className="heading">
        ¡Hola! Soy <strong className="main-name"> Vishnu </strong>
      </h1>
    ),
  },

  titles_i18n: {
    en: [
      "Data Enthusiast",
      "AI & ML Explorer",
      "Aspiring Data Scientist",
      "Python Backend Developer"
    ],
    es: [
      "Entusiasta de Datos",
      "Explorador de IA y ML",
      "Aspirante a Científico de Datos",
      "Desarrollador Backend en Python"
    ],
  },

  about_i18n: {
    en: {
      start:
        "I'm a passionate Data Enthusiast exploring the realms of AI & Data Science. Currently pursuing my B.Tech in Artificial Intelligence & Data Science at Vignan’s Institute of Information Technology.",
      exit:
        "I am fluent in Python, SQL databases, BI tools like Power BI, and more, with a deep interest in machine learning, NLP, and developing AI-powered applications.",
    },
    es: {
      start:
        "Soy un entusiasta de los datos apasionado por la IA y la Ciencia de Datos. Actualmente curso mi B.Tech en Inteligencia Artificial y Ciencia de Datos.",
      exit:
        "Domino Python, bases de datos SQL, herramientas de BI y más, con un fuerte interés en el aprendizaje automático.",
    },
  },

  workTimeline: [
    {
      id: "work-3",
      title: "AI/ML Intern",
      company: "Global Acknowledgement Hub",
      description_i18n: {
        en: "Built scalable AI agents for automated meeting transcription, speaker diarization, and insights generation. Designed scalable AI workflows for automated support ticket processing using LLM-powered reasoning and NLP pipelines.",
        es: "Construí agentes de IA escalables para la transcripción automatizada de reuniones y diseñé flujos de trabajo de IA para el procesamiento de tickets de soporte técnico."
      },
      date: "Oct 2025 - Mar 2026",
      icon: <FaLaptopCode />,
      tags: ["ai", "ml", "nlp", "llms", "fastapi"],
    },
    {
      id: "work-2",
      title: "Software Developer Intern",
      company: "Edge 2 Systems",
      description_i18n: {
        en: "Built a Python-based Shinobi Monitoring System to track surveillance cameras status via APIs. Designed automated workflows to log metrics to Google Sheets with robust error handling and threshold-based alerting.",
        es: "Construí un sistema de monitoreo en Python para rastrear el estado de las cámaras de vigilancia a través de API y registros en Google Sheets."
      },
      date: "Jun 2025 - Jul 2025",
      icon: <FaLaptopCode />,
      tags: ["python", "api", "automation", "shinobi"],
    },
    {
      id: "work-1",
      title: "Team Lead, Weather Monitoring System",
      company: "VIIT",
      description_i18n: {
        en: "Leading a team to develop Vignan’s Weather Monitoring System.",
        es: "Líder de un equipo para desarrollar el Sistema de Monitoreo Meteorológico de Vignan."
      },
      date: "Feb 2025 - Present",
      icon: <BsClipboardData />,
      tags: ["leadership", "monitoring", "iot"],
    },
    {
      id: "work-0",
      title: "Education: B.Tech in AI & Data Science",
      company: "Vignan’s Institute of Information Technology",
      description_i18n: {
        en: "Pursuing Bachelor's of Technology with a CGPA of 8.83/10.",
        es: "Cursando Licenciatura en Tecnología con un CGPA de 8.83/10."
      },
      date: "2022 - 2026 | Visakhapatnam",
      icon: <FaUniversity />,
      tags: ["ai", "data-science", "b-tech"],
    },
    {
      id: "work-minus-1",
      title: "Education: Intermediate (MPC)",
      company: "Sri Chaitanya Junior College",
      description_i18n: {
        en: "Completed Intermediate education with a percentage of 94.5%.",
        es: "Completé la educación intermedia con un porcentaje de 94.5%."
      },
      date: "2020 - 2022 | Steel Plant, Vizag",
      icon: <FaUniversity />,
      tags: ["mpc", "high-school"],
    },
    {
      id: "work-minus-2",
      title: "Education: SSC",
      company: "Chaitanya Public School",
      description_i18n: {
        en: "Completed Secondary School Certificate.",
        es: "Completé el Certificado de Escuela Secundaria."
      },
      date: "2019 - 2020 | Ukkunagaram",
      icon: <FaUniversity />,
      tags: ["ssc", "school"],
    }
  ],
};

export default homeConfig;
