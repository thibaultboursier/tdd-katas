const stringCalculator = require('./string-calculator');

describe('String calculator', () => {
    
    it('should return zero on empty string', () => {
        expect(stringCalculator.add('')).toBe(0);
    })

    it('should return single number', () => {
        expect(stringCalculator.add('1')).toBe(1);
        expect(stringCalculator.add('18')).toBe(18);        
    })

    it('should calculate multiple numbers', () => {
        expect(stringCalculator.add('1,2')).toBe(3);
        expect(stringCalculator.add('1,2,8,10,40')).toBe(61);
        expect(stringCalculator.add('6\n9')).toBe(15);
    })

    it('should ignore numbers bigger than 1000', () => {
        expect(stringCalculator.add('3000')).toBe(0);
        expect(stringCalculator.add('8,9,1200')).toBe(17);
    })

    it('should throw an error when some number is negative', () => {
        expect(() => {
            stringCalculator.add('-8');
        }).toThrow();
        expect(() => {
            stringCalculator.add('-2,7,-9');
        }).toThrow();
    })
});