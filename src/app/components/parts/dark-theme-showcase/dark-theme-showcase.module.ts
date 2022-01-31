import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DarkThemeShowcaseComponent } from './dark-theme-showcase.component';

@NgModule({
  declarations: [
    DarkThemeShowcaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [DarkThemeShowcaseComponent],
})
export class DarkThemeShowcaseModule {}
