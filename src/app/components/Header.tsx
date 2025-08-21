
"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="bg-white shadow-md fixed top-0 w-full z-50">
            <div className="container mx-auto flex justify-between items-center p-4">
                {/* Logo */}
                <Link href="/" className="text-lg font-bold " style={{ color: "#2AB8A7" }}
                >
                    MyLogo
                </Link>

                {/* Desktop Navbar */}
                <nav className="hidden md:flex space-x-6">
                    <Link href="/" style={{ color: "#2AB8A7" }}
                    >Home</Link>
                    <Link href="/about" className="hover:text-blue-500">About</Link>
                    <Link href="/services" className="hover:text-blue-500">Services</Link>
                    <Link href="/contact" className="hover:text-blue-500">Contact</Link>
                </nav>

                {/* Mobile Menu Button */}
                <button
                    className="md:hidden focus:outline-none"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    ☰
                </button>
            </div>

            {/* Mobile Menu */}
            {isOpen && (
                <nav className="md:hidden bg-white shadow-lg">
                    <ul className="flex flex-col items-center space-y-4 p-4">
                        <Link href="/" onClick={() => setIsOpen(false)}>Home</Link>
                        <Link href="/about" onClick={() => setIsOpen(false)}>About</Link>
                        <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                        <Link href="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
                    </ul>
                </nav>
            )}
        </header>
    );
}
