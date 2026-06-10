import { useState, useRef, useEffect } from "react";

const BOOT_LINES = [
  "AMR-SYS v4.1.0 — initializing...",
  "Loading neural core........... OK",
  "Establishing secure channel... OK",
  "AI subsystem online........... OK",
  "Type /help for available commands.",
  "",
];

type Line = { type: "system" | "user" | "ai" | "blank"; text: string };

export function Terminal() {
  const [lines, setLines] = useState<Line[]>([]);
  const [input, setInput] = useState("");
  const [booted, setBooted] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"chat" | "system" | "home">("chat");

  useEffect(() => {
    let i = 0;
    const interval = setInterval(() => {
      if (i < BOOT_LINES.length) {
        const text = BOOT_LINES[i];
        setLines((prev) => [...prev, { type: text === "" ? "blank" : "system", text }]);
        i++;
      } else {
        clearInterval(interval);
        setBooted(true);
      }
    }, 110);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [lines]);

  const handleSend = () => {
    const val = input.trim();
    if (!val) return;
    setInput("");

    if (val === "/help") {
      setLines((p) => [
        ...p,
        { type: "user", text: `> ${val}` },
        { type: "system", text: "Available: /help  /clear  /status  /home  or ask anything" },
      ]);
      return;
    }
    if (val === "/clear") {
      setLines([]);
      return;
    }
    if (val === "/status") {
      setLines((p) => [
        ...p,
        { type: "user", text: `> ${val}` },
        { type: "system", text: "● CPU: 12%   ● MEM: 341 MB   ● AI: ONLINE   ● UPTIME: 04:21:07" },
      ]);
      return;
    }

    setLines((p) => [
      ...p,
      { type: "user", text: `> ${val}` },
      { type: "ai", text: `AMR AI — received: "${val}". [live responses require backend]` },
    ]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        color: "#33ff33",
        fontFamily: "'Courier New', Courier, monospace",
        fontSize: "13px",
        display: "flex",
        flexDirection: "column",
        overflow: "hidden",
      }}
    >
      {/* Top bar */}
      <div
        style={{
          borderBottom: "1px solid #1a4d1a",
          padding: "8px 16px",
          display: "flex",
          alignItems: "center",
          gap: "24px",
          background: "#050505",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#33ff33", letterSpacing: "3px", fontWeight: "bold", fontSize: "14px" }}>
          AMR::SYS
        </span>
        <div style={{ display: "flex", gap: "0" }}>
          {(["chat", "system", "home"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              style={{
                background: activeTab === tab ? "#0f2b0f" : "transparent",
                border: "1px solid",
                borderColor: activeTab === tab ? "#33ff33" : "#1a4d1a",
                color: activeTab === tab ? "#33ff33" : "#1a661a",
                padding: "4px 14px",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "11px",
                letterSpacing: "1px",
                textTransform: "uppercase",
              }}
            >
              {tab}
            </button>
          ))}
        </div>
        <div style={{ marginLeft: "auto", display: "flex", gap: "16px", color: "#1a661a", fontSize: "11px" }}>
          <span>● SECURE</span>
          <span>● AI ONLINE</span>
          <span style={{ color: "#33ff33" }}>■ READY</span>
        </div>
      </div>

      {/* Terminal area */}
      <div
        style={{
          flex: 1,
          overflowY: "auto",
          padding: "16px",
          display: "flex",
          flexDirection: "column",
          gap: "2px",
          scrollbarWidth: "thin",
          scrollbarColor: "#1a4d1a transparent",
        }}
      >
        {activeTab === "chat" && (
          <>
            {lines.map((line, i) => (
              <div
                key={i}
                style={{
                  color:
                    line.type === "user"
                      ? "#66ff66"
                      : line.type === "ai"
                      ? "#aaffaa"
                      : line.type === "blank"
                      ? "transparent"
                      : "#33aa33",
                  lineHeight: "1.6",
                  whiteSpace: "pre-wrap",
                }}
              >
                {line.text || "\u00a0"}
              </div>
            ))}
            {booted && (
              <div style={{ color: "#33ff33", marginTop: "2px", animation: "none" }}>
                <span style={{ color: "#66ff66" }}>amirul@amr-sys</span>
                <span style={{ color: "#33aa33" }}>:~$</span>
                <span> █</span>
              </div>
            )}
          </>
        )}
        {activeTab === "system" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            {[
              ["HOSTNAME", "amr-sys.local"],
              ["OS", "AMR Linux 4.1"],
              ["KERNEL", "5.15.0-amr"],
              ["UPTIME", "04:21:07"],
              ["CPU", "12% (4 cores)"],
              ["MEMORY", "341 MB / 2048 MB"],
              ["AI MODEL", "GPT-5 (active)"],
              ["BACKEND", "Python 3.11"],
              ["STATUS", "ALL SYSTEMS NOMINAL"],
            ].map(([k, v]) => (
              <div key={k} style={{ display: "flex", gap: "16px" }}>
                <span style={{ color: "#1a8c1a", minWidth: "100px" }}>{k}</span>
                <span style={{ color: "#66ff66" }}>{v}</span>
              </div>
            ))}
          </div>
        )}
        {activeTab === "home" && (
          <div style={{ display: "flex", flexDirection: "column", gap: "4px" }}>
            <div style={{ color: "#33aa33" }}>{"  █████╗ ███╗   ███╗██████╗ "}</div>
            <div style={{ color: "#33aa33" }}>{"  ██╔══██╗████╗ ████║██╔══██╗"}</div>
            <div style={{ color: "#33ff33" }}>{"  ███████║██╔████╔██║██████╔╝"}</div>
            <div style={{ color: "#33ff33" }}>{"  ██╔══██║██║╚██╔╝██║██╔══██╗"}</div>
            <div style={{ color: "#44ff44" }}>{"  ██║  ██║██║ ╚═╝ ██║██║  ██║"}</div>
            <div style={{ color: "#44ff44" }}>{"  ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝"}</div>
            <div style={{ color: "#1a661a", marginTop: "12px" }}>— AMIRUL HAFIZ COMMAND INTERFACE —</div>
            <div style={{ color: "#1a661a", marginTop: "8px" }}>
              System initialized. AI core active. Type /help to begin.
            </div>
          </div>
        )}
        <div ref={bottomRef} />
      </div>

      {/* Input */}
      <div
        style={{
          borderTop: "1px solid #1a4d1a",
          padding: "10px 16px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
          background: "#050505",
          flexShrink: 0,
        }}
      >
        <span style={{ color: "#66ff66", whiteSpace: "nowrap" }}>
          <span style={{ color: "#66ff66" }}>amirul@amr-sys</span>
          <span style={{ color: "#33aa33" }}>:~$</span>
        </span>
        <input
          ref={inputRef}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
          placeholder="enter command or ask AI..."
          style={{
            flex: 1,
            background: "transparent",
            border: "none",
            outline: "none",
            color: "#66ff66",
            fontFamily: "inherit",
            fontSize: "13px",
            caretColor: "#33ff33",
          }}
        />
        <button
          onClick={handleSend}
          style={{
            background: "transparent",
            border: "1px solid #1a4d1a",
            color: "#33aa33",
            padding: "4px 12px",
            cursor: "pointer",
            fontFamily: "inherit",
            fontSize: "11px",
          }}
        >
          EXEC
        </button>
      </div>
    </div>
  );
}
