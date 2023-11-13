import {Component, OnInit} from '@angular/core';
import { CommonModule } from '@angular/common';
import BugsJSON from '../../../db.json';
import {HttpClient, HttpClientModule} from "@angular/common/http";

export interface Bug {
  id:string,
  title:string,
  description:string,
  priority:number,
  reporter:string,
  status:string,
  created:string,
  comments:{
    reporter:string,
    description:string
  }[];
}
@Component({
  selector: 'app-data-table',
  standalone: true,
  imports: [CommonModule,HttpClientModule],
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})


export class DataTableComponent implements OnInit{
  public BugsTABLE: any;
  constructor(private http: HttpClient) {

  }

  ngOnInit() {
   this.http.get("http://localhost:3000/bugs").subscribe((response) =>{
      this.BugsTABLE = response;
    });

  }






}
