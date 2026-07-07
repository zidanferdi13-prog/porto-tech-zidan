import { Award, ShieldAlert, Cpu, CheckCircle } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";
import { motion } from "motion/react";

export default function Certifications() {
  const { language } = useLanguage();

  const certifications = [
    {
      title: "Basic SCADA Using Siemens WinCC Explorer",
      issuer: "Anak Teknik Indonesia",
      year: "2023",
      code: "SCADA-WINCC-2023-ATI",
      category: language === "en" ? "Industrial Automation" : "Otomasi Industri"
    },
    {
      title: "Introduction to IoT: Exploring IoT Engineer",
      issuer: "Edspert.id",
      year: "2023",
      code: "IOT-ENG-EDSP-2023",
      category: language === "en" ? "IoT Systems" : "Sistem IoT"
    },
    {
      title: "KMPD & KMKOP (Heavy Equipment Ops & Safety)",
      issuer: "PT Berau Coal Energy",
      year: "2024",
      code: "KMPD-KMKOP-2024-BCE",
      category: language === "en" ? "Mining Operations Safety" : "Keselamatan Operasi Tambang"
    }
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden bg-slate-950/20 border-t border-b border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center mb-12"
        >
          <span className="text-xs font-mono font-bold tracking-widest text-cyan-400 uppercase bg-cyan-500/10 px-3.5 py-1.5 rounded-full border border-cyan-500/20">
            {language === "en" ? "Credentials" : "Kredensial"}
          </span>
          <h2 className="text-2xl sm:text-3xl font-display font-extrabold text-white mt-3 tracking-tight">
            {language === "en" ? "Professional Certifications" : "Sertifikasi Profesional"}
          </h2>
          <div className="h-1 w-12 bg-cyan-400 rounded mt-3"></div>
        </motion.div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {certifications.map((cert, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col justify-between h-full hover:border-cyan-500/30 hover:shadow-md transition-all duration-300"
            >
              <div className="flex flex-col gap-4">
                {/* Visual marker */}
                <div className="flex justify-between items-center">
                  <div className="p-2.5 bg-slate-900 rounded-xl text-cyan-400 border border-white/5">
                    <Award className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-cyan-400 bg-cyan-500/10 border border-cyan-500/20 px-2.5 py-0.5 rounded-full font-bold uppercase">
                    {cert.category}
                  </span>
                </div>

                {/* Details */}
                <div>
                  <h3 className="text-sm font-display font-bold text-white tracking-tight leading-snug">
                    {cert.title}
                  </h3>
                  <p className="text-xs text-gray-400 mt-1.5 font-medium">
                    {cert.issuer}
                  </p>
                </div>
              </div>

              {/* Code metadata block */}
              <div className="border-t border-white/5 pt-3 mt-4 flex items-center justify-between text-[10px] font-mono text-gray-500">
                <span className="truncate max-w-[150px]">Reg: {cert.code}</span>
                <span className="text-gray-400 font-bold">{cert.year}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
