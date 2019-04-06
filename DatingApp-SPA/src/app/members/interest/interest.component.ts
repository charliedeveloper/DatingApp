import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CustomValidators } from './CustomValidators';

@Component({
  selector: 'app-interest',
  templateUrl: './interest.component.html',
  styleUrls: ['./interest.component.css']
})
export class InterestComponent implements OnInit {
  projectForm: FormGroup;

  constructor() { }

  ngOnInit() {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null, [Validators.required, CustomValidators.invalidProjectName],
        CustomValidators.asyncInvalidProjectName),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'projectStatus': new FormControl('critical'),
      'dummyName' : new FormControl()
    });
  }

  onSaveProject() {
    console.log(this.projectForm.value);
    this.projectForm.patchValue({dummyName: 'CHARLIE'});
  }

}
