export interface Technology {
  name: string;
  color: string;
  textColor: string;
  animationDelay: string;
  animationDuration: string;
}

export interface TechChipProps {
  tech: Technology;
}

export const technologies: Technology[] = [
  {
    name: "React",
    color: "bg-blue-400",
    textColor: "text-white",
    animationDelay: "0s",
    animationDuration: "18s",
  },
  {
    name: "React Native",
    color: "bg-blue-300",
    textColor: "text-white",
    animationDelay: "0.5s",
    animationDuration: "19s",
  },
  {
    name: "TensorFlow",
    color: "bg-orange-500",
    textColor: "text-white",
    animationDelay: "1s",
    animationDuration: "20s",
  },
  {
    name: "PyTorch",
    color: "bg-red-500",
    textColor: "text-white",
    animationDelay: "1.5s",
    animationDuration: "21s",
  },
  {
    name: "scikit-learn",
    color: "bg-yellow-500",
    textColor: "text-gray-800",
    animationDelay: "2s",
    animationDuration: "22s",
  },
  {
    name: "Docker",
    color: "bg-blue-500",
    textColor: "text-white",
    animationDelay: "2.5s",
    animationDuration: "23s",
  },
  {
    name: "Expo",
    color: "bg-black",
    textColor: "text-white",
    animationDelay: "3s",
    animationDuration: "24s",
  },
  {
    name: "FastAPI",
    color: "bg-teal-600",
    textColor: "text-white",
    animationDelay: "3.5s",
    animationDuration: "25s",
  },
  {
    name: "Node.js",
    color: "bg-green-500",
    textColor: "text-white",
    animationDelay: "4s",
    animationDuration: "26s",
  },
  {
    name: "Golang",
    color: "bg-cyan-600",
    textColor: "text-white",
    animationDelay: "4.5s",
    animationDuration: "27s",
  },
  {
    name: "PostgreSQL",
    color: "bg-indigo-700",
    textColor: "text-white",
    animationDelay: "5s",
    animationDuration: "28s",
  },
  {
    name: "Tailwind",
    color: "bg-teal-400",
    textColor: "text-gray-800",
    animationDelay: "5.5s",
    animationDuration: "29s",
  },
  {
    name: "React Query",
    color: "bg-pink-500",
    textColor: "text-white",
    animationDelay: "6s",
    animationDuration: "30s",
  },
  {
    name: "CI/CD",
    color: "bg-purple-600",
    textColor: "text-white",
    animationDelay: "6.5s",
    animationDuration: "31s",
  },
  {
    name: "TypeScript",
    color: "bg-blue-600",
    textColor: "text-white",
    animationDelay: "7s",
    animationDuration: "32s",
  },
  {
    name: "Python",
    color: "bg-indigo-500",
    textColor: "text-white",
    animationDelay: "7.5s",
    animationDuration: "33s",
  },
  {
    name: "Kafka",
    color: "bg-orange-600",
    textColor: "text-white",
    animationDelay: "8s",
    animationDuration: "34s",
  },
];
