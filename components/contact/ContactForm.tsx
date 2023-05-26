"use client";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";

export const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_0jm95v8", //from services
        "template_4yabinl", //from templates
        {
          from_name: form.name,
          to_name: "Igor",
          from_email: form.email,
          to_email: "stipyk1309@gmail.com",
          message: form.message,
        },
        "uYcNVfB6L-ldGWARD" //public key
      )
      .then(
        () => {
          setLoading(false);
          alert("Thank you. I will get back to you as soon as possible 🫡.");

          setForm({
            name: "",
            email: "",
            message: "",
          });
        },
        error => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong 😢");
        }
      );
  };
  return (
    <form
      ref={formRef as React.RefObject<HTMLFormElement>}
      onSubmit={handleSubmit}
      className="flex flex-1 flex-col gap-8 bg-[#ffffff10] text-white font-bree  rounded-lg p-8 sm:gap-4 sm:p-4"
    >
      <h2>GET IN TOUCH 😊</h2>
      <label htmlFor="name" className="flex flex-col">
        <span className="font-medium mb-3">Your Name</span>
        <input
          onChange={handleChange}
          type="text"
          name="name"
          value={form.name}
          placeholder="What`s your name?"
          className="bg-gray-100 p-3 rounded-lg outline-none border-none font-medium text-black"
        />
      </label>
      <label htmlFor="email" className="flex flex-col">
        <span className="font-medium mb-3">Your Email</span>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="What`s your email?"
          className="bg-gray-100 p-3 rounded-lg outline-none border-none font-medium text-black"
        />
      </label>
      <label htmlFor="message" className="flex flex-col">
        <span className="font-medium mb-3">Your Message</span>
        <textarea
          className="bg-gray-100 p-3 rounded-lg outline-none border-none font-medium text-black"
          name="message"
          value={form.message}
          placeholder="What do you want to say?"
          onChange={handleChange}
          cols={30}
          rows={7}
        />
      </label>
      <button
        type="submit"
        className="bg-gray-100 py-3 px-8 outline-none w-fit rounded-lg font-bold shadow-md text-black"
      >
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
