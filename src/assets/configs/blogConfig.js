import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { SiMedium } from "react-icons/si";
import fastapiSklearn from "../images/fastapi_sklearn.png";

const blogConfig = [
  {
    id: "blog-1",
    title: "Prompt Engineering is Overrated; Architecture Wins",
    category: { en: "AI System Design", es: "Diseño de Sistemas IA" },
    description_i18n: {
      en: "A deep dive into why system design outlasts instruction tuning. I argue that no amount of prompt optimization can fix broken state management, poor retrieval, or exploding latency. This piece explores how treating LLMs as components of a distributed system is the key to building reliable AI products.",
      es: "A deep dive into why system design outlasts instruction tuning. I argue that no amount of prompt optimization can fix broken state management, poor retrieval, or exploding latency. This piece explores how treating LLMs as components of a distributed system is the key to building reliable AI products."
    },
    links: [{ name: "article", url: "https://medium.com/@hello-mr-vishu/prompt-engineering-is-overrated-architecture-wins-04adec6b96e4", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/700/1*VKIGzmJrYBzcPlB6USx8OA.jpeg",
    target: "_blank",
    date: "2024-03-19"
  },
  {
    id: "blog-0",
    title: "Why Most RAG Systems Fail in Production",
    category: { en: "AI System Design", es: "Diseño de Sistemas IA" },
    description_i18n: {
      en: "An analysis of the gap between RAG demos and real-world deployment. I break down the five critical failure points—from \"retrieval vs. relevance\" to cost scaling—and outline the architectural layers required to move from a vector search hack to a durable, distributed AI system.",
      es: "An analysis of the gap between RAG demos and real-world deployment. I break down the five critical failure points—from \"retrieval vs. relevance\" to cost scaling—and outline the architectural layers required to move from a vector search hack to a durable, distributed AI system."
    },
    links: [{ name: "article", url: "https://medium.com/@hello-mr-vishu/why-most-rag-systems-fail-in-production-660e883714be", icon: <SiMedium/> }],
    image: "https://miro.medium.com/max/700/1*DeZYSLcMdF58BeqemGhUhg.jpeg",
    target: "_blank",
    date: "2024-03-19"
  }
];

export default blogConfig;
