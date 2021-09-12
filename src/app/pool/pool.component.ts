import { Component, OnInit } from '@angular/core';
import { STUFF } from '../mock-stuff';
import { Stuff } from '../stuff';

@Component({
  selector: 'app-pool',
  templateUrl: './pool.component.html',
  styleUrls: ['./pool.component.css']
})
export class PoolComponent implements OnInit {
  poollist:Stuff[]=STUFF;
  fruits:Stuff[]=[];
  veggies:Stuff[]=[];

  constructor() { }

  ngOnInit(): void {
  }

  leftClick(item:Stuff){
    this.fruits.push(item);
    let ind = this.poollist.indexOf(item);
    this.poollist.splice(ind,1);
    console.log(this.fruits)
  }

  rightClick(item:Stuff){
    this.veggies.push(item);
    let ind = this.poollist.indexOf(item);
    this.poollist.splice(ind,1);
    console.log(this.veggies)
  }

  updateP(retp:Stuff){
    this.poollist.push(retp)
  }

}
