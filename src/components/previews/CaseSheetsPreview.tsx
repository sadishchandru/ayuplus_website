export default function CaseSheetsPreview() {
  return (
    <div className="w-full bg-[#f4f5f7] font-['Inter'] select-none overflow-hidden" style={{ minHeight: 500 }}>

      {/* Top nav */}
      <div className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="text-[#00A63E] font-bold text-[11px]">ayuplus</span>
          <span className="text-gray-400 text-[8px]">Gleaming Software</span>
        </div>
        <span className="text-[8px] font-semibold text-gray-700">05:21 PM &nbsp; Tue, May 19, 2026</span>
      </div>

      {/* Main layout */}
      <div className="flex" style={{ minHeight: 460 }}>

        {/* Dark sidebar */}
        <div className="bg-[#1C1C2E] w-8 flex flex-col items-center pt-3 gap-3 flex-shrink-0">
          {["☰","👤","📋","💊","🧾","📊","⚙️","📁","🏥","💬"].map((ic, i) => (
            <div key={i} className={`w-5 h-5 flex items-center justify-center text-[9px] ${i === 2 ? 'text-[#00A63E]' : 'text-white/40'}`}>{ic}</div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-3">

          {/* Breadcrumb / Back */}
          <div className="flex items-center gap-2 mb-3">
            <div className="border border-gray-300 text-[8px] text-gray-600 px-2 py-1 rounded cursor-pointer flex items-center gap-1">
              ← Back to List
            </div>
          </div>

          {/* Patient info row */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3 mb-3">
            <div className="grid grid-cols-6 gap-2 mb-2">
              {[
                { label: "OP NO *", val: "" },
                { label: "NAME", val: "" },
                { label: "PHONE", val: "" },
                { label: "AGE", val: "" },
                { label: "SEX", val: "" },
                { label: "DOB", val: "" },
              ].map(f => (
                <div key={f.label}>
                  <div className="text-[6px] font-semibold text-gray-400 uppercase tracking-wide mb-0.5">{f.label}</div>
                  <div className="border border-gray-200 rounded px-1.5 py-1 text-[7px] text-gray-300 bg-[#f8f9fa]">{f.val || "—"}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Case Sheet Title */}
          <div className="flex items-center justify-between mb-3">
            <div>
              <h3 className="text-[11px] font-semibold text-gray-800">Cervical Spine Examination</h3>
              <p className="text-[8px] text-gray-400">Structured clinical examination for cervical spine conditions</p>
            </div>
            <div className="text-[8px] text-gray-400 border border-gray-200 rounded px-2 py-0.5">Showing 1–1 of 1 entries</div>
          </div>

          {/* Examination sections */}
          <div className="grid grid-cols-2 gap-3 mb-3">

            {/* Range of Motion table */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#f0faf4] px-3 py-1.5 flex items-center justify-between">
                <span className="text-[9px] font-semibold text-[#00A63E]">Range of Motion</span>
                <span className="text-[7px] text-gray-400">degrees</span>
              </div>
              <table className="w-full text-[7px]">
                <thead>
                  <tr className="bg-[#f8f9fa]">
                    <th className="text-left px-2 py-1 text-gray-500 font-medium">Movement</th>
                    <th className="text-center px-2 py-1 text-gray-500 font-medium">Pre Rx</th>
                    <th className="text-center px-2 py-1 text-gray-500 font-medium">Post Rx</th>
                    <th className="text-center px-2 py-1 text-gray-500 font-medium">Normal</th>
                  </tr>
                </thead>
                <tbody>
                  {["Flexion","Extension","Lt. Flexion (L)","Lt. Flexion (R)","Rotation (L)","Rotation (R)"].map((m, i) => (
                    <tr key={m} className={`border-t border-gray-100 ${i % 2 === 0 ? '' : 'bg-[#fafafa]'}`}>
                      <td className="px-2 py-1 text-gray-600">{m}</td>
                      <td className="px-2 py-1"><div className="border border-gray-200 rounded px-1 py-0.5 text-gray-300 bg-white text-center">—</div></td>
                      <td className="px-2 py-1"><div className="border border-gray-200 rounded px-1 py-0.5 text-gray-300 bg-white text-center">—</div></td>
                      <td className="px-2 py-1 text-center text-gray-400">45°</td>
                    </tr>
                  ))}
                </tbody>
              </table>
              <div className="flex justify-end px-2 py-1">
                <div className="w-4 h-4 rounded-full bg-[#00A63E] flex items-center justify-center text-white text-[9px] cursor-pointer">+</div>
              </div>
            </div>

            {/* Special Tests */}
            <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
              <div className="bg-[#f0faf4] px-3 py-1.5">
                <span className="text-[9px] font-semibold text-[#00A63E]">Special Orthopaedic Tests</span>
              </div>
              <table className="w-full text-[7px]">
                <thead>
                  <tr className="bg-[#f8f9fa]">
                    <th className="text-left px-2 py-1 text-gray-500 font-medium">Test</th>
                    <th className="text-center px-2 py-1 text-gray-500 font-medium">Pre Rx</th>
                    <th className="text-center px-2 py-1 text-gray-500 font-medium">Post Rx</th>
                  </tr>
                </thead>
                <tbody>
                  {["Spurling's Test","Compression Test","Distraction Test","Valsalva Maneuver","Shoulder Abduction"].map((t, i) => (
                    <tr key={t} className={`border-t border-gray-100 ${i % 2 === 0 ? '' : 'bg-[#fafafa]'}`}>
                      <td className="px-2 py-1 text-gray-600">{t}</td>
                      <td className="px-2 py-1">
                        <div className="flex gap-1 justify-center">
                          {["Pos","Neg"].map(o => (
                            <span key={o} className="border border-gray-200 rounded px-1 py-0.5 text-[6px] text-gray-400 cursor-pointer hover:border-[#00A63E]">{o}</span>
                          ))}
                        </div>
                      </td>
                      <td className="px-2 py-1">
                        <div className="flex gap-1 justify-center">
                          {["Pos","Neg"].map(o => (
                            <span key={o} className="border border-gray-200 rounded px-1 py-0.5 text-[6px] text-gray-400 cursor-pointer">{o}</span>
                          ))}
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Neurological Grading */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-3">
            <div className="bg-[#f0faf4] px-3 py-1.5">
              <span className="text-[9px] font-semibold text-[#00A63E]">Neurological Grading</span>
            </div>
            <table className="w-full text-[7px]">
              <thead>
                <tr className="bg-[#f8f9fa]">
                  <th className="text-left px-2 py-1 text-gray-500 font-medium">Nerve Root</th>
                  <th className="text-center px-2 py-1 text-gray-500 font-medium">Power (0–5)</th>
                  <th className="text-center px-2 py-1 text-gray-500 font-medium">Sensation</th>
                  <th className="text-center px-2 py-1 text-gray-500 font-medium">DTR</th>
                  <th className="text-center px-2 py-1 text-gray-500 font-medium">Pre Rx</th>
                  <th className="text-center px-2 py-1 text-gray-500 font-medium">Post Rx</th>
                </tr>
              </thead>
              <tbody>
                {["C5","C6","C7","C8"].map((r, i) => (
                  <tr key={r} className={`border-t border-gray-100 ${i % 2 === 0 ? '' : 'bg-[#fafafa]'}`}>
                    <td className="px-2 py-1 font-semibold text-gray-700">{r}</td>
                    <td className="px-2 py-1"><div className="border border-gray-200 rounded px-1 py-0.5 text-gray-300 bg-white text-center">—</div></td>
                    <td className="px-2 py-1"><div className="flex gap-1 justify-center">{["N","↓","Abs"].map(o => <span key={o} className="border border-gray-200 rounded px-1 py-0.5 text-[6px] text-gray-400 cursor-pointer">{o}</span>)}</div></td>
                    <td className="px-2 py-1"><div className="flex gap-1 justify-center">{["N","↓","Abs"].map(o => <span key={o} className="border border-gray-200 rounded px-1 py-0.5 text-[6px] text-gray-400 cursor-pointer">{o}</span>)}</div></td>
                    <td className="px-2 py-1"><div className="border border-gray-200 rounded px-1 py-0.5 text-gray-300 bg-white text-center">—</div></td>
                    <td className="px-2 py-1"><div className="border border-gray-200 rounded px-1 py-0.5 text-gray-300 bg-white text-center">—</div></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Clinical Notes */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3">
            <div className="text-[9px] font-semibold text-[#00A63E] mb-2">Clinical Notes & Treatment Plan</div>
            <div className="bg-[#f8f9fa] border border-gray-200 rounded p-2 text-[7px] text-gray-300" style={{ height: 40 }}>Type clinical notes here...</div>
          </div>

          {/* Save buttons */}
          <div className="flex justify-end gap-2 mt-3">
            <div className="border border-[#00A63E] text-[#00A63E] text-[8px] font-semibold px-3 py-1.5 rounded cursor-pointer">Save Draft</div>
            <div className="bg-[#00A63E] text-white text-[8px] font-semibold px-3 py-1.5 rounded cursor-pointer">Save & Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
