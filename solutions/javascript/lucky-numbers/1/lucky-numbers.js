// @ts-check

export function twoSum(array1, array2) {
  const num1 = Number(array1.join(''));
  const num2 = Number(array2.join(''));

  return num1 + num2;
}

export function luckyNumber(value) {
  const str = String(value);
  const reversed = str.split('').reverse().join('');

  return str === reversed;
}

export function errorMessage(input) {
  // empty string, null, undefined → required field
  if (!input) {
    return 'Required field';
  }

  // convert to number
  const num = Number(input);

  // check for invalid number or <= 0
  if (isNaN(num) || num <= 0) {
    return 'Must be a number besides 0';
  }

  return '';
}