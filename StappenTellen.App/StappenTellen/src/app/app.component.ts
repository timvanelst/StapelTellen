import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { StapelTellen } from './stapel-tellen';
import { StapelTellenResult } from './stapel-tellen.result';

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
  }
  input: string = '1234';

  // form = this.builder.group({
  //   input: ['']
  // });

  result: StapelTellenResult[] = this.calculateInternal();

  public generate(){
    this.input = '123456789';
  }

  public calculate(){
    this.result = this.calculateInternal();
  }

  private calculateInternal(): StapelTellenResult[] {
    if(this.input != ''){
      // this.stapelTellen = new StapelTellen();
      return this.stapelTellen.calculate(this.input.toString());
    }

    return [];
  }
}
