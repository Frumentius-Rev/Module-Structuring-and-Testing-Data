export function getOrdinalNumber(num) {
  const lastTwoDigits = num % 100;
  const lastDigits = num % 10;

  if (lastTwoDigits >= 11 && lastTwoDigits <= 13) {
    return `${num}th`;
  } else if (lastDigits === 1) {
    return `${num}st`;
  } else if (lastDigits === 2) {
    return `${num}nd`;
  } else if (lastDigits === 3) {
    return `${num}rd`;
  } else {
    return `${num}th`;
  }
}
