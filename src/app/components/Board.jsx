'use client';
import { useEffect, useState, useMemo } from 'react';
import StatusFilter from './StatusFilter';
import PriorityFilter from './PriorityFilter';
import SearchBox from './SearchBox';
import TicketList from './TicketList';
import MyQueueSummary from './MyQueueSummary';
import StatusMessage from './StatusMessage';
import { nextStatus, nextPriority } from '../lib/severity';

export default function Board() {
  const [tickets, setTickets] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [filters, setFilters] = useState({ status: 'All', priority: 'All' });
  const [search, setSearch] = useState('');
  const [queue, setQueue] = useState({});

    useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        const res = await fetch('/api/tickets');
        if (!res.ok) throw new Error('Network error');
        const data = await res.json();
        setTickets(data);
      } catch (err) {
        setError('Unable to load tickets');
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

    useEffect(() => {
    const interval = setInterval(() => {
      setTickets(prev => {
        if (prev.length === 0) return prev;
        const copy = [...prev];
        const random = Math.floor(Math.random() * copy.length);
        const t = copy[random];
        const updated = {
          ...t,
          status: nextStatus[t.status] || t.status,
          priority: nextPriority[t.priority] || t.priority,
          updatedAt: new Date().toISOString()
        };
        copy[random] = updated;
        return copy;
      });
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  const visibleTickets = useMemo(() => {
    const q = search.toLowerCase();
    return tickets.filter(t => {
      const matchesStatus = filters.status === 'All' || t.status === filters.status;
      const matchesPriority = filters.priority === 'All' || t.priority === filters.priority;
      const matchesSearch =
        q === '' ||
        t.title.toLowerCase().includes(q) ||
        t.description.toLowerCase().includes(q);
      return matchesStatus && matchesPriority && matchesSearch;
    });
  }, [tickets, filters, search]);

  const addToQueue = id => setQueue(prev => ({ ...prev, [id]: true }));
  const removeFromQueue = id => {
    const copy = { ...queue };
    delete copy[id];
    setQueue(copy);
  };
  const clearQueue = () => setQueue({});

  const isEmpty = !loading && !error && visibleTickets.length === 0;

  