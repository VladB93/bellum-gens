export interface UtilityDescriptor {
  name: string;
  icon: string;
  fontSet: string;
  svg: string;
  width: number;
  height: number;
}

export interface EditorBrushColor {
  color: string;
  selected: boolean;
}

export const StratUtilities: UtilityDescriptor [] = [
  {
    name: 'Flash',
    icon: 'flashbang',
    fontSet: 'weapon-icons',
    width: 72,
    height: 72,
    svg: '/assets/editor/flashbang.png'
  },
  {
    name: 'Smoke',
    icon: 'smoke',
    fontSet: 'weapon-icons',
    width: 72,
    height: 72,
    svg: '/assets/editor/smoke-nade.png'
  },
  {
    name: 'Molotov',
    icon: 'molotov',
    fontSet: 'weapon-icons',
    width: 72,
    height: 72,
    svg: '/assets/editor/molotov.png'
  },
  {
    name: 'HE Grenade',
    icon: 'hegrenade',
    fontSet: 'weapon-icons',
    width: 72,
    height: 72,
    svg: '/assets/editor/he-nade.png'
  },
  {
    name: 'C4',
    icon: 'c4',
    fontSet: 'weapon-icons',
    width: 30,
    height: 30,
    svg: '/assets/weapon-icons/svg_normal/weapon_c4.svg'
  }
];

export const EditorBrushColors: EditorBrushColor [] = [
  { color: '#fff100', selected: true },
  { color: '#5889ff', selected: false },
  { color: '#ff282d', selected: false },
  { color: '#00ee65', selected: false },
  { color: '#ff63cd', selected: false }
];
