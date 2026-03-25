import { Link, useLocation } from "wouter";
import { Database, ListTree, MessageSquare } from "lucide-react";

export function Navbar() {
  const [location] = useLocation();

  const links = [
    { name: "DATABASE", path: "/", icon: Database },
    { name: "TIER LIST", path: "/tiers", icon: ListTree },
  ];

  return (
    <nav className="border-b border-zinc-800 bg-black/80 backdrop-blur-md sticky top-0 z-50 px-6 py-3 flex items-center justify-between">
      <div className="flex items-center gap-8">
        <div className="flex items-center gap-2">
          <div className="bg-yellow-500 text-black font-black px-1.5 py-0.5 rounded text-xs">DS</div>
          <span className="font-bold tracking-tighter text-xl italic text-yellow-500">TIERS</span>
        </div>
        
        <div className="flex gap-6">
          {links.map((link) => (
            <Link key={link.path} href={link.path}>
              <a className={`flex items-center gap-2 text-xs font-bold tracking-widest transition-colors ${
                location === link.path ? "text-yellow-500" : "text-zinc-500 hover:text-white"
              }`}>
                <link.icon className="h-4 w-4" />
                {link.name}
              </a>
            </Link>
          ))}
        </div>
      </div>

      <a 
        href="https://discord.gg/2MEP67Rbj2" 
        target="_blank" 
        className="bg-[#5865F2] hover:bg-[#4752C4] text-white text-xs font-bold px-4 py-2 rounded-md flex items-center gap-2 transition-all shadow-[0_0_15px_rgba(88,101,242,0.3)]"
      >
        <MessageSquare className="h-4 w-4" />
        DISCORD
      </a>
    </nav>
  );
}
