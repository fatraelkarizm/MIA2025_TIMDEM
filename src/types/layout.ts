interface NavItem {
     label: string;
     href: string;
     icon?: string;
     children?: NavItem[];
     
}
export const NAV_ITEMS: NavItem[] = [
     {
          label: "Cari UMKM",
          href: "/",
          icon: "home",
     },
     {
          label: "Fitur",
          href: "/explore",
          icon: "info-circle",
     },
     {

          label: "Cara Kerja",
          href: "/services",
          icon: "cog",
     },
     {
          label: "Kontak",
          href: "/contact",
          icon: "phone",
     }
];

export type { NavItem };
