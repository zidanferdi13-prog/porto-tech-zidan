import { jsPDF } from "jspdf";

export function downloadPdfCv() {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4"
  });

  // A4 size: 210mm x 297mm
  let y = 15;
  const marginX = 15;
  const contentWidth = 180; // 210 - 2 * 15

  // Primary Theme Colors (Emerald / Slate)
  const colors = {
    primary: [15, 23, 42] as [number, number, number],   // Slate 900
    accent: [16, 185, 129] as [number, number, number],  // Emerald 500
    text: [51, 65, 85] as [number, number, number],       // Slate 700
    muted: [100, 116, 139] as [number, number, number],   // Slate 500
    lightGray: [241, 245, 249] as [number, number, number] // Slate 100
  };

  // Top header accent line
  doc.setFillColor(colors.accent[0], colors.accent[1], colors.accent[2]);
  doc.rect(0, 0, 210, 5, "F");

  // Page 1 Header
  y = 15;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]);
  doc.text("ZIDAN FERDIANSYAH", marginX, y);
  
  y += 6;
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.setTextColor(colors.accent[0], colors.accent[1], colors.accent[2]);
  doc.text("IT SYSTEM & IoT ENGINEER", marginX, y);

  // Contact Info Row
  y += 5;
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8.5);
  doc.setTextColor(colors.muted[0], colors.muted[1], colors.muted[2]);
  const contactText = "Email: zidanferdi13@gmail.com   |   Location: Indonesia   |   Portfolio: " + window.location.origin;
  doc.text(contactText, marginX, y);

  // Decorative divider
  y += 4;
  doc.setDrawColor(203, 213, 225); // Slate 300
  doc.setLineWidth(0.4);
  doc.line(marginX, y, marginX + contentWidth, y);
  y += 7;

  // Helper: Section Header Drawer
  const drawSectionHeader = (title: string) => {
    // Ensure room for section header
    if (y > 270) {
      doc.addPage();
      // Draw top header line on new page
      doc.setFillColor(colors.accent[0], colors.accent[1], colors.accent[2]);
      doc.rect(0, 0, 210, 5, "F");
      y = 15;
    }
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10.5);
    doc.setTextColor(colors.accent[0], colors.accent[1], colors.accent[2]);
    doc.text(title.toUpperCase(), marginX, y);
    y += 1.5;
    
    doc.setDrawColor(226, 232, 240); // Slate 200
    doc.setLineWidth(0.3);
    doc.line(marginX, y, marginX + contentWidth, y);
    y += 4.5;
  };

  // Helper: Paragraph wrapped text
  const addParagraph = (text: string, fontSize = 9, style: "normal" | "bold" | "italic" = "normal", color = colors.text, leading = 4) => {
    doc.setFont("helvetica", style);
    doc.setFontSize(fontSize);
    doc.setTextColor(color[0], color[1], color[2]);
    
    const lines = doc.splitTextToSize(text, contentWidth);
    if (y + (lines.length * leading) > 280) {
      doc.addPage();
      doc.setFillColor(colors.accent[0], colors.accent[1], colors.accent[2]);
      doc.rect(0, 0, 210, 5, "F");
      y = 15;
    }
    
    doc.text(lines, marginX, y);
    y += (lines.length * leading);
  };

  // Helper: Job header
  const addJobHeader = (title: string, company: string, period: string) => {
    if (y > 260) {
      doc.addPage();
      doc.setFillColor(colors.accent[0], colors.accent[1], colors.accent[2]);
      doc.rect(0, 0, 210, 5, "F");
      y = 15;
    }

    doc.setFont("helvetica", "bold");
    doc.setFontSize(9.5);
    doc.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]);
    doc.text(title, marginX, y);

    // Period (Right aligned)
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(colors.muted[0], colors.muted[1], colors.muted[2]);
    doc.text(period, marginX + contentWidth - doc.getTextWidth(period), y);

    y += 4;
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
    doc.text(company, marginX, y);
    y += 4.5;
  };

  // Helper: Bullet point
  const addBullet = (text: string) => {
    const bulletChar = "•";
    doc.setFont("helvetica", "normal");
    doc.setFontSize(9);
    doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
    doc.text(bulletChar, marginX + 1, y);

    const maxBulletWidth = contentWidth - 5;
    const lines = doc.splitTextToSize(text, maxBulletWidth);
    
    if (y + (lines.length * 4) > 282) {
      doc.addPage();
      doc.setFillColor(colors.accent[0], colors.accent[1], colors.accent[2]);
      doc.rect(0, 0, 210, 5, "F");
      y = 15;
    }

    doc.text(lines, marginX + 5, y);
    y += (lines.length * 4) + 1;
  };

  // 1. PROFESSIONAL SUMMARY
  drawSectionHeader("Professional Summary");
  addParagraph(
    "Dedicated and highly methodical IT Systems & IoT Engineer with a solid foundation bridging industrial Operational Technology (OT) and enterprise IT environments. Experienced in deploying, configuring, and maintaining high-reliability sensor networks, PLC-to-Web telemetry pipelines, edge computing servers, and real-time database interfaces. Proven success in reducing operating risks, boosting system uptime, and eliminating manual data workflows in heavy-industry mining and modern automated factories.",
    9, "normal", colors.text, 4.2
  );
  y += 4;

  // 2. RELEVANT WORK EXPERIENCE
  drawSectionHeader("Professional Experience");

  // Job 1
  addJobHeader("IT & IIoT Engineer", "PT Anugerah Mortar Abadi", "Nov 2025 – Present");
  addBullet("Lead end-to-end development of industrial monitoring systems for manufacturing operations, integrating PLCs, load cells, and production equipment into centralized dashboards.");
  addBullet("Act as Project PIC for factory-wide device monitoring systems, ensuring data accuracy, system reliability, and continuous operation across multiple sites.");
  addBullet("Digitized manual production and weighing processes by connecting PLC-based weighing systems to web-based monitoring platforms, completely eliminating manual reporting errors.");
  addBullet("Designed and maintained local server infrastructure, MQTT brokers, and Node.js-based backend systems for real-time factory data acquisition with redundant polling failovers.");
  addBullet("Integrated CAN Bus, MOD Bus, and heavy equipment health telemetry to support predictive maintenance systems.");
  y += 3;

  // Job 2
  addJobHeader("IoT Engineer", "PT Pamapersada Nusantara", "Mar 2024 – Present");
  addBullet("Deployed and maintained over 400 mission-critical IoT devices across remote coal mining sites, establishing 98% system uptime through predictive maintenance scheduling and field inspections.");
  addBullet("Conducted real-time operator fatigue detection for 400+ operators utilizing AI-based camera systems, contributing to a 25% reduction in fatigue-related incidents.");
  addBullet("Integrated industrial sensors and measuring devices with cloud infrastructures using MQTT and Socket.IO for seamless real-time data ingestion.");
  addBullet("Developed interactive visual monitoring dashboards in Power BI, enabling data-driven operational planning and slashing equipment troubleshooting response times by 30%.");
  y += 3;

  // Job 3
  addJobHeader("Robotics & Coding Instructor", "BrightCHAMPS (Global / Remote)", "Oct 2023 – Mar 2024");
  addBullet("Delivered coding and microcontrollers (Arduino-based) instructions to over 100 students globally, establishing custom lessons on digital circuits, sensors, and actuators.");
  addBullet("Designed custom game development, app prototyping, and responsive web projects to elevate engagement.");
  y += 3;

  // Job 4
  addJobHeader("Agricultural Extension Officer", "Dinas Pertanian Bandar Lampung", "Jun 2022 – Aug 2022");
  addBullet("Provided technical agricultural solutions and transferred modern eco-friendly agricultural technology to 20+ local farming households.");
  y += 6;

  // 3. EDUCATION
  drawSectionHeader("Education");
  addJobHeader("B.Eng. in Agricultural Engineering", "Lampung University", "Graduated • GPA: 3.77 / 4.00");
  addBullet("Academic Highlight: Graduated with honors (3.77 GPA), with specialization in physical systems digitalization.");
  addBullet("Thesis Project: Designed and developed an automated cassava starch gravity-measuring device using Arduino Uno, load cell sensors, and custom software calibration, demonstrating early expertise in bridging physical hardware with logical automation.");
  y += 6;

  // 4. CORE CERTIFICATIONS
  drawSectionHeader("Certifications & Trainings");
  addBullet("Siemens WinCC SCADA - Certified by Anak Teknik Indonesia (2023)");
  addBullet("IoT Engineer Certification - Certified by Edspert.id");
  y += 6;

  // 5. CORE SKILLS INVENTORY
  drawSectionHeader("Skills Inventory");
  
  // Custom skills formatting - Grid like
  const skillCols = [
    { cat: "IoT & Automation", items: "PLC Integration, Weighing Systems, MQTT, Socket.IO, CAN Bus, Modbus, Node-RED" },
    { cat: "Software & Web", items: "Node.js (Express), TypeScript, React, Vite, Tailwind CSS, API Design, Power BI" },
    { cat: "DevOps & Hardware", items: "Local Server Infrastructure, Raspberry Pi, Gateways, Arduino, Git/GitHub, SCADA" }
  ];

  skillCols.forEach((col) => {
    if (y > 275) {
      doc.addPage();
      doc.setFillColor(colors.accent[0], colors.accent[1], colors.accent[2]);
      doc.rect(0, 0, 210, 5, "F");
      y = 15;
    }
    
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8.5);
    doc.setTextColor(colors.primary[0], colors.primary[1], colors.primary[2]);
    doc.text(col.cat + ": ", marginX, y);
    
    doc.setFont("helvetica", "normal");
    doc.setTextColor(colors.text[0], colors.text[1], colors.text[2]);
    
    const catLabelWidth = doc.getTextWidth(col.cat + ": ");
    const textLines = doc.splitTextToSize(col.items, contentWidth - catLabelWidth);
    
    doc.text(textLines, marginX + catLabelWidth, y);
    y += (textLines.length * 4) + 1;
  });

  // Save / Trigger Download
  doc.save("Zidan_Ferdiansyah_CV.pdf");
}
