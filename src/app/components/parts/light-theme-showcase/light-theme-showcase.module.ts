import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LightThemeShowcaseComponent } from './light-theme-showcase.component';

@NgModule({
  declarations: [
    LightThemeShowcaseComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [LightThemeShowcaseComponent],
})
export class LightThemeShowcaseModule {}
