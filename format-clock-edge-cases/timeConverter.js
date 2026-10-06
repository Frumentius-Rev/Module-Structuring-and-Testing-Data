function formatAs12HourClock(time) {
  const hours = Number(time.slice(0, 2));
  const minutes = time.slice(-2);

  if (hours === 0) {
    return `12:${minutes} am`;
  }

  if (hours === 12) {
    return `${time} pm`;
  }

  if (hours > 12) {
    return `${hours - 12}:${minutes} pm`;
  }
  return `${hours}:${minutes} am`;
}

export { formatAs12HourClock };
