"use client";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        try {
            // Convert form data to URL-encoded format
            const formData = new URLSearchParams();
            Object.entries(form).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const response = await fetch(
                "https://script.google.com/macros/s/AKfycbzSVz11B5v0pW5_H1BcJvUuTq8De8TBSqAAey8jntdklxwKxn33Hn-2bnWepDmPWw324g/exec",
                {
                    method: "POST",
                    body: formData,
                }
            );

            const result = await response.text(); // Apps Script usually returns plain text
            console.log("Success:", result);
            alert("Your message has been sent successfully!");
            setForm({ name: "", email: "", subject: "", message: "" });
        } catch (error) {
            console.error("Error:", error);
            alert("An error occurred while sending your message. Please try again later.");
        }
    };

    return (
        <section className="py-10 px-6 bg-white">
            <div className="max-w-3xl mx-auto">
                <h2 className="text-2xl font-goudy text-gray-800 mb-6 text-center">
                    Get in Touch
                </h2>

                <form onSubmit={handleSubmit} className="grid gap-5">
                    <div className="grid md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            name="name"
                            placeholder="Your Name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                        <input
                            type="email"
                            name="email"
                            placeholder="Your Email"
                            value={form.email}
                            onChange={handleChange}
                            required
                            className="w-full p-3 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>
                    <div className="grid md:grid-cols-2 gap-5">
                        <input
                            type="text"
                            name="subject"
                            placeholder="Subject"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        /><input
                            type="number"
                            name="phone number"
                            placeholder="Phone Number"
                            value={form.subject}
                            onChange={handleChange}
                            className="w-full p-3 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                        />
                    </div>

                 

                    <textarea
                        name="message"
                        placeholder="Your Message"
                        rows={5}
                        value={form.message}
                        onChange={handleChange}
                        required
                        className="w-full p-3 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    ></textarea>

                    <button
                        type="submit"
                        className="w-full md:w-fit px-6 py-3 bg-teal-500 text-white rounded-lg shadow-md hover:bg-teal-600 transition"
                    >
                        Send Enquiry
                    </button>
                </form>
            </div>
        </section>
    );
}
