export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-07T10:00:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing on mobile',
      description: 'Outlook app shows stale inbox on iOS.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Unassigned',
      updatedAt: '2025-11-06T10:00:00Z'
    },
