export class StringCalculator {
    public add(nums: string) :number {
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
            let negativeNumbers: number[] = [];

            for(let number of splitNums) {
                let num = Number(number);
                if(isNaN(num)) {
                    throw new Error(`Invalid number: ${number}`);
                }
                if(num < 0) {
                    negativeNumbers.push(num);
                }
                if(num > 1000) continue;
                result += num;
            }

            if(negativeNumbers.length > 0) {
                throw new Error(`negative numbers not allowed ${negativeNumbers.join(",")}.`)
            }
            return result;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }


    public sum(a: number, b: number): number{
        return a + b
    }
}
