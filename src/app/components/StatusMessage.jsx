'use client';

export default function StatusMessage({ loading, error, isEmpty }) {
  if (loading)
    return <p className="p-4 bg-blue-900 rounded-xl">Loading...</p>;
  if (error)
    return <p className="p-4 bg-red-900 rounded-xl">{error}</p>;
  if (isEmpty)
    return <p className="p-4 bg-yellow-900 rounded-xl">No tickets match your filters.</p>;
  return null;
}
