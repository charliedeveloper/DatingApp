import { Component, OnInit, Input } from "@angular/core";
import { TestModel } from "../_models/photo";

@Component({
  selector: "app-lists",
  templateUrl: "./lists.component.html",
  styleUrls: ["./lists.component.css"]
})
export class ListsComponent implements OnInit {
  @Input() showEntry: TestModel;
  constructor() {}

  ngOnInit() {
  }
}
