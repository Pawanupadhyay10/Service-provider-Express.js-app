import { Component, OnInit } from '@angular/core';
import { error } from 'node:console';
import { ProviderClass } from '../models/providers.class';
import { ProvidersService } from '../seervice/providers.service';

@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styles: [
  ]
})
export class ProvidersComponent implements OnInit {

  providers=ProviderClass;
  constructor(private providerService:ProvidersService) { }

  ngOnInit(): void {
    this.loadData();
  }
  loadData(){
    this.providerService.getProviders().subscribe(
      data=>{
        this.providers=data;
      },error=>{
         console.log(error);
      }
      )
  }

}
