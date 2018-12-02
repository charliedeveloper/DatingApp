import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { AuthService } from "../_services/auth.service";
import { TestModel } from "../_models/photo";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent implements OnInit {
  showEntry = true;
  model: any = {};

  myChildModel: Array<TestModel> = [];
  @Output() cancelRegister = new EventEmitter();

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  register() {
    this.authService.register(this.model).subscribe(
      () => {
        console.log("Registration Successful!");
      },
      error => {
        console.log(error);
      }
    );
  }

  cancel() {
    this.cancelRegister.emit(false);
    console.log("Cancelled");
  }

  addNew() {
    let dummy = new TestModel();
    dummy.id = 5;
    dummy.firstname = 'Charlie';
    this.myChildModel.push(dummy);
    console.log(this.myChildModel);
    // this.showEntry = true;
    // console.log(this.showEntry);
  }

  onShowModel() {
    console.log(this.myChildModel);
  }
}
