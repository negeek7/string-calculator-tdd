import {describe, expect, test} from '@jest/globals';
import {StringCalculator} from "../src";

const calculator = new StringCalculator();
test('adds 1 + 2 to equal 3', () => {
    expect(calculator.sum(1, 2)).toBe(3);
});

