import { StapelTellenResult } from "./stapel-tellen.result";
import { Observable, Subject } from "rxjs";
import { Injectable } from "@angular/core";

@Injectable()
export class StapelTellen {

    public calculate(input: string): Observable<StapelTellenResult> {
        let subject = new Subject<StapelTellenResult>();
        console.log(subject);
        this.calculateTemp(input)
            .subscribe(res => {
                subject.next(res);
                console.log(subject);
                let result = res.result;
            });
        
        // console.log('result.length: ' + result.length);
        let iteration = 1;
        // while (result.length > 1 || iteration > 10)
        while (iteration > 10)
        {
            // console.log(result)
            this.calculateTemp(input)
                .subscribe(temp => {
                    subject.next(temp);
                    console.log(subject);
                    // result = temp.result;
                    // res.subResult = temp;

                });
            // console.log(temp);
            // temp.steps.forEach(s => res.steps.push(s));
            // res.result = temp.result;
            iteration++;
        }

        subject.complete();

        // return result;
        // res.result = result;
        // console.log('result: ' + res.result);
        console.log(subject);
        return subject;
    }

    private calculateTemp(input: string): Observable<StapelTellenResult> {
        let subject = new Subject<StapelTellenResult>();

        // console.log('input: ' + input);
        let i = 0;
        let res = new StapelTellenResult();
        res.steps = [];
        let result = '';
        while (i < input.length) {
            let x = input.charAt(i);
            let y = (i + 1 < input.length) ? input.charAt(i + 1) : '0';
            var sum = +x + +y;
            const sumDescription = x + ' + ' + y + ' = ' + sum;
            // console.log(sumDescription);
            res.steps.push(sumDescription);
            result += '' + sum + '';
            // console.log(result);
            i += 2;
        }
        res.result = result;
        console.log(res);
        subject.next(res);
        subject.complete();
        return subject;
    }
}
