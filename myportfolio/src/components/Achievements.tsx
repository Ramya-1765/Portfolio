// src/components/Achievements.tsx

import { achievements } from "../data/achievements";

const Achievements = () => {
  return (
    <section
      id="achievements"
      className="py-16 px-4 md:px-10 bg-gradient-to-b from-gray-900 to-black text-white"
    >
      <h2 className="text-3xl md:text-4xl font-bold mb-10 text-center text-cyan-400">
        Achievements
      </h2>
      <div className="grid gap-10">
        {achievements.map((achievement, index) => (
          <div
            key={index}
            className="flex flex-col md:flex-row  rounded-3xl shadow-lg hover:shadow-cyan-500/50 transition-all duration-300 group overflow-hidden border border-gray-700]"
          >
            {/* Left: Preview Image */}
            <div className="md:w-1/2 w-full">
              <img
                src={achievement.image}
                alt={achievement.title}
                className="object-contain w-full h-full max-h-[250px] md:max-h-none"
              />
            </div>

            {/* Right: Content */}
            <div className="md:w-1/2 w-full p-6 flex flex-col justify-center">
              <h3 className="text-2xl font-semibold text-cyan-300 mb-2">
                {achievement.title}
              </h3>
              <h6 className="text-xl font-semibold text-white-500 mb-2">
                Conducted by: {achievement.conductedBy}
              </h6>
              <h6 className="text-xl font-semibold text-cyan-500 mb-2">
                Contribution: {achievement.contirbution}
              </h6>
              <p className="text-gray-300">{achievement.description1}</p>
              <p className="text-gray-300">{achievement.description2}</p>
              {achievement.link && (
                <a
                  href={achievement.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block text-sm text-cyan-400 hover:underline"
                >
                  View More ↗
                </a>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievements;
