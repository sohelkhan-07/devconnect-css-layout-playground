import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false);

  return (
    <nav className="h-17 w-full border-b border-[#E4E4E7] bg-[#FFFFFF]">
      <div className="mx-auto flex h-full max-w-300 items-center justify-between px-6">
        <Link
          to="/"
          className="text-[22px] font-semibold text-[#18181B] sm:text-[18px]"
        >
          LayoutLab
        </Link>

        <div className="hidden items-center gap-6 sm:flex">
          <Link
            to="/"
            className="text-[14px] font-medium text-[#52525B] transition-colors duration-200 hover:text-[#18181B]"
          >
            Home
          </Link>

          <Link
            to="/playground"
            className="text-[14px] font-medium text-[#52525B] transition-colors duration-200 hover:text-[#18181B]"
          >
            Playground
          </Link>

          <a
            href="https://github.com/sohelkhan-07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[14px] font-medium text-[#52525B] transition-colors duration-200 hover:text-[#18181B]"
          >
            GitHub
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpenMenu(!openMenu)}
          className="rounded-lg bg-[#F4F4F5] p-2 text-[#18181B] transition-colors duration-200 hover:bg-[#E4E4E7] sm:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={openMenu}
        >
          <Menu size={22} />
        </button>

        <div
          className={`fixed right-0 top-0 z-50 h-full w-3/5 bg-[#F4F4F5] transform transition-transform duration-300 ease-in-out ${
            openMenu ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <button
            type="button"
            onClick={() => setOpenMenu(false)}
            className="absolute right-6 top-6 rounded-lg p-2 text-[#18181B] transition-colors duration-200 hover:bg-[#E4E4E7]"
            aria-label="Close navigation menu"
          >
            <X size={24} />
          </button>

          <div className="flex flex-col gap-6 px-6 pt-24">
            <Link
              to="/"
              onClick={() => setOpenMenu(false)}
              className="text-[14px] font-medium text-[#52525B] transition-colors duration-200 hover:text-[#18181B]"
            >
              Home
            </Link>

            <Link
              to="/playground"
              onClick={() => setOpenMenu(false)}
              className="text-[14px] font-medium text-[#52525B] transition-colors duration-200 hover:text-[#18181B]"
            >
              Playground
            </Link>

            <a
              href="https://github.com/sohelkhan-07"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[14px] font-medium text-[#52525B] transition-colors duration-200 hover:text-[#18181B]"
            >
              GitHub
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
