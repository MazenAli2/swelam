"use client";

import { motion } from "framer-motion";
import { Target, Search, PenTool, Layout } from "lucide-react";

const expertise = [
    {
        title: "إدارة الحملات الإعلانية",
        desc: "إدارة ميزانيات ضخمة على منصات Meta, Google, & TikTok لتحقيق أعلى عائد على الاستثمار (ROAS).",
        icon: Target,
        color: "bg-blue-500/10 text-blue-500",
    },
    {
        title: "تطوير العلامة التجارية",
        desc: "بناء هوية بصرية واستراتيجية تميز علامتك التجارية في السوق وتزيد من ولاء العملاء.",
        icon: Search,
        color: "bg-purple-500/10 text-purple-500",
    },
    {
        title: "صناعة المحتوى الإبداعي",
        desc: "صياغة نصوص وتصاميم تخاطب عقل وقلب العميل، مما يزيد من معدلات التحول بشكل فوري.",
        icon: PenTool,
        color: "bg-orange-500/10 text-orange-500",
    },
    {
        title: "استراتيجيات النمو الشاملة",
        desc: "حلول متكاملة تبدأ من دراسة السوق والمنافسين إلى التوسع والسيطرة على الحصة السوقية.",
        icon: Layout,
        color: "bg-primary/10 text-primary",
    },
];

export default function Expertise() {
    return (
        <section id="expertise" className="py-32 px-4 bg-surface/50 relative">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        نطاق <span className="text-glow text-primary italic">الخبرة</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="text-white/50 max-w-2xl mx-auto"
                    >
                        نحن لا نقدم خدمات فقط، بل نقدم حلولاً ذكية تضمن نمو عملك في عالم رقمي سريع التطور.
                    </motion.p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {expertise.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-8 group hover:-translate-y-2 transition-all duration-300"
                        >
                            <div className={`w-14 h-14 rounded-2xl ${item.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                                <item.icon size={28} />
                            </div>
                            <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                            <p className="text-white/40 leading-relaxed text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
