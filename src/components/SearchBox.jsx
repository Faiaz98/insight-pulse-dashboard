import { useEffect, useState } from 'react';
import useDebounce from '../hooks/useDebounce';

export default function SearchBox() {
  const [query, setQuery] = useState('');
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      console.log(`Searching for ${debouncedQuery}...`);
    }
  }, [debouncedQuery]);

  return (
    <div className="p-4 bg-white shadow-md rounded-xl">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Search users..."
        value={query}
        onChange={e => setQuery(e.target.value)}
      />
    </div>
  );
}
