export function add(nums: string) :number {

    if(!nums || nums === ",") return 0;

    // different delimiter
    let delimiter = /, | \n /;

    let splitNums = nums.split(delimiter);
    let result = 0;

    for(let number of splitNums) {
        result += parseInt(number);
    }
    return result;
}


export function sum(a: number, b: number): number{
    return a + b
}