import { Component } from '@angular/core';
import { FormGroup, FormControl } from "@angular/forms";
import { StapelTellen } from './stapel-tellen';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  stapelTellen;

  // constructor(private builder: FormBuilder) { }
  constructor(){
    this.stapelTellen = new StapelTellen();
  }
  input: string = '123';

  // form = this.builder.group({
  //   input: ['']
  // });

  result: string = this.calculateInternal();

  public generate(){
    this.input = '123456789';
  }

  public calculate(){
    this.result = this.calculateInternal();
  }

  private calculateInternal(): string {
    if(this.input != ''){
      this.stapelTellen = new StapelTellen();
      return this.stapelTellen.calculate(this.input);
    }

    return '';
  }
}
