'use client';

export default function TicketCard({ ticket, isQueued, onAdd }) {
  const { title, description, priority, status, assignee, updatedAt } = ticket;
  const date = new Date(updatedAt).toLocaleString();

  return (
    <div className="p-4 rounded-2xl bg-gray-800 border border-gray-700 hover:border-blue-500 transition">
      <h3 className="font-semibold mb-1">{title}</h3>
      <p className="text-sm text-gray-300">{description}</p>
      <div className="mt-2 text-xs text-gray-400">
        <p>Priority: {priority}</p>
        <p>Status: {status}</p>
        <p>Assignee: {assignee}</p>
        <p>Updated: {date}</p>
      </div>
    
     <button
        onClick={onAdd}
        disabled={isQueued}
        className={`mt-3 w-full py-2 rounded-xl text-sm font-medium
        ${isQueued
          ? 'bg-gray-600 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
      >
        {isQueued ? 'Added to My Queue' : 'Add to My Queue'}
      </button>
    </div>
  );
}