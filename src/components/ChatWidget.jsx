"use client";

import { useState, useRef, useEffect } from "react";

const FORM_TOKEN = "[SHOW_CONTACT_FORM]";

const STARTER_CHIPS = [
  "What modules does AyuPlus include?",
  "How does the Panchakarma module work?",
  "Can I manage billing and pharmacy?",
  "What languages does AyuPlus support?",
  "How does patient registration work?",
  "What is Prakruti assessment?",
];

const FOLLOW_UPS = [
  { keys: ["panchakarma", "snehapanam", "vasthi", "vamanam", "virechanam", "bahya"], chips: ["What 7 Panchakarma procedures are covered?", "How is daily Snehapanam dosage recorded?", "Can Panchakarma records be printed?"] },
  { keys: ["billing", "invoice", "payment", "gst", "advance"], chips: ["What payment methods are supported?", "How does pharmacy billing work?", "Can I collect advance payments?"] },
  { keys: ["pharmacy", "medicine", "stock", "drug", "catalog", "dispensing"], chips: ["How does stock management work?", "Is there a medicine audit trail?", "How does pharmacy billing work?"] },
  { keys: ["patient", "registration", "opd", "opno", "visit", "consent"], chips: ["How are repeat visits handled?", "Is inpatient registration supported?", "How does OPD consultation work?"] },
  { keys: ["prakruti", "dosha", "vata", "pitta", "kapha", "constitution"], chips: ["How are Vata/Pitta/Kapha scores calculated?", "Can I print the Prakruti profile?", "What sections does the assessment cover?"] },
  { keys: ["therapist", "treatment", "abhyanga", "shirodhara", "schedule", "session"], chips: ["What does the therapist daily queue show?", "How is treatment progress tracked?", "Can therapists view patient history?"] },
  { keys: ["appointment", "doctor", "slot", "booking", "shift"], chips: ["How does appointment booking work?", "How are shift breaks handled?", "What info is in a doctor profile?"] },
  { keys: ["discharge", "inpatient", "bed", "admit", "ipo", "ipno"], chips: ["How does bed management work?", "What's included in the discharge summary?", "How are discharge conditions recorded?"] },
  { keys: ["report", "excel", "export", "analytics", "revenue"], chips: ["What reports are available?", "Can reports be exported to Excel?", "What does the procedure billing report show?"] },
  { keys: ["module", "feature", "include", "support", "language", "hindi", "tamil"], chips: ["How does Panchakarma tracking work?", "Tell me about the pharmacy module", "How does billing work?"] },
];

function getContextChips(messages) {
  const userMsgs = messages.filter((m) => m.role === "user");
  const asked = new Set(userMsgs.map((m) => m.content.trim()));

  function notAsked(chips) {
    return chips.filter((q) => !asked.has(q));
  }

  if (userMsgs.length === 0) return STARTER_CHIPS;

  const lastText = userMsgs[userMsgs.length - 1].content.toLowerCase();
  for (const { keys, chips } of FOLLOW_UPS) {
    if (keys.some((k) => lastText.includes(k))) {
      const fresh = notAsked(chips);
      if (fresh.length) return fresh.slice(0, 3);
      break;
    }
  }

  // Fall back to unasked starter chips
  const remaining = notAsked(STARTER_CHIPS);
  return remaining.length ? remaining.slice(0, 4) : [];
}

function getGreeting() {
  const h = new Date().getHours();
  if (h >= 5 && h < 12) return "Good Morning";
  if (h >= 12 && h < 17) return "Good Afternoon";
  if (h >= 17 && h < 21) return "Good Evening";
  return "Good Night";
}

// Typewriter animation for assistant messages
function TypingMessage({ content, animate }) {
  const [displayed, setDisplayed] = useState(animate ? "" : content);

  useEffect(() => {
    if (!animate) return;
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(content.slice(0, i));
      if (i >= content.length) clearInterval(interval);
    }, 16);
    return () => clearInterval(interval);
  }, [content, animate]);

  return (
    <span className="whitespace-pre-wrap">
      {displayed}
      {animate && displayed.length < content.length && (
        <span className="inline-block w-[2px] h-[14px] bg-gray-400 ml-[1px] animate-pulse align-middle" />
      )}
    </span>
  );
}

