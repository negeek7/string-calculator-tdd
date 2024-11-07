export function add(nums: string) :number {
    try {
        if(!nums || nums === ",") return 0;
        // different delimiter
        let delimiter: any = /[,\n]/;

        // custom delimiter
        if(nums.startsWith("//")){
            let result = nums.split("\n");
            delimiter = result[0].substring(2);
            nums = result[1];
        }
        let result = 0;
        let splitNums = nums.split(delimiter);

        for(let number of splitNums) {
            let num = Number(number);
            if(isNaN(num)) {
                throw new Error(`Invalid number: ${number}`);
            }
            result += num;
        }
        return result;
    } catch (error) {
        console.log(error);
    }
}


export function sum(a: number, b: number): number{
    return a + b
}