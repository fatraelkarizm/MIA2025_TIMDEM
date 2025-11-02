import { NAV_ITEMS } from "@/types/layout";
import { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [activeKey, setActiveKey] = useState("/");

  return (
    <nav className="w-full max-w-7xl mx-auto flex items-center justify-between">
      <h1 className="text-white text-2xl lg:text-[32px] font-bold">
        Direktori UMKM
      </h1>

      <div className="hidden lg:flex items-center gap-6 xl:gap-10">
        {NAV_ITEMS.map((item) => {
          const isActive = activeKey === item.href;
          return (
            <Link
              key={item.href}
              to={item.href}
              onClick={() => setActiveKey(item.href)}
              className={`text-lg lg:text-xl font-bold transition-colors ${
                isActive
                  ? "text-primary underline"
                  : "text-white hover:text-primary"
              }`}
              aria-current={isActive ? "page" : undefined}
            >
              {item.label}
            </Link>
          );
        })}
      </div>

      <div className="flex items-center gap-3">
        <button className="bg-primary text-white px-5 lg:px-7 py-2 lg:py-[13px] rounded-full text-sm lg:text-base font-semibold hover:bg-[#e55f2f] transition-colors">
          Lihat Semua
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
