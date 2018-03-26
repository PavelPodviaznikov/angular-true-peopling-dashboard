import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { LogoComponent } from './components/logo/logo.component';
import { LocalStorageService } from './services/local-storage.service';
import { FormsModule } from '@angular/forms';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { CloseDialogBtnComponent } from './components/close-dialog-btn/close-dialog-btn.component';
import { ModuleWithProviders } from '@angular/core/src/metadata/ng_module';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule
  ],
  exports: [
    LogoComponent,
    SpinnerComponent,
    CloseDialogBtnComponent,
    MaterialModule,
    FormsModule
  ],
  declarations: [
    LogoComponent,
    SpinnerComponent,
    CloseDialogBtnComponent
  ],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [ LocalStorageService ],
    };
  }
}
