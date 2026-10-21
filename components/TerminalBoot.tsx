import { ArrowRight } from "lucide-react";

const flow = [
  { label: "REQUEST", detail: "Spring Boot", color: "text-emerald-300" },
  { label: "TRANSACTION", detail: "PostgreSQL", color: "text-sky-300" },
  { label: "LIVE EVENT", detail: "WebSocket", color: "text-violet-300" },
];

export default function TerminalBoot() {
  return (
    <div className="min-w-0 border-y border-[#d7d1c5] bg-[#ebe7dd] p-3 sm:p-5">
      <div className="mb-4 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-[#716d65]">
          A request, end to end
        </span>
        <span className="font-mono text-[10px] text-[#aaa397]">THRIFTLY / FLOW</span>
      </div>

      <div className="flex min-w-0 flex-wrap items-center gap-2 sm:gap-3">
        {flow.map((step, index) => (
          <div key={step.label} className="flex min-w-0 items-center gap-1.5 sm:gap-3">
            <div className="min-w-0 border border-[#d7d1c5] bg-[#f7f4ed] px-2 py-2.5 sm:min-w-[112px] sm:px-3">
              <p className={`font-mono text-[10px] tracking-wider ${step.color}`}>
                {step.label}
              </p>
              <p className="mt-1 text-xs text-[#39362f]">{step.detail}</p>
            </div>
            {index < flow.length - 1 && (
              <ArrowRight className="h-3.5 w-3.5 shrink-0 text-[#aaa397] sm:h-4 sm:w-4" aria-hidden="true" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
