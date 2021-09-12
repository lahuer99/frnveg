import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Stuff } from '../stuff';

@Component({
  selector: 'app-fruits',
  templateUrl: './fruits.component.html',
  styleUrls: ['./fruits.component.css']
})
export class FruitsComponent implements OnInit {
  @Input()  selected:Stuff[]=[];
  @Output() selectedChange = new EventEmitter<Stuff>();
  
  constructor() { }

  ngOnInit(): void {
  }

  addBack(retf:Stuff){
    let ind = this.selected.indexOf(retf);
    this.selected.splice(ind,1);
    this.selectedChange.emit(retf)
  }

}
