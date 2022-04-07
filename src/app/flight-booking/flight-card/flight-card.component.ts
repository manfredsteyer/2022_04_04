import { Component, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, SimpleChanges } from '@angular/core';
import { Flight } from '../../model/flight';

// <app-flight-card></app-flight-card>

@Component({
  selector: 'app-flight-card',
  templateUrl: './flight-card.component.html',
  styleUrls: ['./flight-card.component.css']
})
export class FlightCardComponent implements OnInit, OnChanges, OnDestroy {

  @Input() item: Flight;
  @Input() selected = false;
  @Output() selectedChange = new EventEmitter<boolean>();


  constructor() { 
    console.debug('ctor', this.selected, this.item);

    // this.item = { }

  }

  ngOnInit(): void {
    console.debug('init', this.selected, this.item);
    
    setTimeout(() => this.selectedChange.emit(true), 0);
  }

  ngOnChanges(changes: SimpleChanges): void {

    console.debug('changes', this.selected, this.item);
  }

  ngOnDestroy(): void {
    console.debug('destroy', this.selected, this.item);
  }

  select(): void {
    this.selected = true;
    this.selectedChange.emit(true);
  }

  deselect(): void {
    this.selected = false;
    this.selectedChange.emit(false);
  }

}
