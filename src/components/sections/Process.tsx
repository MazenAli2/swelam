"use client";

import { motion } from "framer-motion";
import { Search, Lightbulb, BarChart4, TrendingUp, Zap } from "lucide-react";

const steps = [
    {
        title: "البحث والتحليل",
        desc: "دراسة عميقة للسوق، المنافسين، وسلوك الجمهور المستهدف لبناء أساس قوي.",
        icon: Search,
    },
    {
        title: "صياغة الاستراتيجية",
        desc: "تطوير خطة عمل مخصصة تشمل القنوات التسويقية، الميزانية، والرسائل الإبداعية.",
        icon: Lightbulb,
    },
    {
        title: "التنفيذ والاختبار",
        desc: "إطلاق الحملات بنظام الـ A/B Testing للوصول إلى أفضل تركيبة تحقق نتائج.",
        icon: Zap,
    },
    {
        title: "التحليل والتحسين",
        desc: "مراقبة الأداء لحظة بلحظة وتحسين كل دولار يتم صرفه لزيادة كفاءة الحملة.",
        icon: BarChart4,
    },
    {
        title: "التوسع (Scaling)",
        desc: "مضاعفة النتائج الناجحة والسيطرة على حصة أكبر من السوق بشكل مستدام.",
        icon: TrendingUp,
    },
];

export default function Process() {
    return (
        <section id="process" className="py-32 px-4 relative">
            <div className="container mx-auto">
                <div className="text-center mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-5xl font-bold mb-6"
                    >
                        استراتيجية <span className="text-primary text-glow italic">سويلم</span> للنمو
                    </motion.h2>
                    <p className="text-white/50 max-w-xl mx-auto">
                        منهجية علمية مدروسة تنتقل بعلامتك التجارية من مجرد التواجد إلى السيطرة والنمو المتسارع.
                    </p>
                </div>

                <div className="relative">
                    {/* Connector Line (Desktop) */}
                    <div className="hidden lg:block absolute top-[32px] left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent z-0" />

                    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-12 relative z-10">
                        {steps.map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="text-center group"
                            >
                                <div className="w-16 h-16 mx-auto rounded-full bg-surface border border-white/10 flex items-center justify-center mb-6 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-300 relative bg-background">
                                    <step.icon className="text-primary" size={24} />
                                    <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-primary text-black text-[10px] font-bold flex items-center justify-center">
                                        {i + 1}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-3">{step.title}</h3>
                                <p className="text-sm text-white/40 leading-relaxed px-4">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
