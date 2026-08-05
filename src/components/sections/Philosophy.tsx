"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, TrendingUp } from "lucide-react";

export default function Philosophy() {
    return (
        <section id="philosophy" className="py-32 px-4 relative overflow-hidden bg-background">
            {/* Background elements */}
            <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[100px] translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="container mx-auto max-w-5xl">
                {/* Intro Text (First Text) */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-24"
                >
                    <h2 className="text-3xl md:text-5xl font-bold leading-tight md:leading-normal">
                        محمد سويلم - <span className="text-primary text-glow italic">شريكك في النجاح.</span>
                    </h2>
                    <p className="text-xl md:text-2xl mt-6 text-white/80 max-w-3xl mx-auto leading-relaxed font-light">
                        نجمع بين الإبداع في المحتوى ودقة استهداف الحملات الإعلانية لتحقيق مبيعات قياسية وتوسع مستدام.
                    </p>
                </motion.div>

                {/* Main Content (Second Text) */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="space-y-8 text-lg text-white/70 leading-relaxed"
                    >
                        <p>
                            في سوق يزداد ازدحاماً كل يوم، لا تكفي الميزانيات ولا كثافة الظهور. ما يصنع الفرق هو القدرة على قراءة السوق، فهم سلوك العملاء، وصياغة رسالة تصل في اللحظة التي يكون فيها الاهتمام مناسباً.
                        </p>

                        <div className="p-6 border-r-4 border-primary bg-primary/5 rounded-l-xl">
                            <h3 className="text-xl font-bold text-white mb-2">هنا يبدأ دوري</h3>
                            <p>
                                أتعامل مع التسويق كمنظومة مترابطة: استراتيجية واضحة، فرضيات قابلة للاختبار، وبيانات تتحول إلى قرارات دقيقة.
                            </p>
                        </div>

                        <p>
                            كل حملة تجربة، وكل رقم إشارة، وكل نتيجة هي خطوة نحو نظام نمو أكثر كفاءة. ومع الوقت تتحول الحملات الإعلانية وكل قنوات التسويق إلى محرك نمو يمكن قياسه وتطويره وتوسيعه.
                        </p>

                        <p className="text-white font-bold text-xl">
                            هدفي ليس تشغيل الإعلانات، بل بناء نظام يجعل كل إنفاق تسويقي استثماراً يقود إلى أثر حقيقي ونمو مستدام للأعمال.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-6"
                    >
                        {/* Decorative feature cards */}
                        <div className="glass-card p-6 border-white/5 hover:border-primary/30 transition-colors">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <Target size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">استراتيجية مترابطة</h4>
                            <p className="text-sm text-white/50">قرارات مبنية على البيانات لتعظيم العائد.</p>
                        </div>
                        <div className="glass-card p-6 border-white/5 hover:border-primary/30 transition-colors sm:translate-y-8">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <Lightbulb size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">تجارب مستمرة</h4>
                            <p className="text-sm text-white/50">كل حملة هي خطوة نحو كفاءة أعلى.</p>
                        </div>
                        <div className="glass-card p-6 border-white/5 hover:border-primary/30 transition-colors sm:-translate-y-8">
                            <div className="w-12 h-12 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-4">
                                <TrendingUp size={24} />
                            </div>
                            <h4 className="text-lg font-bold text-white mb-2">نمو مستدام</h4>
                            <p className="text-sm text-white/50">تحويل كل إنفاق إلى استثمار مربح.</p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
