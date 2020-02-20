const expect = require('chai').expect;
let solution = require('../7').solution;

describe('Is the sum of first 2 arguments greater than the third', () => {
  it('should return true the sum  greater than the third', () => {
    const result = solution(1, 3, 5);
    expect(result).to.equal(false);
  });
  it('should return true the sum  greater than the third', () => {
    const result = solution(9, 14, 25);
    expect(result).to.equal(false);
  });
  it('should return true the sum  greater than the third', () => {
    const result = solution(-4, 0, -10);
    expect(result).to.equal(true);
  });
  it('should return true the sum  greater than the third', () => {
    const result = solution(19, 10, 15);
    expect(result).to.equal(true);
  });
});