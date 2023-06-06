"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";
import emailjs from "@emailjs/browser";
import { Modal } from "./Modal";

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
}

interface FormData {
  name: string;
  email: string;
  message: string;
}

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [loading, setLoading] = useState(false);
  const [isModal, setIsModal] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const validationErrors: FormErrors = {};

    if (!formData.name.trim()) {
      validationErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "Invalid email address";
    }

    if (!formData.message.trim()) {
      validationErrors.message = "Message is required";
    }

    return validationErrors;
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // Submit form logic
    console.log("Form submitted:", formData);

    setErrors({});

    setLoading(true);
    emailjs
      .send(
        "service_0jm95v8", //from services
        "template_4yabinl", //from templates
        {
          from_name: formData.name,
          to_name: "Igor",
          from_email: formData.email,
          to_email: "stipyk1309@gmail.com",
          message: formData.message,
        },
        "uYcNVfB6L-ldGWARD" //public key
      )
      .then(
        () => {
          setLoading(false);
          setIsModal(true);
          setFormData({
            name: "",
            email: "",
            message: "",
          });
        },
        error => {
          setLoading(false);
          console.log(error);
        }
      );
  };

  return (
    <form
      className="flex flex-col gap-4 max-w-md mx-auto"
      onSubmit={handleSubmit}
    >
      {isModal && <Modal isModal={isModal} setIsModal={setIsModal} />}
      <div className="mb-4">
        <label htmlFor="name" className="block mb-2 font-semibold text-white">
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          placeholder="What`s Your Name"
          onChange={handleChange}
          className={`input ${errors.name && "ring-2 ring-[tomato]"}`}
        />
        {errors.name && (
          <p className="absolute text-sm text-[tomato] mt-1">{errors.name}</p>
        )}
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block mb-2 font-semibold text-white">
          Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          value={formData.email}
          placeholder="What`s Your Email"
          onChange={handleChange}
          className={`input ${errors.email && "ring-2 ring-[tomato]"}`}
        />
        {errors.email && (
          <p className="absolute text-sm text-[tomato] mt-1">{errors.email}</p>
        )}
      </div>
      <div className="mb-8">
        <label
          htmlFor="message"
          className="block mb-2 font-semibold text-white"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          placeholder="Write Me Something"
          onChange={handleChange}
          className={`input ${errors.message && "ring-2 ring-[tomato]"}`}
        />
        {errors.message && (
          <p className="absolute text-sm text-[tomato]">{errors.message}</p>
        )}
      </div>
      <button type="submit" className="max-w-[150px] btn btn-border-drawing">
        {loading ? "Sending..." : "Send"}
      </button>
    </form>
  );
};
