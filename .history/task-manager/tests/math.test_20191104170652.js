const { calculateTip } = require('../src/math');

test('Should calculate total with tip', () => {
  const total = calculateTip(10, 0.3);
  expect(total).toBe(13);
});

test('Should calculate total with default tip', () => {
  const total = calculateTip(10);
  expect(total).toBe(12.5);
});

test('Should convert fahrenheit to Celsius', () => {
  const fahrenheit = fahrenheitToCelsius(20);
  expect(fahrenheit).toBe(-6.67);
});
