import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LogoComponent } from './components/logo/logo.component';
import { LocalStorageService } from './services/local-storage.service';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    LogoComponent,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    LogoComponent
  ],
  providers: [ LocalStorageService ]
})
export class SharedModule { }
