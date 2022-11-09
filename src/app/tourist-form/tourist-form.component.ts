import { Component, OnInit } from '@angular/core';
import { Tourist } from '../tourist';
import { TouristService } from '../tourist.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-tourist-form',
  templateUrl: './tourist-form.component.html',
  styleUrls: ['./tourist-form.component.css']
})
export class TouristFormComponent implements OnInit {

  touristform : FormGroup | any;
  tourist: Tourist=new Tourist();
  message:any

 
  constructor(private service:TouristService) { }

  ngOnInit(): void {
    this.touristform = new FormGroup({
    'id': new FormControl(null,[Validators.required,Validators.max(9999),Validators.min(1)]),
    'fname' : new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]*$'),Validators.maxLength(15)]),
    'lname' : new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z]*$'),Validators.maxLength(12)]),
    'gender' : new FormControl(null,Validators.required),
    'age' : new FormControl(null,[Validators.required,Validators.max(90),Validators.min(1)]),
    'fromplace' : new FormControl(null,[Validators.required,Validators.pattern('^[a-zA-Z ]*$')]),
    'noofdays' : new FormControl(null,[Validators.required,Validators.min(1)]),
    });
  }
 
  userLogin(){
    console.log(this.tourist)
  }
  public registerNow(){
    let resp=this.service.doRegistration(this.tourist);
    resp.subscribe((data)=>this.message=data);
    Swal.fire("Thank You....",'You Submitted Successfully','success');
  }
}
