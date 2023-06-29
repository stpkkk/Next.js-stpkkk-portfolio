import React from "react";
import Image from "next/image";
import contactImage from "public/assets/images/contact.jpg";
import { ContactForm } from "@components";

export const metadata = {
  title: "Степанов Игорь | Контакты",
};

const ContactPage: React.FC = () => {
  return (
    <div className="page_wrapper justify-between md:flex_center gap-32 relative">
      <div className="flex-1 w-full">
        <h1 className="head_text text-center">Напишите мне</h1>
        <ContactForm />
      </div>
      <div className="flex-1 bg-secondary rounded-lg sm:px-0">
        <Image
          src={contactImage}
          alt="contact"
          width={700}
          height={300}
          className="w-full h-auto rounded-lg"
          priority
          quality={100}
        />
      </div>
    </div>
  );
};

export default ContactPage;
