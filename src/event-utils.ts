let eventGuid = 0
const today = new Date().toISOString()
export const INITIAL_EVENTS = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: today
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: today + 'T12:00:00'
  }
]

export function createEventId() {
  return String(eventGuid++)
}
