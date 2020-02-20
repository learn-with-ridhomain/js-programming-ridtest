const expect = require('chai').expect;
let solution = require('../3').solution;

describe('the largest number', () => {
  it('should return the largest number', () => {
    const result = solution(0, 1, 10);
    expect(result).to.equal(10);
  });
  it('should return the largest number', () => {
    const result = solution(-5, -6, 0);
    expect(result).to.equal(0);
  });
  it('should return the largest number', () => {
    const result = solution(-6, 3, 2);
    expect(result).to.equal(3);
  });
  it('should return the largest number', () => {
    const result = solution(400, 5, 100);
    expect(result).to.equal(400);
  });
});