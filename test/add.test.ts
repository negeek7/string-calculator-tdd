import {test, expect} from '@jest/globals';
import {add} from "../src";

test('should return 0 for empty string', () => {
    expect(add(",")).toBe(0);
    expect(add("")).toBe(0);
});

test('should add all the numbers in string', () => {
    expect(add("1,2,3,4")).toBe(10);
});


test("should return the number for single digit string", () => {
    expect(add("1")).toBe(1);
});

