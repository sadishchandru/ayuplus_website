export default function HospitalSettingsPreview() {
  const settingsGroups = [
    {
      title: "Hospital Profile",
      icon: "🏥",
      fields: [
        { label: "Hospital Name", val: "Gleaming Ayurveda" },
        { label: "Registration No.", val: "MH-AYU-2024-0012" },
        { label: "Address", val: "Reddiarpalayam, Puducherry" },
        { label: "Contact Email", val: "admin@ayuplus.in" },
        { label: "Phone", val: "+91 98949 97482" },
      ],
    },
    {
      title: "Bed & Ward Setup",
      icon: "🛏️",
      fields: [
        { label: "Total Beds", val: "120" },
        { label: "Ward A (General)", val: "40 beds" },
        { label: "Ward B (Panchakarma)", val: "30 beds" },
        { label: "Ward C (Deluxe)", val: "20 beds" },
        { label: "ICU / Special", val: "10 beds" },
      ],
    },
    {
      title: "Staff & Roles",
      icon: "👥",
      fields: [
        { label: "Admin Users", val: "3 active" },
        { label: "Vaidyas / Doctors", val: "8 active" },
        { label: "Therapists", val: "15 active" },
        { label: "Front Office", val: "5 active" },
        { label: "Pharmacist", val: "2 active" },
      ],
    },
  ];

  const numberSeries = [
    { label: "OPD Number Prefix", val: "N-", eg: "e.g. N-0001" },
    { label: "IPD Number Prefix", val: "IP-", eg: "e.g. IP-0001" },
    { label: "Invoice Prefix", val: "INV-", eg: "e.g. INV-0001" },
    { label: "Pharmacy Bill Prefix", val: "PH-", eg: "e.g. PH-0001" },
  ];

  const shifts = [
    { name: "Morning Shift", time: "06:00 AM – 02:00 PM", staff: "Dr. Rizwan, 5 Therapists" },
    { name: "Afternoon Shift", time: "02:00 PM – 10:00 PM", staff: "Dr. Priya, 4 Therapists" },
    { name: "Night Shift", time: "10:00 PM – 06:00 AM", staff: "Night Supervisor" },
  ];

  return (
    <div className="w-full bg-[#f4f5f7] font-['Inter'] select-none overflow-hidden" style={{ minHeight: 500 }}>

      {/* Top nav */}
      <div className="bg-white border-b border-gray-200 flex items-center justify-between px-4 py-2">
        <div className="flex items-center gap-3">
          <span className="text-[#00A63E] font-bold text-[11px]">ayuplus</span>
          <span className="text-gray-400 text-[8px]">Gleaming Software</span>
        </div>
        <span className="text-[8px] font-semibold text-gray-700">05:30 PM &nbsp; Tue, May 19, 2026</span>
      </div>

      {/* Main layout */}
      <div className="flex" style={{ minHeight: 460 }}>

        {/* Dark sidebar */}
        <div className="bg-[#1C1C2E] w-8 flex flex-col items-center pt-3 gap-3 flex-shrink-0">
          {["☰","👤","🛒","⏱️","📋","💵","👥","🔔","📊","⚙️","📁","🏥"].map((ic, i) => (
            <div key={i} className={`w-5 h-5 flex items-center justify-center text-[9px] ${i === 9 ? 'text-[#00A63E]' : 'text-white/40'}`}>{ic}</div>
          ))}
        </div>

        {/* Settings sidebar */}
        <div className="w-36 bg-white border-r border-gray-100 flex-shrink-0">
          <div className="p-2 border-b border-gray-100">
            <div className="text-[8px] font-semibold text-gray-700 px-1">Settings</div>
          </div>
          <div className="py-1">
            {[
              { icon: "🏥", label: "Hospital Profile", active: true },
              { icon: "🔢", label: "Number Series", active: false },
              { icon: "🛏️", label: "Bed & Wards", active: false },
              { icon: "👥", label: "Staff & Roles", active: false },
              { icon: "⏰", label: "Shift Management", active: false },
              { icon: "💬", label: "SMS / WhatsApp", active: false },
              { icon: "📧", label: "Email Config", active: false },
              { icon: "🔒", label: "Security", active: false },
              { icon: "💊", label: "Pharmacy", active: false },
              { icon: "🖨️", label: "Print Templates", active: false },
            ].map(item => (
              <div key={item.label} className={`flex items-center gap-2 px-3 py-1.5 cursor-pointer text-[7px] ${item.active ? 'bg-[#f0faf4] text-[#00A63E] font-semibold border-r-2 border-[#00A63E]' : 'text-gray-600 hover:bg-gray-50'}`}>
                <span>{item.icon}</span>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Main content */}
        <div className="flex-1 overflow-auto p-3">

          {/* Settings groups */}
          <div className="grid grid-cols-3 gap-3 mb-3">
            {settingsGroups.map(group => (
              <div key={group.title} className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden">
                <div className="bg-[#f0faf4] px-3 py-2 flex items-center gap-1.5">
                  <span className="text-[10px]">{group.icon}</span>
                  <span className="text-[9px] font-semibold text-[#00A63E]">{group.title}</span>
                </div>
                <div className="p-2">
                  {group.fields.map(f => (
                    <div key={f.label} className="mb-1.5">
                      <div className="text-[6px] text-gray-400 mb-0.5">{f.label}</div>
                      <div className="border border-gray-200 rounded px-1.5 py-1 text-[7px] text-gray-600 bg-[#f8f9fa]">{f.val}</div>
                    </div>
                  ))}
                  <div className="flex justify-end mt-2">
                    <div className="text-[6px] text-[#00A63E] border border-[#00A63E] px-2 py-0.5 rounded cursor-pointer">Edit</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Number Series */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-3">
            <div className="bg-[#f0faf4] px-3 py-2 flex items-center gap-1.5">
              <span className="text-[10px]">🔢</span>
              <span className="text-[9px] font-semibold text-[#00A63E]">Number Series Configuration</span>
            </div>
            <div className="p-3 grid grid-cols-4 gap-2">
              {numberSeries.map(s => (
                <div key={s.label}>
                  <div className="text-[6px] text-gray-400 mb-0.5">{s.label}</div>
                  <div className="border border-gray-200 rounded px-1.5 py-1 text-[7px] text-gray-600 bg-white flex items-center justify-between">
                    <span className="font-semibold text-[#00A63E]">{s.val}</span>
                    <span className="text-gray-300">{s.eg}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Shift Management */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-3">
            <div className="bg-[#f0faf4] px-3 py-2 flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="text-[10px]">⏰</span>
                <span className="text-[9px] font-semibold text-[#00A63E]">Shift Management</span>
              </div>
              <div className="text-[7px] bg-[#00A63E] text-white px-2 py-0.5 rounded cursor-pointer">+ Add Shift</div>
            </div>
            <table className="w-full text-[7px]">
              <thead>
                <tr className="bg-[#f8f9fa]">
                  {["Shift Name","Time","Assigned Staff","Actions"].map(h => (
                    <th key={h} className="text-left px-3 py-1.5 text-gray-500 font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {shifts.map((s, i) => (
                  <tr key={s.name} className="border-t border-gray-100">
                    <td className="px-3 py-1.5 font-semibold text-gray-700">{s.name}</td>
                    <td className="px-3 py-1.5 text-gray-600">{s.time}</td>
                    <td className="px-3 py-1.5 text-gray-500">{s.staff}</td>
                    <td className="px-3 py-1.5">
                      <div className="flex gap-1">
                        <span className="border border-gray-200 rounded px-1.5 py-0.5 text-[6px] text-gray-500 cursor-pointer">Edit</span>
                        <span className="border border-red-200 rounded px-1.5 py-0.5 text-[6px] text-red-400 cursor-pointer">Delete</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* SMS / WhatsApp config */}
          <div className="bg-white rounded-lg border border-gray-100 shadow-sm p-3">
            <div className="flex items-center gap-1.5 mb-2">
              <span className="text-[10px]">💬</span>
              <span className="text-[9px] font-semibold text-[#00A63E]">Messaging Configuration</span>
            </div>
            <div className="grid grid-cols-3 gap-3">
              {[
                { label: "WhatsApp API Key", val: "••••••••••••••••" },
                { label: "SMS Gateway", val: "Textlocal India" },
                { label: "Sender ID", val: "AYUPLS" },
              ].map(f => (
                <div key={f.label}>
                  <div className="text-[6px] text-gray-400 mb-0.5">{f.label}</div>
                  <div className="border border-gray-200 rounded px-1.5 py-1 text-[7px] text-gray-600 bg-[#f8f9fa]">{f.val}</div>
                </div>
              ))}
            </div>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex items-center gap-1">
                <div className="w-6 h-3 rounded-full bg-[#00A63E] relative flex items-center justify-end pr-0.5">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-[7px] text-gray-500">WhatsApp Notifications Active</span>
              </div>
              <div className="flex items-center gap-1">
                <div className="w-6 h-3 rounded-full bg-[#00A63E] relative flex items-center justify-end pr-0.5">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className="text-[7px] text-gray-500">SMS Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
