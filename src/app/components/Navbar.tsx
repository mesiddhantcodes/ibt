"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { projectLinks } from "../constants";
export default function Navbar() {
    const [open, setOpen] = useState(false); // Mobile menu
    const [projectsOpen, setProjectsOpen] = useState(false); // Projects dropdown
    const dropdownRef = useRef<HTMLDivElement>(null);

    const items = [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        { label: "Services", href: "#services" },
        { label: "Showcase", href: "#showcase" },
        { label: "Contact", href: "#contact" },
    ];

    // const projectLinks = [
    //     { label: "Brigade Group", href: "/brigade" },
    //     { label: "Mantri Group", href: "/mantri" },
    //     { label: "Ascendas", href: "/ascendas" },
    //     { label: "Century Group", href: "/century" },
    //     { label: "BSCPL", href: "/bscpl" },
    // ];

    // Close dropdown when clicking outside
    useEffect(() => {
        function handleClickOutside(e: MouseEvent) {
            if (
                dropdownRef.current &&
                !dropdownRef.current.contains(e.target as Node)
            ) {
                setProjectsOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <header className="fixed w-full z-30 bg-white/95 backdrop-blur-sm shadow-md ">
            <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-28">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-3">
                    <Image
                        src="/images/logoift.webp"
                        alt="IBT"
                        width={0} // Allow responsive sizing
                        height={0} // Allow responsive sizing
                        sizes="120vw"
                        className="w-56 md:w-60 lg:w-[440px] h-auto"
                        priority
                    />
                </Link>

                {/* Desktop Navigation */}
                <nav className="hidden md:flex gap-8 items-center">
                    {items.map((i) => (
                        <a
                            key={i.href}
                            href={i.href}
                            className="hover:text-ibtTeal transition"
                            style={{ color: "#2AB8A7" }}
                        >
                            {i.label}
                        </a>
                    ))}

                    {/* Projects Dropdown */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setProjectsOpen((prev) => !prev)}
                            className="hover:text-ibtTeal transition flex items-center"
                            style={{ color: "#2AB8A7" }}
                        >
                            Projects ▾
                        </button>

                        {/* Animated Dropdown */}
                        <div
                            className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 transform transition-all duration-200 ease-out origin-top ${projectsOpen
                                ? "opacity-100 scale-y-100"
                                : "opacity-0 scale-y-0 pointer-events-none"
                                }`}
                        >
                            {projectLinks.map((p) => (
                                <Link
                                    key={p.href}
                                    href={p.href}
                                    className="block px-4 py-2 text-[#2AB8A7] hover:bg-gray-100"
                                >
                                    {p.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </nav>

                {/* Mobile Menu Toggle */}
                <button
                    className="md:hidden px-2 py-1 text-[#2AB8A7] hover:text-ibtTeal transition"
                    onClick={() => setOpen((s) => !s)}
                    aria-label="Toggle menu"
                >
                    <span className="text-2xl">{open ? "×" : "☰"}</span>
                </button>
            </div>

            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden text-[#2AB8A7] shadow-md">
                    <div className="flex flex-col px-4 py-4 gap-2">
                        {items.map((i) => (
                            <a
                                key={i.href}
                                href={i.href}
                                onClick={() => setOpen(false)}
                                className="py-2 border-b"
                            >
                                {i.label}
                            </a>
                        ))}

                        {/* Projects in mobile */}
                        <details>
                            <summary className="py-2 border-b cursor-pointer">
                                Projects
                            </summary>
                            <div className="flex flex-col pl-4">
                                {projectLinks.map((p) => (
                                    <Link
                                        key={p.href}
                                        href={p.href}
                                        onClick={() => setOpen(false)}
                                        className="py-2 border-b "
                                    >
                                        {p.label}
                                    </Link>
                                ))}
                            </div>
                        </details>
                    </div>
                </div>
            )}
        </header>
    );
}
