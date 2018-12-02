import { Component, OnInit, Input } from '@angular/core';
import { AdjusterModel } from '../../adjuster.model';

@Component({
  selector: 'app-adjuster',
  templateUrl: './adjuster.component.html',
  styleUrls: ['./adjuster.component.css']
})
export class AdjusterComponent implements OnInit {
  @Input() adjuster: AdjusterModel;
  constructor() { }

  ngOnInit() {
  }

}
