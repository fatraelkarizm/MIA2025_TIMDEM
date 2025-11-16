import { NAV_ITEMS } from "@/types/layout";

import { Link } from "react-router-dom";

interface NavbarProps {
  activeSection?: string;
  onSectionClick?: (sectionId: string) => void;
}

const Navbar = ({ activeSection = "hero", onSectionClick }: NavbarProps) => {
  // Map section ke nav item yang seharusnya active
  const getSectionActiveItem = (section: string) => {
    switch (section) {
      case "features":
        return "Fitur";
      case "how-it-works":
        return "Cara Kerja";
      case "cta":
        return "Kontak";
      default:
        return "Cari UMKM";
    }
  };

  // Map nav item ke section ID
  const getNavItemSection = (label: string) => {
    switch (label) {
      case "Cari UMKM":
        return "hero-section";
      case "Fitur":
        return "features-section";
      case "Cara Kerja":
        return "how-it-works-section";
      case "Kontak":
        return "cta-section";
      default:
        return "hero-section";
    }
  };

  const activeNavItem = getSectionActiveItem(activeSection);

  const handleNavClick = (label: string, e: React.MouseEvent) => {
    e.preventDefault();
    const sectionId = getNavItemSection(label);
    if (onSectionClick) {
      onSectionClick(sectionId);
    }
  };

  return (
    <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
      <h1 className="text-white text-2xl lg:text-[32px] font-bold">
        Direktori UMKM
      </h1>

      <div className="hidden lg:flex items-center gap-6 xl:gap-10">
        {NAV_ITEMS.map((item) => {
          const isActive = activeNavItem === item.label;
          return (
            <button
              key={item.href}
              onClick={(e) => handleNavClick(item.label, e)}
              className={`text-lg lg:text-xl font-bold transition-colors ${
                isActive
                  ? "text-[#FF6B35] underline"
                  : "text-white hover:text-[#FF6B35]"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </button>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <Link
          to={"/beranda"}
          className="bg-primary text-white px-5 lg:px-7 py-2 lg:py-[13px] rounded-full text-sm lg:text-base font-semibold hover:bg-[#e55f2f] transition-colors"
        >
          Jelajahi UMKM
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
