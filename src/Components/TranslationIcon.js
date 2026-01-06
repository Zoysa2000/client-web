import React, { useContext, useState } from "react";
import { LanguageContext } from "../ContextAPI/LanguageContext";

const TranslationIcon = () => {
  const { language } = useContext(LanguageContext);
  const [isHovered, setIsHovered] = useState(false);
  
  if (language !== "ru") return null;

  return (
    <>
      <div
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          position: "fixed",
          bottom: "20px",
          left: "20px",
          zIndex: 1000,
          backgroundColor: "#fff",
          padding: "12px 18px",
          borderRadius: "12px",
          border: isHovered ? "2px solid #3498db" : "1px solid #ccc",
          boxShadow: isHovered 
            ? "0 6px 20px rgba(52, 152, 219, 0.4)" 
            : "0 2px 6px rgba(0,0,0,0.2)",
          display: "flex",
          alignItems: "center",
          gap: "12px",
          cursor: "pointer",
          transition: "all 0.3s ease",
          transform: isHovered ? "translateY(-2px) scale(1.05)" : "translateY(0) scale(1)",
        }}
      >
        {/* Russian Flag with pulse animation */}
        <div style={{ position: "relative" }}>
          <img
            src="./translationicon.png"
            alt="Russian Flag"
            style={{ 
              width: "32px", 
              height: "32px", 
              objectFit: "cover",
              borderRadius: "4px",
              transition: "transform 0.3s ease",
              transform: isHovered ? "rotate(5deg)" : "rotate(0deg)",
            }}
          />
          {/* Pulse ring */}
          <div
            style={{
              position: "absolute",
              top: "-4px",
              left: "-4px",
              right: "-4px",
              bottom: "-4px",
              borderRadius: "6px",
              border: "2px solid #3498db",
              animation: "pulse 2s ease-in-out infinite",
              opacity: 0.6,
            }}
          ></div>
        </div>

        {/* Tooltip on hover */}
        {isHovered && (
          <div
            style={{
              position: "absolute",
              left: "100%",
              top: "50%",
              transform: "translateY(-50%)",
              marginLeft: "12px",
              backgroundColor: "#2c3e50",
              color: "#fff",
              padding: "8px 12px",
              borderRadius: "6px",
              fontSize: "13px",
              fontWeight: "500",
              whiteSpace: "nowrap",
              boxShadow: "0 2px 8px rgba(0,0,0,0.25)",
              animation: "slideIn 0.3s ease",
            }}
          >
            Translating to Russian...
            {/* Tooltip arrow */}
            <div
              style={{
                position: "absolute",
                right: "100%",
                top: "50%",
                transform: "translateY(-50%)",
                width: 0,
                height: 0,
                borderTop: "6px solid transparent",
                borderBottom: "6px solid transparent",
                borderRight: "6px solid #2c3e50",
              }}
            ></div>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        
        @keyframes pulse {
          0%, 100% { 
            opacity: 0.6;
            transform: scale(1);
          }
          50% { 
            opacity: 0;
            transform: scale(1.15);
          }
        }
        
        @keyframes pulse-dot {
          0%, 100% { 
            transform: translate(-50%, -50%) scale(1);
            opacity: 1;
          }
          50% { 
            transform: translate(-50%, -50%) scale(1.5);
            opacity: 0.5;
          }
        }
        
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(-50%) translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(-50%) translateX(0);
          }
        }
      `}</style>
    </>
  );
};

export default TranslationIcon;

