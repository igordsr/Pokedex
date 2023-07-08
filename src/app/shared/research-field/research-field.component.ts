import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { debounceTime, Subject } from 'rxjs';

@Component({
  selector: 'app-research-field',
  templateUrl: './research-field.component.html',
  styleUrls: ['./research-field.component.css']
})
export class ResearchFieldComponent implements OnInit, OnDestroy{
  public debounce: Subject<string> = new Subject();
  @Output() public onTyping:EventEmitter<string> = new EventEmitter();
  @Input() public value = '';

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
  }

  ngOnInit() {
    this.debounce.pipe(debounceTime(300)).subscribe(filter => this.onTyping.emit(filter))
  }
}
