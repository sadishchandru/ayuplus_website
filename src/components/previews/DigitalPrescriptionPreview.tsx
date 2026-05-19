export default function DigitalPrescriptionPreview() {
  return (
    <div className="w-full bg-[#f4f5f7] font-['Inter'] select-none overflow-hidden" style={{ minHeight: 520 }}>

      {/* Top nav bar */}
      <div className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="text-[#00A63E] font-bold text-[11px]">ayuplus</span>
          <span className="text-gray-400 text-[8px]">Gleaming Software</span>
        </div>
        <div className="flex items-center gap-3">
          <span className="text-[8px] text-gray-500">sadish@gleamingsoftware.com</span>
          <span className="text-[8px] font-semibold text-gray-700">05:00 PM &nbsp; Tue, May 19, 2026</span>
        </div>
      </div>

      {/* OP search row */}
      <div className="bg-white border-b border-gray-100 px-4 py-2 flex items-center gap-3">
        <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 w-32">Search OPNo / Na</div>
        <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 flex-1">Patient name</div>
        <div className="flex items-center gap-2 ml-auto">
          <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 w-24">Phone number</div>
          <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 w-12">Age</div>
          <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 w-10">Sex</div>
          <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 w-24">DOB</div>
        </div>
      </div>

      {/* Pain scale */}
      <div className="bg-white border-b border-gray-100 px-4 py-2">
        <div className="text-[8px] font-semibold text-gray-600 mb-2">PAIN SCALE</div>
        <div className="flex gap-2 flex-wrap">
          {[
            { emoji: "😊", label: "0 None" },
            { emoji: "🙂", label: "1 Min" },
            { emoji: "😐", label: "2 Mild" },
            { emoji: "😕", label: "3 Mild" },
            { emoji: "😟", label: "4 Mod" },
            { emoji: "😣", label: "5 Mod" },
            { emoji: "😖", label: "6 Sev" },
            { emoji: "😤", label: "7 Sev" },
            { emoji: "😱", label: "8 V.Sev" },
            { emoji: "😵", label: "9 Worst" },
            { emoji: "🤯", label: "10 Unbear" },
          ].map((p, i) => (
            <div key={i} className={`flex flex-col items-center gap-0.5 px-1.5 py-1 rounded-lg border text-[6px] cursor-pointer ${i === 0 ? 'border-[#00A63E] bg-[#f0faf4]' : 'border-gray-100'}`}>
              <span className="text-[13px]">{p.emoji}</span>
              <span className="text-gray-500">{p.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Main 3-panel layout */}
      <div className="flex gap-0" style={{ minHeight: 360 }}>

        {/* Left sidebar - dark icon bar */}
        <div className="bg-[#1C1C2E] w-8 flex flex-col items-center pt-3 gap-3 flex-shrink-0">
          {["☰","👤","📋","💊","🧾","⚙️","📊","📁","🏥","💬","⏱️","🗃️"].map((ic, i) => (
            <div key={i} className="w-5 h-5 flex items-center justify-center text-[9px] text-white/40">{ic}</div>
          ))}
        </div>

        {/* Left panel - Personal History + Asta Sthana */}
        <div className="w-40 bg-white border-r border-gray-100 p-3 flex-shrink-0 overflow-auto">
          <div className="text-[9px] font-semibold text-[#00A63E] mb-2">Personal History</div>
          <div className="mb-2">
            <div className="text-[7px] text-gray-500 mb-1">Appetite</div>
            <div className="flex gap-1 flex-wrap">
              {["Good","Normal","Decreased"].map(b => (
                <span key={b} className="text-[6px] border border-gray-200 rounded-full px-1.5 py-0.5 text-gray-500 cursor-pointer hover:border-[#00A63E]">{b}</span>
              ))}
            </div>
          </div>
          <div className="mb-3">
            <div className="text-[7px] text-gray-500 mb-1">Sleep</div>
            <div className="flex gap-1 flex-wrap">
              {["Good","Normal","Insomnia"].map(b => (
                <span key={b} className="text-[6px] border border-gray-200 rounded-full px-1.5 py-0.5 text-gray-500 cursor-pointer">{b}</span>
              ))}
            </div>
          </div>

          <div className="text-[9px] font-semibold text-[#00A63E] mb-2 mt-1">Asta Sthana Pariksha</div>
          {[
            { n: "1. Pulse", opts: ["V","P","K","VP","VK","PK"] },
            { n: "2. Bowel", opts: ["Normal","Obstructed","Diarrhoea"] },
            { n: "3. Urine", opts: ["Normal","Pain","Obstructed"] },
            { n: "4. Tongue", opts: ["Normal","Coated","Partially Coated"] },
            { n: "5. Sound", opts: ["Normal","Abnormal"] },
          ].map(item => (
            <div key={item.n} className="mb-2">
              <div className="text-[7px] font-medium text-gray-700 mb-1">{item.n}</div>
              <div className="flex gap-1 flex-wrap">
                {item.opts.map(o => (
                  <span key={o} className="text-[6px] border border-gray-200 rounded px-1 py-0.5 text-gray-500 cursor-pointer">{o}</span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Right panel - Prescription */}
        <div className="flex-1 bg-white p-3 overflow-auto">
          <div className="flex gap-2 mb-2">
            <div className="flex border border-gray-200 rounded overflow-hidden text-[8px]">
              <div className="bg-[#00A63E] text-white px-3 py-1 font-semibold cursor-pointer">Typing Pad</div>
              <div className="text-gray-500 px-3 py-1 cursor-pointer">Writing Pad</div>
            </div>
            <div className="flex items-center gap-1 ml-1">
              <div className="w-3 h-3 rounded-sm border-2 border-gray-300"></div>
              <span className="text-[8px] text-gray-500">Prescription / Notes</span>
            </div>
          </div>

          {/* Prescription writing area */}
          <div className="border border-gray-200 rounded-lg p-3 mb-3 bg-[#fafafa]" style={{ minHeight: 120 }}>
            <div className="text-[8px] text-gray-300 mb-2">Write prescription here...</div>
            <div className="text-[8px] text-gray-400">Rx</div>
            <div className="text-[8px] text-gray-300">1. Medicine – dose – frequency</div>
            <div className="text-[8px] text-gray-300">2. ...</div>
          </div>

          {/* Medicine suggestions */}
          <div className="mb-3">
            <div className="text-[8px] font-semibold text-gray-600 mb-1.5">MEDICINE NAME SUGGESTIONS</div>
            <div className="border border-gray-200 rounded px-2 py-1.5 text-[7px] text-gray-300 bg-white mb-1">Search medicine name (min 2 letters)</div>
            <div className="text-[7px] text-gray-400">Start typing to get suggestions from medicine API.</div>
          </div>

          {/* Measurements grid */}
          <div className="grid grid-cols-2 gap-3">
            <div>
              <div className="text-[8px] font-semibold text-gray-600 mb-1.5">MEASUREMENTS</div>
              <div className="border border-gray-200 rounded overflow-hidden">
                <div className="flex text-[7px]">
                  <div className="w-6 bg-[#f8f9fa] border-r border-gray-200 py-1 text-center text-gray-500"></div>
                  <div className="flex-1 text-center py-1 text-gray-500 border-r border-gray-200">R</div>
                  <div className="flex-1 text-center py-1 text-gray-500">L</div>
                </div>
                {["S","M","D"].map(r => (
                  <div key={r} className="flex text-[7px] border-t border-gray-100">
                    <div className="w-6 bg-[#f8f9fa] border-r border-gray-200 py-1 text-center text-gray-500 font-medium">{r}</div>
                    <div className="flex-1 py-1 px-1 border-r border-gray-100">
                      <div className="bg-white border border-gray-100 rounded px-1 py-0.5 text-gray-300">e.g. 109.98</div>
                    </div>
                    <div className="flex-1 py-1 px-1">
                      <div className="bg-white border border-gray-100 rounded px-1 py-0.5 text-gray-300">e.g. 109.98</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div>
              <div className="text-[8px] font-semibold text-gray-600 mb-1.5">QUICK</div>
              <div className="grid grid-cols-3 gap-1">
                {["1","2","3","4","5","6","7","8","9","0"].map(n => (
                  <div key={n} className="border border-gray-200 rounded py-1 text-center text-[8px] text-gray-500 cursor-pointer hover:bg-[#f0faf4]">{n}</div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Far right - Orders panel */}
        <div className="w-36 bg-white border-l border-gray-100 p-3 flex-shrink-0">
          <div className="text-[8px] font-semibold text-gray-600 mb-2">ORDERS / REFERRALS</div>
          {[
            { icon: "🧪", label: "Path Lab", ph: "Tests ordered..." },
            { icon: "🩻", label: "MRI / Scan", ph: "Scan ordered..." },
            { icon: "🏥", label: "Hospital", ph: "Hospital referral..." },
            { icon: "📅", label: "Visit After", ph: "e.g. 7 days / 2 weeks" },
          ].map(item => (
            <div key={item.label} className="mb-2">
              <div className="text-[7px] font-medium text-gray-600 mb-0.5">{item.icon} {item.label}</div>
              <div className="border border-gray-200 rounded px-1 py-0.5 text-[6px] text-gray-300 bg-white">{item.ph}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom action bar */}
      <div className="bg-white border-t border-gray-200 px-4 py-2 flex justify-end gap-2">
        <div className="flex items-center gap-1 border border-[#00A63E] text-[#00A63E] text-[8px] font-semibold px-3 py-1.5 rounded cursor-pointer">
          🖨️ Print
        </div>
        <div className="flex items-center gap-1 bg-[#00A63E] text-white text-[8px] font-semibold px-3 py-1.5 rounded cursor-pointer">
          ✓ Submit
        </div>
      </div>
    </div>
  );
}
