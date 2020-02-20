const expect = require('chai').expect;
let solution = require('../6').solution;

describe('Is the first greater than the second', () => {
  it('should return true the first argument greater than the second', () => {
    const result = solution(1, 3);
    expect(result).to.equal(false);
  });
  it('should return true the first argument greater than the second', () => {
    const result = solution(-1, -3);
    expect(result).to.equal(true);
  });
  it('should return true the first argument greater than the second', () => {
    const result = solution(4, 0);
    expect(result).to.equal(true);
  });
  it('should return true the first argument greater than the second', () => {
    const result = solution(0, 4);
    expect(result).to.equal(false);
  });
});