"use client";

import { motion } from "framer-motion";
import { Download, FileText, CheckCircle } from "lucide-react";

export default function ResumeHub() {
    return (
        <section id="resume" className="py-32 px-4 bg-surface/30">
            <div className="container mx-auto">
                <div className="glass-card p-8 md:p-16 relative overflow-hidden">
                    {/* Background Decoration */}
                    <div className="absolute -top-24 -right-24 w-64 h-64 bg-primary/10 rounded-full blur-3xl" />

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center relative z-10">
                        <div>
                            <motion.h2
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                className="text-4xl md:text-5xl font-bold mb-8"
                            >
                                خبرة ممتدة في <br /><span className="text-primary text-glow italic">قيادة السوق</span>
                            </motion.h2>

                            <div className="space-y-6 mb-12">
                                {[
                                    "أكثر من 5 سنوات من الخبرة في التسويق الرقمي.",
                                    "إدارة حملات بميزانيات تتخطى ملايين الدولارات.",
                                    "تطوير استراتيجيات براندينج للعديد من الشركات الناشئة.",
                                    "متخصص في تحليل البيانات وتحسين معدلات التحول (CRO).",
                                ].map((item, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0, x: 20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                        className="flex items-center gap-4"
                                    >
                                        <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                                            <CheckCircle size={14} />
                                        </div>
                                        <p className="text-white/70 italic">{item}</p>
                                    </motion.div>
                                ))}
                            </div>

                            <a href="/cv-swelam.pdf" download="Mohamed-Swelam-CV.pdf">
                                <motion.button
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-10 py-5 rounded-2xl bg-primary text-black font-bold text-lg flex items-center gap-4 neo-glow group"
                                >
                                    تحميل السيرة الذاتية (PDF)
                                    <Download className="group-hover:translate-y-1 transition-transform" />
                                </motion.button>
                            </a>
                        </div>

                        <div className="relative">
                            <div className="glass-card bg-white/5 border-white/10 p-2 transform rotate-3 hover:rotate-0 transition-transform duration-500 shadow-2xl relative">
                                <div className="aspect-[3/4] bg-neutral-900 rounded-lg overflow-hidden relative group/cv">
                                    <iframe
                                        src="/cv-swelam.pdf#toolbar=0&navpanes=0&scrollbar=0&view=FitH"
                                        className="w-full h-full border-none pointer-events-none"
                                        title="Resume Preview"
                                    />
                                    {/* Overlay to catch clicks and prevent iframe interaction while allowing the parent to handle hover */}
                                    <div className="absolute inset-0 z-10 bg-transparent" />
                                </div>

                                <div className="absolute -top-4 -left-4 w-12 h-12 bg-primary rounded-full flex items-center justify-center text-black shadow-xl">
                                    <FileText size={24} />
                                </div>
                            </div>

                            {/* Decorative elements */}
                            <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-primary/20 rounded-full blur-2xl -z-10" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
