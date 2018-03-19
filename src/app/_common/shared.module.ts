import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LogoComponent } from './_components/logo/logo.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule
  ],
  exports: [
    MaterialModule,
    LogoComponent
  ],
  declarations: [ 
    LogoComponent
   ]
})
export class SharedModule { }
