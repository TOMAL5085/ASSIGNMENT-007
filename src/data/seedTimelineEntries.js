const currentYear = new Date().getFullYear()
const currentMonth = String(new Date().getMonth() + 1).padStart(2, '0')

const makeDate = (day) => `${currentYear}-${currentMonth}-${String(day).padStart(2, '0')}T10:00:00.000Z`

export const seedTimelineEntries = [
  { id: 1, type: 'call', title: 'Call with Sarah Chen', date: makeDate(2) },
  { id: 2, type: 'video', title: 'Video with Marcus Johnson', date: makeDate(3) },
  { id: 3, type: 'text', title: 'Text with Olivia Martinez', date: makeDate(5) },
  { id: 4, type: 'call', title: 'Call with Lisa Nakamura', date: makeDate(7) },
  { id: 5, type: 'video', title: 'Video with Aisha Patel', date: makeDate(8) },
  { id: 6, type: 'call', title: 'Call with James Wright', date: makeDate(9) },
  { id: 7, type: 'text', title: 'Text with Emma Wilson', date: makeDate(11) },
  { id: 8, type: 'call', title: 'Call with David Kim', date: makeDate(12) },
  { id: 9, type: 'video', title: 'Video with Sarah Chen', date: makeDate(13) },
  { id: 10, type: 'text', title: 'Text with Marcus Johnson', date: makeDate(14) },
  { id: 11, type: 'call', title: 'Call with Aisha Patel', date: makeDate(15) },
  { id: 12, type: 'video', title: 'Video with Olivia Martinez', date: makeDate(16) }
]

