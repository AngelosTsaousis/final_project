import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DataTableComponent} from "./data-table/data-table.component";
import {FormComponent} from "./form/form.component";


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule,DataTableComponent,FormComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent {

}




