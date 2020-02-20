const expect = require('chai').expect;
let solution = require('../5').solution;

describe('the median of 3 numbers', () => {
  it('should return the median', () => {
    const result = solution(1, 2, 3);
    expect(result).to.equal(2);
  });
  it('should return the median', () => {
    const result = solution(8, 8, 10);
    expect(result).to.equal(8);
  });
  it('should return the median', () => {
    const result = solution(1, 6, 3);
    expect(result).to.equal(3);
  });
  it('should return the median', () => {
    const result = solution(20, 14, 25);
    expect(result).to.equal(20);
  });
});