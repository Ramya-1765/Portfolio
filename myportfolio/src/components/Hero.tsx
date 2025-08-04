import { Github, Linkedin, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { Typewriter } from "react-simple-typewriter";
import Particles from "react-tsparticles";
const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-b from-black to-gray-900 text-white px-6"
    >
      <Particles
        className="absolute inset-0 z-0"
        id="tsparticles"
        options={{
          fullScreen: { enable: false },
          particles: {
            number: { value: 50 },
            size: { value: 3 },
            move: { enable: true, speed: 1 },
            links: { enable: true, color: "#00FFFF" },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
            },
          },
          background: { color: "transparent" },
        }}
      />

      <div className="max-w-5xl w-full text-center">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={{
            hidden: {},
            visible: {
              transition: { staggerChildren: 0.3 },
            },
          }}
        >
          <motion.h1
            variants={{
              hidden: { opacity: 0, y: -40 },
              visible: { opacity: 1, y: 0 },
            }}
            transition={{ duration: 1 }}
            className="text-4xl md:text-6xl font-extrabold mb-10"
          >
            Hi, I’m <span className="text-cyan-400">S Ramyabharathi</span>
          </motion.h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="text-lg md:text-xl text-gray-300"
        >
          Think different, build better — I craft intelligent apps with AI +
          design.
        </motion.p>
        <motion.div
          className="text-lg md:text-2xl font-semibold mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4 }}
        >
          <h2 className="text-xl md:text-2xl text-gray-300">
            <Typewriter
              words={["Full Stack Developer", "AI Enthusiast", "Tech Explorer"]}
              loop
              cursor
              cursorStyle="_"
              typeSpeed={90}
              deleteSpeed={70}
              delaySpeed={1000}
            />
          </h2>
        </motion.div>
        {/* Social Icons */}
        <motion.div
          className="m-6 flex justify-center gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
        >
          {[Github, Linkedin, Mail].map((Icon, index) => (
            <motion.a
              key={index}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 300 }}
              href={
                index === 0
                  ? "https://github.com/Ramya-1765"
                  : index === 1
                  ? "https://www.linkedin.com/in/s-ramyabharathi-8aa367258/"
                  : "mailto:ramyabharathi1765@gmail.com"
              }
              target="_blank"
              className={`hover:text-${
                index === 0 ? "cyan" : index === 1 ? "blue" : "green"
              }-400 transition-all`}
            >
              <Icon size={28} />
            </motion.a>
          ))}
        </motion.div>

        {/* Call to action */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          animate={{ y: [0, -5, 0] }}
          transition={{
            repeat: Infinity,
            repeatType: "loop",
            duration: 2,
            ease: "easeInOut",
          }}
          className="px-6 py-3 bg-cyan-600 hover:bg-cyan-700 transition-all rounded-xl text-white font-semibold"
        >
          View Projects
        </motion.button>
      </div>
    </section>
  );
};

export default Hero;
