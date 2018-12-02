import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef  } from '@angular/core';
import { CoverrageModel } from '../coverage.model';
import { LienService } from '../lien.service';
import { AdjusterModel } from '../adjuster.model';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-coverage',
  templateUrl: './coverage.component.html',
  styleUrls: ['./coverage.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoverageComponent implements OnInit {
  @Input() coverage: Observable<CoverrageModel>;
  _coverage: CoverrageModel;

  constructor(private lienService: LienService, private changeDetector: ChangeDetectorRef) { }

  ngOnInit() {
    this.coverage.subscribe((value) => {
      this._coverage = value;
      this.changeDetector.markForCheck();
    });
  }

  onAddAdjuster(mycoverage: CoverrageModel) {
    console.log('THE ADJUSTER INFO BEFORE: ', mycoverage);
    this._coverage.adjuster.idDto = 1;
    this._coverage.adjuster.name = 'Toby Boy';
    this._coverage.adjuster.adjusterId = 5555;
    console.log('THE ADJUSTER INFO AFTER: ', this.coverage);
  }

  onShowModel() {
    console.log(this.coverage);
  }
}
