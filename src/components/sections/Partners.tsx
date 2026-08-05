"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const partners = [
    { name: "السعدي إلكتريك", country: "العراق", category: "الطاقة الشمسية", logo: "/assets/IMG-20260423-WA0006.jpg" },
    { name: "Virtual Community", country: "السعودية", category: "حاضنات أعمال", logo: "/assets/IMG-20260423-WA0007.jpg" },
    { name: "Positive Vibes", country: "السعودية", category: "مساحات عمل", logo: "/assets/IMG-20260423-WA0008.jpg" },
    { name: "Pro Gear Egypt", country: "مصر", category: "معدات دراجات", logo: "/assets/IMG-20260423-WA0001.jpg" },
    { name: "دكتور راشيل", country: "الأردن/فلسطين", category: "منتجات تجميل", logo: "/assets/IMG-20260423-WA0003.jpg" },
    { name: "بودكاست الملتقى", country: "السعودية", category: "صناعة محتوى", logo: "/assets/IMG-20260423-WA0020.jpg" },
    { name: "Luban AlGhazal", country: "مصر", category: "صناعة اللبان", logo: "/assets/IMG-20260423-WA0019.jpg" },
    { name: "CrowTutor", country: "أونلاين", category: "تعليم وتوجيه", logo: "/assets/IMG-20260423-WA0002.jpg" },
];

export default function Partners() {
    return (
        <section className="py-20 border-y border-white/5 bg-black/20 overflow-hidden relative">
            <div className="container mx-auto px-4">
                <div className="text-center mb-16">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-2xl md:text-3xl font-bold mb-4 opacity-80"
                    >
                        شـركاء <span className="text-primary tracking-widest uppercase">النـجاح</span>
                    </motion.h2>
                    <div className="w-20 h-1 bg-primary/30 mx-auto rounded-full" />
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 justify-center justify-items-center max-w-5xl mx-auto">
                    {partners.map((partner, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            whileHover={{ scale: 1.03, y: -5 }}
                            transition={{ delay: i * 0.05 }}
                            viewport={{ once: true }}
                            className="group cursor-default w-full max-w-[220px]"
                        >
                            <div className="glass-card bg-white/[0.02] border border-white/5 w-full h-64 flex flex-col rounded-2xl overflow-hidden transition-all duration-300 group-hover:border-primary/30 group-hover:bg-primary/[0.01]">
                                {/* Partner visual showcase */}
                                <div className="relative w-full h-36 border-b border-white/5 bg-neutral-950 overflow-hidden">
                                    <Image
                                        src={partner.logo}
                                        alt={partner.name}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-60 group-hover:opacity-95 grayscale group-hover:grayscale-0"
                                    />
                                </div>
                                {/* Partner meta info */}
                                <div className="p-4 flex flex-col items-center justify-center flex-grow text-center gap-1.5" dir="rtl">
                                    <div className="text-white font-bold group-hover:text-primary transition-colors text-sm md:text-base leading-snug">
                                        {partner.name}
                                    </div>
                                    <div className="text-[10px] uppercase tracking-tighter text-white/40 group-hover:text-white/60 transition-colors">
                                        {partner.category} • {partner.country}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
            <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        </section>
    );
}
