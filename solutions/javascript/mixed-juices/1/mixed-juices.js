// @ts-check

export function timeToMixJuice(name) {
  switch (name) {
    case 'Pure Strawberry Joy':
      return 0.5;
    case 'Energizer':
    case 'Green Garden':
      return 1.5;
    case 'Tropical Island':
      return 3;
    case 'All or Nothing':
      return 5;
    default:
      return 2.5;
  }
}

export function limesToCut(wedgesNeeded, limes) {
  let wedges = 0;
  let count = 0;

  while (wedges < wedgesNeeded && count < limes.length) {
    const lime = limes[count];

    switch (lime) {
      case 'small':
        wedges += 6;
        break;
      case 'medium':
        wedges += 8;
        break;
      case 'large':
        wedges += 10;
        break;
    }

    count++;
  }

  return count;
}

export function remainingOrders(timeLeft, orders) {
  let index = 0;

  while (timeLeft > 0 && index < orders.length) {
    timeLeft -= timeToMixJuice(orders[index]);
    index++;
  }

  return orders.slice(index);
}