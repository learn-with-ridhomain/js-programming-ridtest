const expect = require('chai').expect;
let solution = require('../1').solution;

describe('Sum of 2 numbers', () => {
  it('should add 2 numbers correctly', () => {
    const result = solution(0, 1);
    expect(result).to.equal(1);
  });
  it('should add 2 numbers correctly', () => {
    const result = solution(-6, -6);
    expect(result).to.equal(-12);
  });
  it('should add 2 numbers correctly', () => {
    const result = solution(-6, 3);
    expect(result).to.equal(-3);
  });
  it('should add 2 numbers correctly', () => {
    const result = solution(4, 5);
    expect(result).to.equal(9);
  });
});

