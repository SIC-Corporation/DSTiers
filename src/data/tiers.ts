export type Tier = 'L1' | 'H1' | 'L2' | 'H2' | 'L3' | 'H3' | 'L4' | 'H4' | 'L5' | 'H5';

export const TIERS_ORDERED: Tier[] = ['H5', 'L5', 'H4', 'L4', 'H3', 'L3', 'H2', 'L2', 'H1', 'L1'];

export const TIER_CONFIG: Record<Tier, { label: string; colorClass: string; hex: string }> = {
  'H5': { label: 'H5', colorClass: 'bg-yellow-400 text-black',  hex: '#facc15' },
  'L5': { label: 'L5', colorClass: 'bg-yellow-600 text-black',  hex: '#ca8a04' },
  'H4': { label: 'H4', colorClass: 'bg-orange-400 text-black',  hex: '#fb923c' },
  'L4': { label: 'L4', colorClass: 'bg-orange-600 text-white',  hex: '#ea580c' },
  'H3': { label: 'H3', colorClass: 'bg-red-500 text-white',     hex: '#ef4444' },
  'L3': { label: 'L3', colorClass: 'bg-red-700 text-white',     hex: '#b91c1c' },
  'H2': { label: 'H2', colorClass: 'bg-purple-500 text-white',  hex: '#a855f7' },
  'L2': { label: 'L2', colorClass: 'bg-purple-700 text-white',  hex: '#7e22ce' },
  'H1': { label: 'H1', colorClass: 'bg-blue-500 text-white',    hex: '#3b82f6' },
  'L1': { label: 'L1', colorClass: 'bg-blue-800 text-white',    hex: '#1e40af' },
};

export type Platform = 'Mobile' | 'PC';
export const PLATFORMS: Platform[] = ['Mobile', 'PC'];

export type GameMode = 'FFA' | 'TDM' | 'Point' | 'Confirm' | 'Team KC' | 'Dom';
export const GAME_MODES: GameMode[] = ['FFA', 'TDM', 'Point', 'Confirm', 'Team KC', 'Dom'];

export type WeaponClass = 'AR' | 'SMG' | 'Sniper' | 'Shotgun';
export const WEAPON_CLASSES: WeaponClass[] = ['AR', 'SMG', 'Sniper', 'Shotgun'];

export interface WeaponTiers {
  ar?: Tier;
  smg?: Tier;
  sniper?: Tier;
  shotgun?: Tier;
}

export interface Player {
  id: string;
  username: string;
  platform: Platform;
  altPlatform?: Platform;
  gameMode: GameMode;
  overall: Tier;
  mainWeapon: WeaponClass;
  weapons: WeaponTiers;
  notes?: string;
  discordTag?: string;
}

export const PLAYERS: Player[] = [
  {
    id: '1',
    username: 'Royies',
    discordTag: '[SIC]',
    platform: 'PC',
    altPlatform: 'Mobile',
    gameMode: 'TDM',
    overall: 'H4',
    mainWeapon: 'Sniper',
    weapons: { sniper: 'H4', ar: 'H2', smg: 'L2', shotgun: 'L1' },
    notes: 'Best in TDM. Good in Point, Team KC, Dom. Mid in Confirm. Weakest in FFA.',
  },
  {
    id: '2',
    username: 'Hrisa',
    platform: 'PC',
    gameMode: 'TDM',
    overall: 'L2',
    mainWeapon: 'AR',
    weapons: { ar: 'L2' },
    notes: 'AR-only player. Best in TDM and Dom. Good in Team KC. OK in Point and Confirm. Weakest in FFA.',
  },
];

export const DISCORD_INVITE = 'https://discord.gg/2MEP67Rbj2';
