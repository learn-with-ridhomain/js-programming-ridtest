const expect = require('chai').expect;
let solution = require('../8').solution;

describe('the sum of the return value and a number ', () => {
  it('should return the correct sum', () => {
    const result = solution(() => 5, 3);
    expect(result).to.equal(8);
  });
  it('should return the correct sum', () => {
    const result = solution(() => 3, -3);
    expect(result).to.equal(0);
  });
  it('should return the correct sum', () => {
    const result = solution(() => 0, 0);
    expect(result).to.equal(0);
  });
  it('should return the correct sum', () => {
    const result = solution(() => 5, 4);
    expect(result).to.equal(9);
  });
});