import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { AdminContentRoutingModule } from './content-routing';

import { ContentComponent } from './content.component';
import { ButtonsModule } from '~/app/pages/admin/modules/buttons/buttons.module';
import { AdminTableModule } from '~/app/pages/admin/modules/admin-table/admin-table.module';

@NgModule({
  declarations: [
    ContentComponent
  ],
  imports: [
    CommonModule,
    AdminContentRoutingModule,
    ReactiveFormsModule,
    ButtonsModule,
    AdminTableModule
  ]
})
export class ContentModule { }
