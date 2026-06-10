import { useState } from "react";

type Panel = "AI" | "HOME" | "SYS";

const stats = [
  { label: "AI CORE", value: "ONLINE", color: "#00ffcc" },
  { label: "MODEL", value: "GPT-5", color: "#7b5ea7" },
  { label: "LATENCY", value: "142ms", color: "#00ffcc" },
  { label: "UPTIME", value: "04:21", color: "#aaaaff" },
];

const messages = [
  { role: "ai", text: "Hello, Amirul. AMR AI online. How can I assist you?" },
  { role: "user", text: "What's the system status?" },
  { role: "ai", text: "All systems nominal. AI core running at 100%. No anomalies detected." },
];

export function HudCockpit() {
  const [active, setActive] = useState<Panel>("AI");
  const [input, setInput] = useState("");
  const [msgs, setMsgs] = useState(messages);
  const [scanY, setScanY] = useState(0);

  const send = () => {
    if (!input.trim()) return;
    setMsgs((p) => [
      ...p,
      { role: "user", text: input },
      { role: "ai", text: `AMR AI — received: "${input}". [live responses require backend]` },
    ]);
    setInput("");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#030810",
        color: "#cce8ff",
        fontFamily: "'Inter', 'Segoe UI', sans-serif",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Grid background */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage:
            "linear-gradient(rgba(0,180,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(0,180,255,0.04) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      />

      {/* Top HUD bar */}
      <div
        style={{
          borderBottom: "1px solid rgba(0,200,255,0.2)",
          padding: "10px 20px",
          display: "flex",
          alignItems: "center",
          gap: "20px",
          background: "rgba(0,8,16,0.9)",
          backdropFilter: "blur(8px)",
          position: "relative",
          zIndex: 10,
          flexShrink: 0,
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <div
            style={{
              width: "28px",
              height: "28px",
              border: "2px solid #00ccff",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 0 12px rgba(0,200,255,0.4)",
            }}
          >
            <div style={{ width: "8px", height: "8px", background: "#00ccff", borderRadius: "50%" }} />
          </div>
          <span style={{ fontFamily: "'Orbitron', sans-serif", fontSize: "15px", color: "#00ccff", letterSpacing: "3px" }}>
            AMR·SYS
          </span>
        </div>

        {/* Nav tabs */}
        <div style={{ display: "flex", gap: "4px", marginLeft: "16px" }}>
          {(["HOME", "AI", "SYS"] as Panel[]).map((tab) => (
            <button
              key={tab}
              onClick={() => setActive(tab)}
              style={{
                padding: "6px 20px",
                background: active === tab ? "rgba(0,200,255,0.12)" : "transparent",
                border: "1px solid",
                borderColor: active === tab ? "#00ccff" : "rgba(0,200,255,0.2)",
                color: active === tab ? "#00ccff" : "rgba(0,200,255,0.4)",
                cursor: "pointer",
                fontSize: "11px",
                letterSpacing: "2px",
                fontFamily: "'Orbitron', sans-serif",
                transition: "all 0.2s",
                clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Right stats */}
        <div style={{ marginLeft: "auto", display: "flex", gap: "20px" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ display: "flex", flexDirection: "column", alignItems: "flex-end" }}>
              <span style={{ fontSize: "9px", color: "rgba(0,200,255,0.4)", letterSpacing: "1px" }}>{s.label}</span>
              <span style={{ fontSize: "12px", color: s.color, fontFamily: "'Orbitron', sans-serif" }}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main content */}
      <div style={{ flex: 1, display: "flex", gap: "0", overflow: "hidden", position: "relative", zIndex: 1 }}>
        {active === "AI" && (
          <>
            {/* Left side panel */}
            <div
              style={{
                width: "180px",
                borderRight: "1px solid rgba(0,200,255,0.12)",
                padding: "16px 12px",
                display: "flex",
                flexDirection: "column",
                gap: "12px",
                flexShrink: 0,
                background: "rgba(0,8,16,0.4)",
              }}
            >
              <div style={{ fontSize: "9px", color: "rgba(0,200,255,0.4)", letterSpacing: "2px", marginBottom: "4px" }}>
                TELEMETRY
              </div>
              {[
                { label: "TOKENS USED", val: "4,291", pct: 42 },
                { label: "RESPONSE AVG", val: "1.2s", pct: 24 },
                { label: "SESSION LEN", val: "12 msgs", pct: 60 },
                { label: "CONTEXT", val: "8k / 32k", pct: 25 },
              ].map((item) => (
                <div key={item.label}>
                  <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "4px" }}>
                    <span style={{ fontSize: "9px", color: "rgba(0,200,255,0.4)", letterSpacing: "1px" }}>
                      {item.label}
                    </span>
                    <span style={{ fontSize: "10px", color: "#00ccff" }}>{item.val}</span>
                  </div>
                  <div
                    style={{
                      height: "2px",
                      background: "rgba(0,200,255,0.12)",
                      borderRadius: "1px",
                      overflow: "hidden",
                    }}
                  >
                    <div
                      style={{
                        width: `${item.pct}%`,
                        height: "100%",
                        background: "linear-gradient(90deg, #00ccff, #7b5ea7)",
                        boxShadow: "0 0 6px rgba(0,200,255,0.6)",
                      }}
                    />
                  </div>
                </div>
              ))}

              <div
                style={{
                  marginTop: "auto",
                  padding: "8px",
                  border: "1px solid rgba(123,94,167,0.3)",
                  background: "rgba(123,94,167,0.06)",
                }}
              >
                <div style={{ fontSize: "9px", color: "rgba(170,170,255,0.5)", marginBottom: "6px", letterSpacing: "1px" }}>
                  AI STATUS
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: "6px" }}>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      background: "#00ff88",
                      borderRadius: "50%",
                      boxShadow: "0 0 8px #00ff88",
                      animation: "pulse 2s infinite",
                    }}
                  />
                  <span style={{ fontSize: "11px", color: "#00ff88" }}>ACTIVE</span>
                </div>
              </div>
            </div>

            {/* Chat area */}
            <div style={{ flex: 1, display: "flex", flexDirection: "column", overflow: "hidden" }}>
              {/* Scan line accent */}
              <div
                style={{
                  height: "1px",
                  background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.4), transparent)",
                  flexShrink: 0,
                }}
              />

              <div
                style={{
                  flex: 1,
                  overflowY: "auto",
                  padding: "20px 24px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "16px",
                  scrollbarWidth: "thin",
                  scrollbarColor: "rgba(0,200,255,0.15) transparent",
                }}
              >
                {msgs.map((m, i) => (
                  <div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: m.role === "user" ? "flex-end" : "flex-start",
                      gap: "4px",
                    }}
                  >
                    <div
                      style={{
                        fontSize: "9px",
                        color: m.role === "user" ? "rgba(0,200,255,0.5)" : "rgba(123,94,167,0.7)",
                        letterSpacing: "2px",
                      }}
                    >
                      {m.role === "user" ? "OPERATOR" : "AMR·AI"}
                    </div>
                    <div
                      style={{
                        maxWidth: "72%",
                        padding: "10px 14px",
                        background:
                          m.role === "user"
                            ? "rgba(0,200,255,0.08)"
                            : "rgba(123,94,167,0.08)",
                        border: "1px solid",
                        borderColor:
                          m.role === "user"
                            ? "rgba(0,200,255,0.2)"
                            : "rgba(123,94,167,0.25)",
                        fontSize: "13px",
                        lineHeight: "1.6",
                        color: m.role === "user" ? "#cce8ff" : "#d4c8f0",
                        clipPath:
                          m.role === "user"
                            ? "polygon(0 0, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%)"
                            : "polygon(0 0, calc(100% - 0px) 0, 100% 0, 100% 100%, 10px 100%, 0 calc(100% - 10px))",
                      }}
                    >
                      {m.text}
                    </div>
                  </div>
                ))}
              </div>

              {/* Input */}
              <div
                style={{
                  borderTop: "1px solid rgba(0,200,255,0.12)",
                  padding: "14px 20px",
                  display: "flex",
                  gap: "10px",
                  background: "rgba(0,8,16,0.6)",
                  flexShrink: 0,
                }}
              >
                <div
                  style={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    border: "1px solid rgba(0,200,255,0.2)",
                    background: "rgba(0,200,255,0.04)",
                    padding: "0 14px",
                  }}
                >
                  <span style={{ fontSize: "10px", color: "rgba(0,200,255,0.3)", marginRight: "8px", letterSpacing: "1px" }}>
                    INPUT›
                  </span>
                  <input
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    onKeyDown={(e) => e.key === "Enter" && send()}
                    placeholder="transmit message to AI core..."
                    style={{
                      flex: 1,
                      background: "transparent",
                      border: "none",
                      outline: "none",
                      color: "#cce8ff",
                      fontSize: "13px",
                      padding: "10px 0",
                      fontFamily: "inherit",
                    }}
                  />
                </div>
                <button
                  onClick={send}
                  style={{
                    background: "rgba(0,200,255,0.12)",
                    border: "1px solid rgba(0,200,255,0.4)",
                    color: "#00ccff",
                    padding: "10px 20px",
                    cursor: "pointer",
                    fontSize: "11px",
                    letterSpacing: "2px",
                    fontFamily: "'Orbitron', sans-serif",
                    clipPath: "polygon(8px 0%, 100% 0%, calc(100% - 8px) 100%, 0% 100%)",
                  }}
                >
                  SEND
                </button>
              </div>
            </div>

            {/* Right side panel */}
            <div
              style={{
                width: "160px",
                borderLeft: "1px solid rgba(0,200,255,0.12)",
                padding: "16px 12px",
                display: "flex",
                flexDirection: "column",
                gap: "16px",
                flexShrink: 0,
                background: "rgba(0,8,16,0.4)",
              }}
            >
              <div style={{ fontSize: "9px", color: "rgba(0,200,255,0.4)", letterSpacing: "2px" }}>QUICK ACCESS</div>
              {["SUMMARIZE", "CLEAR LOG", "EXPORT", "SETTINGS", "HELP"].map((cmd) => (
                <button
                  key={cmd}
                  style={{
                    background: "transparent",
                    border: "1px solid rgba(0,200,255,0.15)",
                    color: "rgba(0,200,255,0.5)",
                    padding: "8px 6px",
                    cursor: "pointer",
                    fontSize: "10px",
                    letterSpacing: "1px",
                    fontFamily: "inherit",
                    textAlign: "left",
                  }}
                >
                  › {cmd}
                </button>
              ))}
            </div>
          </>
        )}

        {active === "HOME" && (
          <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", gap: "24px" }}>
            <div>
              <div style={{ fontSize: "9px", color: "rgba(0,200,255,0.4)", letterSpacing: "3px", marginBottom: "8px" }}>
                SYSTEM OVERVIEW
              </div>
              <div style={{ fontSize: "24px", color: "#00ccff", fontFamily: "'Orbitron', sans-serif", letterSpacing: "2px" }}>
                WELCOME, AMIRUL
              </div>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "12px" }}>
              {[
                { title: "AI ASSISTANT", desc: "Chat with AMR AI", accent: "#00ccff" },
                { title: "SYSTEM STATUS", desc: "All systems nominal", accent: "#00ff88" },
                { title: "UPTIME", desc: "04:21:07 continuous", accent: "#7b5ea7" },
                { title: "LAST SESSION", desc: "Today, 08:12", accent: "#aaaaff" },
              ].map((card) => (
                <div
                  key={card.title}
                  style={{
                    padding: "16px",
                    border: `1px solid ${card.accent}33`,
                    background: `${card.accent}0a`,
                  }}
                >
                  <div style={{ fontSize: "10px", color: card.accent, letterSpacing: "2px", marginBottom: "6px" }}>
                    {card.title}
                  </div>
                  <div style={{ fontSize: "13px", color: "rgba(204,232,255,0.7)" }}>{card.desc}</div>
                </div>
              ))}
            </div>
          </div>
        )}

        {active === "SYS" && (
          <div style={{ flex: 1, padding: "40px", display: "flex", flexDirection: "column", gap: "16px" }}>
            <div style={{ fontSize: "9px", color: "rgba(0,200,255,0.4)", letterSpacing: "3px", marginBottom: "8px" }}>
              SYSTEM DIAGNOSTICS
            </div>
            {[
              { label: "AI CORE", status: "NOMINAL", color: "#00ff88" },
              { label: "BACKEND SERVER", status: "RUNNING", color: "#00ff88" },
              { label: "DATABASE", status: "STANDBY", color: "#aaaaff" },
              { label: "NETWORK", status: "SECURE", color: "#00ff88" },
              { label: "SECURITY", status: "ACTIVE", color: "#00ff88" },
            ].map((item) => (
              <div
                key={item.label}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "12px 16px",
                  border: "1px solid rgba(0,200,255,0.1)",
                  background: "rgba(0,200,255,0.03)",
                }}
              >
                <span style={{ fontSize: "12px", color: "rgba(204,232,255,0.7)", letterSpacing: "1px" }}>
                  {item.label}
                </span>
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  <div
                    style={{
                      width: "6px",
                      height: "6px",
                      background: item.color,
                      borderRadius: "50%",
                      boxShadow: `0 0 6px ${item.color}`,
                    }}
                  />
                  <span style={{ fontSize: "10px", color: item.color, letterSpacing: "2px" }}>{item.status}</span>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Bottom scan line */}
      <div
        style={{
          height: "1px",
          background: "linear-gradient(90deg, transparent, rgba(0,200,255,0.3), rgba(123,94,167,0.3), transparent)",
          flexShrink: 0,
        }}
      />

      <style>{`
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.3} }
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400;700&display=swap');
      `}</style>
    </div>
  );
}
