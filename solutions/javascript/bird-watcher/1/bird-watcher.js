// @ts-check

export function totalBirdCount(birdsPerDay) {
  let total = 0;

  for (let i = 0; i < birdsPerDay.length; i++) {
    total += birdsPerDay[i];
  }

  return total;
}

export function birdsInWeek(birdsPerDay, week) {
  let total = 0;

  // Each week has 7 days
  let start = (week - 1) * 7;
  let end = start + 7;

  for (let i = start; i < end; i++) {
    total += birdsPerDay[i];
  }

  return total;
}

export function fixBirdCountLog(birdsPerDay) {
  // Add +1 to every second day (starting from index 0)
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i] += 1;
  }
}