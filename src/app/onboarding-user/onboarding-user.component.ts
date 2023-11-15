import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { dynamicText, DynamicTextModel } from './onboarding-tao.model';


@Component({
  selector: 'app-onboarding-user',
  templateUrl: './onboarding-user.component.html',
  styleUrls: ['./onboarding-user.component.scss']
})
export class OnboardingUserComponent {
  staticTextObj: DynamicTextModel = dynamicText;
  firstFormGroup = this.formBuilder.group({
    fullName: ['', Validators.required],
    displayName: ['', Validators.required]
  });
  secondFormGroup = this.formBuilder.group({
    workspaceName: ['', Validators.required],
    workspaceUrl: ['']
  });

  constructor(private formBuilder: FormBuilder) { }

  get userData() { return this.firstFormGroup.controls; }
  get workspaceData() { return this.secondFormGroup.controls; }


  onChooseWorkSpace(item: any){
    item.selected = !item.selected;
  }
}
