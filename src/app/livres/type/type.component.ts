import { Component, OnInit,Input } from '@angular/core';
import {TypeColorDirective} from '../type-color.directive';

@Component({
  selector: 'type',
  templateUrl: './type.component.html',
  styleUrls: ['./type.component.css'],
  inputs : ['url','title','description']
})
export class TypeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
