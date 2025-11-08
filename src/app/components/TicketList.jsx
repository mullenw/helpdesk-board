'use client';
import TicketCard from './TicketCard';

export default function TicketList({ tickets, queue, onAdd }) {
  return (
    <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-4">
      {tickets.map(t => (
        <TicketCard
          key={t.id}
          ticket={t}
          isQueued={!!queue[t.id]}
          onAdd={() => onAdd(t.id)}
        />
      ))}
    </div>
  );
}
