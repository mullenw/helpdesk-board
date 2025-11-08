'use client';

export default function StatusFilter({ value, onChange }) {
  const options = ['All', 'Open', 'In Progress', 'On Hold', 'Resolved'];
  return (
    <label className="block text-sm mb-2">
      <span>Status</span>
      <select
        className="mt-1 w-full rounded-xl border border-gray-700 bg-gray-800 p-2 text-white"
        value={value}
        onChange={e => onChange(e.target.value)}
      >
        {options.map(o => (
          <option key={o}>{o}</option>
        ))}
      </select>
    </label>
  );
}
