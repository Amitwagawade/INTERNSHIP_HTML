// @ts-check

export function cardTypeCheck(stack, card) {
  let count = 0;

  stack.forEach(value => {
    if (value === card) {
      count++;
    }
  });

  return count;
}

export function determineOddEvenCards(stack, type) {
  let count = 0;

  for (const value of stack) {
    if (type) {
      // count even numbers
      if (value % 2 === 0) {
        count++;
      }
    } else {
      // count odd numbers
      if (value % 2 !== 0) {
        count++;
      }
    }
  }

  return count;
}