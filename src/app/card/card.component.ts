import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html'
})
export class CardComponent implements OnInit {

  public text = 'View full details';

  constructor() { }

  ngOnInit() {
  }

}
