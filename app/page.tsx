import Header from "./components/Header";

export default function Home() {
  return (
    <div>
      <Header />
      <h1 className="text-4xl font-bold text-purple-400">Welcome to cnips</h1>
      <p className="mt-4 text-lg text-gray-300">
        This is a simple portfolio website built with Next.js and Tailwind CSS.
      </p>
      <div className="mt-8">
        <a href="/project-details" className="text-purple-400 hover:text-purple-300 transition duration-300">
          View Project Details
        </a>
      </div>
    </div>
  );
}