import {test, expect} from '@jest/globals';


import {add} from "../src";


test('add  all the numbers in string', () => {
    expect(add("1,2,3,4")).toBe(10);
});



