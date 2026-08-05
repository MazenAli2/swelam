"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Send, MapPin, Phone, MessageCircle, ChevronDown } from "lucide-react";
import { useState, useRef, useEffect } from "react";

const services = ["Media Buying", "Branding", "Content Strategy", "Full Growth Plan"];

export default function Contact() {
    const [form, setForm] = useState({ name: "", service: "Media Buying", message: "" });
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const whatsappMsg = `مرحباً أستاذ محمد، أنا ${form.name}. أهتم بـ ${form.service}. رسالتي: ${form.message}`;
        window.open(`https://wa.me/201503508515?text=${encodeURIComponent(whatsappMsg)}`, "_blank");
    };

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsDropdownOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <section id="contact" className="pt-32 pb-12 px-4 relative">
            <div className="container mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
                    <div>
                        <motion.h2
                            initial={{ opacity: 0, x: 20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            className="text-4xl md:text-5xl font-bold mb-8"
                        >
                            جاهز لنقل عملك إلى <br /><span className="text-primary text-glow italic">المستوى التالي؟</span>
                        </motion.h2>
                        <p className="text-white/50 mb-12 max-w-md">
                            اترك رسالة وسأقوم بالتواصل معك في أقرب وقت لدراسة مشروعك ووضع خطة النمو المناسبة.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <Phone size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-white/30 uppercase">رقم الهاتف</div>
                                    <div className="text-lg font-bold">01503508515 (20+)</div>
                                </div>
                            </div>

                            <div className="flex items-center gap-6 group">
                                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                                    <MapPin size={20} />
                                </div>
                                <div>
                                    <div className="text-xs text-white/30 uppercase">الموقع</div>
                                    <div className="text-lg font-bold">مصر</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        className="glass-card p-8 md:p-12"
                    >
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">الاسم بالكامل</label>
                                <input
                                    type="text"
                                    required
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary/50 outline-none transition-colors text-white"
                                    placeholder="كيف يمكنني مناداتك؟"
                                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                                />
                            </div>

                            <div className="relative" ref={dropdownRef}>
                                <label className="block text-sm font-medium text-white/60 mb-2">الخدمة المطلوبة</label>
                                <div
                                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary/50 cursor-pointer flex items-center justify-between transition-colors hover:border-primary/30"
                                >
                                    <span className="text-white">{form.service}</span>
                                    <motion.div
                                        animate={{ rotate: isDropdownOpen ? 180 : 0 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <ChevronDown size={18} className="text-white/40" />
                                    </motion.div>
                                </div>

                                <AnimatePresence>
                                    {isDropdownOpen && (
                                        <motion.div
                                            initial={{ opacity: 0, y: -10 }}
                                            animate={{ opacity: 1, y: 5 }}
                                            exit={{ opacity: 0, y: -10 }}
                                            className="absolute z-50 w-full bg-[#0F0F0F] border border-white/10 rounded-xl overflow-hidden shadow-2xl"
                                        >
                                            {services.map((service) => (
                                                <div
                                                    key={service}
                                                    onClick={() => {
                                                        setForm({ ...form, service });
                                                        setIsDropdownOpen(false);
                                                    }}
                                                    className={`px-4 py-3 cursor-pointer transition-colors hover:bg-primary/10 hover:text-primary ${form.service === service ? 'bg-primary/5 text-primary font-bold' : 'text-white/70'}`}
                                                >
                                                    {service}
                                                </div>
                                            ))}
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            <div>
                                <label className="block text-sm font-medium text-white/60 mb-2">تفاصيل إضافية</label>
                                <textarea
                                    rows={4}
                                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-4 focus:border-primary/50 outline-none transition-colors resize-none text-white"
                                    placeholder="أخبرني عن مشروعك باختصار..."
                                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                                ></textarea>
                            </div>

                            <button
                                type="submit"
                                className="w-full py-5 rounded-xl bg-primary text-black font-bold text-lg flex items-center justify-center gap-3 neo-glow"
                            >
                                إرسال عبر واتساب
                                <Send size={20} />
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>

            {/* Floating WhatsApp Button */}
            <motion.a
                href="https://wa.me/201503508515"
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
                className="fixed bottom-8 left-8 w-16 h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-2xl z-50 text-white"
            >
                <MessageCircle size={32} />
            </motion.a>

            {/* Footer */}
            <footer className="mt-20 pt-12 border-t border-white/5 text-center text-white/30 text-sm">
                <p>© 2025 جميع الحقوق محفوظة لـ محمد سويلم. صُنع بكل فخر لدفع حدود النمو.</p>
            </footer>
        </section>
    );
}
