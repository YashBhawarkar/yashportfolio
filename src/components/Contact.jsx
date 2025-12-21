// file: src/components/Contact.jsx
import React, { useState } from "react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const [form, setForm] = useState({
    user_email: "",
    user_name: "",
    subject: "",
    message: "",
    // Honeypot (bots often fill hidden fields)
    company: "",
  });

  const [status, setStatus] = useState({
    state: "idle", // "idle" | "sending" | "success" | "error"
    message: "",
  });

  const serviceId = process.env.REACT_APP_EMAILJS_SERVICE_ID;
  const templateId = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
  const publicKey = process.env.REACT_APP_EMAILJS_PUBLIC_KEY;

  const onChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const resetForm = () => {
    setForm({
      user_email: "",
      user_name: "",
      subject: "",
      message: "",
      company: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Honeypot triggered → treat as success, do nothing
    if (form.company.trim().length > 0) {
      setStatus({ state: "success", message: "Message sent successfully." });
      resetForm();
      return;
    }

    if (!serviceId || !templateId || !publicKey) {
      setStatus({
        state: "error",
        message:
          "Email service is not configured. Please try again later or email me directly.",
      });
      return;
    }

    try {
      setStatus({ state: "sending", message: "Sending..." });

      // Map to your EmailJS template variables
      const templateParams = {
        from_email: form.user_email,
        from_name: form.user_name,
        subject: form.subject,
        message: form.message,
      };

      await emailjs.send(serviceId, templateId, templateParams, {
        publicKey,
      });

      setStatus({ state: "success", message: "Message sent! I’ll get back to you soon." });
      resetForm();
    } catch (err) {
      setStatus({
        state: "error",
        message: "Something went wrong while sending. Please try again or email me directly.",
      });
    }
  };

  const isSending = status.state === "sending";

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[12vw] md:px-[7vw] lg:px-[20vw]"
    >
      <div className="text-center mb-6">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          Open to collaborations, research, and opportunities.
        </p>
      </div>

      <div className="mt-8 w-full max-w-md bg-[#0d081f] p-6 rounded-lg shadow-lg border border-gray-700">
        <h3 className="text-xl font-semibold text-white text-center">
          Connect With Me <span className="ml-1">🚀</span>
        </h3> 

        {/* Status message */}
        {status.state !== "idle" && (
          <div
            className={`mb-4 rounded-md p-3 text-sm border ${
              status.state === "success"
                ? "bg-green-500/10 border-green-500/30 text-green-200"
                : status.state === "error"
                ? "bg-red-500/10 border-red-500/30 text-red-200"
                : "bg-gray-500/10 border-gray-500/30 text-gray-200"
            }`}
          >
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="mt-4 flex flex-col space-y-4">
          {/* Honeypot field (hidden from humans) */}
          <input
            type="text"
            name="company"
            value={form.company}
            onChange={onChange}
            autoComplete="off"
            tabIndex={-1}
            className="hidden"
            aria-hidden="true"
          />

          <input
            type="email"
            name="user_email"
            value={form.user_email}
            onChange={onChange}
            placeholder="Your Email"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="user_name"
            value={form.user_name}
            onChange={onChange}
            placeholder="Your Name"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <input
            type="text"
            name="subject"
            value={form.subject}
            onChange={onChange}
            placeholder="Subject"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Message"
            rows="4"
            required
            className="w-full p-3 rounded-md bg-[#131025] text-white border border-gray-600 focus:outline-none focus:border-purple-500"
          />

          <button
            type="submit"
            disabled={isSending}
            className={`w-full py-3 text-white font-semibold rounded-md transition ${
              isSending
                ? "bg-gray-600 cursor-not-allowed"
                : "bg-gradient-to-r from-purple-600 to-pink-500 hover:opacity-90"
            }`}
          >
            {isSending ? "Sending..." : "Send"}
          </button>
        </form>
      </div>
    </section>
  );
}