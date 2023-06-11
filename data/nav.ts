export interface INav {
  path: string;
  name: string;
}

export const navLinks: INav[] = [
  { path: "/", name: "Home" },
  { path: "/about", name: "About" },
  { path: "/my-projects", name: "Projects" },
  { path: "/contact", name: "Contact" },
];
