import { Component, OnInit, Input } from '@angular/core';
import { LienModel } from '../lien.model';
import { LienService } from '../lien.service';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-lien-list',
  templateUrl: './lien-list.component.html',
  styleUrls: ['./lien-list.component.css'],
  providers: [LienService]
})
export class LienListComponent implements OnInit {
  @Input() lien = new BehaviorSubject(LienModel);
  constructor(private lienService: LienService) { }

  ngOnInit() {
    // this.lienService.lienSubject.subscribe(
    //   (lienItem) => {
    //     this.lien = lienItem;
    //   });
  }

  onAddCoverage() {
    // this.lien.coverage[0].type =' hello world';
  }
}
