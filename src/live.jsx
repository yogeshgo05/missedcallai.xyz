import React, { useState } from "react";
import { createRoot } from "react-dom/client";

const loomEmbed = "https://www.loom.com/embed/e7f50642518142e2b02035116c4ef305";
const loomShare = "https://www.loom.com/share/e7f50642518142e2b02035116c4ef305";
const phone = "+17049232828";

const conversation = [
  ["ai", "Hi Sarah, thanks for calling. What type of issue are you dealing with?"],
  ["user", "Roof leak after the storm."],
  ["ai", "How urgent is it?"],
  ["user", "Very urgent. Water is coming in."],
  ["ai", "Got it. What is the property address?"],
  ["user", "218 Maple Ave."],
  ["ai", "Thanks. Here is a link to schedule an inspection."],
];

function App() {
  const [tab, setTab] = useState("sales");
  return (
    <div className="page">
      <style>{css}</style>
      <div className="blob b1" />
      <div className="blob b2" />
      <header className="nav wrap">
        <div className="brand"><div className="logo">⚡</div><div><b>missedcallai.xyz</b><span>48-hour install for local service businesses</span></div></div>
        <div className="tabs">
          <button onClick={() => setTab("sales")} className={tab === "sales" ? "active" : ""}>Sales Page</button>
          <button onClick={() => setTab("demo")} className={tab === "demo" ? "active" : ""}>Dashboard Demo</button>
        </div>
        <a className="phone" href={`tel:${phone}`}>+1 704 923 2828</a>
      </header>
      {tab === "sales" ? <Sales setTab={setTab} /> : <Dashboard />}
    </div>
  );
}

function Sales({ setTab }) {
  return (
    <main className="wrap">
      <section className="hero">
        <div>
          <div className="eyebrow">Built for roofers, HVAC, plumbers, clinics, and local services</div>
          <h1>Stop losing jobs from missed calls.</h1>
          <p>missedcallai.xyz texts missed callers in seconds, qualifies the job, books appointments, and puts every lead into one clean dashboard.</p>
          <div className="cta">
            <a className="primary" href={`tel:${phone}`}>Call or text +1 704 923 2828</a>
            <button className="secondary" onClick={() => setTab("demo")}>Watch dashboard demo</button>
          </div>
          <div className="stats"><div><b>48h</b><span>install</span></div><div><b>24/7</b><span>follow-up</span></div><div><b>$750</b><span>first installs</span></div></div>
        </div>
        <div className="hero-card">
          <div className="dash-head"><b>Live Lead Dashboard</b><span>+3 booked</span></div>
          {[
            ["Sarah M.", "Roof leak after storm", "$4,800", "Booked"],
            ["James R.", "AC not cooling", "$900", "Qualified"],
            ["Priya K.", "Plumbing issue", "$1,200", "Follow-up"],
          ].map(([name, need, value, status]) => <div className="lead" key={name}><div><b>{name}</b><small>{need}</small></div><div><strong>{value}</strong><small>{status}</small></div></div>)}
          <div className="sms">💬 Instant text sent: “Hi Sarah, saw you called about a roof leak. Can you send your address and a photo?”</div>
        </div>
      </section>

      <section className="loom" id="loom">
        <div className="video"><iframe src={loomEmbed} allowFullScreen title="MissedCall AI Loom demo" /></div>
        <div className="card"><div className="kicker">2-minute Loom demo</div><h2>See the full missed-call recovery flow.</h2><p>The demo shows the missed call, instant SMS, AI qualification, booking, and owner summary.</p><a className="primary small" href={loomShare} target="_blank" rel="noreferrer">Open Loom video</a></div>
      </section>

      <section className="offer" id="book">
        <div><div className="kicker">Founding customer offer</div><h2>Installed this week for $750 upfront.</h2><p>First version live in 48 hours. If this recovers one missed job, it should pay for itself.</p></div>
        <div className="price"><b>Includes</b>{["Instant missed-call text follow-up", "Lead qualification questions", "Calendar booking link", "Owner notification", "Simple dashboard", "48-hour first version"].map(x => <div key={x}>✓ {x}</div>)}<a className="primary full" href={`tel:${phone}`}>Call or text +1 704 923 2828</a><small>Or email: hello@missedcallai.xyz</small></div>
      </section>
    </main>
  );
}

