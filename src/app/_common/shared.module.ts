import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LogoComponent } from './components/logo/logo.component';
import { LocalStorageService } from './services/local-storage.service';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    LogoComponent,
    SpinnerComponent,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    LogoComponent,
    SpinnerComponent
  ],
  providers: [ LocalStorageService ]
})
export class SharedModule { }
