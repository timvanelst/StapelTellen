import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { StapelTellen } from './stapel-tellen';
import { StapelTellenResult } from './stapel-tellen.result';
import { Observable, Subject, of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  // stapelTellen;

  // constructor(private builder: FormBuilder) { }
  constructor(private stapelTellen: StapelTellen){
    // this.stapelTellen = new StapelTellen();
    this.activate();
  }
  input: string = '1234';

  // form = this.builder.group({
  //   input: ['']
  // });

  result: StapelTellenResult; // = this.calculateInternal();

  public generate(){
    this.input = '123456789';
  }

  public calculate(){
    if(this.input != ''){
      // this.stapelTellen = new StapelTellen();
      this.stapelTellen.calculate(this.input).subscribe(res => {
        console.log(res);
        this.result = res;
      });
    }
  }
  

  // private calculateInternal(): StapelTellenResult {
  //   if(this.input != ''){
  //     // this.stapelTellen = new StapelTellen();
  //     this.stapelTellen.calculate(this.input).subscribe(res => {
  //       console.log(res);
  //       return res;
  //     });
  //   }

    // return '';
  // }

  value: string = '';

  public activate(){
    console.log('activated');
    this.obs().subscribe(x => {
      console.log(x);
      this.value = x;
    });
    console.log('initialize')
    return this.value = 'init';
  }

  res = new Subject<string>();
  private obs(): Observable<string>{
    this.getValue().subscribe(v => {
      console.log(v);
      this.value = v;
      this.res.next(v);
      // this.res.complete();
    })

    this.res.complete();
    return this.res.asObservable();
  }

  private getValue(): Observable<string> {
    console.log('getValue()')
    return of('1');
  }

}
