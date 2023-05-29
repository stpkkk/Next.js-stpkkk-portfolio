import React from "react";
import Image from "next/image";
import contactImage from "public/assets/images/contact.jpg";
import { ContactForm } from "../../components/contact/ContactForm";

const ContactPage: React.FC = () => {
  return (
    <div className="page_wrapper gap-10 relative">
      <div className="max-w-[500px] w-full ">
        <h1 className="head_text text-center">Contact</h1>
        <ContactForm />
      </div>
      <div className="bg-secondary px-20 rounded-lg sm:px-0">
        <Image
          src={contactImage}
          alt="contact"
          width={700}
          height={300}
          className=" w-full h-auto rounded-lg"
          priority
        />
      </div>
    </div>
  );
};

export default ContactPage;
