"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { ArrowLeft, TrendingUp, BarChart, Rocket } from "lucide-react";

export default function Hero() {
    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden py-20 px-4">
            {/* Background Glows */}
            <div className="absolute top-1/4 -right-1/4 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-1/4 -left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] pointer-events-none" />

            <div className="container mx-auto relative z-10 px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" dir="rtl">
                    <div className="lg:col-span-7 text-right flex flex-col items-start">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card border-primary/20 text-primary mb-8"
                        >
                            <TrendingUp size={16} />
                            <span className="text-sm font-medium">خبير نمو وتوسع العلامات التجارية</span>
                        </motion.div>

                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 tracking-tight text-right w-full leading-tight"
                        >
                            نصنع <span className="text-primary text-glow italic">النمو</span> لعلامتك <br /> التجارية
                        </motion.h1>

                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            className="text-base md:text-lg text-white/60 mb-12 leading-relaxed text-right max-w-xl"
                        >
                            محمد سويلم - شريكك في النجاح. نجمع بين الإبداع في المحتوى ودقة استهداف الحملات الإعلانية لتحقيق مبيعات قياسية وتوسع مستدام.
                        </motion.p>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
                        >
                            <a href="#contact" className="px-8 py-4 rounded-xl bg-primary text-black font-bold text-lg neo-glow flex items-center justify-center gap-3 group w-full sm:w-auto">
                                ابدأ رحلة النمو الآن
                                <ArrowLeft className="group-hover:-translate-x-1 transition-transform" />
                            </a>

                            <a href="#cases" className="px-8 py-4 rounded-xl glass-card border-white/10 hover:bg-white/5 transition-colors font-medium w-full sm:w-auto text-center">
                                عرض دراسات الحالة
                            </a>
                        </motion.div>
                    </div>

                    <div className="lg:col-span-5 relative w-full flex justify-center">
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className="relative w-full max-w-[450px] aspect-[4/3] rounded-3xl overflow-hidden glass-card p-2 border-white/10 neo-glow group"
                        >
                            <motion.div
                                animate={{ y: [0, -15, 0] }}
                                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                                className="relative w-full h-full rounded-2xl overflow-hidden"
                            >
                                <Image
                                    src="/assets/IMG-20260423-WA0022.jpg"
                                    alt="إحصائيات نمو الحملات"
                                    fill
                                    className="object-cover hover:scale-105 transition-transform duration-700"
                                    priority
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-background/30 via-transparent to-transparent pointer-events-none" />
                            </motion.div>
                        </motion.div>
                    </div>
                </div>

                {/* Stats */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                    className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-24 max-w-5xl mx-auto border-t border-white/5 pt-12"
                >
                    {[
                        { label: "ميزانية إعلانية مدارة", val: "+5M$" },
                        { label: "متوسط العائد ROAS", val: "6.5x" },
                        { label: "عملاء نشطين", val: "50+" },
                        { label: "قصص نجاح", val: "100%" },
                    ].map((stat, i) => (
                        <div key={i} className="text-center group">
                            <div className="text-3xl md:text-4xl font-bold text-primary mb-2 group-hover:scale-110 transition-transform">{stat.val}</div>
                            <div className="text-sm text-white/40">{stat.label}</div>
                        </div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
