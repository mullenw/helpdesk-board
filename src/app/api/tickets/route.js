export async function GET() {
  const tickets = [
    {
      id: 't-1001',
      title: 'Cannot connect to VPN',
      description: 'User reports intermittent VPN connectivity errors.',
      priority: 'High',
      status: 'Open',
      assignee: 'Amon-Ra St. Brown',
      updatedAt: '2025-11-07T10:00:00Z'
    },
    {
      id: 't-1002',
      title: 'Email not syncing on mobile',
      description: 'Outlook app shows stale inbox on iOS.',
      priority: 'Medium',
      status: 'Open',
      assignee: 'Baker Mayfield',
      updatedAt: '2025-11-06T10:00:00Z'
    },
    {
      id: 't-1003',
      title: 'Laptop battery drains fast',
      description: 'Battery drops from 100% to 30% in an hour.',
      priority: 'Low',
      status: 'On Hold',
      assignee: 'Ceedee Lamb',
      updatedAt: '2025-11-05T11:00:00Z'
    },
    {
      id: 't-1004',
      title: 'Wi-Fi disconnects randomly',
      description: 'Intermittent disconnection for multiple users.',
      priority: 'Critical',
      status: 'In Progress',
      assignee: 'James Cook',
      updatedAt: '2025-11-05T09:00:00Z'
    }
  ];

  return Response.json(tickets);
}
