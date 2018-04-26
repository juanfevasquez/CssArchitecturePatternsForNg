import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cta',
  templateUrl: './cta.component.html'
})
export class CtaComponent implements OnInit {
  @Input() text:string;

  constructor() { }

  ngOnInit() {
  }

}
