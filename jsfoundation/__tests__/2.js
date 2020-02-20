const expect = require('chai').expect;
let solution = require('../2').solution;

describe('Larger number', () => {
  it('should return the larger number', () => {
    const result = solution(0, 1);
    expect(result).to.equal(1);
  });
  it('should return the larger number', () => {
    const result = solution(-5, -6);
    expect(result).to.equal(-5);
  });
  it('should return the larger number', () => {
    const result = solution(-6, 3);
    expect(result).to.equal(3);
  });
  it('should return the larger number', () => {
    const result = solution(4, 5);
    expect(result).to.equal(5);
  });
});