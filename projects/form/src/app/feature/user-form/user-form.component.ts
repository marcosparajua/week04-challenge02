import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [FormsModule, JsonPipe],
  template: ``,
  styles: ``,
})
export default class UserFormComponent implements OnInit {
  @ViewChild('form', {
    static: true,
  })
  form!: ElementRef;
  @ViewChild('ngForm', {
    static: true,
  })
  ngForm!: NgForm;

  ngOnInit() {
    console.dir(this.form.nativeElement);
    console.dir(this.ngForm);
  }

  onSubmit(ev: Event) {
    console.log(ev);
    console.log(this.ngForm.value);
  }
}
