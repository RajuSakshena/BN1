import { districtData, type DatasetKey } from '../data/datasets';

export function DistrictMap({ dataset, selected, onSelect }: { dataset: DatasetKey; selected: string; onSelect: (name: string) => void }) {
  const valueFor = (district: typeof districtData[number]) => dataset === 'heat' ? district.heatExposure : district.totalCapacity;
  const max = dataset === 'heat' ? 100 : 5;
  return <div className="district-map-wrap">
    <div className="map-legend"><span><i className="legend-dot legend-low"/> Lower</span><span><i className="legend-dot legend-mid"/> Moderate</span><span><i className="legend-dot legend-high"/> Higher</span></div>
    <svg className="district-map" viewBox="0 0 440 330" role="img" aria-label="Schematic district map of Maharashtra with selectable district markers">
      <defs>
        <linearGradient id="mahaFill" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#E8F0E3"/><stop offset="1" stopColor="#D3E2D0"/></linearGradient>
        <pattern id="mapDots" width="10" height="10" patternUnits="userSpaceOnUse"><circle cx="1" cy="1" r=".7" fill="#A8BEA8" opacity=".52"/></pattern>
        <filter id="mapShadow" x="-30%" y="-30%" width="160%" height="160%"><feDropShadow dx="0" dy="9" stdDeviation="8" floodColor="#6F9079" floodOpacity=".15"/></filter>
      </defs>
      <g className="map-contours" fill="none" stroke="#C5D6C5" strokeWidth="1"><path d="M28 84 C92 38 145 37 208 65 S337 54 413 100"/><path d="M17 112 C92 67 142 74 213 96 S338 88 421 130"/><path d="M9 147 C91 102 148 113 219 132 S343 122 427 166"/><path d="M22 184 C94 145 154 153 224 170 S343 164 415 201"/></g>
      <path filter="url(#mapShadow)" d="M84 46 L145 28 194 48 247 42 285 70 337 81 367 119 352 158 377 196 346 224 322 269 275 283 237 267 192 295 146 272 104 283 67 253 52 213 30 174 46 135 31 101Z" fill="url(#mahaFill)" stroke="#9FB99F" strokeWidth="2.2" strokeLinejoin="round"/>
      <path d="M84 46 L145 28 194 48 247 42 285 70 337 81 367 119 352 158 377 196 346 224 322 269 275 283 237 267 192 295 146 272 104 283 67 253 52 213 30 174 46 135 31 101Z" fill="url(#mapDots)"/>
      <g className="map-boundaries" fill="none" stroke="#B1C8B0" strokeWidth="1.15" strokeDasharray="3 4">
        <path d="M63 108 L128 107 169 84 194 48"/><path d="M128 107 L151 157 119 209 104 283"/><path d="M151 157 L213 145 247 42"/><path d="M151 157 L192 213 192 295"/><path d="M213 145 L278 133 337 81"/><path d="M213 145 L237 210 275 283"/><path d="M278 133 L352 158 377 196"/><path d="M237 210 L322 269"/><path d="M67 253 L119 209 192 213 237 210"/>
      </g>
      {districtData.map((d) => {
        const value = valueFor(d);
        const intensity = value / max;
        const active = selected === d.district;
        return <g key={d.short} className="map-point" onClick={() => onSelect(d.district)} role="button" tabIndex={0} aria-label={`Select ${d.district}`} onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onSelect(d.district); }}>
          <circle cx={d.x * 3.55 + 30} cy={d.y * 2.62 + 26} r={active ? 15 : 10} fill={active ? '#1E382D' : intensity > .78 ? '#D58A69' : intensity > .58 ? '#9FB98F' : '#6F9079'} opacity={active ? 1 : .9} stroke="#F8FAF5" strokeWidth="3" className="map-point-halo"/>
          <circle cx={d.x * 3.55 + 30} cy={d.y * 2.62 + 26} r="3" fill="#F8FAF5"/>
          {active && <g><rect x={d.x * 3.55 + 42} y={d.y * 2.62 + 13} width="82" height="24" rx="8" fill="#1E382D"/><text x={d.x * 3.55 + 50} y={d.y * 2.62 + 29} fill="#fff" fontSize="9" fontWeight="600">{d.short} · {value}{dataset === 'energy' ? ' GW' : ''}</text></g>}
        </g>;
      })}
      <text x="33" y="318" fontSize="8" fill="#8A9A8D" letterSpacing="1.4">MAHARASHTRA · SCHEMATIC VIEW</text>
    </svg>
    <div className="map-footnote">Illustrative district layout · not a geographic boundary file</div>
  </div>;
}
