import { Component, OnInit } from "@angular/core";
import { LienModel } from "../lien.model";
import { LienService } from "../lien.service";

@Component({
  selector: "app-case",
  templateUrl: "./case.component.html",
  styleUrls: ["./case.component.css"]
})
export class CaseComponent implements OnInit {
  liens: Array<LienModel> = [];
  constructor(private lienService: LienService) {}

  ngOnInit() {}

  onGetLien() {
    this.lienService.geLien().subscribe(res => {
      this.liens = res;
      console.log(this.liens);
    });
  }
}
