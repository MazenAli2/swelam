"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";

const navLinks = [
    { name: "الرئيسية", href: "#home" },
    { name: "الفلسفة", href: "#philosophy" },
    { name: "الخبرات", href: "#expertise" },
    { name: "دراسات الحالة", href: "#cases" },
    { name: "السيرة الذاتية", href: "#resume" },
    { name: "العملية", href: "#process" },
];

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenu, setMobileMenu] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "py-4 glass-nav" : "py-6 bg-transparent"}`}>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo */}
                <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center font-bold text-black text-xl">S</div>
                    <span className="text-xl font-bold tracking-tight hidden sm:block">محمد سويلم</span>
                </div>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-8 glass-card border-white/5 px-8 py-2 rounded-full">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-sm font-medium text-white/70 hover:text-primary transition-colors">
                            {link.name}
                        </a>
                    ))}
                </div>

                {/* Contact CTA */}
                <div className="hidden md:block">
                    <a href="https://wa.me/201503508515" className="px-6 py-2.5 rounded-full bg-primary/10 border border-primary/20 text-primary hover:bg-primary hover:text-black transition-all font-semibold flex items-center gap-2">
                        <Phone size={16} />
                        تواصل الآن
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-white" onClick={() => setMobileMenu(!mobileMenu)}>
                    {mobileMenu ? <X size={28} /> : <Menu size={28} />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileMenu && (
                    <motion.div
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="absolute top-full left-0 right-0 glass-nav p-6 md:hidden border-t border-white/5"
                    >
                        <div className="flex flex-col gap-6 text-center">
                            {navLinks.map((link) => (
                                <a key={link.name} href={link.href} className="text-lg font-medium" onClick={() => setMobileMenu(false)}>{link.name}</a>
                            ))}
                            <a href="https://wa.me/201503508515" className="w-full py-4 rounded-xl bg-primary text-black font-bold">تواصل الآن</a>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
}
