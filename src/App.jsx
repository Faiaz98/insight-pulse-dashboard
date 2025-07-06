import { useState } from 'react';
import SessionTimer from './components/SessionTimer';
import SearchBox from './components/SearchBox';
import StatsPanel from './components/StatsPanel';

export default function App() {
  const [logs, setLogs] = useState([]);

  const handleLog = (seconds) => {
    setLogs(prev => [...prev, seconds]);
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 space-y-6">
      <h1 className="text-3xl font-bold">InsightPulse Dashboard</h1>
      <SearchBox />
      <SessionTimer onLog={handleLog} />
      <StatsPanel logs={logs} />
    </div>
  );
}