function InlineContactForm({ onSubmitSuccess }) {
  const [form, setForm] = useState({ name: "", email: "", phone: "" });
  const [submitting, setSubmitting] = useState(false);
  const [done, setDone] = useState(false);

  function handleChange(e) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setSubmitting(true);
    try {
      await fetch("/api/demo", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          phone: form.phone,
          hospital: "—",
          city: "—",
          hospitalSize: "—",
          interest: "Demo Request (via chat)",
          message: "",
        }),
      });
      setDone(true);
      onSubmitSuccess(form.name);
    } catch {
      setDone(true);
      onSubmitSuccess(form.name);
    } finally {
      setSubmitting(false);
    }
  }

  if (done) return null;

  return (
    <div className="bg-white border border-[#00A63E]/30 rounded-xl p-3 mt-1 shadow-sm">
      <p className="text-xs font-semibold text-[#00A63E] mb-2">Book a Demo — drop your details</p>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          required
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Your name"
          className="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-2 outline-none focus:border-[#00A63E] transition-colors"
        />
        <input
          required
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email address"
          type="email"
          className="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-2 outline-none focus:border-[#00A63E] transition-colors"
        />
        <input
          required
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Mobile number"
          type="tel"
          className="w-full text-xs border border-gray-200 rounded-lg px-2.5 py-2 outline-none focus:border-[#00A63E] transition-colors"
        />
        <button
          type="submit"
          disabled={submitting}
          className="w-full py-2 bg-[#00A63E] text-white text-xs font-semibold rounded-lg hover:bg-[#008236] transition-colors disabled:opacity-60"
        >
          {submitting ? "Submitting…" : "Request Demo →"}
        </button>
      </form>
    </div>
  );
}

