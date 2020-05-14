const appController = require('../../src/appController');

describe('Testing the appController', () => {
    it('should add two numbers together', () => {
        expect(appController.add(2, 2)).toBe(4);
        expect(appController.add(5, 5)).toBe(10);

        expect(appController.add(3, 2)).toBe(5);
        expect(appController.add(2, 3)).toBe(5);

        expect(appController.add(-5, 5)).toBe(0);
        expect(appController.add(-5, -5)).toBe(-10);
        expect(appController.add(-5, -5)).not.toBe(10);

        expect(appController.add(1.01, 1.02)).toBe(2.0300000000000002);
    });

    it('should substract the second number from the first one', () => {
        expect(appController.subtract(2, 2)).toBe(0);
        expect(appController.subtract(6, 4)).toBe(2);
        expect(appController.subtract(4, 6)).toBe(-2);

        expect(appController.subtract(4, 6)).not.toBe(2);

        expect(appController.subtract(1.01, 1.02)).toBe(-0.010000000000000009);
    });

    it('should multiply the two numbers together', () => {
        expect(appController.multiply(2, 2)).toBe(4);
        expect(appController.multiply(3, 2)).toBe(6);
        expect(appController.multiply(2, 3)).toBe(6);
        expect(appController.multiply(0, 1)).toBe(0);
    });

    it('should divide the first number with the second', () => {
        expect(appController.divide(2, 2)).toBe(1);
        expect(appController.divide(3, 4)).toBe(0.75);

        expect(appController.divide(4, 3)).toBe(1.3333333333333333);
        expect(appController.divide(4, 3)).not.toBe(1.3);

        expect(appController.divide(1, 0)).toBe(Infinity);
    });
});