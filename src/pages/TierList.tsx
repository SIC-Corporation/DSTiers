import { TIER_CONFIG, TIERS_ORDERED } from "@/lib/data/tiers";

export default function TierList() {
  return (
    <div className="container mx-auto py-12 px-6">
      <h1 className="text-4xl font-black italic text-zinc-100 mb-8 border-l-4 border-yellow-500 pl-4">
        RANKING STANDARDS
      </h1>
      <div className="grid gap-4">
        {/* We reverse it to show High Tiers at the top */}
        {[...TIERS_ORDERED].reverse().map((tier) => (
          <div key={tier} className="bg-zinc-900/50 border border-zinc-800 p-6 rounded-lg flex items-center gap-8 hover:border-zinc-700 transition-all">
            <div className={`w-16 h-16 rounded-lg flex items-center justify-center text-xl font-bold ${TIER_CONFIG[tier].colorClass}`}>
              {tier}
            </div>
            <div>
              <h3 className="text-lg font-bold text-zinc-100">
                {tier.startsWith('H') ? 'High' : 'Low'} Tier {tier[1]}
              </h3>
              <p className="text-zinc-500 text-sm mt-1">
                {getTierDescription(tier)}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Just a helper to add descriptions
function getTierDescription(tier: string) {
  if (tier === 'L1') return "The Absolute Peak. Mastery of all weapons and movement mechanics.";
  if (tier === 'H4') return "Solid intermediate level. Capable of winning most pub matches but needs specialization.";
  return "Standard competitive ranking based on council evaluation.";
}
