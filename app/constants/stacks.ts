import {
  SiReact,
  SiNativescript,
  SiTensorflow,
  SiPytorch,
  SiScikitlearn,
  SiDocker,
  SiExpo,
  SiFastapi,
  SiNodedotjs,
  SiGo,
  SiPostgresql,
  SiTailwindcss,
  SiReactquery,
  SiTypescript,
  SiPython,
  SiApachekafka,
  SiCypress,
} from "react-icons/si";


export interface Technology {
  name: string;
  color: string;
  textColor: string;
  animationDelay: string;
  animationDuration: string;
  icon: React.ComponentType;
}

export type TechChipProps = {
  tech: {
    name: string;
    icon: React.ComponentType;
    color: string;
    textColor: string;
    animationDelay: string;
  };
};


export const technologies: Technology[] = [
  {
    name: "React",
    icon: SiReact,
    color: "bg-blue-400",
    textColor: "text-white",
    animationDelay: "0s",
    animationDuration: "18s",
  },
  {
    name: "React Native",
    icon: SiNativescript,
    color: "bg-blue-300",
    textColor: "text-white",
    animationDelay: "0.5s",
    animationDuration: "19s",
  },
  {
    name: "TensorFlow",
    icon: SiTensorflow,
    color: "bg-orange-500",
    textColor: "text-white",
    animationDelay: "1s",
    animationDuration: "20s",
  },
  {
    name: "PyTorch",
    icon: SiPytorch,
    color: "bg-red-500",
    textColor: "text-white",
    animationDelay: "1.5s",
    animationDuration: "21s",
  },
  {
    name: "scikit-learn",
    icon: SiScikitlearn,
    color: "bg-yellow-500",
    textColor: "text-gray-800",
    animationDelay: "2s",
    animationDuration: "22s",
  },
  {
    name: "Docker",
    icon: SiDocker,
    color: "bg-blue-500",
    textColor: "text-white",
    animationDelay: "2.5s",
    animationDuration: "23s",
  },
  {
    name: "Expo",
    icon: SiExpo,
    color: "bg-black",
    textColor: "text-white",
    animationDelay: "3s",
    animationDuration: "24s",
  },
  {
    name: "FastAPI",
    icon: SiFastapi,
    color: "bg-teal-600",
    textColor: "text-white",
    animationDelay: "3.5s",
    animationDuration: "25s",
  },
  {
    name: "Node.js",
    icon: SiNodedotjs,
    color: "bg-green-500",
    textColor: "text-white",
    animationDelay: "4s",
    animationDuration: "26s",
  },
  {
    name: "Golang",
    icon: SiGo,
    color: "bg-cyan-600",
    textColor: "text-white",
    animationDelay: "4.5s",
    animationDuration: "27s",
  },
  {
    name: "PostgreSQL",
    icon: SiPostgresql,
    color: "bg-indigo-700",
    textColor: "text-white",
    animationDelay: "5s",
    animationDuration: "28s",
  },
  {
    name: "Tailwind",
    icon: SiTailwindcss,
    color: "bg-teal-400",
    textColor: "text-black",
    animationDelay: "5.5s",
    animationDuration: "29s",
  },
  {
    name: "React Query",
    icon: SiReactquery,
    color: "bg-pink-500",
    textColor: "text-white",
    animationDelay: "6s",
    animationDuration: "30s",
  },
  {
    name: "CI/CD",
    icon: SiCypress,
    color: "bg-purple-600",
    textColor: "text-white",
    animationDelay: "6.5s",
    animationDuration: "31s",
  },
  {
    name: "TypeScript",
    icon: SiTypescript,
    color: "bg-blue-600",
    textColor: "text-white",
    animationDelay: "7s",
    animationDuration: "32s",
  },
  {
    name: "Python",
    icon: SiPython,
    color: "bg-indigo-500",
    textColor: "text-white",
    animationDelay: "7.5s",
    animationDuration: "33s",
  },
  {
    name: "Kafka",
    icon: SiApachekafka,
    color: "bg-orange-600",
    textColor: "text-white",
    animationDelay: "8s",
    animationDuration: "34s",
  },
];
