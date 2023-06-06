import React from "react";
import Image from "next/image";
import contactImage from "public/assets/images/contact.jpg";
import { ContactForm } from "../../components/contact/ContactForm";

export const metadata = {
  title: "Stepanov Igor | Contact",
};

const ContactPage: React.FC = () => {
  return (
    <div className="page_wrapper md:flex_center gap-10 relative">
      <div className="flex-1 w-full">
        <h1 className="head_text text-center">Contact</h1>
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