function Dashboard() {
  return (
    <main className="wrap demo">
      <div className="demo-top"><div><div className="kicker">Loom demo scene</div><h1>Missed Call Command Center</h1><p>Use this tab to show exactly what happens after a missed call.</p></div><a className="primary" href={loomShare} target="_blank" rel="noreferrer">Watch Loom</a></div>
      <section className="app">
        <aside><b>⚡ missedcallai.xyz</b>{["🏠 Dashboard", "👥 Leads 27", "🤖 Automations", "💬 Messages 3", "📅 Bookings", "📈 Analytics"].map((x, i) => <span className={i === 0 ? "on" : ""} key={x}>{x}</span>)}</aside>
        <div className="command">
          <div className="flow">{["Lead comes in", "Instant follow-up", "AI qualifies", "Booking confirmed", "Owner summary"].map((s, i) => <div key={s}><em>{i + 1}</em><b>{s}</b></div>)}</div>
          <div className="grid">
            <div className="panel hot"><label>LEAD COMES IN</label><div className="phoneicon">📞</div><h3>New missed call</h3><p><b>Sarah M.</b><br />(312) 555-0147</p><p>💧 Roof leak after storm</p><p className="urgent">⚠ High urgency</p><h2>$4,800</h2></div>
            <div className="panel"><label>SMS CONVERSATION</label>{conversation.map(([who, text], i) => <div className={who === "user" ? "bubble user" : "bubble"} key={i}>{text}</div>)}<button>Send booking link →</button></div>
            <div className="panel"><label>AI QUALIFICATION</label>{[["Job Type", "Roof Leak"], ["Urgency", "Very Urgent"], ["Location", "218 Maple Ave"], ["Photo", "Received"], ["Service", "Roof Repair"], ["Budget", "$4,000 to $6,000"]].map(([a,b]) => <div className="checkrow" key={a}><span><b>{a}</b><small>{b}</small></span><i>✓</i></div>)}<div className="score">Lead Score <b>92/100</b></div></div>
            <div className="panel"><label>APPOINTMENT BOOKED</label><div className="calendar">✅</div><h3>Inspection booked!</h3><h2>10:30 AM</h2><p>Thu, May 15<br />218 Maple Ave</p></div>
            <div className="panel"><label>OWNER SUMMARY</label><h3>Sarah M.</h3><p>Roof leak after storm.<br />High urgency.<br />Address collected.<br />Appointment booked.</p><h2>$4,800</h2><div className="metrics"><span>Recovered <b>12</b></span><span>Booked <b>3</b></span><span>Avg Response <b>8 sec</b></span><span>Pipeline <b>$16.2k</b></span></div></div>
          </div>
        </div>
      </section>
    </main>
  );
}

