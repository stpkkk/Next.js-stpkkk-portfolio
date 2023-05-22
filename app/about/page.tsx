import React from "react";
import Image from "next/image";
import { Skills } from "@components/Skills";

const AboutPage: React.FC = () => {
  const getParagraphs = [
    {
      id: 0,
      text: "I`m a React developer from Petrozavodsk, I am passionate about creating highly dynamic and interactive user interfaces that seamlessly integrate with a variety of technologies. With years of experience in the field, I have honed my skills in both front-end development and back-end integration, allowing me to deliver complex web applications that meet the needs of my clients.",
    },
    {
      id: 1,
      text: "My expertise in React allows me to create scalable and performant applications that are easy to maintain and update over time. I am dedicated to staying up-to-date with the latest advancements in the React ecosystem, and I am constantly exploring new libraries and tools that can help me build better applications.",
    },
    {
      id: 2,
      text: "In addition to my technical skills, I am also a strong collaborator and communicator. I understand the importance of working closely with clients and other team members to ensure that the final product meets their needs and exceeds their expectations. I am always open to feedback and willing to make changes to ensure that the end result is a product that everyone is proud of.",
    },
    {
      id: 3,
      text: "Whether you are looking to build a new web application from scratch or need help updating an existing project, I am confident that I have the skills and experience to deliver results that meet your needs. So if you are looking for a talented and experienced React developer to join your team, please don't hesitate to get in touch!",
    },
  ];

  return (
    <div className="page_wrapper flex_between flex-wrap">
      <div className="bg-secondary flex_center flex-col max-w-[700px] w-full self-start rounded-lg sm:rounded-none">
        <Image
          src={"/assets/images/about.jpg"}
          alt="about"
          width={600}
          height={400}
          className="w-full h-auto p-10"
          priority
        />
        <Skills />
      </div>
      <div className="basis-[700px] sm:p-4">
        <h1 className="head_text">About Me</h1>
        <ul className="flex flex-col gap-y-4 font-bree">
          {getParagraphs.map(paragraph => (
            <li key={paragraph.id}>{paragraph.text}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AboutPage;
