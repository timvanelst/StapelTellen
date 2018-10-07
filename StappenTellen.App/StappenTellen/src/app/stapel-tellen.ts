export class StapelTellen {

    public calculate(input: string): string {
        let i = 0;
        let result = '';
        while (i < input.length) {
            let x = input.charAt(i);
            let y = (i + 1 < input.length) ? input.charAt(i + 1) : '0';
            var sum = +x + +y;
            console.log(x + ' + ' + y + ' = ' + sum );

            result += ''+sum+'';

            console.log(result);

            i += 2;
        }

        console.log('result.length: ' + result.length);
        while (result.length > 1)
        {
            console.log(result)
            result = this.calculate(result);
        }


        return result;
    }
}
