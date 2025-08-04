import { projects } from "../data/projects";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  return (
    <section
      className="py-16 bg-gradient-to-b from-black to-gray-900 text-white"
      id="projects"
    >
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
          Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-3xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group overflow-hidden border border-gray-700"
            >
              <div className="h-52 overflow-hidden">
                {/* <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                /> */}
                <div className="w-full h-48 overflow-hidden relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
              <div className="p-5 space-y-3">
                <h3 className="text-xl font-semibold text-cyan-300">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-xs bg-cyan-900/50 text-cyan-200 px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-end gap-4 mt-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="GitHub"
                  >
                    <Github className="w-5 h-5 text-cyan-400 hover:text-white transition" />
                  </a>
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    title="Live Demo"
                  >
                    <ExternalLink className="w-5 h-5 text-cyan-400 hover:text-white transition" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
