"use client";

import { motion } from "framer-motion";
import { Quote, Star } from "lucide-react";

const testimonials = [
    {
        name: "أحمد منصور",
        role: "مدير متجر سعودي كول",
        comment: "تجربتي مع محمد كانت نقلة نوعية. استطاع خفض تكلفة الاستحواذ بنسبة 40% في أول شهر فقط. احترافية عالية جداً.",
    },
    {
        name: "سارة الجوهري",
        role: "مؤسسة براند ليفيل",
        comment: "التفكير الاستراتيجي هو ما يميز محمد. لم نكتفِ بمجرد إعلانات، بل بنينا نظاماً تسويقياً متكاملاً يجذب العملاء بصمت.",
    },
    {
        name: "محمود إبراهيم",
        role: "المدير التسويقي لشركة سمارت",
        comment: "بصراحة، أفضل قرار اتخذته شركتنا هو التعاون مع سويلم. نتائج حقيقية وأرقام لم نكن نتخيل تحقيقها بهذه السرعة.",
    },
];

export default function Testimonials() {
    return (
        <section className="py-32 px-4 bg-surface/20 relative">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        قالوا عن <span className="text-primary text-glow italic">شراكتنا</span>
                    </motion.h2>
                    <div className="flex items-center justify-center gap-1 mb-4">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={16} className="fill-primary text-primary" />
                        ))}
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {testimonials.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="glass-card p-10 relative group hover:border-primary/30 transition-all"
                        >
                            <Quote className="absolute top-6 left-6 text-white/5 group-hover:text-primary/10 transition-colors" size={60} />
                            <p className="text-lg italic text-white/80 mb-8 relative z-10 leading-relaxed">
                                "{t.comment}"
                            </p>
                            <div className="flex items-center gap-4 border-t border-white/5 pt-8">
                                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                                    {t.name[0]}
                                </div>
                                <div>
                                    <div className="font-bold">{t.name}</div>
                                    <div className="text-xs text-white/40">{t.role}</div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
