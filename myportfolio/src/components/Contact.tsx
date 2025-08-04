import { Github, Linkedin, Mail } from "lucide-react";
const Contact = () => {
  return (
    <section
      id="contact"
      className="w-full bg-gradient-to-b from-black to-gray-900 text-white py-20 px-6 md:px-12"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-10">
        {/* Left: Text and icons */}
        <div className="flex-1">
          <h2 className="text-4xl md:text-5xl font-bold text-cyan-400 mb-6">
            Let’s Connect
          </h2>
          <p className="text-gray-300 text-lg mb-6">
            Whether you want to collaborate, ask a question, or just chat about
            tech—my inbox is open!
          </p>

          <div className="flex flex-col gap-4 text-lg text-white-300">
            <a
              href="mailto:ramyabharathi1765@gmail.com"
              className="hover:text-white-500 transition flex items-center gap-2"
            >
              <Mail size={20} color="cyan" />
              ramyabharathi1765@gmail.com
            </a>
            <a
              href="https://github.com/Ramya-1765"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white-500 transition flex items-center gap-2"
            >
              <Github size={28} color="cyan" />
              https://github.com/Ramya-1765
            </a>
            <a
              href="https://www.linkedin.com/in/s-ramyabharathi-8aa367258/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white-500 transition flex items-center gap-2"
            >
              <Linkedin size={28} color="cyan" /> S Ramyabharathi
            </a>
          </div>
        </div>

        {/* Right: Design element or form */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-full md:w-[90%] p-6 bg-[#111827] rounded-2xl shadow-lg border border-cyan-700 hover:scale-105 transition-transform duration-300">
            <h3 className="text-xl font-semibold text-cyan-300 mb-4 text-center">
              Always open to opportunities 🚀
            </h3>
            <p className="text-gray-400 text-center">
              Feel free to reach out. I’ll get back to you as soon as possible!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
