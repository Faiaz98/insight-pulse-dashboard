import { useEffect, useRef, useState } from 'react';

export default function SessionTimer({ onLog }) {
  const [seconds, setSeconds] = useState(0);
  const intervalRef = useRef(null);

  const start = () => {
    if (intervalRef.current) return;
    intervalRef.current = setInterval(() => {
      setSeconds(prev => prev + 1);
    }, 1000);
  };

  const pause = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = null;
  };

  const reset = () => {
    setSeconds(0);
  };

  const logTime = () => {
    onLog(seconds);
  };

  useEffect(() => {
    start();
    return pause;
  }, []);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <p className="text-lg font-medium">Active for: <strong>{seconds}s</strong></p>
      <div className="space-x-3 mt-2">
        <button onClick={pause} className="btn">Pause</button>
        <button onClick={start} className="btn">Resume</button>
        <button onClick={reset} className="btn">Reset</button>
        <button onClick={logTime} className="btn">Log</button>
      </div>
    </div>
  );
}
