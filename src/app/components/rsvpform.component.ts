import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RSVP } from '../models';

@Component({
  selector: 'app-rsvpform',
  templateUrl: './rsvpform.component.html',
  styleUrls: ['./rsvpform.component.css']
})
export class RsvpformComponent implements OnInit {

  shareable = false;
  startDate = new Date(2019, 10, 1);

  constructor() { }

  ngOnInit() {
    this.shareable = !! navigator['share'];
  }

  process(form: NgForm) {
    const values = form.value;
    console.log("Submitted Form: ", values);

    //Parse form values into RSVP object
    const rsvp: RSVP = {
      name: values.name,
      guest: values.guest,
      phone: values.phone,
      date: (new Date(values.date)).getTime(),
      vegetarian: values.vegetarian == "yes",
      allergies: [],
      comments: values.comments
    };

    console.log(rsvp);
  }

  shareTheJoy() {
    console.log("Share the Joy!")
  }
}
