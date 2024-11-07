import {test, expect} from '@jest/globals';
import {add} from "../src";

// 1
test('should return 0 for empty string', () => {
    expect(add(",")).toBe(0);
    expect(add("")).toBe(0);
});

// 2
test('should add all the numbers in string', () => {
    expect(add("1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16")).toBe(136);
});

// 3
test("should return the number for single digit string", () => {
    expect(add("1")).toBe(1);
});

// 4
test("should handle new lines between numbers", () => {
    expect(add("1\n2,3,4")).toBe(10);
})

