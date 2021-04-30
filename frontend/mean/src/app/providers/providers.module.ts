import { NgModule } from '@angular/core';

import { ProvidersComponent } from './providers.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddProvidersComponent } from './add-providers/add-providers.component';
import { DeleteProvidersComponent } from './delete-providers/delete-providers.component';
import { DetailsComponent } from './details/details.component';
import { EditComponent } from './edit/edit.component'
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';


@NgModule({   
    declarations: [
        ProvidersComponent,
        AddProvidersComponent,
        DeleteProvidersComponent,
        DetailsComponent,
        EditComponent,
    ],
    imports: [
      CommonModule,RouterModule,ReactiveFormsModule,FormsModule
    ],
    exports:[
      ReactiveFormsModule,AddProvidersComponent,DeleteProvidersComponent,DeleteProvidersComponent,EditComponent,FormsModule,ProvidersComponent
    ]
})
export class ProvidersModule { }