const css = `
*{box-sizing:border-box}body{margin:0}.page{min-height:100vh;background:#020617;color:white;font-family:Inter,ui-sans-serif,system-ui,sans-serif;overflow-x:hidden;position:relative}.wrap{max-width:1180px;margin:0 auto;padding:0 22px;position:relative;z-index:2}.blob{position:fixed;border-radius:999px;filter:blur(80px);opacity:.35;animation:float 9s ease-in-out infinite}.b1{width:380px;height:380px;background:#06b6d4;left:-120px;top:80px}.b2{width:420px;height:420px;background:#d946ef;right:-140px;top:220px}@keyframes float{50%{transform:translate(30px,-20px) scale(1.12)}}@keyframes rise{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes pulse{50%{box-shadow:0 0 0 14px rgba(34,211,238,0)}}.nav{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:24px 22px}.brand{display:flex;align-items:center;gap:12px}.brand span{display:block;color:#94a3b8;font-size:12px}.logo{width:42px;height:42px;background:white;color:#020617;border-radius:16px;display:grid;place-items:center;font-weight:900}.tabs{display:flex;gap:8px;padding:6px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.07);border-radius:999px}.tabs button{border:0;background:transparent;color:#cbd5e1;padding:10px 16px;border-radius:999px;font-weight:900;cursor:pointer}.tabs .active{background:#22d3ee;color:#03111a}.phone,.primary{background:#22d3ee;color:#03111a;text-decoration:none;border:0;border-radius:999px;padding:14px 20px;font-weight:950;display:inline-flex;align-items:center;justify-content:center;cursor:pointer}.secondary{background:rgba(255,255,255,.08);color:white;border:1px solid rgba(255,255,255,.12);border-radius:999px;padding:14px 20px;font-weight:950;cursor:pointer}.hero{display:grid;grid-template-columns:1fr 1fr;gap:54px;align-items:center;padding:70px 0 90px}.eyebrow,.kicker{color:#67e8f9;text-transform:uppercase;letter-spacing:.18em;font-size:12px;font-weight:950;margin-bottom:16px}.hero h1,.demo h1{font-size:clamp(48px,7vw,82px);line-height:.93;letter-spacing:-.06em;margin:0;animation:rise .6s ease both}.hero p,.offer p,.demo p,.card p{color:#cbd5e1;font-size:18px;line-height:1.6}.cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:30px}.stats{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:30px;max-width:520px}.stats div{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);border-radius:22px;padding:18px;text-align:center}.stats b{font-size:26px;display:block}.stats span{color:#94a3b8;font-size:12px}.hero-card{background:rgba(15,23,42,.92);border:1px solid rgba(255,255,255,.12);border-radius:34px;padding:24px;box-shadow:0 30px 100px rgba(0,0,0,.45);transform:rotate(2deg)}.dash-head{display:flex;justify-content:space-between;margin-bottom:18px}.dash-head span{color:#86efac;background:rgba(16,185,129,.14);padding:6px 10px;border-radius:999px}.lead{display:flex;justify-content:space-between;gap:14px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.09);border-radius:18px;padding:15px;margin-bottom:10px}.lead small{display:block;color:#94a3b8;margin-top:4px}.lead strong{color:#67e8f9}.sms{background:#22d3ee;color:#03111a;border-radius:18px;padding:16px;margin-top:14px;font-weight:800}.loom{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;padding:60px 0}.video{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:30px;padding:14px}.video iframe{width:100%;aspect-ratio:16/9;border:0;border-radius:22px;background:#0f172a}.card,.offer,.price{background:rgba(255,255,255,.065);border:1px solid rgba(255,255,255,.1);border-radius:30px;padding:30px}.card h2,.offer h2{font-size:clamp(34px,4vw,54px);line-height:1;letter-spacing:-.04em;margin:0}.small{margin-top:18px}.offer{display:grid;grid-template-columns:1fr 1fr;gap:40px;margin:50px 0 80px}.price{background:white;color:#020617}.price div{margin:13px 0;font-weight:800}.full{width:100%;margin-top:18px}.price small{display:block;text-align:center;color:#64748b;margin-top:12px}.demo{padding:34px 22px 80px}.demo-top{display:flex;align-items:flex-end;justify-content:space-between;gap:20px;margin-bottom:22px}.app{display:grid;grid-template-columns:210px 1fr;border:1px solid rgba(255,255,255,.12);background:rgba(2,6,23,.72);border-radius:32px;overflow:hidden;box-shadow:0 40px 120px rgba(0,0,0,.45)}aside{background:rgba(15,23,42,.85);padding:22px;border-right:1px solid rgba(255,255,255,.1)}aside b{display:block;margin-bottom:26px}aside span{display:block;color:#cbd5e1;padding:13px 12px;border-radius:15px;margin-bottom:8px;font-weight:800}.on{background:rgba(34,211,238,.18);color:white}.command{padding:22px}.flow{display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:18px}.flow div{display:flex;gap:9px;align-items:center}.flow em{width:38px;height:38px;border-radius:50%;background:rgba(34,211,238,.16);border:1px solid rgba(34,211,238,.55);display:grid;place-items:center;font-style:normal;font-weight:950;animation:pulse 2s infinite}.flow b{font-size:12px;text-transform:uppercase;color:#67e8f9}.grid{display:grid;grid-template-columns:1.05fr 1.3fr 1.1fr 1fr 1.15fr;gap:13px}.panel{position:relative;min-height:420px;background:rgba(15,23,42,.9);border:1px solid rgba(255,255,255,.11);border-radius:22px;padding:16px;overflow:hidden}.panel:before{content:"";position:absolute;inset:0;background:radial-gradient(circle at top left,rgba(34,211,238,.13),transparent 36%);pointer-events:none}.panel>*{position:relative}.panel label{display:flex;color:#67e8f9;font-size:12px;font-weight:950;margin-bottom:15px}.phoneicon,.calendar{width:78px;height:78px;border-radius:50%;display:grid;place-items:center;background:rgba(34,211,238,.14);font-size:38px;border:1px solid rgba(34,211,238,.35);animation:pulse 1.8s infinite}.panel h3{font-size:23px;margin:15px 0}.panel h2{color:#4ade80;font-size:30px}.urgent{color:#f87171}.bubble{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.09);border-radius:14px;padding:9px 10px;margin-bottom:8px;font-size:12px;line-height:1.35}.bubble.user{background:rgba(14,116,144,.48);margin-left:32px}.panel button{width:100%;background:rgba(34,211,238,.11);border:1px solid rgba(34,211,238,.25);color:#cffafe;border-radius:12px;padding:11px;font-weight:900}.checkrow{display:grid;grid-template-columns:1fr 24px;gap:8px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:14px;padding:10px;margin-bottom:9px}.checkrow small{display:block;color:#94a3b8;margin-top:3px}.checkrow i{background:#86efac;color:#052e16;border-radius:50%;height:22px;width:22px;display:grid;place-items:center;font-style:normal;font-weight:900}.score{margin-top:14px;background:rgba(132,204,22,.13);border:1px solid rgba(132,204,22,.28);border-radius:16px;padding:14px;color:#bbf7d0}.summary-value strong,.score b{display:block;font-size:24px}.metrics{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-top:16px}.metrics span{background:rgba(34,211,238,.07);border:1px solid rgba(34,211,238,.13);border-radius:12px;padding:10px;color:#94a3b8;font-size:11px}.metrics b{display:block;color:white;font-size:18px;margin-top:3px}@media(max-width:1180px){.app{grid-template-columns:1fr}aside{display:none}.grid{grid-template-columns:1fr 1fr}.flow{grid-template-columns:1fr}}@media(max-width:900px){.hero,.loom,.offer{grid-template-columns:1fr}.grid{grid-template-columns:1fr}.nav,.demo-top{flex-direction:column;align-items:flex-start}.hero-card{transform:none}.phone{display:none}.stats{grid-template-columns:1fr}.tabs{width:100%}.tabs button{flex:1}}
`;

createRoot(document.getElementById("root")).render(<App />);
