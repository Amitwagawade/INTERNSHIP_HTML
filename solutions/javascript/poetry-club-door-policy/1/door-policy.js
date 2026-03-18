// @ts-check

export function frontDoorResponse(line) {
  return line[0];
}

export function frontDoorPassword(word) {
  const lower = word.toLowerCase();
  return lower[0].toUpperCase() + lower.slice(1);
}

export function backDoorResponse(line) {
  const trimmed = line.trim();
  return trimmed[trimmed.length - 1];
}

export function backDoorPassword(word) {
  const lower = word.toLowerCase();
  const capitalized = lower[0].toUpperCase() + lower.slice(1);
  return capitalized + ', please';
}