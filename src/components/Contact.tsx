import React, { useState, useEffect } from "react";
import { 
  Mail, 
  Phone, 
  Linkedin, 
  MapPin, 
  Send, 
  CheckCircle, 
  Radio, 
  ArrowUpRight,
  Terminal,
  X
} from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    requirement: "iiot_monitoring",
    subject: "",
    message: ""
  });
  const [isSending, setIsSending] = useState(false);
  const [isSent, setIsSent] = useState(false);
  const [submittedPayload, setSubmittedPayload] = useState<string>("");
  const [showToast, setShowToast] = useState(false);
  const [toastMessage, setToastMessage] = useState("");

  useEffect(() => {
    if (showToast) {
      const timer = setTimeout(() => {
        setShowToast(false);
      }, 4000);
      return () => clearTimeout(timer);
    }
  }, [showToast]);

  const contactMethods = [
    {
      icon: Mail,
      label: "Email",
      value: "zidanferdi13@gmail.com",
      href: "mailto:zidanferdi13@gmail.com",
      actionLabel: language === "en" ? "Send Email" : "Kirim Email"
    },
    {
      icon: Phone,
      label: language === "en" ? "WhatsApp & Phone" : "WhatsApp & Telepon",
      value: "+62 81319535441",
      href: "https://wa.me/6281319535441",
      actionLabel: language === "en" ? "Direct Chat" : "Pesan Langsung"
    },
    {
      icon: Linkedin,
      label: "LinkedIn Profile",
      value: "linkedin.com/in/zidanferdiansyah",
      href: "https://www.linkedin.com/in/zidanferdiansyah",
      actionLabel: language === "en" ? "Connect" : "Hubungkan"
    },
    {
      icon: MapPin,
      label: language === "en" ? "Location Base" : "Lokasi Utama",
      value: language === "en" ? "Bekasi Regency, West Java, ID" : "Kabupaten Bekasi, Jawa Barat, ID",
      href: "https://maps.google.com/?q=Bekasi+Regency",
      actionLabel: language === "en" ? "View Base" : "Lihat Lokasi"
    }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      alert(
        language === "en" 
          ? "Please complete the required fields (Name, Email, Message) to send." 
          : "Harap lengkapi kolom yang wajib diisi (Nama, Email, Pesan) untuk mengirim."
      );
      return;
    }

    setIsSending(true);

    // Formulate simulated MQTT packet
    const payloadObject = {
      client_id: `WEB_VISITOR_${Math.random().toString(36).substring(7).toUpperCase()}`,
      timestamp: new Date().toISOString(),
      topic: "sys/inbound/inquiry",
      message: {
        sender_name: formData.name,
        sender_email: formData.email,
        category: formData.requirement,
        title: formData.subject || (language === "en" ? "No Subject" : "Tidak Ada Subjek"),
        text_content: formData.message.substring(0, 100) + (formData.message.length > 100 ? "..." : "")
      }
    };

    setSubmittedPayload(JSON.stringify(payloadObject, null, 2));

    // Simulate network delay
    setTimeout(() => {
      setIsSending(false);
      setIsSent(true);
      setToastMessage(
        language === "en"
          ? "Message successfully packaged and published to the broker!"
          : "Pesan berhasil dikemas dan dikirim ke broker!"
      );
      setShowToast(true);
    }, 1500);
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      requirement: "iiot_monitoring",
      subject: "",
      message: ""
    });
    setIsSent(false);
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden bg-slate-950/40">
      {/* Decorative Orbs */}
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-emerald-500/5 rounded-full filter blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-16"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-emerald-400 uppercase bg-emerald-500/10 px-3.5 py-1.5 rounded-full border border-emerald-500/20">
            {language === "en" ? "Let's Collaborate" : "Mari Berkolaborasi"}
          </span>
          <h2 className="text-3xl sm:text-4xl font-display font-extrabold text-white mt-4 tracking-tight">
            {language === "en" ? "Initiate a System Integration" : "Mulai Integrasi Sistem"}
          </h2>
          <div className="h-1 w-12 bg-emerald-500 rounded mt-4"></div>
          <p className="text-xs sm:text-sm text-gray-400 max-w-xl mt-4 leading-relaxed">
            {language === "en"
              ? "Need help digitizing your factory floor, setting up high-reliability IoT devices, or building custom express dashboard APIs? Contact me."
              : "Butuh bantuan mendigitalkan lantai pabrik Anda, menyiapkan perangkat IoT dengan keandalan tinggi, atau membangun dasbor API kustom? Hubungi saya."}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Contact Methods Block (Left) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-5 flex flex-col justify-between gap-6"
          >
            <div className="flex flex-col gap-6">
              <h3 className="text-xl font-display font-bold text-white tracking-tight">
                {language === "en" ? "Direct Contact Nodes" : "Simpul Kontak Langsung"}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                {language === "en"
                  ? "Reach out to me directly via WhatsApp, email, or LinkedIn. I am based in Bekasi, West Java, and am available for local site visits, deployments, and remote full-stack engineering collaborations."
                  : "Hubungi saya langsung melalui WhatsApp, email, atau LinkedIn. Saya berdomisili di Bekasi, Jawa Barat, dan bersedia melakukan kunjungan lapangan lokal, penyebaran sistem, serta kolaborasi rekayasa full-stack jarak jauh."}
              </p>

              {/* Grid of contact coordinates */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
                {contactMethods.map((method, idx) => (
                  <a 
                    key={idx}
                    href={method.href}
                    target="_blank"
                    rel="noreferrer"
                    className="glass-panel p-4.5 rounded-xl border border-white/5 flex items-start gap-4 transition duration-300 hover:border-emerald-500/20 group"
                  >
                    <div className="p-3 bg-slate-900 rounded-xl border border-white/5 text-emerald-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-300 transition">
                      <method.icon className="w-5 h-5" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <span className="text-[10px] font-mono font-bold uppercase text-gray-500 tracking-wider">
                        {method.label}
                      </span>
                      <p className="text-xs font-semibold text-white mt-1 break-words">
                        {method.value}
                      </p>
                      <span className="text-[10px] text-emerald-400 font-mono flex items-center gap-1 mt-1 font-bold">
                        {method.actionLabel} <ArrowUpRight className="w-3 h-3 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Micro warning notice */}
            <div className="bg-slate-950 p-4.5 rounded-2xl border border-white/5 flex gap-3.5 items-start mt-4">
              <Radio className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5 animate-pulse" />
              <div className="text-[11px] font-mono text-gray-400 leading-relaxed">
                <span className="text-cyan-400 font-bold uppercase block mb-1">
                  {language === "en" ? "SYSTEM LINK STATUS" : "STATUS LINK SISTEM"}
                </span>
                {language === "en"
                  ? "All incoming inquiries are packaged and cataloged inside our system queue automatically. Link operational."
                  : "Semua pertanyaan masuk akan dikemas dan dikatalogkan di dalam antrean sistem kami secara otomatis. Jalur operasional."}
              </div>
            </div>
          </motion.div>

          {/* Form / Live Submission Success (Right) */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-6 sm:p-8 rounded-3xl border border-white/10 h-full flex flex-col justify-center">
              
              {!isSent ? (
                <form id="contact-form" onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-lg font-display font-bold text-white tracking-tight">
                      {language === "en" ? "Let's Connect" : "Mari Terhubung"}
                    </h3>
                    <p className="text-xs text-gray-400">
                      {language === "en" ? "Required fields are marked *" : "Kolom yang wajib diisi ditandai dengan *"}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-name" className="text-xs font-mono text-gray-300 font-bold uppercase">
                        {language === "en" ? "My Name *" : "Nama Saya *"}
                      </label>
                      <input 
                        id="contact-name"
                        type="text" 
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                        placeholder="John Doe"
                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition"
                      />
                    </div>

                    {/* Email */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-email" className="text-xs font-mono text-gray-300 font-bold uppercase">
                        {language === "en" ? "Email Address *" : "Alamat Email *"}
                      </label>
                      <input 
                        id="contact-email"
                        type="email" 
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="john@example.com"
                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Requirement Profile */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-req" className="text-xs font-mono text-gray-300 font-bold uppercase">
                        {language === "en" ? "Project Nature" : "Jenis Proyek"}
                      </label>
                      <select 
                        id="contact-req"
                        value={formData.requirement}
                        onChange={(e) => setFormData({...formData, requirement: e.target.value})}
                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition cursor-pointer"
                      >
                        <option value="iiot_monitoring">
                          {language === "en" ? "IIoT Monitoring Network" : "Jaringan Pemantauan IIoT"}
                        </option>
                        <option value="plc_scada">
                          {language === "en" ? "PLC & SCADA Integration" : "Integrasi PLC & SCADA"}
                        </option>
                        <option value="dashboard_dev">
                          {language === "en" ? "Web Dashboard Development" : "Pengembangan Dasbor Web"}
                        </option>
                        <option value="api_backend">
                          {language === "en" ? "Node.js API & Database" : "API Node.js & Database"}
                        </option>
                        <option value="agritech_automation">
                          {language === "en" ? "Agricultural Automation" : "Otomatisasi Pertanian"}
                        </option>
                        <option value="other_collab">
                          {language === "en" ? "Other Collaboration" : "Kolaborasi Lainnya"}
                        </option>
                      </select>
                    </div>

                    {/* Subject */}
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="contact-subj" className="text-xs font-mono text-gray-300 font-bold uppercase">
                        {language === "en" ? "Subject Line" : "Baris Subjek"}
                      </label>
                      <input 
                        id="contact-subj"
                        type="text" 
                        value={formData.subject}
                        onChange={(e) => setFormData({...formData, subject: e.target.value})}
                        placeholder={language === "en" ? "Project Details" : "Detail Proyek"}
                        className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition"
                      />
                    </div>
                  </div>

                  {/* Message body */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="contact-msg" className="text-xs font-mono text-gray-300 font-bold uppercase">
                      {language === "en" ? "Inquiry Details *" : "Detail Pertanyaan *"}
                    </label>
                    <textarea 
                      id="contact-msg"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder={
                        language === "en"
                          ? "Hi Zidan, let's discuss deploying an industrial monitoring system for our manufacturing operations..."
                          : "Hai Zidan, mari kita bahas tentang pemasangan sistem pemantauan industri untuk operasi manufaktur kami..."
                      }
                      className="bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-emerald-500/50 transition resize-none"
                    ></textarea>
                  </div>

                  {/* Submit Button */}
                  <button
                    id="submit-contact-btn"
                    type="submit"
                    disabled={isSending}
                    className="w-full bg-emerald-400 hover:bg-emerald-500 disabled:bg-slate-800 text-slate-950 disabled:text-gray-500 font-bold py-3.5 px-6 rounded-xl text-sm transition duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-emerald-400/20 shadow-emerald-400/10 cursor-pointer"
                  >
                    {isSending ? (
                      <>
                        <Radio className="w-4 h-4 animate-ping text-slate-950" />
                        {language === "en" ? "Packaging MQTT Message Packet..." : "Mengemas Paket Pesan MQTT..."}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 text-slate-950" />
                        {language === "en" ? "Publish Message to Broker (Submit)" : "Kirim Pesan ke Broker (Kirim)"}
                      </>
                    )}
                  </button>
                </form>
              ) : (
                <motion.div 
                  id="contact-success-screen"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center text-center gap-6 py-6"
                >
                  <div className="p-4 bg-emerald-500/15 border border-emerald-500/30 rounded-2xl text-emerald-400">
                    <CheckCircle className="w-10 h-10 animate-bounce" />
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-display font-bold text-white tracking-tight">
                      {language === "en" ? "MQTT Payload Sent Successfully!" : "Payload MQTT Berhasil Dikirim!"}
                    </h3>
                    <p className="text-xs text-gray-400 mt-2 max-w-sm leading-relaxed">
                      {language === "en"
                        ? "Your inquiry has been serialized into an MQTT topic packet and processed on our simulated local broker successfully."
                        : "Pertanyaan Anda telah diserialisasikan ke dalam paket topik MQTT dan berhasil diproses pada broker lokal simulasi kami."}
                    </p>
                  </div>

                  {/* Serialized JSON terminal block */}
                  <div className="w-full bg-slate-950 p-4 rounded-xl border border-white/15 text-left font-mono text-[10px] text-emerald-400 relative overflow-hidden max-h-56 overflow-y-auto">
                    <div className="absolute top-2 right-2 text-[9px] text-gray-600 uppercase flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5 text-gray-700" />
                      {language === "en" ? "Inbound Queue Log" : "Log Antrean Masuk"}
                    </div>
                    <pre className="leading-relaxed whitespace-pre-wrap">{submittedPayload}</pre>
                  </div>

                  <button
                    id="reset-form-btn"
                    onClick={handleResetForm}
                    className="px-5 py-2.5 bg-white/5 border border-white/10 hover:border-white/20 text-xs font-semibold rounded-xl text-gray-300 hover:text-white transition cursor-pointer"
                  >
                    {language === "en" ? "Publish Another Message (Reset Form)" : "Kirim Pesan Lain (Reset Formulir)"}
                  </button>
                </motion.div>
              )}

            </div>
          </motion.div>

        </div>
      </div>

      {/* Toast Notification Container */}
      <AnimatePresence>
        {showToast && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed bottom-6 right-6 z-50 max-w-sm w-full bg-slate-900/95 backdrop-blur-md border border-emerald-500/30 rounded-2xl shadow-2xl p-4 overflow-hidden"
          >
            <div className="flex gap-3">
              <div className="p-2 bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 rounded-xl shrink-0 h-fit">
                <CheckCircle className="w-5 h-5 text-glow-emerald" />
              </div>
              <div className="flex-1 min-w-0 pr-2">
                <h4 className="text-[10px] font-mono font-bold uppercase tracking-wider text-emerald-400">
                  {language === "en" ? "TRANSMISSION SUCCESS" : "TRANSMISI BERHASIL"}
                </h4>
                <p className="text-xs text-gray-200 font-medium mt-1">
                  {toastMessage}
                </p>
                <span className="text-[9px] text-gray-500 font-mono block mt-1">
                  Topic: sys/inbound/inquiry
                </span>
              </div>
              <button
                onClick={() => setShowToast(false)}
                className="text-gray-500 hover:text-white transition duration-200 self-start p-1 hover:bg-white/5 rounded-md cursor-pointer"
                aria-label="Close Notification"
              >
                <X className="w-3.5 h-3.5" />
              </button>
            </div>
            {/* Animated Loading Progress Bar */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-slate-800">
              <motion.div
                initial={{ width: "100%" }}
                animate={{ width: "0%" }}
                transition={{ duration: 4, ease: "linear" }}
                className="h-full bg-emerald-400"
              />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
