export default function formattedDate(dateString) {
  const options = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'America/Los_Angeles'
  }
  const date = new Date(dateString)
  return new Intl.DateTimeFormat('en-US',options).format(date)
}

