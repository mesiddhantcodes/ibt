"use client";
import Link from "next/link";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";
import { residentalsLink, commercialLink } from "../constants";
export default function Navbar() {
    const [open, setOpen] = useState(false); // Mobile menu
    const [residentalOpen, setResidentalOpen] = useState(false); // Projects dropdown
    const [servicesOpen, setServicesOpen] = useState(false); // Services dropdown
    const [commercialOpen, setCommercialOpen] = useState(false);
    // refs
    const servicesRef = useRef<HTMLDivElement>(null);
    const residentalRef = useRef<HTMLDivElement>(null); // new ref for residentals
    const commercialRef = useRef<HTMLDivElement>(null);



    const items = [
        { label: "Home", href: "/" },
        { label: "About", href: "#about" },
        // { label: "Services", href: "#services" },
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
            if (residentalRef.current && !residentalRef.current.contains(e.target as Node)) {
                setResidentalOpen(false);
            }
            if (servicesRef.current && !servicesRef.current.contains(e.target as Node)) {
                setServicesOpen(false);
            }
            if (commercialRef.current && !commercialRef.current.contains(e.target as Node)) {
                setCommercialOpen(false);
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
                        width={0}
                        height={0}
                        sizes="172vw"
                        className="w-72 md:w-80 lg:w-[480px] h-auto"
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
                    {/* services dropdown */}
                    <div className="relative z-50" ref={servicesRef}>
                        <button
                            onClick={() => setServicesOpen((prev) => !prev)}
                            className="hover:text-ibtTeal transition flex items-center"
                            style={{ color: "#2AB8A7" }}
                        >
                            Services ▾
                        </button>

                        <div
                            className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 transform transition-all duration-200 ease-out origin-top 
                            ${servicesOpen ? "opacity-100 scale-y-100 pointer-events-auto" : "opacity-0 scale-y-0 pointer-events-none"}`}
                        >
                            <a
                                href="#services"
                                onClick={() => setServicesOpen(false)}
                                className="block px-4 py-2 text-[#2AB8A7] hover:bg-gray-100"
                            >
                                View Services
                            </a>
                            <a
                                href="https://infinitebuildingtech.com/"
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={() => setServicesOpen(false)}
                                className="block px-4 py-2 text-[#2AB8A7] hover:bg-gray-100"
                            >
                                UPVC
                            </a>
                        </div>
                    </div>

                    {/* Projects Dropdown */}
                    <div className="relative z-50" ref={residentalRef}>
                        <button
                            onClick={() => setResidentalOpen((prev) => !prev)}
                            className="hover:text-ibtTeal transition flex items-center"
                            style={{ color: "#2AB8A7" }}
                        >
                            Residentals ▾
                        </button>

                        {/* Animated Dropdown */}
                        <div
                            className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 transform transition-all duration-200 ease-out origin-top ${residentalOpen
                                ? "opacity-100 scale-y-100"
                                : "opacity-0 scale-y-0 pointer-events-none"
                                }`}
                        >
                            {residentalsLink.map((p) => (
                                <Link
                                    key={p.href}
                                    href={p.href}
                                    className="block px-4 py-2 text-[#2AB8A7] hover:bg-gray-100"
                                    onClick={() => setResidentalOpen(false)}

                                >
                                    {p.label}
                                </Link>
                            ))}
                        </div>
                    </div>
                    <div className="relative z-50" ref={commercialRef}>
                        <button
                            onClick={() => setCommercialOpen((prev) => !prev)}
                            className="hover:text-ibtTeal transition flex items-center"
                            style={{ color: "#2AB8A7" }}
                        >
                            Commercial ▾
                        </button>
                        <div
                            className={`absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-md border border-gray-200 transform transition-all duration-200 ease-out origin-top ${commercialOpen
                                ? "opacity-100 scale-y-100"
                                : "opacity-0 scale-y-0 pointer-events-none"
                                }`}
                        >
                            {commercialLink.map((p) => (
                                <Link
                                    key={p.href}
                                    href={p.href}
                                    onClick={() => setCommercialOpen(false)}

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
            {/* Mobile Menu */}
            {open && (
                <div className="md:hidden text-[#2AB8A7] shadow-md">
                    <div className="flex flex-col px-4 py-4 gap-2">
                        {/* Main Items */}
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

                        {/* Services */}
                        <details className="border-b">
                            <summary className="py-2 cursor-pointer">Services</summary>
                            <div className="flex flex-col pl-4">
                                <a
                                    href="#services"
                                    onClick={() => setOpen(false)}
                                    className="py-2 border-b"
                                >
                                    View Services
                                </a>
                                <a
                                    href="https://infinitebuildingtech.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    onClick={() => setOpen(false)}
                                    className="py-2 border-b"
                                >
                                    UPVC
                                </a>
                            </div>
                        </details>

                        {/* Residentals */}
                        <details className="border-b">
                            <summary className="py-2 cursor-pointer">Residentals</summary>
                            <div className="flex flex-col pl-4">
                                {residentalsLink.map((p) => (
                                    <Link
                                        key={p.href}
                                        href={p.href}
                                        onClick={() => setOpen(false)}
                                        className="py-2 border-b"
                                    >
                                        {p.label}
                                    </Link>
                                ))}
                            </div>
                        </details>

                        {/* Commercial */}
                        <details className="border-b">
                            <summary className="py-2 cursor-pointer">Commercial</summary>
                            <div className="flex flex-col pl-4">
                                {commercialLink.map((p) => (
                                    <Link
                                        key={p.href}
                                        href={p.href}
                                        onClick={() => setOpen(false)}
                                        className="py-2 border-b"
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
