"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ExternalLink, ChevronDown, ChevronUp, ZoomIn, X } from "lucide-react";
import { useState } from "react";

const allCases = [
    {
        title: "حملة توسع لمتجر إلكتروني (E-commerce)",
        challenge: "انخفاض معدل التحويل وارتفاع تكلفة الاستحواذ على العميل.",
        strategy: "إعادة هيكلة الحملات الإعلانية واستخدام محتوى فيديو تفاعلي مع استهداف دقيق.",
        result: { roas: "8.4x", growth: "+300%", sales: "+1.2M EGP" },
        tag: "Media Buying",
        image: "/assets/IMG-20260423-WA0026.jpg",
    },
    {
        title: "بناء هوية لشركة خدمات عقارية",
        challenge: "غمار العلامة التجارية وسط المنافسين وضعف الثقة لدى العملاء.",
        strategy: "تصميم استراتيجية براندينج كاملة تركز على 'السلطة المعرفية' وصناعة محتوى تعليمي.",
        result: { roas: "N/A", growth: "+150%", sales: "24 Units Sold" },
        tag: "Branding",
        image: "/assets/IMG-20260423-WA0028.jpg",
    },
    {
        title: "إطلاق منتج جديد (SaaS)",
        challenge: "صعوبة وصول الرسالة التسويقية للجمهور المستهدف.",
        strategy: "خطة نمو شاملة تعتمد على الـ Omni-channel marketing والـ Retargeting المكثف.",
        result: { roas: "5.2x", growth: "+450%", sales: "2000+ Subs" },
        tag: "Full Strategy",
        image: "/assets/IMG-20260423-WA0030.jpg",
    },
    {
        title: "تحسين مبيعات منصة تدريب أونلاين",
        challenge: "ضعف الوعي بالعلامة التجارية في دول الخليج.",
        strategy: "حملات إعلانية تعتمد على المؤثرين وإعادة استهداف مكثفة لمن أكملوا 50% من الفيديو.",
        result: { roas: "4.8x", growth: "+200%", sales: "+500k$" },
        tag: "Digital Marketing",
        image: "/assets/IMG-20260423-WA0032.jpg",
    },
    {
        title: "استراتيجية نمو لشركة تأمين ناشئة",
        challenge: "صعوبة الحصول على بيانات العملاء المحتملين (Leads) بكلفة منخفضة.",
        strategy: "بناء Funnel متكامل يعتمد على Lead Magnet (كتاب مجاني) ثم تحويلهم عبر البريد.",
        result: { roas: "N/A", growth: "+320%", sales: "5000+ Leads" },
        tag: "Growth Hacking",
        image: "/assets/IMG-20260423-WA0034.jpg",
    },
    {
        title: "إعادة بناء براند لشركة تجارة تجزئة",
        challenge: "الصورة الذهنية للشركة كانت قديمة ولا تجذب جيل الشباب.",
        strategy: "تغيير الهوية البصرية بالكامل وإطلاق حملة 'تجرأ على التغيير' عبر TikTok.",
        result: { roas: "7.1x", growth: "+180%", sales: "+3M EGP" },
        tag: "Re-Branding",
        image: "/assets/IMG-20260423-WA0036.jpg",
    },
];

