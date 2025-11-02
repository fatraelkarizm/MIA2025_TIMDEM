interface NavItem {
     label: string;
     href: string;
     icon?: string;
     children?: NavItem[];
     
}
export const NAV_ITEMS: NavItem[] = [
     {
          label: "Home",
          href: "/",
          icon: "home",
     },
     {
          label: "Explore",
          href: "/explore",
          icon: "info-circle",
     },
     {

          label: "Services",
          href: "/services",
          icon: "cog",
     },
     {
          label: "Contact",
          href: "/contact",
          icon: "phone",
     }
];

export type { NavItem };
