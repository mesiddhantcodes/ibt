"use client";
import { useState } from "react";

export default function ContactForm() {
    const [form, setForm] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form submitted:", form);
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

                    <input
                        type="text"
                        name="subject"
                        placeholder="Subject"
                        value={form.subject}
                        onChange={handleChange}
                        className="w-full p-3 rounded-lg bg-white shadow-md focus:outline-none focus:ring-2 focus:ring-teal-400"
                    />

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
