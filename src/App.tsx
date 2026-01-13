import React from "react";

const App: React.FC = () => {
  const handleClick = (): void => {
    alert("Tugma bosildi 🚀");
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(135deg, #4facfe, #00f2fe)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "32px",
          borderRadius: "18px",
          width: "340px",
          textAlign: "center",
          boxShadow: "0 12px 35px rgba(0,0,0,0.25)",
        }}
      >
        <h1 style={{ color: "#222", marginBottom: "10px" }}>
          👋 Salom
        </h1>

        <p style={{ color: "#555", marginBottom: "22px" }}>
          Bu TSX (React + TypeScript) bilan qilingan dizayn
        </p>

        <button
          onClick={handleClick}
          style={{
            padding: "12px 24px",
            borderRadius: "12px",
            border: "none",
            backgroundColor: "#4facfe",
            color: "#fff",
            fontSize: "16px",
            cursor: "pointer",
            transition: "0.3s",
          }}
          onMouseOver={(e) =>
            (e.currentTarget.style.backgroundColor = "#00c6ff")
          }
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = "#4facfe")
          }
        >
          Bos meni
        </button>
      </div>
    </div>
  );
};

export default App;
