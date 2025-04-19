// AboutMe.tsx
import React from "react";

interface Technology {
  name: string;
  color: string;
  textColor: string;
  animationDelay: string;
  animationDuration: string;
}

interface TechChipProps {
  tech: Technology;
}

// Add animation keyframes to your global CSS file (e.g., globals.css)
// Add this at the top of the component or in a separate CSS file:
const floatingAnimationCSS = `
@keyframes float {
  0% {
    transform: translate(0, 0);
  }
  25% {
    transform: translate(10px, -15px);
  }
  50% {
    transform: translate(-5px, 10px);
  }
  75% {
    transform: translate(-15px, -5px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.float {
  animation-name: float;
  animation-timing-function: ease-in-out;
  animation-iteration-count: infinite;
}
`;

const technologies: Technology[] = [
  {
    name: "JavaScript",
    color: "bg-yellow-200",
    textColor: "text-gray-800",
    animationDelay: "0s",
    animationDuration: "15s",
  },
  {
    name: "React",
    color: "bg-blue-400",
    textColor: "text-white",
    animationDelay: "1s",
    animationDuration: "18s",
  },
  {
    name: "TypeScript",
    color: "bg-blue-600",
    textColor: "text-white",
    animationDelay: "2s",
    animationDuration: "20s",
  },
  {
    name: "Node.js",
    color: "bg-green-500",
    textColor: "text-white",
    animationDelay: "0.5s",
    animationDuration: "17s",
  },
  {
    name: "Python",
    color: "bg-indigo-500",
    textColor: "text-white",
    animationDelay: "1.5s",
    animationDuration: "19s",
  },
  {
    name: "Tailwind",
    color: "bg-teal-400",
    textColor: "text-gray-800",
    animationDelay: "2.5s",
    animationDuration: "16s",
  },
  {
    name: "Next.js",
    color: "bg-gray-800",
    textColor: "text-white",
    animationDelay: "0.7s",
    animationDuration: "21s",
  },
  {
    name: "Docker",
    color: "bg-blue-500",
    textColor: "text-white",
    animationDelay: "1.2s",
    animationDuration: "22s",
  },
  {
    name: "AWS",
    color: "bg-orange-400",
    textColor: "text-white",
    animationDelay: "2.2s",
    animationDuration: "19s",
  },
  {
    name: "MongoDB",
    color: "bg-green-600",
    textColor: "text-white",
    animationDelay: "1.8s",
    animationDuration: "23s",
  },
];

const TechChip = ({ tech }: TechChipProps) => {
  return (
    <div
      className={`${tech.color} ${tech.textColor} px-4 py-2 rounded-full font-medium inline-block float`}
      style={{
        animationDuration: tech.animationDuration,
        animationDelay: tech.animationDelay,
      }}
    >
      {tech.name}
    </div>
  );
};

export const AboutMe: React.FC = () => {
  return (
    <section className="py-16 px-6 bg-gray-900">
      {/* Include the keyframes animation CSS */}
      <style dangerouslySetInnerHTML={{ __html: floatingAnimationCSS }} />

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row gap-8">
          {/* Left Column - About Me Text */}
          <div className="w-full md:w-1/2 bg-gray-800 rounded-3xl p-8">
            <div className="text-gray-400 text-sm font-medium mb-4">
              &lt;Know Me&gt;
            </div>
            <h2 className="text-white text-4xl font-bold mb-6">About me</h2>
            <div className="text-gray-300 space-y-4">
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

          {/* Right Column - Technologies */}
          <div className="w-full md:w-1/2 bg-gray-800 rounded-3xl p-8 relative overflow-hidden">
            <div className="text-gray-400 text-sm font-medium mb-4">
              &lt;My Stack&gt;
            </div>
            <div className="text-white text-4xl font-bold mb-6">
              Technologies and expertise
            </div>

            {/* Technologies cloud */}
            <div className="relative h-64 w-full">
              {technologies.map((tech, index) => (
                <div
                  key={tech.name}
                  className="absolute"
                  style={{
                    left: `${20 + (index % 3) * 30}%`,
                    top: `${20 + Math.floor(index / 3) * 25}%`,
                  }}
                >
                  <TechChip tech={tech} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
