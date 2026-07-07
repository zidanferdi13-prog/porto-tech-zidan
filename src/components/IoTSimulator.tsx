import { useState, useEffect, useRef } from "react";
import { 
  Cpu, 
  Activity, 
  Terminal, 
  Radio, 
  Wifi, 
  Settings, 
  Play, 
  Square, 
  ShieldAlert, 
  CheckCircle, 
  Layers, 
  HardDrive,
  Database
} from "lucide-react";
import { motion } from "motion/react";
import { useLanguage } from "../context/LanguageContext";

type ProfileType = "mining_vhms" | "factory_weighing" | "smart_greenhouse";

interface LogMessage {
  id: string;
  timestamp: string;
  topic: string;
  payload: string;
  type: "info" | "warning" | "success" | "critical";
}

export default function IoTSimulator() {
  const { language } = useLanguage();
  const [activeProfile, setActiveProfile] = useState<ProfileType>("mining_vhms");
  const [isRunning, setIsRunning] = useState(true);
  const [logs, setLogs] = useState<LogMessage[]>([]);
  const [tick, setTick] = useState(0);
  
  // Simulated Telemetry States
  const [vibration, setVibration] = useState(24.5);
  const [temp, setTemp] = useState(72.4);
  const [operatorFatigue, setOperatorFatigue] = useState(0.12);
  const [weightValue, setWeightValue] = useState(0.0);
  const [plcStatus, setPlcStatus] = useState<"IDLE" | "BATCHING" | "COMPLETE">("IDLE");
  const [soilMoisture, setSoilMoisture] = useState(48.2);
  const [solarVoltage, setSolarVoltage] = useState(13.8);
  const [valveOpen, setValveOpen] = useState(false);

  // Stats Counters
  const [totalPackets, setTotalPackets] = useState(1482);
  const [systemUptime, setSystemUptime] = useState("99.82%");
  const [latency, setLatency] = useState(42); // ms

  const logContainerRef = useRef<HTMLDivElement>(null);

  // Initialize initial logs
  useEffect(() => {
    const initialLogs: LogMessage[] = [
      {
        id: "1",
        timestamp: new Date().toLocaleTimeString(),
        topic: "sys/broker/connection",
        payload: '{"status": "connected", "clients": 412, "uptime": "14d 6h"}',
        type: "success"
      },
      {
        id: "2",
        timestamp: new Date().toLocaleTimeString(),
        topic: "mining/fleet/device/VHMS-042/status",
        payload: '{"engine_rpm": 1850, "oil_pressure_psi": 64.2}',
        type: "info"
      }
    ];
    setLogs(initialLogs);
  }, []);

  // Scroll logs to bottom
  useEffect(() => {
    if (logContainerRef.current) {
      logContainerRef.current.scrollTop = logContainerRef.current.scrollHeight;
    }
  }, [logs]);

  // Telemetry updates loop
  useEffect(() => {
    if (!isRunning) return;

    const timer = setInterval(() => {
      setTick((prev) => prev + 1);
      setTotalPackets((prev) => prev + 1);
      setLatency(Math.floor(28 + Math.random() * 25));

      const now = new Date().toLocaleTimeString();
      let newLog: LogMessage | null = null;

      if (activeProfile === "mining_vhms") {
        // Mining profile logic
        const vibNoise = 22 + Math.random() * 5;
        const tempNoise = 70 + Math.random() * 8;
        const fatigueNoise = 0.08 + Math.random() * 0.12;

        setVibration(parseFloat(vibNoise.toFixed(1)));
        setTemp(parseFloat(tempNoise.toFixed(1)));
        setOperatorFatigue(parseFloat(fatigueNoise.toFixed(2)));

        if (tick % 3 === 0) {
          newLog = {
            id: String(Date.now()),
            timestamp: now,
            topic: "mining/fleet/device/VHMS-042/telemetry",
            payload: JSON.stringify({
              vibration_g: parseFloat(vibNoise.toFixed(2)),
              engine_temp_c: parseFloat(tempNoise.toFixed(1)),
              vhm_status: vibNoise > 26 ? "HIGH_VIB" : "OK"
            }),
            type: vibNoise > 26 ? "warning" : "info"
          };
        }
      } else if (activeProfile === "factory_weighing") {
        // Factory weighing (load cell & PLC batching cycle)
        let nextPlcStatus = plcStatus;
        let nextWeight = weightValue;

        if (tick % 8 === 0) {
          if (plcStatus === "IDLE") {
            nextPlcStatus = "BATCHING";
            nextWeight = 0.0;
          } else if (plcStatus === "BATCHING") {
            nextPlcStatus = "COMPLETE";
            nextWeight = 250.4;
          } else {
            nextPlcStatus = "IDLE";
            nextWeight = 0.0;
          }
          setPlcStatus(nextPlcStatus);
          setWeightValue(nextWeight);

          newLog = {
            id: String(Date.now()),
            timestamp: now,
            topic: "factory/batching/plc/status",
            payload: JSON.stringify({
              plc_id: "SIEMENS-S7-1200",
              process_state: nextPlcStatus,
              target_weight_kg: 250.0,
              measured_weight_kg: parseFloat(nextWeight.toFixed(1)),
              error_margin: nextPlcStatus === "COMPLETE" ? "0.16%" : "N/A"
            }),
            type: nextPlcStatus === "COMPLETE" ? "success" : "info"
          };
        } else if (plcStatus === "BATCHING") {
          const currentWeight = Math.min(250, weightValue + 35 + Math.random() * 15);
          setWeightValue(parseFloat(currentWeight.toFixed(1)));
        }
      } else {
        // Smart greenhouse profile
        const soilNoise = Math.max(30, Math.min(90, soilMoisture + (valveOpen ? 2.5 : -0.4) + (Math.random() * 0.4 - 0.2)));
        const solarNoise = Math.max(11, Math.min(14.5, solarVoltage + (Math.random() * 0.1 - 0.05)));

        setSoilMoisture(parseFloat(soilNoise.toFixed(1)));
        setSolarVoltage(parseFloat(solarNoise.toFixed(2)));

        if (soilNoise < 35 && !valveOpen) {
          setValveOpen(true);
          newLog = {
            id: String(Date.now()),
            timestamp: now,
            topic: "greenhouse/actuator/valve/1",
            payload: '{"command": "OPEN", "reason": "soil_moisture_low", "measured": ' + soilNoise.toFixed(1) + '%}',
            type: "warning"
          };
        } else if (soilNoise > 65 && valveOpen) {
          setValveOpen(false);
          newLog = {
            id: String(Date.now()),
            timestamp: now,
            topic: "greenhouse/actuator/valve/1",
            payload: '{"command": "CLOSE", "reason": "soil_moisture_saturated", "measured": ' + soilNoise.toFixed(1) + '%}',
            type: "success"
          };
        } else if (tick % 4 === 0) {
          newLog = {
            id: String(Date.now()),
            timestamp: now,
            topic: "greenhouse/sensor/ambient",
            payload: JSON.stringify({
              soil_moisture_pct: parseFloat(soilNoise.toFixed(1)),
              solar_panel_v: parseFloat(solarNoise.toFixed(2)),
              irrigation_valve: valveOpen ? "ON" : "OFF"
            }),
            type: "info"
          };
        }
      }

      if (newLog) {
        setLogs((prev) => [...prev.slice(-24), newLog!]);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [isRunning, activeProfile, tick, plcStatus, weightValue, soilMoisture, solarVoltage, valveOpen]);

  // User-triggered anomaly
  const triggerAnomaly = () => {
    const now = new Date().toLocaleTimeString();
    let anomalyLog: LogMessage;

    if (activeProfile === "mining_vhms") {
      setVibration(42.8);
      setTemp(98.6);
      setOperatorFatigue(0.85);
      anomalyLog = {
        id: String(Date.now()),
        timestamp: now,
        topic: "mining/fleet/device/VHMS-042/ALARM",
        payload: '{"vhm_status": "CRITICAL", "vibration_g": 42.8, "operator_fatigue_index": 0.85, "action": "OPERATOR_FATIGUE_ALARM_TRIGGERED"}',
        type: "critical"
      };
    } else if (activeProfile === "factory_weighing") {
      setWeightValue(324.8); // Exceeded load cell limit
      anomalyLog = {
        id: String(Date.now()),
        timestamp: now,
        topic: "factory/batching/load_cell/OVERLOAD",
        payload: '{"weight_kg": 324.8, "max_limit_kg": 300.0, "modbus_error": "0x4B_REG_LIMIT_ERR", "plc_state": "EMERGENCY_STOP"}',
        type: "critical"
      };
    } else {
      setSoilMoisture(12.5);
      anomalyLog = {
        id: String(Date.now()),
        timestamp: now,
        topic: "greenhouse/alerts/CRITICAL_DRY",
        payload: '{"soil_moisture_pct": 12.5, "irrigation_pump": "MALFUNCTION_NO_FLOW_DETECTED", "solar_charge_v": 10.4}',
        type: "critical"
      };
    }

    setLogs((prev) => [...prev.slice(-24), anomalyLog]);
    setLatency(12);
  };

  return (
    <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-6" id="iot-simulator-section">
      {/* Sidebar Controls */}
      <div className="lg:col-span-4 flex flex-col gap-4">
        <div className="glass-panel p-5 rounded-2xl border border-white/10 flex flex-col gap-5 h-full justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <h4 className="text-xs font-mono tracking-wider text-emerald-400 uppercase font-semibold">
                {language === "en" ? "Live System Profile" : "Profil Sistem Live"}
              </h4>
            </div>
            <h3 className="text-xl font-display font-bold text-white mb-2">
              {language === "en" ? "Edge Broker Core" : "Inti Broker Edge"}
            </h3>
            <p className="text-xs text-gray-400 mb-4 leading-relaxed">
              {language === "en"
                ? "Zidan connects real-world OT systems (PLCs, sensors, load cells) to standard enterprise cloud platforms using low-latency protocols. Select a project architecture to simulate:"
                : "Zidan menghubungkan sistem OT dunia nyata (PLC, sensor, load cell) ke platform cloud perusahaan standar menggunakan protokol latensi rendah. Pilih arsitektur proyek untuk disimulasikan:"}
            </p>

            {/* Profile Selection Buttons */}
            <div className="flex flex-col gap-2.5">
              <button
                id="mining-vhms-btn"
                onClick={() => { setActiveProfile("mining_vhms"); setLogs([]); }}
                className={`flex items-center gap-3 p-3 rounded-xl transition text-left cursor-pointer border ${
                  activeProfile === "mining_vhms" 
                    ? "bg-emerald-500/10 border-emerald-500/40 text-emerald-400" 
                    : "bg-white/5 border-transparent text-gray-300 hover:bg-white/10"
                }`}
              >
                <div className="p-1.5 bg-black/30 rounded-lg">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">
                    {language === "en" ? "Mining VHMS Core" : "Inti VHMS Tambang"}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {language === "en" ? "400+ Edge CAN Bus Devices" : "400+ Perangkat CAN Bus Edge"}
                  </div>
                </div>
              </button>

              <button
                id="factory-weighing-btn"
                onClick={() => { setActiveProfile("factory_weighing"); setLogs([]); }}
                className={`flex items-center gap-3 p-3 rounded-xl transition text-left cursor-pointer border ${
                  activeProfile === "factory_weighing" 
                    ? "bg-cyan-500/10 border-cyan-500/40 text-cyan-400" 
                    : "bg-white/5 border-transparent text-gray-300 hover:bg-white/10"
                }`}
              >
                <div className="p-1.5 bg-black/30 rounded-lg">
                  <Database className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">
                    {language === "en" ? "Automated PLC Weighing" : "Penimbangan PLC Otomatis"}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {language === "en" ? "Siemens S7 & Load Cells" : "Siemens S7 & Load Cell"}
                  </div>
                </div>
              </button>

              <button
                id="smart-greenhouse-btn"
                onClick={() => { setActiveProfile("smart_greenhouse"); setLogs([]); }}
                className={`flex items-center gap-3 p-3 rounded-xl transition text-left cursor-pointer border ${
                  activeProfile === "smart_greenhouse" 
                    ? "bg-amber-500/10 border-amber-500/40 text-amber-500" 
                    : "bg-white/5 border-transparent text-gray-300 hover:bg-white/10"
                }`}
              >
                <div className="p-1.5 bg-black/30 rounded-lg">
                  <Radio className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold">
                    {language === "en" ? "Smart Agricultural IoT" : "IoT Pertanian Cerdas"}
                  </div>
                  <div className="text-[10px] text-gray-400">
                    {language === "en" ? "Solar, Node-RED & MQTT" : "Surya, Node-RED & MQTT"}
                  </div>
                </div>
              </button>
            </div>
          </div>

          {/* Controller buttons */}
          <div className="pt-4 border-t border-white/5 flex flex-wrap gap-2 justify-between items-center">
            <div className="flex gap-2">
              <button 
                id="toggle-simulator-btn"
                onClick={() => setIsRunning(!isRunning)} 
                className={`px-3 py-1.5 text-xs font-medium rounded-lg flex items-center gap-1.5 transition cursor-pointer ${
                  isRunning 
                    ? "bg-slate-800 hover:bg-slate-700 text-gray-200" 
                    : "bg-emerald-500 hover:bg-emerald-600 text-slate-950 font-bold"
                }`}
              >
                {isRunning ? (
                  <>
                    <Square className="w-3.5 h-3.5 fill-current" /> {language === "en" ? "Pause Feed" : "Jeda Aliran"}
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 fill-current" /> {language === "en" ? "Resume Feed" : "Lanjutkan Aliran"}
                  </>
                )}
              </button>

              <button 
                id="trigger-anomaly-btn"
                onClick={triggerAnomaly} 
                className="px-3 py-1.5 text-xs font-medium bg-rose-950/40 hover:bg-rose-900/50 border border-rose-500/30 text-rose-300 rounded-lg flex items-center gap-1.5 transition cursor-pointer"
              >
                <ShieldAlert className="w-3.5 h-3.5" /> {language === "en" ? "Inject Fault" : "Injeksi Error"}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Monitoring Screen */}
      <div className="lg:col-span-8 flex flex-col gap-4">
        {/* Real-time Display Card */}
        <div className="glass-panel p-5 rounded-2xl border border-white/10 relative overflow-hidden flex flex-col gap-5">
          <div className="scanline absolute inset-0 pointer-events-none opacity-20 rounded-2xl"></div>

          {/* Live Header Info */}
          <div className="flex justify-between items-center border-b border-white/5 pb-3">
            <div className="flex items-center gap-2.5">
              <div className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-pulse"></div>
              <div className="text-xs font-mono font-bold tracking-wider uppercase text-gray-200">
                {language === "en" ? "ACTIVE PIPELINE" : "PIPELINE AKTIF"}: {activeProfile === "mining_vhms" ? "PAMAPERSADA_VHMS" : activeProfile === "factory_weighing" ? "ANUGERAH_MORTAR_PLC" : "GREENHOUSE_NODE_RED"}
              </div>
            </div>
            <div className="flex items-center gap-4 text-[11px] font-mono text-gray-400">
              <div className="hidden sm:block">{language === "en" ? "Uptime" : "Waktu Aktif"}: <span className="text-emerald-400 font-bold">{systemUptime}</span></div>
              <div>{language === "en" ? "Packets" : "Paket"}: <span className="text-cyan-400 font-bold">{totalPackets}</span></div>
              <div>{language === "en" ? "Latency" : "Latensi"}: <span className="text-gray-200 font-bold">{latency}ms</span></div>
            </div>
          </div>

          {/* Grid of Virtual Meters */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {activeProfile === "mining_vhms" ? (
              <>
                {/* VHMS Vibration Gauge */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">SENSOR.CAN_VHMS.vibe_g</span>
                    <h5 className="text-sm font-semibold text-gray-200 mt-1">
                      {language === "en" ? "Chassis Vibration" : "Getaran Sasis"}
                    </h5>
                  </div>
                  <div className="my-3 flex items-baseline gap-2">
                    <span className={`text-3xl font-mono font-bold ${vibration > 30 ? "text-rose-400" : "text-emerald-400"}`}>
                      {vibration}
                    </span>
                    <span className="text-xs text-gray-400">G-force</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${vibration > 30 ? "bg-rose-500" : "bg-emerald-500"}`}
                      style={{ width: `${Math.min(100, (vibration / 50) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* VHMS Temp Gauge */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">SENSOR.MODBUS_TEMP.oil_c</span>
                    <h5 className="text-sm font-semibold text-gray-200 mt-1">
                      {language === "en" ? "Hydraulic Oil Temp" : "Suhu Oli Hidrolik"}
                    </h5>
                  </div>
                  <div className="my-3 flex items-baseline gap-2">
                    <span className={`text-3xl font-mono font-bold ${temp > 90 ? "text-rose-400 animate-pulse" : "text-cyan-400"}`}>
                      {temp}°C
                    </span>
                    <span className="text-xs text-gray-400">{language === "en" ? "Celsius" : "Selsius"}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${temp > 90 ? "bg-rose-500" : "bg-cyan-500"}`}
                      style={{ width: `${Math.min(100, (temp / 120) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Operator Fatigue Level */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">AI_CAM.OPERATOR.fatigue</span>
                    <h5 className="text-sm font-semibold text-gray-200 mt-1">
                      {language === "en" ? "Fatigue Multi-Index" : "Multi-Indeks Kelelahan"}
                    </h5>
                  </div>
                  <div className="my-3 flex items-baseline gap-2">
                    <span className={`text-3xl font-mono font-bold ${operatorFatigue > 0.6 ? "text-rose-400 animate-pulse font-extrabold text-glow-emerald" : "text-emerald-400"}`}>
                      {(operatorFatigue * 100).toFixed(0)}%
                    </span>
                    <span className="text-xs text-gray-400">{language === "en" ? "Eye-closure" : "Penutupan mata"}</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-500 ${operatorFatigue > 0.6 ? "bg-rose-500 animate-pulse" : "bg-emerald-500"}`}
                      style={{ width: `${Math.min(100, operatorFatigue * 100)}%` }}
                    ></div>
                  </div>
                </div>
              </>
            ) : activeProfile === "factory_weighing" ? (
              <>
                {/* PLC Process State */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">PLC.SIEMENS.state_id</span>
                    <h5 className="text-sm font-semibold text-gray-200 mt-1">Siemens S7 Status</h5>
                  </div>
                  <div className="my-3 flex items-center gap-2">
                    <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded-md ${
                      plcStatus === "IDLE" 
                        ? "bg-slate-800 text-slate-300" 
                        : plcStatus === "BATCHING" 
                        ? "bg-cyan-500/20 text-cyan-400 animate-pulse" 
                        : "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30"
                    }`}>
                      {plcStatus}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 font-mono">
                    Registers: DB10.DBD14
                  </div>
                </div>

                {/* Load Cell Weight */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">LOAD_CELL.WEIGHING.kg</span>
                    <h5 className="text-sm font-semibold text-gray-200 mt-1">
                      {language === "en" ? "Measured Product" : "Produk Terukur"}
                    </h5>
                  </div>
                  <div className="my-3 flex items-baseline gap-2">
                    <span className={`text-3xl font-mono font-bold ${weightValue > 300 ? "text-rose-400 animate-pulse" : "text-cyan-400"}`}>
                      {weightValue}
                    </span>
                    <span className="text-xs text-gray-400">kg</span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${weightValue > 300 ? "bg-rose-500" : "bg-cyan-500"}`}
                      style={{ width: `${Math.min(100, (weightValue / 300) * 100)}%` }}
                    ></div>
                  </div>
                </div>

                {/* Accuracy Tolerances */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">METROLOGY.CALIB.deviation</span>
                    <h5 className="text-sm font-semibold text-gray-200 mt-1">
                      {language === "en" ? "Digital Calibration" : "Kalibrasi Digital"}
                    </h5>
                  </div>
                  <div className="my-3 flex items-baseline gap-2">
                    <span className="text-3xl font-mono font-bold text-emerald-400">±0.15</span>
                    <span className="text-xs text-gray-400">{language === "en" ? "kg error" : "kg galat"}</span>
                  </div>
                  <div className="text-[11px] text-gray-400 font-mono">
                    Zero point: verified
                  </div>
                </div>
              </>
            ) : (
              <>
                {/* Soil Moisture */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">MCU.ARDUINO.soil_pct</span>
                    <h5 className="text-sm font-semibold text-gray-200 mt-1">
                      {language === "en" ? "Soil Moisture" : "Kelembapan Tanah"}
                    </h5>
                  </div>
                  <div className="my-3 flex items-baseline gap-2">
                    <span className={`text-3xl font-mono font-bold ${soilMoisture < 35 ? "text-amber-500" : "text-emerald-400"}`}>
                      {soilMoisture}%
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className={`h-full rounded-full transition-all duration-300 ${soilMoisture < 35 ? "bg-amber-500" : "bg-emerald-500"}`}
                      style={{ width: `${soilMoisture}%` }}
                    ></div>
                  </div>
                </div>

                {/* Irrigation Solenoid Valve */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">ACTUATOR.VALVE.state</span>
                    <h5 className="text-sm font-semibold text-gray-200 mt-1">
                      {language === "en" ? "Solenoid Actuator" : "Aktuator Solenoid"}
                    </h5>
                  </div>
                  <div className="my-3 flex items-center gap-2">
                    <span className={`px-2.5 py-1 text-xs font-mono font-bold rounded-md flex items-center gap-1.5 ${
                      valveOpen 
                        ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                        : "bg-slate-800 text-slate-400"
                    }`}>
                      <span className={`w-1.5 h-1.5 rounded-full ${valveOpen ? "bg-emerald-400 animate-ping" : "bg-slate-500"}`}></span>
                      {valveOpen 
                        ? (language === "en" ? "OPEN & WATERING" : "BUKA & MENYIRAM") 
                        : (language === "en" ? "CLOSED (IDLE)" : "TUTUP (PASIF)")}
                    </span>
                  </div>
                  <div className="text-[11px] text-gray-400 font-mono">
                    Node-RED flow active
                  </div>
                </div>

                {/* Solar Battery Voltage */}
                <div className="bg-black/40 p-4 rounded-xl border border-white/5 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] text-gray-400 font-mono">CHARGE_CONTROLLER.V_batt</span>
                    <h5 className="text-sm font-semibold text-gray-200 mt-1">
                      {language === "en" ? "Solar Accumulator" : "Akumulator Surya"}
                    </h5>
                  </div>
                  <div className="my-3 flex items-baseline gap-2">
                    <span className="text-3xl font-mono font-bold text-amber-500">
                      {solarVoltage}V
                    </span>
                  </div>
                  <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-amber-500 rounded-full transition-all duration-300"
                      style={{ width: `${((solarVoltage - 10) / 5) * 100}%` }}
                    ></div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Simulated Broker Log Stream Terminal */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-semibold text-gray-300 flex items-center gap-1.5">
                <Terminal className="w-3.5 h-3.5 text-cyan-400" /> {language === "en" ? "Live MQTT Broker Feed" : "Aliran Broker MQTT Live"}: <code className="text-cyan-400 text-[10px] bg-slate-900 px-1 py-0.5 rounded">broker.zidanferdi.io</code>
              </span>
              <button 
                id="clear-logs-btn"
                onClick={() => setLogs([])} 
                className="text-[10px] font-mono text-gray-500 hover:text-gray-300 uppercase transition cursor-pointer"
              >
                {language === "en" ? "Clear Buffer" : "Bersihkan Buffer"}
              </button>
            </div>

            <div 
              ref={logContainerRef}
              className="bg-slate-950 p-4 rounded-xl border border-white/10 h-44 overflow-y-auto font-mono text-xs leading-relaxed flex flex-col gap-1 text-gray-300"
            >
              {logs.length === 0 ? (
                <div className="text-gray-500 text-center py-10 flex flex-col items-center gap-2">
                  <Activity className="w-5 h-5 text-gray-600 animate-pulse" />
                  {language === "en" ? "No logs in buffer. Waiting for MQTT packages..." : "Tidak ada log di buffer. Menunggu paket MQTT..."}
                </div>
              ) : (
                logs.map((log) => {
                  let badgeColor = "text-cyan-400";
                  let bgBadge = "bg-cyan-950/40 border-cyan-500/20";
                  if (log.type === "success") {
                    badgeColor = "text-emerald-400";
                    bgBadge = "bg-emerald-950/40 border-emerald-500/20";
                  } else if (log.type === "warning") {
                    badgeColor = "text-amber-500";
                    bgBadge = "bg-amber-950/40 border-amber-500/20";
                  } else if (log.type === "critical") {
                    badgeColor = "text-rose-400 font-extrabold";
                    bgBadge = "bg-rose-950/40 border-rose-500/20 animate-pulse";
                  }

                  return (
                    <div key={log.id} className="border-b border-white/5 py-1 hover:bg-white/2">
                      <div className="flex flex-wrap items-center gap-2 text-[10px] sm:text-xs">
                        <span className="text-gray-500">[{log.timestamp}]</span>
                        <span className={`px-1.5 py-0.5 rounded text-[9px] border font-semibold ${bgBadge} ${badgeColor}`}>
                          {log.topic}
                        </span>
                        <span className="text-gray-200 break-all">{log.payload}</span>
                      </div>
                    </div>
                  );
                })
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
