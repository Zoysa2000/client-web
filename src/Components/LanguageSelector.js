import React, { useState, useEffect, useRef, useContext } from "react";
import { LanguageContext } from "../ContextAPI/LanguageContext";

const styles = `
  @import url('https://fonts.googleapis.com/css2?family=Lato:wght@400;600;700&display=swap');

  /* ── Trigger button ── */
  .lang-trigger {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    background: rgba(255, 255, 255, 0.15);
    backdrop-filter: blur(10px);
    -webkit-backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.3);
    border-radius: 100px;
    padding: 7px 14px 7px 8px;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-size: 13px;
    font-weight: 600;
    color: #fff;
    letter-spacing: 0.3px;
    transition: background 0.22s ease, border-color 0.22s ease, transform 0.18s ease, box-shadow 0.22s ease;
    white-space: nowrap;
    box-shadow: 0 2px 10px rgba(0,0,0,0.12);
  }

  .lang-trigger:hover {
    background: rgba(255, 255, 255, 0.25);
    border-color: rgba(255, 255, 255, 0.5);
    box-shadow: 0 4px 18px rgba(0,0,0,0.18);
    transform: translateY(-1px);
  }

  .lang-trigger:active {
    transform: scale(0.97);
  }

  .lang-trigger.open {
    background: rgba(255, 255, 255, 0.28);
    border-color: #fcb900;
    box-shadow: 0 0 0 3px rgba(252, 185, 0, 0.2);
  }

  /* Flag */
  .lang-flag {
    width: 26px;
    height: 18px;
    object-fit: cover;
    border-radius: 3px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.25);
    flex-shrink: 0;
  }

  /* Chevron */
  .lang-chevron {
    display: flex;
    align-items: center;
    margin-left: 2px;
    transition: transform 0.25s ease;
    opacity: 0.8;
  }
  .lang-trigger.open .lang-chevron {
    transform: rotate(180deg);
    opacity: 1;
  }

  /* ── Dropdown panel ── */
  .lang-dropdown {
    position: fixed;
    z-index: 1100;
    width: 190px;
    background: #fff;
    border-radius: 14px;
    box-shadow:
      0 8px 32px rgba(0,0,0,0.15),
      0 2px 8px rgba(0,0,0,0.08),
      0 0 0 1px rgba(0,0,0,0.06);
    overflow: hidden;
    transform-origin: top right;
    animation: dropIn 0.22s cubic-bezier(0.34, 1.56, 0.64, 1) both;
  }

  .lang-dropdown.closing {
    animation: dropOut 0.16s ease both;
  }

  @keyframes dropIn {
    from { opacity: 0; transform: scale(0.88) translateY(-8px); }
    to   { opacity: 1; transform: scale(1) translateY(0); }
  }

  @keyframes dropOut {
    from { opacity: 1; transform: scale(1) translateY(0); }
    to   { opacity: 0; transform: scale(0.9) translateY(-6px); }
  }

  /* Dropdown header */
  .lang-dropdown-header {
    font-family: 'Lato', sans-serif;
    font-size: 10px;
    font-weight: 700;
    letter-spacing: 1.5px;
    text-transform: uppercase;
    color: #aaa;
    padding: 10px 14px 6px;
    border-bottom: 1px solid #f0f0f0;
  }

  /* Option row */
  .lang-option {
    display: flex;
    align-items: center;
    gap: 10px;
    padding: 11px 14px;
    cursor: pointer;
    font-family: 'Lato', sans-serif;
    font-size: 14px;
    font-weight: 500;
    color: #333;
    transition: background 0.15s ease;
    position: relative;
  }

  .lang-option:hover {
    background: #f7f7f7;
  }

  .lang-option.selected {
    background: rgba(56, 155, 135, 0.08);
    color: #2d8a78;
    font-weight: 700;
  }

  .lang-option-flag {
    width: 28px;
    height: 20px;
    object-fit: cover;
    border-radius: 4px;
    box-shadow: 0 1px 4px rgba(0,0,0,0.18);
    flex-shrink: 0;
  }

  .lang-option-check {
    margin-left: auto;
    color: #389B87;
    display: flex;
    align-items: center;
    animation: checkPop 0.2s ease both;
  }

  @keyframes checkPop {
    from { transform: scale(0); opacity: 0; }
    to   { transform: scale(1); opacity: 1; }
  }

  /* Ripple on select */
  .lang-option::after {
    content: '';
    position: absolute;
    inset: 0;
    background: rgba(56, 155, 135, 0.12);
    opacity: 0;
    transition: opacity 0.2s ease;
    border-radius: inherit;
  }
  .lang-option:active::after {
    opacity: 1;
  }

  /* ── Backdrop (mobile) ── */
  .lang-backdrop {
    position: fixed;
    inset: 0;
    z-index: 1050;
    background: rgba(0,0,0,0.15);
    animation: fadeIn 0.18s ease both;
  }

  @keyframes fadeIn {
    from { opacity: 0; }
    to   { opacity: 1; }
  }
`;

