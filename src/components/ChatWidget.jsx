"use client";

import { useState, useRef, useEffect } from "react";

const FORM_TOKEN = "[SHOW_CONTACT_FORM]";

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

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState(() => [
    { role: "assistant", content: `${getGreeting()}! I'm AyuPlus. How can I help you today?`, id: 0, animate: false },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const msgIdRef = useRef(1);
  const bottomRef = useRef(null);
  const inputRef = useRef(null);

  useEffect(() => {
    if (open) {
      setTimeout(() => bottomRef.current?.scrollIntoView({ behavior: "smooth" }), 50);
      inputRef.current?.focus();
    }
  }, [open, messages]);

  function nextId() {
    return msgIdRef.current++;
  }

  async function sendMessage(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text || loading) return;

    const userMsg = { role: "user", content: text, id: nextId() };
    const next = [...messages, userMsg];
    setMessages([...messages, userMsg]);
    setInput("");
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
        { role: "assistant", content: "Something went wrong. Please try again or email us at contact@ayuplus.com or call +91 98949 97482.", id: nextId(), animate: true },
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
        content: `Got it, ${name}! Someone from our team will call you within 24 hours to set up your demo. You can also reach us at contact@ayuplus.com or +91 98949 97482.`,
        id: nextId(),
        animate: true,
      },
    ]);
  }

  return (
    <>
      {open && (
        <div
          className="fixed bottom-24 right-4 md:right-6 z-50 w-[calc(100vw-2rem)] max-w-sm bg-white rounded-2xl shadow-2xl border border-gray-100 flex flex-col overflow-hidden"
          style={{ height: "520px" }}
        >
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
              className="text-white/80 hover:text-white transition-colors mr-1"
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
            {messages.map((msg) => (
              <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
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
      )}

      {/* Bubble button */}
      <button
        onClick={() => setOpen((v) => !v)}
        className="fixed bottom-4 right-4 md:right-6 z-50 w-14 h-14 rounded-full bg-[#00A63E] text-white shadow-lg hover:bg-[#008236] hover:scale-105 transition-all duration-300 active:scale-95 flex items-center justify-center"
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
