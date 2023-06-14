export interface INav {
  path: string;
  name: string;
}

export const navLinks: INav[] = [
  { path: "/", name: "Главная" },
  { path: "/about", name: "Обо мне" },
  { path: "/my-projects", name: "Проекты" },
  { path: "/contact", name: "Контакты" },
];
