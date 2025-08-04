import { Tooltip } from "@nextui-org/react";
import {
  FaPython,
  FaJava,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaReact,
  FaGitAlt,
  FaDocker,
  FaNodeJs,
  FaLinux,
  FaWindows,
  FaApple,
  FaAndroid,
  FaDatabase,
} from "react-icons/fa";
import {
  SiTypescript,
  SiTailwindcss,
  SiGooglecloud,
  SiHuggingface,
  SiFlask,
  SiLangchain,
  SiTensorflow,
  SiPytorch,
  SiFastapi,
  SiStreamlit,
  SiNumpy,
  SiPandas,
  SiFigma,
  SiAdobexd,
  SiLazyvim,
} from "react-icons/si";

const skills = [
  { name: "Python", icon: <FaPython className="text-yellow-300" /> },
  { name: "Java", icon: <FaJava className="text-red-500" /> },
  { name: "JavaScript", icon: <FaJs className="text-yellow-400" /> },
  { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
  { name: "HTML", icon: <FaHtml5 className="text-orange-500" /> },
  { name: "CSS", icon: <FaCss3Alt className="text-blue-400" /> },
  { name: "Tailwind CSS", icon: <SiTailwindcss className="text-cyan-400" /> },
  { name: "ReactJS", icon: <FaReact className="text-cyan-300" /> },
  { name: "SQL", icon: <FaDatabase className="text-emerald-300" /> },
  { name: "Git", icon: <FaGitAlt className="text-orange-500" /> },
  { name: "Docker", icon: <FaDocker className="text-blue-400" /> },
  { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
  { name: "GCP", icon: <SiGooglecloud className="text-blue-400" /> },
  { name: "HuggingFace", icon: <SiHuggingface className="text-yellow-400" /> },
  { name: "LazyGit", icon: <SiLazyvim className="text-pink-300" /> },
  { name: "Flask", icon: <SiFlask className="text-white" /> },
  { name: "React Native", icon: <FaReact className="text-cyan-300" /> },
  { name: "LangChain", icon: <SiLangchain className="text-violet-400" /> },
  { name: "Windows", icon: <FaWindows className="text-blue-300" /> },
  { name: "Linux", icon: <FaLinux className="text-gray-200" /> },
  { name: "MacOS", icon: <FaApple className="text-white" /> },
  { name: "Android OS", icon: <FaAndroid className="text-green-400" /> },
  { name: "TensorFlow", icon: <SiTensorflow className="text-orange-300" /> },
  { name: "PyTorch", icon: <SiPytorch className="text-red-400" /> },
  { name: "FastAPI", icon: <SiFastapi className="text-green-400" /> },
  { name: "Streamlit", icon: <SiStreamlit className="text-pink-400" /> },
  { name: "Pandas", icon: <SiPandas className="text-white" /> },
  { name: "NumPy", icon: <SiNumpy className="text-blue-400" /> },
  // { name: "Matplotlib", icon: <SiMatplotlib className="text-indigo-400" /> },
  { name: "Figma", icon: <SiFigma className="text-pink-400" /> },
  { name: "Adobe XD", icon: <SiAdobexd className="text-pink-400" /> },
];

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-16 px-6 md:px-12 bg-gradient-to-b from-gray-900 to-black text-white px-6"
    >
      <h2 className="text-4xl font-bold text-center mb-12 text-cyan-400">
        My Skills
      </h2>
      <div className="max-w-6xl mx-auto px-4 flex flex-wrap justify-center gap-12">
        {skills.map((skill, index) => (
          <Tooltip
            key={index}
            content={skill.name}
            className="text-sm text-white group-hover:text-cyan-300 transition duration-300 m-2"
          >
            <div className="bg-[#1a1a1a] border border-cyan-500 shadow-cyan-600 shadow-md hover:shadow-cyan-400 hover:shadow-lg text-white-300 rounded-xl p-3 transition-transform transform hover:-translate-y-2 hover:scale-105 cursor-pointer w-24 h-24 flex items-center justify-center text-3xl">
              {skill.icon}
            </div>
          </Tooltip>
        ))}
      </div>
    </section>
  );
};

export default Skills;
