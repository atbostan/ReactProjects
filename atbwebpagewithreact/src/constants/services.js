import React from "react"
import { FaCode, FaSketch, FaAndroid,FaReact,FaMobile } from "react-icons/fa"
const services = [
  {
    id: 1,
    icon: <FaCode className="service-icon" />,
    title: "Back-End Development",
    text: `Developing scalable back-end applications using .NET Technologies and Java`,
    soon:null,
  },
  {
    id: 2,
    icon: <FaReact className="service-icon" />,
    title: "Front-End Development",
    text: `Developing front-end applications using React and react based tools`,
    soon:null,
  },
  {
    id: 3,
    icon: <FaMobile className="service-icon" />,
    title: "Mobile Application",
    text: `These days improving my skills by learning mobile application development with React Native`,
    soon:true,
  },
]

export default services
