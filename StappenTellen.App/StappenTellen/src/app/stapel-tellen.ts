import { StapelTellenResult } from "./stapel-tellen.result";

export class StapelTellen {

    public calculate(input: string): StapelTellenResult {
        console.log('input: ' + input);

        let i = 0;
        let res = new StapelTellenResult();
        res.steps = [];
        let result = '';
        while (i < input.length) {
            let x = input.charAt(i);
            let y = (i + 1 < input.length) ? input.charAt(i + 1) : '0';
            var sum = +x + +y;
            const sumDescription = x + ' + ' + y + ' = ' + sum;
            console.log(sumDescription );
            res.steps.push(sumDescription);

            result += ''+sum+'';

            console.log(result);

            i += 2;
        }

        
        console.log('result.length: ' + result.length);
        let iteration = 1;
        while (result.length > 1 || iteration > 10)
        {
            console.log(result)
            let temp  = this.calculate(result);
            console.log(temp);
            result = temp.result;
            temp.steps.forEach(s => res.steps.push(s));
            res.result = temp.result;
            iteration++;
        }


        // return result;
        res.result = result;
        console.log('result: ' + res.result);
        return res;
    }
}
