import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-rsvpform',
  templateUrl: './rsvpform.component.html',
  styleUrls: ['./rsvpform.component.css']
})
export class RsvpformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  process(form: NgForm) {
    console.log("Submitted Form: ", form.value);
  }
}
