// import { useState } from "react";
// import { Menu, X } from "lucide-react";

// const Navbar = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const links = [
//     "Home",
//     "About",
//     "Skills",
//     "Projects",
//     "Achievements",
//     "Contact",
//   ];

//   const scrollTo = (id: string) => {
//     const el = document.getElementById(id.toLowerCase());
//     el?.scrollIntoView({ behavior: "smooth" });
//     setMenuOpen(false);
//   };

//   return (
//     <nav className="fixed top-0 z-50 w-full bg-black bg-opacity-70 backdrop-blur-md shadow-md">
//       <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
//         {/* Desktop Links */}
//         <ul className="hidden md:flex gap-8 text-lg justify-between items-center">
//           {links.map((link) => (
//             <li
//               key={link}
//               className="cursor-pointer hover:text-pink-500 transition-colors duration-200"
//               onClick={() => scrollTo(link)}
//             >
//               {link}
//             </li>
//           ))}
//         </ul>

//         {/* Mobile Menu Icon */}
//         <div className="md:hidden">
//           {menuOpen ? (
//             <X
//               size={28}
//               onClick={() => setMenuOpen(false)}
//               className="cursor-pointer"
//             />
//           ) : (
//             <Menu
//               size={28}
//               onClick={() => setMenuOpen(true)}
//               className="cursor-pointer"
//             />
//           )}
//         </div>
//       </div>

//       {/* Mobile Links */}
//       {menuOpen && (
//         <ul className="md:hidden bg-black bg-opacity-90 px-8 pb-4 pt-2 space-y-3 text-lg text-center">
//           {links.map((link) => (
//             <li
//               key={link}
//               className="cursor-pointer hover:text-pink-500 transition"
//               onClick={() => scrollTo(link)}
//             >
//               {link}
//             </li>
//           ))}
//         </ul>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
import { useState } from "react";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = [
    "Home",
    "About",
    "Skills",
    "Projects",
    "Achievements",
    "Contact",
  ];

  const scrollTo = (id: string) => {
    const el = document.getElementById(id.toLowerCase());
    el?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 z-50 w-full bg-black bg-opacity-70 backdrop-blur-md shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center text-white">
        {/* Desktop Centered Links */}
        <div className="hidden md:flex w-full justify-center">
          <ul className="flex gap-8 text-lg items-center">
            {links.map((link) => (
              <li
                key={link}
                onClick={() => scrollTo(link)}
                className="relative cursor-pointer px-3 py-1 transition-all duration-200 text-white group"
              >
                {link}
                <span className="absolute inset-0 border border-cyan-900 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
              </li>
            ))}
          </ul>
        </div>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          {menuOpen ? (
            <X
              size={28}
              onClick={() => setMenuOpen(false)}
              className="cursor-pointer"
            />
          ) : (
            <Menu
              size={28}
              onClick={() => setMenuOpen(true)}
              className="cursor-pointer"
            />
          )}
        </div>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <ul className="md:hidden bg-black bg-opacity-90 px-8 pb-4 pt-2 space-y-3 text-lg text-center">
          {links.map((link) => (
            <li
              key={link}
              onClick={() => scrollTo(link)}
              className="relative cursor-pointer px-3 py-2 text-white transition-all duration-200 group"
            >
              {link}
              <span className="absolute inset-0 border border-cyan-400 rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300"></span>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
