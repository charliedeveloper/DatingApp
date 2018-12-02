import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { MemberEditComponent } from '../members/member-edit/member-edit.component';
import { AlertifyService } from '../_services/alertify.service';

@Injectable()
export class PreventUnsavedChanges  implements CanDeactivate<MemberEditComponent> {
  constructor(private alertify: AlertifyService) {}
  canDeactivate(component: MemberEditComponent ): boolean {
    if (component.editForm.dirty) {
      return confirm('Are you sure you want to continue?\n Any unsaved change will be lost');
    }

    return true;
  }
}
