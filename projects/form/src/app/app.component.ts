import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import UserFormComponent from './feature/user-form/user-form.component';
import { FormsModule, NgForm } from '@angular/forms';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserFormComponent, FormsModule, JsonPipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  user = {
    name: '',
    lastName: '',
    dateOfBirth: '',
    password: '',
    email: '',
    userName: '',
    gender: '',
  };

  @ViewChild('form', {
    static: true,
  })
  form!: ElementRef;
  @ViewChild('ngForm', {
    static: true,
  })
  ngForm!: NgForm;

  ngOnInit() {}

  onSubmit() {
    console.log(this.user);
  }
}
