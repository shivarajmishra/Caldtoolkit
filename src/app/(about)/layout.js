import InsightRoll from "@/src/components/About/InsightRoll";

const insights = [
  "cultural inclusion",
  "community trust",
  "language access",
  "equity focus",
  "authentic engagement",
  "system navigation",
  "data relevance",
  "research impact",
  "policy influence",
  "ethical guidance",
  "capacity building",
  "barrier reduction",
  "co-design support",
  "representation matters"
];

export default function AboutLayout({ children }) {
  return (
    <main className="w-full flex flex-col items-center justify-between">
      <InsightRoll insights={insights} />
      {children}
    </main>
  );
}
