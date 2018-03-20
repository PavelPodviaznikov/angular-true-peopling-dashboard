import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LogoComponent } from './components/logo/logo.component';
import { LocalStorageService } from './services/local-storage.service';

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
  ],
  providers: [ LocalStorageService ]
})
export class SharedModule { }
