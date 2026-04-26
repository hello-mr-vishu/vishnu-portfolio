import { AiFillGithub } from "react-icons/ai";

import portfolio from "../images/portfolio.png";
import anemia from "../images/anemia detection.jpg";
import shinobi from "../images/shinobi.jpg";
import medical from "../images/medical.jpg";
import linc from "../images/linc.png";
import sonar from "../images/sonar.webp";


import React from 'react';

const projectConfig = [
  {
    id: "project-12",
    title: "Conjunctiva Anemia Detection",
    category: { en: "AI / Machine Learning", es: "IA / Aprendizaje Automático" },
    tags: ["Streamlit", "TensorFlow", "Deep Learning", "Python"],
    description_i18n: {
      en: "A machine learning-powered web application that detects anemia rapidly by analyzing close-up images of the conjunctiva using a custom CNN architecture.",
      es: "Una aplicación web impulsada por aprendizaje automático que detecta anemia rápidamente analizando imágenes de primer plano de la conjuntiva mediante una arquitectura CNN personalizada."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/Anemia-Conjuctiva", icon: <AiFillGithub /> }
    ],
    image: anemia,
    target: "_blank"
  },
  {
    id: "project-8",
    title: "Shinobi Monitoring System",
    category: { en: "Backend & Automation", es: "Backend y Automatización" },
    tags: ["Python", "REST APIs", "Google Sheets"],
    description_i18n: {
      en: "Engineered a fault-tolerant infrastructure monitoring system with automated telemetry logging and threshold-based alerting. Built resilient API polling pipelines with retry/backoff safeguards, automated downtime detection, and deduplicated alert notifications.",
      es: "Diseñé un sistema tolerante a fallos para la monitorización de infraestructura con registro automatizado de telemetría y alertas basadas en umbrales. Implementé pipelines de sondeo de API y detección automatizada de tiempo de inactividad."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/shinobi", icon: <AiFillGithub /> }
    ],
    image: shinobi,
    target: "_blank"
  },
  {
    id: "project-7",
    title: "Brain AI – Natural Language Interface",
    category: { en: "AI / Backend Pipeline", es: "IA / Backend" },
    tags: ["FastAPI", "LLMs", "NLP", "Python"],
    description_i18n: {
      en: "Engineered a scalable natural language interface bridging conversational AI with enterprise backend services via structured API orchestration. Built a production-grade intent classification, routing, execution, and response pipeline with modular executor design enabling automated ticketing, bookings, and billing.",
      es: "Diseñé una interfaz de lenguaje natural escalable que conecta IA conversacional con servicios backend empresariales mediante orquestación de API estructurada. Construí un pipeline de clasificación de intenciones, enrutamiento, ejecución y respuesta con diseño modular."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/", icon: <AiFillGithub /> }
    ],
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    target: "_blank"
  },
  {
    id: "project-6",
    title: "Connected Living — AI Brain",
    category: { en: "AI / FastAPI", es: "IA / FastAPI" },
    tags: ["FastAPI", "LLMs", "Orchestration"],
    description_i18n: {
      en: "Engineered a production-ready, multi-domain AI brain orchestrating 50+ structured intents across residential operations using LLM-based intent classification and API tool execution. Built safe-execution pipelines with confirmation flows, idempotency keys, and validation loops.",
      es: "Diseñé un cerebro de IA multidominio para operaciones residenciales, orquestando más de 50 intenciones con clasificación y ejecución de APIs. Implementé pipelines seguros con flujos de confirmación y claves de idempotencia."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/Connected-Living-AI-Brain", icon: <AiFillGithub /> }
    ],
    image: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    target: "_blank"
  },
  {
    id: "project-5",
    title: "hawa-ai — Production Multi-Agent Travel Planner",
    category: { en: "AI & Multi-Agent Systems", es: "IA y Sistemas Multiagentes" },
    tags: ["Python", "Google ADK", "FastAPI", "Multi-Agent"],
    description_i18n: {
      en: "A production-ready travel planning API built on Google ADK using a multi-agent pipeline. Features a sequential planner orchestrating specialized agents (weather, itinerary, budget, news, places) that share session history via SqliteSessionService for multi-turn conversations and structured trip planning.",
      es: "Una API de planificación de viajes lista para producción construida en Google ADK utilizando un pipeline multiagente. Cuenta con un planificador secuencial que orquesta agentes especializados (clima, itinerario, presupuesto, noticias y lugares) que comparten el historial de la sesión para conversaciones de múltiples turnos."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/hawa-ai", icon: <AiFillGithub /> }
    ],
    image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?auto=format&fit=crop&q=80&w=2074&ixlib=rb-4.0.3",
    target: "_blank"
  },
  {
    id: "project-4",
    title: "Medical Chatbot (RAG)",
    category: { en: "AI / GenAI", es: "IA / GenAI" },
    tags: ["LangChain", "Gemini", "Flask", "Docker", "AWS"],
    description_i18n: {
      en: "Production-ready, domain-specific Medical QA system using Retrieval-Augmented Generation (RAG). Built using LangChain, Gemini LLM, Pinecone, and Flask. Dockerized and deployed via CI/CD on AWS EC2.",
      es: "Sistema de QA médico de producción utilizando RAG. Construido con LangChain, Gemini LLM, Pinecone y Flask. Dockerizado y desplegado mediante CI/CD en AWS EC2."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/Medical-RAG", icon: <AiFillGithub /> }
    ],
    image: medical,
    target: "_blank"
  },
  {
    id: "project-3",
    title: "LinC",
    category: { en: "Web App", es: "Aplicación Web" },
    tags: ["Flask", "Gemini Vision", "HTML/CSS"],
    description_i18n: {
      en: "Job platform with ATS, Resume Builder, parsing, and real-time chat. Integrated AI-powered chat with multimodal support. Made using HTML, CSS, Javascript, Flask, Google Pro Vision.",
      es: "Plataforma de empleo con ATS, creador de currículums, análisis y chat en tiempo real. Chat integrado con IA."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/LinC", icon: <AiFillGithub /> }
    ],
    image: linc,
    target: "_blank"
  },
  {
    id: "project-2",
    title: "Data Sphere",
    category: { en: "Data Engineering", es: "Ingeniería de Datos" },
    tags: ["SQL Server", "Data Warehouse"],
    description_i18n: {
      en: "Built a SQL Server data warehouse by integrating ERP and CRM sales data from CSV sources. Performed data cleansing and created a robust analytical data model.",
      es: "Construí un almacén de datos en SQL Server integrando datos de ventas de ERP y CRM desde fuentes CSV. Realicé limpieza de datos y creé un modelo analítico."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/Data-Sphere", icon: <AiFillGithub /> }
    ],
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070&ixlib=rb-4.0.3",
    target: "_blank"
  },
  {
    id: "project-1",
    title: "Bank Customer Churn Analysis",
    category: { en: "Data Analytics", es: "Análisis de Datos" },
    tags: ["Power BI", "SQL"],
    description_i18n: {
      en: "Analyzed bank customer churn using Power BI, SQL. Identified a 20.37% churn rate and key factors. Recommended personalized services and loyalty programs.",
      es: "Analicé la rotación de clientes de un banco usando Power BI, SQL. Identifiqué una tasa de rotación del 20.37% y factores clave."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/Bank-Customer-Churn-Analysis", icon: <AiFillGithub /> }
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2015&ixlib=rb-4.0.3",
    target: "_blank"
  },
  {
    id: "project-11",
    title: "Sonar Signal Classification – Rock vs Mine Detection",
    category: { en: "Machine Learning", es: "Aprendizaje Automático" },
    tags: ["Python", "Scikit-Learn", "Machine Learning"],
    description_i18n: {
      en: "Engineered a supervised ML pipeline to classify sonar signal reflections into hazardous (Mine) vs safe (Rock) categories. Applied probabilistic modeling via Logistic Regression and evaluated model performance prioritizing the reduction of high-risk False Negatives.",
      es: "Diseñé un pipeline de ML supervisado para clasificar reflejos de señales de sonar en categorías peligrosas (Mina) frente a seguras (Roca). Apliqué modelado probabilístico y evalué el rendimiento priorizando la reducción de falsos negativos de alto riesgo."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/Sonar-Signal-Classification-Rock-vs-Mine-Detection", icon: <AiFillGithub /> }
    ],
    image: sonar,
    target: "_blank"
  },
  {
    id: "project-10",
    title: "Walmart Sales Analysis",
    category: { en: "Business Intelligence", es: "Inteligencia de Negocios" },
    tags: ["SQL", "Data Analytics", "BI"],
    description_i18n: {
      en: "Built a structured SQL analytics pipeline to extract revenue, product, and customer insights from multi-branch retail sales data. Applied feature engineering to uncover temporal patterns and delivered data-driven recommendations for inventory optimization.",
      es: "Construí un pipeline de análisis SQL para extraer información de ventas minoristas. Apliqué ingeniería de características para descubrir patrones temporales y entregué recomendaciones basadas en datos para la optimización de inventario."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/", icon: <AiFillGithub /> }
    ],
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3",
    target: "_blank"
  },
  {
    id: "project-9",
    title: "Lung Cancer Detection using YOLOv8",
    category: { en: "Computer Vision / AI", es: "Visión por Computadora / IA" },
    tags: ["YOLOv8", "Deep Learning", "Computer Vision"],
    description_i18n: {
      en: "Engineered a deep learning-based lung cancer detection system achieving 99.81% accuracy using YOLOv8s on histopathological data. Optimized training efficiency, reaching near-perfect performance within 2 epochs. Designed a production-ready prediction pipeline generating both visual outputs and JSON results.",
      es: "Diseñé un sistema de detección de cáncer de pulmón basado en aprendizaje profundo que alcanzó una precisión del 99,81 % utilizando YOLOv8s en datos histopatológicos. Optimicé la eficiencia del entrenamiento en 2 épocas y creé un pipeline de predicción."
    },
    links: [
      { name: "repo", url: "https://github.com/hello-mr-vishu/", icon: <AiFillGithub /> }
    ],
    image: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=2080&ixlib=rb-4.0.3",
    target: "_blank"
  }
];

export default projectConfig;
