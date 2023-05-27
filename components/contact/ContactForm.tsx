"use client";
import React, { useState, ChangeEvent, FormEvent } from "react";

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

    // Submit form logic goes here
    console.log("Form submitted:", formData);
    setFormData({
      name: "",
      email: "",
      message: "",
    });
    setErrors({});
  };

  return (
    <form className="max-w-md mx-auto" onSubmit={handleSubmit}>
      <div className="mb-4">
        <label
          htmlFor="name"
          className="block mb-2 font-semibold text-gray-700"
        >
          Name
        </label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${
            errors.name ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        {errors.name && <p className="text-red-500 mt-1">{errors.name}</p>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="email"
          className="block mb-2 font-semibold text-gray-700"
        >
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${
            errors.email ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        />
        {errors.email && <p className="text-red-500 mt-1">{errors.email}</p>}
      </div>
      <div className="mb-4">
        <label
          htmlFor="message"
          className="block mb-2 font-semibold text-gray-700"
        >
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          className={`w-full px-3 py-2 border ${
            errors.message ? "border-red-500" : "border-gray-300"
          } rounded-md`}
        ></textarea>
        {errors.message && (
          <p className="text-red-500 mt-1">{errors.message}</p>
        )}
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-blue-500 text-white rounded-md"
      >
        Submit
      </button>
    </form>
  );
};