const STORAGE_KEY = "ayuplus_chat_messages";

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [ready, setReady] = useState(false);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const msgIdRef = useRef(1);
  const messagesRef = useRef(messages);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  // Single client-only init: greeting + localStorage restore
  useEffect(() => {
    const greetingText = `${getGreeting()}! I'm AyuPlus. How can I help you today?`;
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        const restored = parsed.map((m, i) => ({
          ...m,
          animate: false,
          ...(i === 0 && m.role === "assistant" ? { content: greetingText } : {}),
        }));
        msgIdRef.current = Math.max(...restored.map((m) => m.id ?? 0), 0) + 1;
        setMessages(restored);
        setReady(true);
        return;
      }
    } catch {}
    setMessages([{ role: "assistant", content: greetingText, id: 0, animate: false }]);
    setReady(true);
  }, []);

  // Save only after init is complete (guard prevents saving empty [] on first render)
  useEffect(() => {
    if (!ready) return;
    messagesRef.current = messages;
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages)); } catch {}
  }, [messages, ready]);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "instant" }), 30);
      inputRef.current?.focus();
    }
  }, [open, messages]);

  function nextId() {
    return msgIdRef.current++;
  }

  async function sendQuick(text) {
    if (loading) return;
    setInput("");
    await dispatchMessage(text);
  }

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;
    setInput("");
    await dispatchMessage(text);
  }

  async function dispatchMessage(text) {
    const current = messagesRef.current;
    const userMsg = { role: "user", content: text, id: nextId() };
    const next = [...current, userMsg];
    setMessages(next);
    setLoading(true);

    try {
      const res = await fetch("/api/chat", {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          messages: next.map(({ role, content }) => ({ role, content })),
        }),
      });

      if (!res.ok) throw new Error("API error");
      const data = await res.json();
      const raw = data.reply ?? "Sorry, I couldn't get a response. Please try again.";
      const cleanReply = raw.replace(FORM_TOKEN, "").trim();

      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: cleanReply, id: nextId(), animate: true },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "assistant", content: "Something went wrong. Please try again or email us at contact@ayuplus.in or call +91 98949 97482.", id: nextId(), animate: true },
      ]);
    } finally {
      setLoading(false);
    }
  }

  function handleFormSuccess(name) {
    setShowDemoForm(false);
    setMessages((prev) => [
      ...prev,
      {
        role: "assistant",
        content: `Got it, ${name}! Someone from our team will call you within 24 hours to set up your demo. You can also reach us at contact@ayuplus.in or +91 98949 97482.`,
        id: nextId(),
        animate: true,
      },
    ]);
  }

  return (
    <>
      <div
        className="fixed z-50 bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden chat-window"
        style={{ display: open ? "flex" : "none", right: "12px", bottom: "144px", width: "calc(100vw - 24px)", maxWidth: "384px", height: "min(520px, 75vh)" }}
      >
        <style>{`
          @media (min-width: 481px) {
            .chat-window { right: 24px !important; bottom: 148px !important; width: calc(100vw - 3rem) !important; }
          }
        `}</style>
          {/* Header */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#00A63E] text-white flex-shrink-0">
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-sm font-bold">A</div>
            <div className="flex-1">
              <p className="font-semibold text-sm leading-none">AyuPlus</p>
              <p className="text-xs text-white/70 mt-0.5">Ask about features, pricing & more</p>
            </div>
            <button
              onClick={() => setShowDemoForm((v) => !v)}
              title="Book a Demo"
              className="text-white/80 hover:text-white transition-colors"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
            </button>
            <button onClick={() => setOpen(false)} className="text-white/80 hover:text-white transition-colors">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto px-4 py-3 space-y-3 bg-gray-50">
            {ready && messages.map((msg, idx) => (
              <div key={msg.id}>
                <div className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
                  <div className={`max-w-[85%] px-3 py-2 rounded-2xl text-sm leading-relaxed ${
                    msg.role === "user"
                      ? "bg-[#00A63E] text-white rounded-br-sm"
                      : "bg-white text-gray-800 border border-gray-200 rounded-bl-sm shadow-sm"
                  }`}>
                    {msg.role === "assistant"
                      ? <TypingMessage content={msg.content} animate={msg.animate ?? false} />
                      : msg.content
                    }
                  </div>
                </div>

                {/* Context-aware chips after every last assistant reply */}
                {msg.role === "assistant" && idx === messages.length - 1 && !loading && (
                  <div className="flex flex-wrap gap-1.5 mt-2">
                    {getContextChips(messages).map((q) => (
                      <button
                        key={q}
                        onClick={() => sendQuick(q)}
                        disabled={loading}
                        className="text-xs px-2.5 py-1.5 rounded-full border border-[#00A63E]/40 text-[#00A63E] bg-white hover:bg-[#f0faf4] transition-colors disabled:opacity-50 text-left"
                      >
                        {q}
                      </button>
                    ))}
                  </div>
                )}

                {/* Book a Demo prompt — after every assistant reply (except greeting) */}
                {msg.role === "assistant" && idx > 0 && idx === messages.length - 1 && !loading && (
                  <div className="flex justify-start mt-1.5">
                    <button
                      onClick={() => setShowDemoForm((v) => !v)}
                      className="flex items-center gap-1.5 text-xs text-[#00A63E] border border-[#00A63E]/30 bg-white rounded-full px-3 py-1.5 hover:bg-[#f0faf4] transition-colors"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      Book a Demo
                    </button>
                  </div>
                )}
              </div>
            ))}

            {showDemoForm && (
              <div className="flex justify-start">
                <div className="w-full max-w-[90%]">
                  <InlineContactForm onSubmitSuccess={handleFormSuccess} />
                </div>
              </div>
            )}

            {/* Typing indicator while waiting */}
            {loading && (
              <div className="flex justify-start">
                <div className="bg-white border border-gray-200 rounded-2xl rounded-bl-sm px-4 py-3 shadow-sm">
                  <span className="flex gap-1 items-center">
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "0ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "150ms" }} />
                    <span className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: "300ms" }} />
                  </span>
                </div>
              </div>
            )}
            <div ref={bottomRef} />
          </div>

          {/* Input */}
          <form onSubmit={sendMessage} className="px-3 py-3 bg-white border-t border-gray-100 flex gap-2 flex-shrink-0">
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type a message…"
              className="flex-1 text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none focus:border-[#00A63E] transition-colors"
              disabled={loading}
            />
            <button
              type="submit"
              disabled={loading || !input.trim()}
              className="w-9 h-9 rounded-xl bg-[#00A63E] text-white flex items-center justify-center hover:bg-[#008236] transition-colors disabled:opacity-50 disabled:cursor-not-allowed flex-shrink-0"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
            </button>
          </form>
        </div>

      {/* WhatsApp floating button */}
      <a
        href="https://wa.me/919894997482"
        target="_blank"
        rel="noopener noreferrer"
        title="Chat on WhatsApp"
        aria-label="Chat on WhatsApp"
        className="fixed bottom-[80px] right-3 md:bottom-[84px] md:right-6 z-[999] w-[52px] h-[52px] md:w-14 md:h-14 rounded-full bg-[#25D366] text-white shadow-lg hover:bg-[#1ebe5d] hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center group"
      >
        <svg className="w-7 h-7" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
        <span className="absolute right-16 bg-gray-800 text-white text-xs font-medium px-2.5 py-1.5 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
          Chat on WhatsApp
        </span>
      </a>

      {/* Bubble button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-3 md:right-6 z-50 rounded-full bg-[#00A63E] text-white shadow-lg hover:bg-[#008236] hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center chat-bubble-btn"
        style={{ width: "52px", height: "52px" }}
        aria-label="Open chat"
      >
        {open ? (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        ) : (
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
            <path d="M20 2H4c-1.1 0-2 .9-2 2v18l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm-2 12H6v-2h12v2zm0-3H6V9h12v2zm0-3H6V6h12v2z" />
          </svg>
        )}
      </button>
    </>
  );
}
