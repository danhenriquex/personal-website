import React from "react";
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
  SiJavascript,
  SiAngular,
  SiGit,
  SiGooglecloud,
  SiGrafana,
  SiPrometheus,
} from "react-icons/si";
import { Brain, Code, Database, Wrench } from "lucide-react";

const TechBadge = ({ 
  name, 
  icon: Icon 
}: { 
  name: string;
  icon: React.ComponentType<{ className?: string }>;
}) => (
  <span className="flex items-center gap-2 px-3 py-1.5 bg-gray-700 text-gray-200 rounded-full text-sm hover:bg-gray-600 transition-colors">
    <Icon className="w-4 h-4" />
    {name}
  </span>
);

const TechStackCard = ({ 
  icon: Icon, 
  title, 
  technologies 
}: { 
  icon: React.ElementType;
  title: string;
  technologies: Array<{ name: string; icon: React.ComponentType<{ className?: string }> }>;
}) => (
  <div className="border border-gray-700 rounded-2xl p-6 hover:border-cyan-400 transition-colors">
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-xl flex items-center justify-center">
        <Icon className="w-6 h-6 text-white" />
      </div>
      <h3 className="text-white text-xl font-semibold">{title}</h3>
    </div>
    <div className="flex flex-wrap gap-2">
      {technologies.map((tech) => (
        <TechBadge key={tech.name} name={tech.name} icon={tech.icon} />
      ))}
    </div>
  </div>
);

export function AboutMe() {
  const techStacks = [
    {
      icon: Brain,
      title: "IA & Machine Learning",
      technologies: [
        { name: "TensorFlow", icon: SiTensorflow },
        { name: "PyTorch", icon: SiPytorch },
        { name: "scikit-learn", icon: SiScikitlearn },
        { name: "Python", icon: SiPython },
        { name: "FastAPI", icon: SiFastapi },
      ]
    },
    {
      icon: Code,
      title: "Desenvolvimento",
      technologies: [
        { name: "React", icon: SiReact },
        { name: "React Native", icon: SiNativescript },
        { name: "TypeScript", icon: SiTypescript },
        { name: "JavaScript", icon: SiJavascript },
        { name: "Node.js", icon: SiNodedotjs },
        { name: "Angular", icon: SiAngular },
        { name: "Expo", icon: SiExpo },
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "React Query", icon: SiReactquery },
      ]
    },
    {
      icon: Database,
      title: "Infraestrutura & DevOps",
      technologies: [
        { name: "Docker", icon: SiDocker },
        { name: "PostgreSQL", icon: SiPostgresql },
        { name: "Git", icon: SiGit },
        { name: "CI/CD", icon: SiCypress },
        { name: "GCP", icon: SiGooglecloud },
        { name: "Kafka", icon: SiApachekafka },
        { name: "Golang", icon: SiGo },
        { name: "Grafana", icon: SiGrafana },
        { name: "Prometheus", icon: SiPrometheus },
      ]
    },
    {
      icon: Wrench,
      title: "Design & Ferramentas",
      technologies: [
        { name: "Tailwind", icon: SiTailwindcss },
        { name: "React", icon: SiReact },
        { name: "TypeScript", icon: SiTypescript },
      ]
    }
  ];

  return (
    <div className="bg-gray-900 py-12 px-6">
      <div className="max-w-7xl mx-auto space-y-12">
        {/* About Me Section - Full Width */}
        <div className="border border-gray-700 rounded-3xl p-8 md:p-12">
          <h2 className="text-white text-4xl md:text-5xl font-bold mb-6">
            About me
          </h2>
          <div className="text-gray-300 space-y-4 text-lg max-w-4xl">
            <p>
              I&apos;m a passionate full-stack developer with over 5 years of
              experience building scalable applications and interactive web
              experiences. My journey in tech began with curiosity and has
              evolved into expertise across multiple domains.
            </p>
            <p>
              I specialize in creating responsive, user-friendly interfaces
              that not only look great but also deliver exceptional
              performance. My background in computer science provides me with
              a solid foundation for problem-solving and efficient code
              implementation.
            </p>
            <p>
              When I&apos;m not coding, you can find me exploring new
              technologies, contributing to open-source projects, or sharing
              my knowledge through technical articles and mentorship.
            </p>
          </div>
        </div>

        {/* Tech Stack Section */}
        <div>
          <div className="text-center mb-10">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="text-white">Stack </span>
              <span className="font-bold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent text-4xl md:text-5xl">
                Tecnológico
              </span>
            </h2>
            <p className="text-gray-400 text-lg">
              Expertise técnica abrangente em IA, desenvolvimento full-stack e infraestrutura
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {techStacks.map((stack) => (
              <TechStackCard
                key={stack.title}
                icon={stack.icon}
                title={stack.title}
                technologies={stack.technologies}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}