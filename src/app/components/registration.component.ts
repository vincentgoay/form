import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm, NgModel } from '@angular/forms';
import { MaterialModule } from '..//material.module'

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  //Element binding technique similar to @IBOutlet
  @ViewChild('firstName', { static: false })
  firstName: NgModel;

  constructor() { }

  ngOnInit() {
  }

  processForm(form: NgForm) {
    console.log("processForm: ", form.value);
    form.reset();
  }
}
