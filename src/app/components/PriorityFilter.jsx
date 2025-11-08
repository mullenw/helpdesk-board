'use client';

export default function PriorityFilter({ value, onChange }) {
  const options = ['All', 'Low', 'Medium', 'High', 'Critical'];
  return (
    <label className="block text-sm mb-2">
      <span>Priority</span>
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
