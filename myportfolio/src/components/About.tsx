// // export default function About() {
// //   return (
// //     <>
// //       <h1>About</h1>
// //     </>
// //   );
// // }
// "use client";
// import { motion } from "framer-motion";
// import { FaReact, FaPython, FaNodeJs } from "react-icons/fa";

// const skills = [
//   { icon: <FaReact />, name: "React", level: "90%" },
//   { icon: <FaNodeJs />, name: "Node.js", level: "85%" },
//   { icon: <FaPython />, name: "Python", level: "95%" },
// ];

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-6 py-20"
//     >
//       <div className="max-w-5xl w-full grid md:grid-cols-2 gap-12 items-center">
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           transition={{ duration: 1 }}
//           viewport={{ once: true }}
//         >
//           <h2 className="text-4xl font-bold mb-4">About Me</h2>
//           <p className="text-gray-300 text-lg">
//             I’m a full-stack developer and AI enthusiast passionate about
//             crafting elegant, high-performance web apps and impactful AI tools.
//           </p>
//           <div className="mt-6 space-y-4">
//             {skills.map((skill) => (
//               <div key={skill.name}>
//                 <div className="flex items-center gap-3">
//                   <span className="text-xl">{skill.icon}</span>
//                   <span>{skill.name}</span>
//                 </div>
//                 <div className="w-full bg-gray-700 h-2 rounded-full overflow-hidden">
//                   <motion.div
//                     className="h-2 bg-cyan-400 rounded-full"
//                     style={{ width: skill.level }}
//                     initial={{ width: 0 }}
//                     whileInView={{ width: skill.level }}
//                     transition={{ duration: 1 }}
//                   />
//                 </div>
//               </div>
//             ))}
//           </div>
//         </motion.div>

//         <motion.img
//           src="/assets/Profile.jpg"
//           alt="My Profile"
//           className="rounded-2xl shadow-lg mx-auto max-w-[300px]"
//           initial={{ opacity: 0, scale: 0.9 }}
//           whileInView={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//         />
//       </div>
//     </section>
//   );
// };

// export default About;

const About = () => {
  return (
    <section id="about" className="py-16 px-6 md:px-12 bg-gray-900 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-6 text-cyan-400">About Me</h2>
        <p className="text-lg leading-relaxed text-gray-300">
          Curious by nature and driven by innovation, I love blending logic with
          creativity. From building smart applications to exploring AI, I aim to
          craft digital solutions that solve real-world problems while
          delivering meaningful user experiences.
        </p>

        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 cursor-pointer">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              Education
            </h3>
            <p className="text-gray-400">
              <strong>B.Tech in AI & Data Science</strong>
              <br />
              Chennai Institute of Technology (2022–2026)
              <br />
              CGPA: 8.95
            </p>
          </div>

          <div className="bg-gray-800 p-6 rounded-2xl shadow-lg transform transition-all duration-300 hover:scale-105 hover:shadow-cyan-500/50 cursor-pointer">
            <h3 className="text-xl font-semibold text-cyan-300 mb-2">
              Personality
            </h3>
            <p className="text-gray-400">
              I'm a fast learner and collaborative problem solver who thrives in
              team environments. I enjoy working on challenging projects that
              push me to grow and innovate.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
