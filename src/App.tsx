import React from 'react';

export const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#05080c] text-[#f0f6fc] flex flex-col items-center justify-center p-6 text-center">
      <div className="max-w-xl mx-auto space-y-6">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span>Clean Slate Ready • အစမှ ပြန်လည်စတင်ရန် အဆင်သင့်ဖြစ်ပါပြီ</span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white font-['Plus_Jakarta_Sans']">
          Naing Moe Aung Portfolio
        </h1>

        <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
          ယခင် ဒီဇိုင်းအားလုံးကို ရှင်းလင်းပြီးပါပြီ။ သင်နှင့်အတူ အဆင့်ဆင့် (Session by Session) အစမှအဆုံး သေသပ်လှပသော Cloud & System Engineer Portfolio တစ်ခုအဖြစ် စတင်တည်ဆောက်သွားပါမည်။
        </p>

        <div className="p-5 rounded-xl border border-slate-800 bg-slate-900/60 text-left font-mono text-xs text-slate-300 space-y-2">
          <div className="text-cyan-400 font-semibold mb-2">// Proposed Roadmap:</div>
          <div>1. Session 1: Navigation Bar & Branding (Logo, Links, Status)</div>
          <div>2. Session 2: Hero Section (Headline, Bio, Action Buttons)</div>
          <div>3. Session 3: Terminal Console & Live Telemetry</div>
          <div>4. Session 4: About Me & Core Engineering Pillars</div>
          <div>5. Session 5: Technical Skills Matrix & Tools</div>
          <div>6. Session 6: Work Experience & NOC Timeline</div>
          <div>7. Session 7: Cloud Labs & Projects Showcase</div>
          <div>8. Session 8: Education & Contact Section</div>
        </div>
      </div>
    </div>
  );
};

export default App;
