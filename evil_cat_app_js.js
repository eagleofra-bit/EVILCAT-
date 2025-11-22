:root {
  --bg: #05050a;
  --panel: #0b0b16;
  --accent: #b026ff;
  --accent2: #28e0ff;
  --text: #f5f5f7;
  --soft: #9b9bb5;
  --border: rgba(255, 255, 255, 0.16);
}

* { box-sizing: border-box; }

body {
  margin: 0;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: radial-gradient(circle at top, #191932 0, #05050a 55%);
  color: var(--text);
  font-family: system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
}

.app {
  width: 100%;
  max-width: 980px;
  background: radial-gradient(circle at top left, #181828 0, #050510 55%);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.18);
  box-shadow: 0 0 0 1px rgba(0,0,0,0.7), 0 20px 45px rgba(0,0,0,0.9);
  padding: 14px;
  display: grid;
  grid-template-columns: minmax(0, 1.05fr) minmax(0, 1fr);
  gap: 12px;
}

@media (max-width: 800px) {
  .app { grid-template-columns: 1fr; }
}

.panel {
  background: radial-gradient(circle at top left, rgba(176, 38, 255, 0.14) 0, #050510 55%);
  border-radius: 16px;
  border: 1px solid var(--border);
  padding: 12px;
  display: flex;
  flex-direction: column;
  gap: 10px;
}

.header { display: flex; justify-content: space-between; gap: 8px; align-items: center; }
.title { font-size: 15px; font-weight: 600; }
.subtitle { font-size: 11px; color: var(--soft); }

.badge-row { display: flex; gap: 6px; flex-wrap: wrap; justify-content: flex-end; font-size: 10px; }
.badge {
  padding: 3px 9px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.22);
  text-transform: uppercase;
  letter-spacing: 0.11em;
}
.badge-main { border-color: var(--accent); color: var(--accent2); }

.step {
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.16);
  background: radial-gradient(circle at top left, rgba(255,255,255,0.08) 0, rgba(5,5,15,0.85) 55%);
  padding: 8px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.step-head { display: flex; justify-content: space-between; gap: 6px; align-items: center; }
.step-title-wrap { display: flex; align-items: center; gap: 6px; }
.step-num {
  width: 18px;
  height: 18px;
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 10px;
  font-weight: 600;
}
.step-title { font-size: 11px; text-transform: uppercase; letter-spacing: 0.11em; font-weight: 600; }
.step-hint { font-size: 11px; color: var(--soft); }

.row { display: flex; flex-wrap: wrap; gap: 8px; }

.field { flex: 1; min-width: 140px; display: flex; flex-direction: column; gap: 4px; font-size: 12px; }
.field-label { font-size: 11px; text-transform: uppercase; letter-spacing: 0.11em; color: var(--soft); }

select, textarea, input[type=text] {
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.2);
  background: rgba(5,5,15,0.9);
  padding: 6px 8px;
  font-size: 13px;
  color: var(--text);
  outline: none;
}

textarea { resize: vertical; min-height: 80px; }

select:focus, textarea:focus, input[type=text]:focus {
  border-color: var(--accent);
  box-shadow: 0 0 0 1px rgba(176,38,255,0.4);
}

.check-row { display: flex; align-items: center; gap: 6px; font-size: 11px; color: var(--soft); }
.check-row input { width: 14px; height: 14px; accent-color: var(--accent); }

.style-filters { display: flex; flex-wrap: wrap; gap: 6px; margin-bottom: 4px; }
.filter-pill {
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 3px 8px;
  font-size: 10px;
  text-transform: uppercase;
  letter-spacing: 0.11em;
  background: rgba(5,5,15,0.9);
  color: var(--soft);
  cursor: pointer;
}
.filter-pill.active {
  border-color: var(--accent);
  background: radial-gradient(circle at top left, rgba(176, 38, 255, 0.26) 0, #111120 55%);
  color: var(--accent2);
}

.style-strip { display: flex; gap: 8px; overflow-x: auto; padding-bottom: 4px; }
.style-card {
  min-width: 130px;
  background: #101018;
  border-radius: 12px;
  border: 1px solid rgba(255,255,255,0.18);
  padding: 6px;
  font-size: 11px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  cursor: pointer;
}
.style-card.active {
  border-color: var(--accent);
  box-shadow: 0 0 14px rgba(176, 38, 255, 0.7);
  background: radial-gradient(circle at top left, rgba(176,38,255,0.26) 0, #111120 55%);
}

.thumb {
  width: 100%;
  aspect-ratio: 4/3;
  border-radius: 8px;
  background: linear-gradient(135deg, #1e1e30, #05050a);
  border: 1px solid rgba(255,255,255,0.2);
  position: relative;
  overflow: hidden;
}
.thumb-label {
  position: absolute;
  bottom: 4px;
  left: 6px;
  font-size: 9px;
  text-transform: uppercase;
  letter-spacing: 0.16em;
  background: rgba(0,0,0,0.7);
  padding: 2px 6px;
  border-radius: 999px;
}

.style-name { font-weight: 600; font-size: 12px; }
.style-desc { font-size: 10px; color: var(--soft); }

.btn-row { display: flex; justify-content: flex-end; gap: 8px; flex-wrap: wrap; margin-top: 4px; }
.btn {
  border-radius: 999px;
  border: 1px solid rgba(255,255,255,0.2);
  padding: 6px 14px;
  font-size: 11px;
  letter-spacing: 0.13em;
  text-transform: uppercase;
  background: linear-gradient(135deg, #0b0b16, #15152a);
  color: var(--text);
  cursor: pointer;
}
.btn-primary {
  background: linear-gradient(135deg, #b026ff, #28e0ff);
  border-color: transparent;
  color: #05050a;
  font-weight: 600;
  box-shadow: 0 0 16px rgba(176,38,255,0.7);
