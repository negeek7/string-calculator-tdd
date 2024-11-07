export function add(nums: string) :number {

    if(!nums || nums === ",") return 0;

    // different delimiter
    let delimiter: any = /[,\n]/;

    if(nums.startsWith("//")){
        let result = nums.split("\n");
        delimiter = result[0].substring(2);

        nums = result[1];
    }

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