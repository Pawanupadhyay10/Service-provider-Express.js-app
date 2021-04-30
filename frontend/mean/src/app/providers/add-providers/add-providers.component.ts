import { Component, OnInit } from '@angular/core';
import { FormGroup,FormControl, Validators} from '@angular/forms';
import { ProviderClass } from 'src/app/models/providers.class';
import { providers } from 'src/app/models/providers.data';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styles: [
  ]
})
export class AddProvidersComponent implements OnInit {
  submitted=false;
  provider=new ProviderClass();
  providersform:FormGroup;

  constructor(){} 

  ngOnInit(): void {
    this.providersform=new FormGroup({
      name:new FormControl('Pawan',[Validators.required,Validators.maxLength(20)]),
      age: new FormControl('22'),
      sport: new FormControl('badmintan'),
    });
  }
  handlesubmit(){
     let newId:number;
     while(true){
       newId=Math.floor(Math.random()*10000)+99999;
       if(providers.findIndex(el=>el.id == newId)== -1){
         break;
       }
      }
       let p = this.providersform.value;
       this.provider.id=newId;
       this.provider.name = p.name;
       this.provider.age= p.age;
       this.provider.hobby={
         sport:p.sport
         };
       providers.push(this.provider);
       this.submitted=true;
  }
  get f(){return this.providersform.controls;}
}
