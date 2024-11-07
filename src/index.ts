export function add(nums: string) :number {
    const splitNums = nums.split(',');
    let result = 0;
    for(let number of splitNums) {
        result += parseInt(number);
    }
    return result
}


export function sum(a: number, b: number): number{
    return a + b
}