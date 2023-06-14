import React from "react";
import Image from "next/image";
import AboutImage from "public/assets/images/about.jpg";
import HeroImage from "public/assets/images/hero.png";
import { Skills } from "@components/Skills";

export const metadata = {
  title: "Stepanov Igor | About",
};

const AboutPage: React.FC = () => {
  const getParagraphs = [
    {
      id: 0,
      text: "Я React-разработчик из Петрозаводска, увлечен созданием высокодинамичных и интерактивных пользовательских интерфейсов, которые легко интегрируются с различными технологиями. Имея отличный опыт работы в этой области, я отточил свои навыки как в разработке внешнего интерфейса, так и в интеграции внутреннего интерфейса, что позволило мне создавать сложные веб-приложения, отвечающие потребностям моих клиентов.",
    },
    {
      id: 1,
      text: "Способен создавать масштабируемые и производительные приложения, которые легко поддерживать и обновлять с течением времени. Я стремлюсь быть в курсе последних достижений в экосистеме React и постоянно изучаю новые библиотеки и инструменты, которые помогут мне реализовывать интересные приложения.",
    },
    {
      id: 2,
      text: "В дополнение к моим техническим навыкам, я также сильный сотрудник и коммуникатор. Я понимаю важность тесного сотрудничества с клиентами и другими членами команды, чтобы конечный продукт соответствовал их потребностям и превосходил их ожидания. Всегда открыт для обратной связи и готов вносить изменения, чтобы конечным результатом все гордились.",
    },
    {
      id: 3,
      text: "Независимо от того, хотите ли вы создать новое веб-приложение с нуля или вам нужна помощь в обновлении существующего проекта, я уверен, что у меня есть навыки и опыт для достижения результатов, отвечающих вашим потребностям. Поэтому, если вы ищете талантливого и опытного разработчика React, который присоединится к вашей команде, не стесняйтесь и обращайтесь ко мне! 😉",
    },
  ];

  return (
    <div className="page_wrapper gap-16 sm:gap-4">
      <div className="bg-secondary flex_center flex-col rounded-lg basis-[40%] p-10 sm:p-4 md:w-full">
        <h1 className="head_text text-black">Обо Мне</h1>
        <Image
          src={AboutImage}
          alt="about"
          width={600}
          height={400}
          className="p-10 sm:p-0"
          priority
          quality={100}
        />

        <Skills />
      </div>
      <div className="flex-1">
        <div />
        <Image
          src={HeroImage}
          alt="hero"
          className="mx-auto h-auto w-[300px] mb-10 sm:w-[200px] sm:my-4"
        />
        <ul className="flex flex-col gap-y-4 font-ubuntu">
          {getParagraphs.map(p => (
            <li key={p.id}>{p.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
