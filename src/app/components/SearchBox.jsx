'use client';

export default function SearchBox({ value, onChange }) {
  return (
    <label className="block text-sm mb-2">
      <span>Search</span>
      <input
        type="text"
        placeholder="Search tickets..."
        className="mt-1 w-full rounded-xl border border-gray-700 bg-gray-800 p-2 text-white"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}
