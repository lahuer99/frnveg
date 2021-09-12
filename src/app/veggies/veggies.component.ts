import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stuff } from '../stuff';

@Component({
  selector: 'app-veggies',
  templateUrl: './veggies.component.html',
  styleUrls: ['./veggies.component.css']
})
export class VeggiesComponent implements OnInit {
  @Input()  selected:Stuff[]=[];
  @Output() selectedChange = new EventEmitter<Stuff>();

  constructor() { }

  ngOnInit(): void {
  }

  addBack(retv:Stuff){
    let ind = this.selected.indexOf(retv);
    this.selected.splice(ind,1);
    this.selectedChange.emit(retv)
  }

}
