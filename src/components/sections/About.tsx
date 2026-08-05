"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { User, Target, Award, Sparkles } from "lucide-react";

export default function About() {
    return (
        <section id="about" className="relative py-24 overflow-hidden">
            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    
                    {/* Image Column */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative group"
                    >
                        <div className="absolute -inset-4 bg-primary/20 rounded-3xl blur-2xl opacity-50 group-hover:opacity-75 transition-opacity duration-500" />
                        <div className="relative aspect-[4/5] rounded-3xl overflow-hidden glass-card p-2 border-white/10">
                            <Image
                                src="/assets/my-image.jpeg"
                                alt="محمد سويلم"
                                fill
                                className="object-cover rounded-2xl grayscale hover:grayscale-0 transition-all duration-700"
                            />
                        </div>
                        
                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.5 }}
                            className="absolute -bottom-6 -right-6 glass-card p-6 border-primary/30 flex items-center gap-4 neo-glow"
                        >
                            <div className="bg-primary/20 p-3 rounded-lg text-primary">
                                <Award size={24} />
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-primary">8+</div>
                                <div className="text-xs text-white/60">سنوات خبرة</div>
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* Content Column */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        dir="rtl"
                    >
                        <div className="flex items-center gap-3 text-primary mb-6">
                            <User size={20} />
                            <span className="text-sm font-bold tracking-widest uppercase">من أنا</span>
                        </div>
                        
                        <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
                            أساعد العلامات التجارية على <span className="text-primary text-glow">النمو</span> وتحقيق مبيعات حقيقية
                        </h2>

                        <div className="space-y-6 text-lg text-white/70 leading-relaxed">
                            <p>
                                أنا محمد سويلم، خبير في نمو الأعمال والتسويق الرقمي. خلال مسيرتي المهنية، ساعدت العشرات من الشركات على الانتقال من النمو التقليدي إلى التوسع السريع من خلال استراتيجيات مدروسة ترتكز على البيانات والإبداع.
                            </p>
                            <p>
                                شغفي يكمن في سد الفجوة بين التقنيات الحديثة وأهداف الأعمال التجارية، مما ينتج عنه نتائج ملموسة وعائد مادي مستدام لشركائي.
                            </p>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
                            {[
                                {
                                    icon: <Target className="text-primary" />,
                                    title: "استراتيجيات دقيقة",
                                    desc: "خطط نمو مخصصة لكل علامة تجارية بناءً على تحليل السوق."
                                },
                                {
                                    icon: <Sparkles className="text-primary" />,
                                    title: "إبداع بلا حدود",
                                    desc: "صناعة محتوى إعلاني يخطف الأنظار ويحول المشاهدين إلى عملاء."
                                }
                            ].map((item, idx) => (
                                <div key={idx} className="glass-card p-6 border-white/5 hover:border-primary/20 transition-colors">
                                    <div className="mb-4">{item.icon}</div>
                                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                                    <p className="text-sm text-white/50">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Background elements */}
            <div className="absolute top-1/2 left-0 -translate-y-1/2 w-64 h-64 bg-primary/10 rounded-full blur-[100px] pointer-events-none" />
        </section>
    );
}
