import {test, expect} from '@jest/globals';
import {StringCalculator} from "../src";

const calculator = new StringCalculator();

// 1
test('should return 0 for empty string', () => {
    expect(calculator.add(",")).toBe(0);
    expect(calculator.add("")).toBe(0);
});

// 2
test('should add all the numbers in string', () => {
    expect(calculator.add("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16")).toBe(136);
});

// 3
test("should return the number for single digit string", () => {
    expect(calculator.add("1")).toBe(1);
});

// 4
test("should handle new lines between numbers", () => {
    expect(calculator.add("1\n2,3,4")).toBe(10);
})

// 5
test("should support different delimiters", () => {
    expect(calculator.add("//;\n1;2")).toBe(3);
})

// 6
test("should throw error if NaN is passed in string", () => {
    expect(() => calculator.add("1,2,3,a,4")).toThrow("Invalid number: a")
})

// 7
test("should throw an exception of negative number is passed", () => {
    expect(() => calculator.add("1,2,3,-4")).toThrow("negative numbers not allowed -4");
})

// 8
test("numbers bigger than 1000 should be ignored", () => {
    expect(calculator.add("1,2,3,4,1001,5,1002")).toBe(15);
});


