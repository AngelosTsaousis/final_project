import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormControl, FormGroup, ReactiveFormsModule} from "@angular/forms";
import {HttpClient, HttpClientModule} from "@angular/common/http";


@Component({
  selector: 'app-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule,HttpClientModule],
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent {

  myFrom = new FormGroup({
    id : new FormControl('152'),
    title : new FormControl(''),
    description : new FormControl(''),
    priority : new FormControl(''),
    reporter : new FormControl(''),
    status : new FormControl(''),
    created: new FormControl(''),
    comments: new FormControl([])
  });

  constructor(private http: HttpClient) {
  }

  onSubmit() {

    console.log(JSON.stringify(this.myFrom.value))
    this.http.post("http://localhost:3000/bugs",
        {
               title: this.myFrom.value.title,
               description: this.myFrom.value.description}).subscribe();
  }

  ngOnInit() {
  }

}


