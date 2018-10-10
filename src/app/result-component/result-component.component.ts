import { Component, OnInit, Input } from '@angular/core';
import { StapelTellenResult } from '../stapel-tellen.result';

@Component({
  selector: 'app-result-component',
  templateUrl: './result-component.component.html',
  styleUrls: ['./result-component.component.css']
})
export class ResultComponentComponent implements OnInit {

  constructor() { }
  @Input()
  result: StapelTellenResult[];

  ngOnInit() {
  }

}
