import React, { useMemo } from 'react';

export default function StatsPanel({ logs }) {
  const totalTime = useMemo(() => {
    return logs.reduce((acc, time) => acc + time, 0);
  }, [logs]);

  const heavyComputation = () => {
    console.log('Running heavy computation...');
    const cpu = Math.floor(Math.random() * 100);
    const mem = Math.floor(Math.random() * 100);
    const disk = Math.floor(Math.random() * 100);
    return { cpu, mem, disk };
  };

  const stats = useMemo(() => heavyComputation(), []);

  return (
    <div className="p-6 bg-white shadow-md rounded-xl max-w-4xl mx-auto">
      <h2 className="text-xl font-bold mb-4"> System Stats (Memoized)</h2>
      <ul className="space-y-2 mb-6">
        <li> CPU Usage: <strong>{stats.cpu}%</strong></li>
        <li> Memory Usage: <strong>{stats.mem}%</strong></li>
        <li> Disk Usage: <strong>{stats.disk}%</strong></li>
      </ul>

      <p className="text-lg mb-2">
        Total Logged Time: <strong>{totalTime}s</strong>
      </p>
      <ul className="list-disc pl-5">
        {logs.map((time, idx) => (
          <li key={idx}>Logged at {time}s</li>
        ))}
      </ul>
    </div>
  );
}
