export default function VaidyaModePreview() {
  return (
    <div className="w-full bg-[#f4f5f7] font-['Inter'] select-none overflow-hidden" style={{ minHeight: 480 }}>

      {/* Amber mode banner */}
      <div className="bg-[#F59E0B] text-white text-[10px] font-bold text-center py-[5px] tracking-widest uppercase">
        Direct Doctor Mode Active
      </div>

      {/* App top bar */}
      <div className="bg-[#1C1C2E] flex items-center justify-between px-3 py-2">
        <div className="flex items-center gap-3">
          <span className="text-white font-bold text-[11px]">ayuplus</span>
          <div className="flex items-center gap-1.5 bg-white/10 rounded-full px-2 py-0.5">
            <div className="w-6 h-3 rounded-full bg-[#00A63E] relative flex items-center justify-end pr-0.5">
              <div className="w-2 h-2 rounded-full bg-white"></div>
            </div>
            <span className="text-white text-[8px]">Direct Doctor Mode</span>
          </div>
          <div className="bg-[#00A63E] text-white text-[8px] font-semibold px-2 py-0.5 rounded">Search Patient</div>
          <div className="flex items-center gap-1 bg-white/10 rounded px-2 py-0.5">
            <span className="text-white text-[8px]">Daily</span>
            <span className="text-white text-[7px]">▾</span>
          </div>
          <div className="bg-white/10 rounded px-8 py-0.5 text-[8px] text-white/40">Search here...</div>
        </div>
        <div className="flex items-center gap-2">
          <div className="text-[8px] text-white/50">Start Date</div>
          <div className="text-[8px] text-white/50">End Date</div>
          <div className="bg-[#00A63E] text-white text-[8px] px-2 py-0.5 rounded">Filter</div>
        </div>
      </div>

      {/* Main layout */}
      <div className="flex" style={{ minHeight: 430 }}>

        {/* Dark sidebar */}
        <div className="bg-[#1C1C2E] w-8 flex flex-col items-center pt-3 gap-3 flex-shrink-0">
          {["☰","👤","📋","💊","🧾","📊","⚙️"].map((ic, i) => (
            <div key={i} className="w-5 h-5 flex items-center justify-center text-[10px] text-white/40 hover:text-white cursor-pointer">{ic}</div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-3">

          {/* Patient table */}
          <div className="bg-white rounded-lg shadow-sm mb-3 overflow-hidden border border-gray-100">
            <div className="flex items-center justify-between px-3 py-1.5 border-b border-gray-100">
              <span className="text-[9px] text-gray-500">Show 10 entries</span>
              <span className="text-[9px] text-gray-400">Filtered from 8,177 total entries</span>
            </div>
            <table className="w-full text-[8px]">
              <thead>
                <tr className="bg-[#f8f9fa]">
                  <th className="text-left px-3 py-1.5 text-gray-500 font-semibold">OPNo</th>
                  <th className="text-left px-3 py-1.5 text-gray-500 font-semibold">Date</th>
                  <th className="text-left px-3 py-1.5 text-gray-500 font-semibold">Patient Name</th>
                  <th className="text-left px-3 py-1.5 text-gray-500 font-semibold">Treatment</th>
                  <th className="text-left px-3 py-1.5 text-gray-500 font-semibold">Actions</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100 bg-[#f0faf4]">
                  <td className="px-3 py-2 text-[#00A63E] font-semibold">N-3225 <span className="bg-[#00A63E] text-white rounded px-1">OP</span></td>
                  <td className="px-3 py-2 text-gray-600">19 May 2026</td>
                  <td className="px-3 py-2 text-gray-800 font-medium">Patient Name</td>
                  <td className="px-3 py-2 text-gray-600">Vasti (Matra Vasti, Choorna Vasthi…)</td>
                  <td className="px-3 py-2">
                    <div className="flex gap-1">
                      <div className="w-4 h-4 bg-[#f0faf4] rounded flex items-center justify-center text-[8px]">✏️</div>
                      <div className="w-4 h-4 bg-[#fef9f0] rounded flex items-center justify-center text-[8px]">🖨️</div>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Consultation form tabs */}
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 overflow-hidden">
            <div className="flex border-b border-gray-100">
              <div className="px-4 py-2 text-[9px] font-semibold text-[#00A63E] border-b-2 border-[#00A63E]">Patient Treatment</div>
              <div className="px-4 py-2 text-[9px] text-gray-400">Patient Complete Medical View</div>
            </div>

            <div className="p-3">
              {/* Patient info row */}
              <div className="flex gap-2 mb-3">
                <div className="flex-1">
                  <div className="text-[8px] text-gray-500 mb-0.5">OP No</div>
                  <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 bg-[#f8f9fa]">Enter OP No...</div>
                </div>
                <div className="flex-1">
                  <div className="text-[8px] text-gray-500 mb-0.5">Patient Name *</div>
                  <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 bg-[#f8f9fa]">Patient name</div>
                </div>
                <div className="w-16">
                  <div className="text-[8px] text-gray-500 mb-0.5">Age *</div>
                  <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 bg-[#f8f9fa]">Age</div>
                </div>
                <div className="w-14">
                  <div className="text-[8px] text-gray-500 mb-0.5">Sex</div>
                  <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 bg-[#f8f9fa]">Select</div>
                </div>
                <div className="w-20">
                  <div className="text-[8px] text-gray-500 mb-0.5">Phone</div>
                  <div className="border border-gray-200 rounded px-2 py-1 text-[8px] text-gray-400 bg-[#f8f9fa]">+91</div>
                </div>
              </div>

              {/* Vitals row */}
              <div className="flex gap-2 mb-3">
                {["BP", "PR /min", "Height cm", "Weight kg", "SpO2 %", "Pulse /min"].map(v => (
                  <div key={v} className="flex-1">
                    <div className="text-[7px] text-gray-400 mb-0.5">{v}</div>
                    <div className="border border-gray-200 rounded px-1 py-1 text-[8px] text-gray-300 bg-[#f8f9fa]">—</div>
                  </div>
                ))}
              </div>

              {/* Pain Assessment */}
              <div className="mb-3">
                <div className="text-[9px] font-semibold text-[#00A63E] mb-2">Pain Assessment</div>
                <div className="flex gap-2 flex-wrap">
                  {["😊 No Pain", "🙂 Min (1)", "😐 Mild (2)", "😟 Moderate (3)", "😣 Severe (4)", "😖 V.Sev (5)", "😱 Worst (6)"].map((e, i) => (
                    <div key={i} className={`flex flex-col items-center gap-0.5 px-2 py-1 rounded-lg border text-[7px] cursor-pointer ${i === 0 ? 'border-[#00A63E] bg-[#f0faf4]' : 'border-gray-200'}`}>
                      <span className="text-[14px]">{e.split(' ')[0]}</span>
                      <span className="text-gray-500">{e.split(' ').slice(1).join(' ')}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Complaints & Diagnosis row */}
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <div className="text-[9px] font-semibold text-gray-600 mb-1.5">Complaints</div>
                  <div className="bg-[#f8f9fa] border border-gray-200 rounded p-2 text-[7px] text-gray-300" style={{ height: 50 }}>Type complaints here...</div>
                </div>
                <div>
                  <div className="text-[9px] font-semibold text-gray-600 mb-1.5">Diagnosis</div>
                  <div className="bg-[#f8f9fa] border border-gray-200 rounded p-2 text-[7px] text-gray-300" style={{ height: 50 }}>Type diagnosis here...</div>
                </div>
              </div>

              {/* Medicine list */}
              <div>
                <div className="text-[9px] font-semibold text-gray-600 mb-1.5">Medicines List</div>
                <div className="border border-gray-200 rounded overflow-hidden">
                  <div className="flex bg-[#f8f9fa] text-[7px] text-gray-500 px-2 py-1 gap-3">
                    <span className="w-4">#</span>
                    <span className="flex-1">Medicine Name</span>
                    <span className="w-12">Days</span>
                    <span className="w-14">Dosage</span>
                    <span className="w-14">Interval</span>
                  </div>
                  <div className="flex items-center px-2 py-1.5 gap-3 border-t border-gray-100">
                    <span className="w-4 text-[7px] text-gray-400">1</span>
                    <div className="flex-1 border border-gray-200 rounded px-1 py-0.5 text-[7px] text-gray-300 bg-white">Search medicine name...</div>
                    <div className="w-12 border border-gray-200 rounded px-1 py-0.5 text-[7px] text-gray-300 bg-white">Days</div>
                    <div className="w-14 border border-gray-200 rounded px-1 py-0.5 text-[7px] text-gray-300 bg-white">Dosage</div>
                    <div className="w-14 border border-gray-200 rounded px-1 py-0.5 text-[7px] text-gray-300 bg-white">Interval</div>
                  </div>
                </div>
                <div className="flex justify-center mt-1.5">
                  <div className="w-5 h-5 rounded-full bg-[#00A63E] flex items-center justify-center text-white text-[10px] cursor-pointer">+</div>
                </div>
              </div>
            </div>
          </div>

          {/* Save button */}
          <div className="flex justify-end mt-2">
            <div className="bg-[#00A63E] text-white text-[8px] font-semibold px-4 py-1.5 rounded cursor-pointer">Save & Submit</div>
          </div>
        </div>
      </div>
    </div>
  );
}
