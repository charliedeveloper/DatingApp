import { Injectable } from '@angular/core';
import { LienModel } from './lien.model';
import { CoverrageModel } from './coverage.model';
import { AdjusterModel } from './adjuster.model';
import { HttpClient } from '@angular/common/http';
import { Observable, Subscription, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LienService {
  lienModel: LienModel;
  url = './assets/lien.json';
  lienSubject: Subject<LienModel>;

  constructor(private http: HttpClient) { }

  geLien(): Observable<LienModel[]> {
    return this.http.get<LienModel[]>(this.url);
  }

  onAddNewCoverage() {
    const coverage = new CoverrageModel();
    coverage.idDto = this.getLastCoverage();
    coverage.coveragId = 0;
    coverage.type = 'MP';
    coverage.status = 'Open';
    this.lienModel.coverage.push(coverage);
  }

  onAddNewAdjuster(index: number) {
    const adjuster = new AdjusterModel();
    adjuster.adjusterId = 0;
    adjuster.name = 'Charlie';
    this.lienModel.coverage[index].adjuster = adjuster;
  }

  notifySubscriber() {
    this.lienSubject.next(this.lienModel);
  }

  private getLastCoverage(): number {
    return this.lienModel.coverage.length;
  }
}
