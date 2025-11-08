'use client';

export default function MyQueueSummary({ tickets, queue, onRemove, onClear }) {
  const queued = tickets.filter(t => queue[t.id]);

  return (
    <div className="p-4 rounded-2xl bg-gray-800 border border-gray-700">
      <h2 className="font-semibold mb-2">My Queue ({queued.length})</h2>
      {queued.length === 0 ? (
        <p className="text-sm text-gray-400">No tickets added yet.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {queued.map(t => (
            <li key={t.id} className="flex justify-between">
              <span>{t.title}</span>
              <button
                onClick={() => onRemove(t.id)}
                className="text-xs px-2 py-1 bg-gray-700 rounded-lg hover:bg-gray-600"
              ></button>