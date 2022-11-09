import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  tourist: Tourist=new Tourist();
  tourists:any;
  constructor(private service:TouristService) { }

  ngOnInit(): void {
    let resp=this.service.getUsers();
    resp.subscribe((data)=>this.tourists=data);
  }

}