const LANGUAGES = [
  {
    code: "en",
    label: "English",
    native: "English",
    flag: "https://upload.wikimedia.org/wikipedia/en/archive/a/ae/20190917170935%21Flag_of_the_United_Kingdom.svg",
  },
  {
    code: "ru",
    label: "Russian",
    native: "Русский",
    flag: "https://upload.wikimedia.org/wikipedia/en/thumb/f/f3/Flag_of_Russia.svg/1200px-Flag_of_Russia.svg.png",
  },
];

// Simple chevron SVG
const ChevronDown = () => (
  <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
    <path d="M2 4l4 4 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

// Checkmark SVG
const Check = () => (
  <svg width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M3 7.5l3 3 6-6" stroke="#389B87" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

const LanguageSelector = () => {
  const { language, setLanguage } = useContext(LanguageContext);
  const [isOpen, setIsOpen]       = useState(false);
  const [closing, setClosing]     = useState(false);
  const [dropPos, setDropPos]     = useState({ top: 0, right: 0 });
  const triggerRef                = useRef(null);

  const selected = LANGUAGES.find((l) => l.code === language) || LANGUAGES[0];

  /* Calculate dropdown position from trigger */
  const openDropdown = () => {
    if (triggerRef.current) {
      const rect = triggerRef.current.getBoundingClientRect();
      setDropPos({
        top: rect.bottom + 8,
        right: window.innerWidth - rect.right,
      });
    }
    setIsOpen(true);
    setClosing(false);
  };

  const closeDropdown = () => {
    setClosing(true);
    setTimeout(() => { setIsOpen(false); setClosing(false); }, 150);
  };

  const toggle = () => (isOpen ? closeDropdown() : openDropdown());

  const handleSelect = (code) => {
    setLanguage(code);
    closeDropdown();
  };

  /* Close on outside click */
  useEffect(() => {
    if (!isOpen) return;
    const handler = (e) => {
      if (triggerRef.current && !triggerRef.current.contains(e.target)) {
        closeDropdown();
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [isOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") closeDropdown(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <style>{styles}</style>

      {/* Trigger — fixed top-right, responsive positioning */}
      <div
        style={{
          position: "fixed",
          top: "clamp(18px, 3vw, 36px)",
          right: "clamp(70px, 5vw, 60px)",
          zIndex: 1200,
        }}
      >
        <button
          ref={triggerRef}
          className={`lang-trigger${isOpen ? " open" : ""}`}
          onClick={toggle}
          aria-haspopup="listbox"
          aria-expanded={isOpen}
        >
          <img className="lang-flag" src={selected.flag} alt={selected.label} />
          <span className="d-none d-sm-inline">{selected.label}</span>
          <span className="lang-chevron"><ChevronDown /></span>
        </button>
      </div>

      {/* Mobile backdrop */}
      {isOpen && (
        <div
          className="lang-backdrop d-block d-md-none"
          onClick={closeDropdown}
        />
      )}

      {/* Dropdown */}
      {isOpen && (
        <div
          className={`lang-dropdown${closing ? " closing" : ""}`}
          style={{ top: dropPos.top, right: dropPos.right }}
          role="listbox"
        >
          <div className="lang-dropdown-header">Select Language</div>

          {LANGUAGES.map((lang) => (
            <div
              key={lang.code}
              role="option"
              aria-selected={lang.code === language}
              className={`lang-option${lang.code === language ? " selected" : ""}`}
              onClick={() => handleSelect(lang.code)}
            >
              <img className="lang-option-flag" src={lang.flag} alt={lang.label} />
              <div style={{ lineHeight: 1.2 }}>
                <div>{lang.label}</div>
                <div style={{ fontSize: 11, color: "#999", fontWeight: 400 }}>{lang.native}</div>
              </div>
              {lang.code === language && (
                <span className="lang-option-check"><Check /></span>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default LanguageSelector;


