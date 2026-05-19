export default function BillingPreview() {
  return (
    <div className="w-full bg-[#f4f5f7] font-['Inter'] select-none overflow-hidden" style={{ minHeight: 500 }}>

      {/* Top nav */}
      <div className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="text-[#00A63E] font-bold text-[11px]">ayuplus</span>
          <span className="text-gray-400 text-[8px]">Gleaming Software</span>
        </div>
        <span className="text-[8px] font-semibold text-gray-700">05:06 PM &nbsp; Tue, May 19, 2026</span>
      </div>

      {/* Main layout */}
      <div className="flex" style={{ minHeight: 460 }}>

        {/* Dark sidebar */}
        <div className="bg-[#1C1C2E] w-8 flex flex-col items-center pt-3 gap-3 flex-shrink-0">
          {["☰","👤","🛒","⏱️","📋","💵","👥","🔔","📊","⚙️","📁","🏥"].map((ic, i) => (
            <div key={i} className={`w-5 h-5 flex items-center justify-center text-[9px] ${i === 5 ? 'text-[#00A63E]' : 'text-white/40'}`}>{ic}</div>
          ))}
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-3">

          {/* Invoice header card */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3 mb-3">
            <div className="flex items-center justify-between mb-3">
              <div>
                <div className="text-[10px] font-bold text-[#00A63E]">Invoice</div>
                <div className="text-[9px] font-semibold text-gray-700">Details</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="border border-gray-200 rounded px-3 py-1 text-[8px] text-gray-600 flex items-center gap-2">
                  N-2581 <span className="text-gray-300">×</span>
                </div>
                <div className="bg-[#00A63E] text-white text-[8px] font-semibold px-2 py-1 rounded flex items-center gap-1">💳 Pay Now</div>
                <div className="border border-[#00A63E] text-[#00A63E] text-[8px] font-semibold px-2 py-1 rounded flex items-center gap-1">🖨️ Pay/Print</div>
                <div className="flex items-center gap-1">
                  <div className="w-3 h-3 border-2 border-[#00A63E] rounded-sm bg-[#00A63E]"></div>
                  <span className="text-[7px] text-gray-500">All Visits</span>
                </div>
              </div>
            </div>

            {/* Patient Details */}
            <div className="text-[8px] font-semibold text-gray-500 mb-2 uppercase tracking-wide">Patient Details</div>
            <div className="grid grid-cols-8 gap-2">
              {[
                { l: "OP NO", v: "N-2581" },
                { l: "INVOICE NO", v: "N-2581" },
                { l: "PATIENT NAME", v: "Janakiraman" },
                { l: "PHONE", v: "+91 9786084341" },
                { l: "CITY", v: "mailam" },
                { l: "STATE", v: "—" },
                { l: "COUNTRY", v: "—" },
                { l: "AGE", v: "70" },
              ].map(f => (
                <div key={f.l}>
                  <div className="text-[6px] text-gray-400 uppercase tracking-wide mb-0.5">{f.l}</div>
                  <div className="text-[8px] font-semibold text-gray-700">{f.v}</div>
                </div>
              ))}
            </div>
            <div className="mt-1">
              <div className="text-[6px] text-gray-400 uppercase tracking-wide mb-0.5">SEX</div>
              <div className="text-[8px] font-semibold text-gray-700">Male</div>
            </div>
          </div>

          {/* Summary boxes */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3 mb-3">
            <div className="text-[8px] font-semibold text-gray-500 mb-2 uppercase tracking-wide">Summary</div>
            <div className="flex gap-2">
              {[
                { label: "ADDED TREATMENTS", val: "₹ 0.00", border: "border-gray-200" },
                { label: "TREATMENTS PENDING", val: "₹ 4,500.00", border: "border-red-400", textCol: "text-red-500" },
                { label: "TREATMENTS PAID", val: "₹ 0.00", border: "border-gray-200" },
                { label: "BED CHARGES", val: "₹ 56,000.00", border: "border-gray-200" },
                { label: "PHARMACY", val: "₹ 0.00", border: "border-gray-200" },
              ].map(b => (
                <div key={b.label} className={`flex-1 border-2 ${b.border} rounded-lg p-2 text-center`}>
                  <div className="text-[6px] text-gray-400 uppercase tracking-wide mb-1">{b.label}</div>
                  <div className={`text-[9px] font-bold ${b.textCol || 'text-gray-700'}`}>{b.val}</div>
                </div>
              ))}
              <div className="flex-1 bg-[#1A56DB] rounded-lg p-2 text-center">
                <div className="text-[6px] text-white/70 uppercase tracking-wide mb-1">GRAND TOTAL (DUE)</div>
                <div className="text-[10px] font-bold text-white">₹ 60,500.00</div>
              </div>
            </div>
          </div>

          {/* Completed Treatments Table */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-3">
            <div className="px-3 py-2 flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#F59E0B]"></div>
              <span className="text-[9px] font-semibold text-gray-700">Completed Treatments</span>
              <span className="text-[7px] text-[#F59E0B]">● Pending</span>
              <span className="text-[7px] text-[#00A63E]">● Paid</span>
            </div>
            <table className="w-full text-[7px]">
              <thead>
                <tr className="bg-[#f0faf4]">
                  {["#","Treatment","Date","Time","Price (₹)","Doctor","OP No","Status"].map(h => (
                    <th key={h} className="text-left px-2 py-1.5 text-[#00A63E] font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { n: 1, t: "SARVANGA/ABYANGAM/NADI SWEDAM/NASYAM…", d: "01 April 2026", time: "08:30–09:30", p: "—", doc: "Rizwan", op: "N-2581" },
                  { n: 2, t: "ABYANGAM & NAVARA KIZHI – SARVANGA", d: "03 April 2026", time: "08:30–09:30", p: "₹ 3,000.00", doc: "Rizwan", op: "N-2581-3" },
                  { n: 3, t: "SARVANGA/ABYANGAM/NADI SWEDAM/NASYAM…", d: "04 April 2026", time: "08:30–09:30", p: "—", doc: "Rizwan", op: "N-2581" },
                  { n: 4, t: "SARVANGA/ABYANGAM/NADI SWEDAM/NASYAM…", d: "08 April 2026", time: "13:00–14:00", p: "—", doc: "Rizwan", op: "N-2581-3" },
                ].map((row, i) => (
                  <tr key={i} className="border-t border-gray-100">
                    <td className="px-2 py-1.5 text-gray-500">{row.n}</td>
                    <td className="px-2 py-1.5 text-gray-600 max-w-[160px] truncate">{row.t}</td>
                    <td className="px-2 py-1.5 text-gray-600">{row.d}</td>
                    <td className="px-2 py-1.5 text-gray-600">{row.time}</td>
                    <td className="px-2 py-1.5 text-gray-700 font-medium">{row.p}</td>
                    <td className="px-2 py-1.5 text-gray-600">{row.doc}</td>
                    <td className="px-2 py-1.5 text-[#00A63E]">{row.op}</td>
                    <td className="px-2 py-1.5"><span className="bg-red-100 text-red-500 px-1.5 py-0.5 rounded text-[6px] font-semibold">Pending</span></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Medicines Prescribed Table */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-3">
            <div className="px-3 py-2">
              <span className="text-[9px] font-semibold text-gray-700">Medicines Prescribed</span>
            </div>
            <table className="w-full text-[7px]">
              <thead>
                <tr className="bg-[#f0f4ff]">
                  {["#","Medicine","Days","Dosage","Interval","OP No","Date"].map(h => (
                    <th key={h} className="text-left px-2 py-1.5 text-[#1A56DB] font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {["BRAHMI","Vijayasagar gana vati","Xulin","Glymin plus"].map((med, i) => (
                  <tr key={med} className="border-t border-gray-100">
                    <td className="px-2 py-1.5 text-gray-500">{i + 1}</td>
                    <td className="px-2 py-1.5 text-gray-700 font-medium">{med}</td>
                    <td className="px-2 py-1.5 text-gray-600">30</td>
                    <td className="px-2 py-1.5 text-gray-600">1-1-1</td>
                    <td className="px-2 py-1.5 text-gray-600">Af</td>
                    <td className="px-2 py-1.5 text-[#00A63E]">N-2581{i > 0 ? '-3' : ''}</td>
                    <td className="px-2 py-1.5 text-gray-400">{i > 0 ? 'Mon Mar 30 2026' : ''}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Bed Charges */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
            <div className="px-3 py-2">
              <span className="text-[9px] font-semibold text-gray-700">Bed Charges</span>
            </div>
            <table className="w-full text-[7px]">
              <thead>
                <tr className="bg-[#f0faf4]">
                  {["Room / Bed","Admission Date","Discharge Date","No. of Days","Rate/Day (₹)","Total (₹)","Status"].map(h => (
                    <th key={h} className="text-left px-2 py-1.5 text-[#00A63E] font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-t border-gray-100">
                  <td className="px-2 py-1.5 text-gray-700 font-medium">Room No: 102</td>
                  <td className="px-2 py-1.5 text-gray-600">25 Mar 2026</td>
                  <td className="px-2 py-1.5 text-gray-400">—</td>
                  <td className="px-2 py-1.5 text-gray-600">56</td>
                  <td className="px-2 py-1.5 text-gray-600">1,000.00</td>
                  <td className="px-2 py-1.5 text-[#F59E0B] font-bold">₹ 56,000.00</td>
                  <td className="px-2 py-1.5"><span className="bg-red-100 text-red-500 px-1.5 py-0.5 rounded text-[6px] font-semibold">Due</span></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
