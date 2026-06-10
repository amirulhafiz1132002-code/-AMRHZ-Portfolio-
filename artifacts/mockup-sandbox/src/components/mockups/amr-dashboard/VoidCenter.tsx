import { useState, useRef, useEffect } from "react";

const INITIAL = [
  { role: "ai", text: "Hello, Amirul." },
  { role: "ai", text: "I'm here." },
];

export function VoidCenter() {
  const [msgs, setMsgs] = useState(INITIAL);
  const [input, setInput] = useState("");
  const [focused, setFocused] = useState(false);
  const bottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [msgs]);

  const send = () => {
    const val = input.trim();
    if (!val) return;
    setInput("");
    setMsgs((p) => [
      ...p,
      { role: "user", text: val },
      { role: "ai", text: `[Live replies require backend — "${val}" received]` },
    ]);
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "#000",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        fontFamily: "'Inter', sans-serif",
        padding: "24px",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Ambient radial glow */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: "600px",
          height: "600px",
          background: "radial-gradient(circle, rgba(0,150,255,0.04) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Watermark brand */}
      <div
        style={{
          position: "absolute",
          top: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          fontSize: "11px",
          color: "rgba(255,255,255,0.08)",
          letterSpacing: "6px",
          fontFamily: "'Orbitron', sans-serif",
          userSelect: "none",
          whiteSpace: "nowrap",
        }}
      >
        AMR SYS
      </div>

      {/* Single centered chat panel */}
      <div
        style={{
          width: "100%",
          maxWidth: "600px",
          display: "flex",
          flexDirection: "column",
          gap: "0",
          position: "relative",
          zIndex: 1,
        }}
      >
        {/* Messages */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "28px",
            minHeight: "360px",
            maxHeight: "460px",
            overflowY: "auto",
            padding: "0 0 28px 0",
            scrollbarWidth: "none",
          }}
        >
          {msgs.map((m, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: m.role === "user" ? "flex-end" : "flex-start",
                gap: "6px",
              }}
            >
              {m.role === "ai" && (
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <div
                    style={{
                      width: "4px",
                      height: "4px",
                      background: "#0096FF",
                      borderRadius: "50%",
                      boxShadow: "0 0 8px #0096FF",
                    }}
                  />
                  <span
                    style={{
                      fontSize: "10px",
                      color: "rgba(0,150,255,0.5)",
                      letterSpacing: "2px",
                    }}
                  >
                    AMR AI
                  </span>
                </div>
              )}
              <div
                style={{
                  fontSize: "15px",
                  lineHeight: "1.7",
                  color: m.role === "user" ? "rgba(255,255,255,0.6)" : "rgba(255,255,255,0.88)",
                  maxWidth: m.role === "user" ? "80%" : "100%",
                  textAlign: m.role === "user" ? "right" : "left",
                  fontWeight: m.role === "user" ? 300 : 400,
                  letterSpacing: m.role === "ai" ? "0.01em" : "normal",
                }}
              >
                {m.text}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Divider */}
        <div
          style={{
            height: "1px",
            background: focused
              ? "linear-gradient(90deg, transparent, rgba(0,150,255,0.4), transparent)"
              : "rgba(255,255,255,0.06)",
            transition: "background 0.4s",
            marginBottom: "20px",
          }}
        />

        {/* Input */}
        <div style={{ display: "flex", alignItems: "flex-end", gap: "12px" }}>
          <textarea
            ref={inputRef}
            value={input}
            onChange={(e) => {
              setInput(e.target.value);
              e.target.style.height = "auto";
              e.target.style.height = Math.min(e.target.scrollHeight, 100) + "px";
            }}
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                send();
              }
            }}
            onFocus={() => setFocused(true)}
            onBlur={() => setFocused(false)}
            placeholder="say something..."
            rows={1}
            style={{
              flex: 1,
              background: "transparent",
              border: "none",
              outline: "none",
              color: "rgba(255,255,255,0.75)",
              fontSize: "15px",
              fontFamily: "inherit",
              resize: "none",
              lineHeight: "1.7",
              caretColor: "#0096FF",
              minHeight: "28px",
              maxHeight: "100px",
              padding: 0,
            }}
          />
          <button
            onClick={send}
            style={{
              background: "transparent",
              border: "none",
              cursor: "pointer",
              padding: "4px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              opacity: input.trim() ? 1 : 0.2,
              transition: "opacity 0.2s",
              flexShrink: 0,
            }}
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="rgba(0,150,255,0.9)">
              <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z" />
            </svg>
          </button>
        </div>

        {/* Subtle hint */}
        <div
          style={{
            marginTop: "16px",
            fontSize: "10px",
            color: "rgba(255,255,255,0.1)",
            textAlign: "center",
            letterSpacing: "1px",
          }}
        >
          enter to send · shift+enter for new line
        </div>
      </div>

      {/* Bottom right nav hints */}
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          right: "24px",
          display: "flex",
          gap: "20px",
        }}
      >
        {["home", "system"].map((item) => (
          <span
            key={item}
            style={{
              fontSize: "10px",
              color: "rgba(255,255,255,0.1)",
              letterSpacing: "2px",
              cursor: "pointer",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.3)")}
            onMouseLeave={(e) => (e.currentTarget.style.color = "rgba(255,255,255,0.1)")}
          >
            {item}
          </span>
        ))}
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Orbitron:wght@400&family=Inter:wght@300;400&display=swap');
        textarea::placeholder { color: rgba(255,255,255,0.18); }
      `}</style>
    </div>
  );
}
