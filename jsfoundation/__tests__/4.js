const expect = require('chai').expect;
let solution = require('../4').solution;

describe('check if it is an even number', () => {
  it('should return true if it is an even, false for odd', () => {
    const result = solution(1);
    expect(result).to.equal(false);
  });
  it('should return true if it is an even, false for odd', () => {
    const result = solution(2);
    expect(result).to.equal(true);
  });
  it('should return true if it is an even, false for odd', () => {
    const result = solution(12);
    expect(result).to.equal(true);
  });
  it('should return true if it is an even, false for odd', () => {
    const result = solution(13);
    expect(result).to.equal(false);
  });
});