export default function CaseStudies() {
    const [showAll, setShowAll] = useState(false);
    const [selectedImage, setSelectedImage] = useState<string | null>(null);

    const displayedCases = showAll ? allCases : allCases.slice(0, 3);

    return (
        <section id="cases" className="py-32 px-4 relative overflow-hidden bg-background">
            <div className="container mx-auto">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8">
                    <div className="text-right">
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-6"
                        >
                            نتائج تتحدث عن <span className="text-primary text-glow italic">نفسها</span>
                        </motion.h2>
                        <p className="text-white/50 max-w-xl">
                            نحن نؤمن بالأرقام والنتائج الملموسة. إليك بعض من قصص النجاح التي ساهمنا في تحقيقها لشركائنا.
                        </p>
                    </div>
                    <button
                        onClick={() => setShowAll(!showAll)}
                        className="flex items-center gap-2 text-primary hover:text-white transition-colors font-bold group cursor-pointer"
                    >
                        {showAll ? "عرض أقل" : "المزيد من المشاريع"}
                        {showAll ? <ChevronUp size={18} /> : <ChevronDown size={18} className="group-hover:translate-y-1 transition-transform" />}
                    </button>
                </div>

                <motion.div
                    layout
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                >
                    <AnimatePresence mode="popLayout">
                        {displayedCases.map((project, i) => (
                            <motion.div
                                key={project.title}
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, delay: i * 0.05 }}
                                className="glass-card p-1 overflow-hidden group"
                            >
                                <div className="bg-surface/50 p-6 rounded-[19px] h-full flex flex-col justify-between">
                                    <div>
                                        <div className="flex items-center justify-between mb-4">
                                            <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold">{project.tag}</span>
                                        </div>

                                        {/* Thumbnail Preview with Overlay */}
                                        <div 
                                            className="relative aspect-video w-full rounded-xl overflow-hidden mb-6 cursor-pointer border border-white/5 group-hover:border-primary/20 transition-all duration-300"
                                            onClick={() => setSelectedImage(project.image)}
                                        >
                                            <Image
                                                src={project.image}
                                                alt={project.title}
                                                fill
                                                className="object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                                <span className="text-xs px-3 py-1.5 rounded-full bg-primary text-black font-semibold flex items-center gap-1.5 shadow-lg">
                                                    <ExternalLink size={12} />
                                                    عرض إثبات التحويل
                                                </span>
                                            </div>
                                        </div>

                                        <h3 className="text-xl font-bold mb-4 leading-tight text-right">{project.title}</h3>

                                        <div className="space-y-4 mb-8 text-right flex-grow">
                                            <div>
                                                <div className="text-[10px] text-white/30 uppercase mb-1">التحدي</div>
                                                <p className="text-xs text-white/70">{project.challenge}</p>
                                            </div>
                                            <div>
                                                <div className="text-[10px] text-white/30 uppercase mb-1">الاستراتيجية</div>
                                                <p className="text-xs text-white/70">{project.strategy}</p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-3 gap-2 pt-4 border-t border-white/5">
                                        <div className="text-center">
                                            <div className="text-primary text-sm font-bold">{project.result.roas}</div>
                                            <div className="text-[9px] text-white/40">ROAS</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-primary text-sm font-bold">{project.result.growth}</div>
                                            <div className="text-[9px] text-white/40">نمو</div>
                                        </div>
                                        <div className="text-center">
                                            <div className="text-primary text-sm font-bold truncate">{project.result.sales}</div>
                                            <div className="text-[9px] text-white/40">نتائج</div>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Additional Results Hub */}
                <div className="mt-32 pt-20 border-t border-white/5">
                    <div className="text-center mb-16">
                        <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-wider">لوحة التحكم وإثبات الأداء</span>
                        <h3 className="text-3xl font-bold mt-4 mb-6">
                            معرض مؤشرات الأداء وحملات السكيلنج (Scaling)
                        </h3>
                        <p className="text-white/50 max-w-xl mx-auto text-sm">
                            لقطات شاشة حية من مديري الإعلانات وحسابات البيع تثبت النمو المتواصل الذي تم تحقيقه للعملاء.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        {[
                            { img: "/assets/IMG-20260423-WA0038.jpg", label: "مراقبة العائد ومتوسط الـ ROAS" },
                            { img: "/assets/IMG-20260423-WA0040.jpg", label: "حملة تكبير مبيعات وتخفيض CPA" },
                            { img: "/assets/IMG-20260423-WA0042.jpg", label: "إدارة الإنفاق اليومي وسرعة التحويل" },
                            { img: "/assets/IMG-20260423-WA0044.jpg", label: "مؤشرات نمو المبيعات وتوسيع الاستهداف" },
                            { img: "/assets/IMG-20260423-WA0006.jpg", label: "مؤشرات نمو السعدي إلكتريك" },
                            { img: "/assets/IMG-20260423-WA0007.jpg", label: "أرقام تفاعل Virtual Community" },
                            { img: "/assets/IMG-20260423-WA0008.jpg", label: "معدلات نمو Positive Vibes" },
                            { img: "/assets/IMG-20260423-WA0001.jpg", label: "إحصائيات حملة Pro Gear Egypt" },
                            { img: "/assets/IMG-20260423-WA0003.jpg", label: "تحليلات مبيعات دكتور راشيل" },
                            { img: "/assets/IMG-20260423-WA0020.jpg", label: "أداء ونمو بودكاست الملتقى" },
                            { img: "/assets/IMG-20260423-WA0019.jpg", label: "حملة مبيعات Luban AlGhazal" },
                            { img: "/assets/IMG-20260423-WA0002.jpg", label: "مؤشرات أداء منصة CrowTutor" }
                        ].map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: idx * 0.1 }}
                                viewport={{ once: true }}
                                onClick={() => setSelectedImage(item.img)}
                                className="glass-card p-2 rounded-xl group cursor-pointer border border-white/5 hover:border-primary/30 transition-all duration-300"
                            >
                                <div className="relative aspect-video w-full rounded-lg overflow-hidden mb-3">
                                    <Image
                                        src={item.img}
                                        alt={item.label}
                                        fill
                                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300">
                                        <ZoomIn className="text-primary" size={24} />
                                    </div>
                                </div>
                                <div className="text-xs text-white/60 group-hover:text-primary transition-colors text-center px-1 font-medium truncate">
                                    {item.label}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Lightbox Modal */}
            <AnimatePresence>
                {selectedImage && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-md cursor-zoom-out"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            className="relative max-w-5xl w-full max-h-[85vh] overflow-hidden rounded-2xl border border-white/10 p-2 bg-neutral-950"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setSelectedImage(null)}
                                className="absolute top-4 right-4 z-10 p-2 rounded-full bg-black/60 text-white/80 hover:text-white border border-white/10 hover:bg-black/80 transition-colors cursor-pointer"
                            >
                                <X size={20} />
                            </button>
                            <div className="relative w-full h-[70vh] flex items-center justify-center">
                                <img
                                    src={selectedImage}
                                    alt="إثبات نتائج الحملة"
                                    className="max-w-full max-h-full object-contain rounded-lg"
                                />
                            </div>
                            <div className="text-center py-2 text-white/50 text-xs italic">
                                انقر خارج الإطار أو اضغط زر الإغلاق للعودة
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    );
}
