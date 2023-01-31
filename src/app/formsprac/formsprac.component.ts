import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'app-formsprac',
  templateUrl: './formsprac.component.html',
  styleUrls: ['./formsprac.component.css']
})
export class FormspracComponent implements OnInit{
  // show(val:any){
  //   console.log(val)
  // }

  // submit(value:any){
  //   console.log(value)
  // }

  // accept:boolean=false

  constructor( private http:HttpClient){}

  option:any
  result:any
  error:any

  login= new FormGroup({
    username : new FormControl('',[Validators.required,Validators.minLength(4)]),
    email: new FormControl('',[Validators.required,Validators.email]),
    gender:new FormControl(''),
    accepted:new FormControl('',[]),
    password : new FormControl('',Validators.required),
  });

  submit(id:any){
    console.log(id.value)
    // console.log(this.login)
    // console.log(this.login.value)
    console.log(this.login.controls?.['username'].value)
  }

  changeFun(){
    this.option=["ok","notOk","accept"]
  }

  

  callApi(){
    this.http.get('http://68.178.164.213:8080/HRMS/hrms/common/getReportingManager?userId=155').subscribe((data:any)=>{
      if(data.status == true){
        this.result = data
      }else{
        this.error = data
      }
    })
  }


  displayedColumns: string[] = ['id', 'name', 'username', 'email', 'phone', 'website'];
  dataSource:any = new MatTableDataSource<any>

  ngOnInit(){
    this.fetchApi()
  }

   fetchApi(){
      this.http.get('https://jsonplaceholder.typicode.com/users').subscribe((data:any)=>{
      this.dataSource = data
      console.log(this.dataSource)
    })
  }



  

}
