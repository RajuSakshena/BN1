import { useMemo, useState } from 'react';
import { ArrowDownToLine, Download, FileText, Map, Table2, ChartNoAxesCombined } from 'lucide-react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from 'recharts';
import { datasetMeta, districtData, type DatasetKey } from '../data/datasets';
import { DistrictMap } from './DistrictMap';

type ViewKey = 'map' | 'chart' | 'table';

export function DataExplorerPanel({ compact = false }: { compact?: boolean }) {
  const [dataset, setDataset] = useState<DatasetKey>('heat');
  const [view, setView] = useState<ViewKey>('map');
  const [selected, setSelected] = useState('Nagpur');
  const [query, setQuery] = useState('');
  const active = datasetMeta[dataset];
  const selectedRecord = districtData.find((d) => d.district === selected) ?? districtData[0];
  const filtered = useMemo(() => districtData.filter((d) => d.district.toLowerCase().includes(query.toLowerCase())), [query]);
  const chartData = districtData.map((d) => ({
    district: d.short,
    heat: d.heatExposure,
    readiness: d.planReadiness,
    solar: d.solar,
    wind: d.wind,
    capacity: d.totalCapacity,
  }));

  return <div className={`explorer-shell ${compact ? 'explorer-compact' : ''}`}>
    <div className="explorer-topline"><div><span className="live-pulse"/> DATA OBSERVATORY <span className="mono-divider">/</span> MAHARASHTRA PILOT</div><span className="demo-tag">DEMO DATA · SYNTHETIC</span></div>
    <div className="explorer-heading-row">
      <div><p className="explorer-kicker">CHOOSE A RESEARCH LENS</p><h3>Explore the evidence.</h3></div>
      <div className="dataset-switch" role="tablist" aria-label="Choose dataset">
        <button className={dataset === 'heat' ? 'active' : ''} onClick={() => { setDataset('heat'); setSelected('Nagpur'); }} role="tab" aria-selected={dataset === 'heat'}> <span className="switch-number">01</span> Climate</button>
        <button className={dataset === 'energy' ? 'active' : ''} onClick={() => { setDataset('energy'); setSelected('Solapur'); }} role="tab" aria-selected={dataset === 'energy'}><span className="switch-number">02</span> Energy</button>
      </div>
    </div>
    <div className="explorer-dataset-info"><div><span className="dataset-id">{active.id}</span><span className="dataset-category">{active.category}</span></div><h4>{active.title}</h4><p>{active.subtitle}</p></div>
    <div className="explorer-workspace">
      <div className="explorer-main">
        <div className="view-toolbar">
          <div className="view-tabs" role="tablist" aria-label="Visualization type">
            <button className={view === 'map' ? 'active' : ''} onClick={() => setView('map')}><Map size={15}/> Map</button>
            <button className={view === 'chart' ? 'active' : ''} onClick={() => setView('chart')}><ChartNoAxesCombined size={15}/> Chart</button>
            <button className={view === 'table' ? 'active' : ''} onClick={() => setView('table')}><Table2 size={15}/> Table</button>
          </div>
          <span className="chart-units">{dataset === 'heat' ? 'INDEX · 0–100' : 'CAPACITY · GW'}</span>
        </div>
        {view === 'map' && <div className="visualization-stage"><DistrictMap dataset={dataset} selected={selected} onSelect={setSelected}/><div className="map-side-list"><span className="side-list-title">SELECT A DISTRICT</span>{districtData.slice().sort((a, b) => dataset === 'heat' ? b.heatExposure - a.heatExposure : b.totalCapacity - a.totalCapacity).slice(0, 6).map((d, i) => <button key={d.short} className={selected === d.district ? 'selected' : ''} onClick={() => setSelected(d.district)}><span className="rank-num">0{i + 1}</span><span>{d.district}</span><strong>{dataset === 'heat' ? d.heatExposure : d.totalCapacity.toFixed(1)}{dataset === 'energy' ? ' GW' : ''}</strong></button>)}</div></div>}
        {view === 'chart' && <div className="chart-stage"><div className="chart-title-row"><div><span className="chart-label">DISTRICT COMPARISON</span><h5>{dataset === 'heat' ? 'Heat exposure & readiness' : 'Renewable generation capacity'}</h5></div><span className="chart-period">DEMO SERIES · 2026</span></div><div className="chart-area"><ResponsiveContainer width="100%" height="100%"><BarChart data={chartData} margin={{ top: 12, right: 12, left: -14, bottom: 4 }}><CartesianGrid stroke="#E7ECE4" strokeDasharray="3 4" vertical={false}/><XAxis dataKey="district" tick={{ fill: '#7B897D', fontSize: 10, fontFamily: 'IBM Plex Mono' }} axisLine={false} tickLine={false}/><YAxis tick={{ fill: '#7B897D', fontSize: 10 }} axisLine={false} tickLine={false}/><Tooltip contentStyle={{ borderRadius: 12, border: '1px solid #DCE4D9', background: '#FBFCF8', fontSize: 12 }}/>{dataset === 'heat' ? <><Bar dataKey="heat" name="Heat exposure" fill="#D58A69" radius={[5, 5, 0, 0]}/><Bar dataKey="readiness" name="Plan readiness" fill="#6F9079" radius={[5, 5, 0, 0]}/></> : <><Bar dataKey="solar" name="Solar capacity" stackId="a" fill="#8BAE8D" radius={[0,0,0,0]}/><Bar dataKey="wind" name="Wind capacity" stackId="a" fill="#D5B36F" radius={[5,5,0,0]}/></>}</BarChart></ResponsiveContainer></div><div className="chart-legend"><span><i style={{background: dataset === 'heat' ? '#D58A69' : '#8BAE8D'}}/>{dataset === 'heat' ? 'Heat exposure' : 'Solar capacity'}</span><span><i style={{background: dataset === 'heat' ? '#6F9079' : '#D5B36F'}}/>{dataset === 'heat' ? 'Plan readiness' : 'Wind capacity'}</span></div></div>}
        {view === 'table' && <div className="table-stage"><div className="table-search"><span>District-level observations</span><input aria-label="Search districts" placeholder="Find a district..." value={query} onChange={(e) => setQuery(e.target.value)}/></div><div className="data-table-scroll"><table className="data-table"><thead><tr><th>District</th>{dataset === 'heat' ? <><th>Exposure index</th><th>Plan readiness</th><th>Cooling access</th></> : <><th>Solar · GW</th><th>Wind · GW</th><th>Total · GW</th></>}</tr></thead><tbody>{filtered.map((d) => <tr key={d.short} onClick={() => setSelected(d.district)} className={selected === d.district ? 'row-selected' : ''}><td><span className="table-district-dot"/>{d.district}</td>{dataset === 'heat' ? <><td>{d.heatExposure}</td><td>{d.planReadiness}</td><td>{d.coolingAccess}</td></> : <><td>{d.solar.toFixed(1)}</td><td>{d.wind.toFixed(1)}</td><td>{d.totalCapacity.toFixed(1)}</td></>}</tr>)}</tbody></table></div></div>}
      </div>
      <aside className="explorer-aside">
        <div className="aside-card selected-card"><span className="aside-label">SELECTED DISTRICT</span><h4>{selectedRecord.district}</h4><span className="district-state">MAHARASHTRA, INDIA</span><div className="selected-metric"><span>{dataset === 'heat' ? 'Heat exposure' : 'Total renewable capacity'}</span><strong>{dataset === 'heat' ? selectedRecord.heatExposure : selectedRecord.totalCapacity.toFixed(1)}<small>{dataset === 'heat' ? '/100' : ' GW'}</small></strong></div><div className="metric-track"><i style={{width: `${dataset === 'heat' ? selectedRecord.heatExposure : selectedRecord.totalCapacity / 5 * 100}%`}}/></div>{dataset === 'heat' ? <div className="mini-metrics"><div><span>Plan readiness</span><strong>{selectedRecord.planReadiness}/100</strong></div><div><span>Cooling access</span><strong>{selectedRecord.coolingAccess}/100</strong></div></div> : <div className="mini-metrics"><div><span>Solar</span><strong>{selectedRecord.solar.toFixed(1)} GW</strong></div><div><span>Wind</span><strong>{selectedRecord.wind.toFixed(1)} GW</strong></div></div>}</div>
        <div className="aside-card insight-card"><span className="aside-label">READ THE SIGNAL</span><p>{dataset === 'heat' ? `${selectedRecord.district} shows a ${selectedRecord.heatExposure >= 80 ? 'high' : 'moderate'} heat exposure score in this synthetic example. Readiness and cooling access are shown separately to avoid treating exposure as preparedness.` : `${selectedRecord.district} is represented with ${selectedRecord.solar.toFixed(1)} GW of solar and ${selectedRecord.wind.toFixed(1)} GW of wind capacity in this synthetic example.`}</p><span className="insight-foot">Illustrative interpretation · not a finding</span></div>
      </aside>
    </div>
    <div className="explorer-bottom"><div className="source-note"><span className="source-mark">i</span><span>All values are synthetic demonstration data. Not official statistics or research findings.</span></div><div className="download-actions"><a href={active.file} download><Download size={14}/> CSV</a><a href={active.readme} download><FileText size={14}/> README</a></div></div>
    {!compact && <div className="explorer-detail-link"><a href={active.file} download>Download this dataset <ArrowDownToLine size={14}/></a><span>Schema, units and limitations included in README</span></div>}
  </div>;
}
