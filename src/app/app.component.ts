import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { StapelTellen } from './stapel-tellen';
import { StapelTellenResult } from './stapel-tellen.result';
import { RandomNumberGenerator } from './random-number-generator';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  input: string = '';
  // stapelTellen;
  
  // constructor(private builder: FormBuilder) { }
  constructor(private stapelTellen: StapelTellen){
  }

  ngOnInit(): void {
    this.generate();
  }

  // form = this.builder.group({
  //   input: ['']
  // });

  result: StapelTellenResult[] = [];

  public generate(){
    let random = RandomNumberGenerator.getRandomNumber();
    this.input = random.toString();
    this.clearResult();
  }

  onKey(event: any) { 
    this.clearResult();
  }

  public clearResult() {
    this.result = [];
  }

  public calculate(){
    this.result = this.calculateInternal();
  }

  private calculateInternal(): StapelTellenResult[] {
    if(this.input != ''){
      return this.stapelTellen.calculate(this.input.toString());
    }

    return [];
  }
}
