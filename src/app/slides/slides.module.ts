import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlidesRoutingModule } from './slides-routing.module';
import { SlidesComponent } from './slides.component';

@NgModule({
    imports: [CommonModule, SlideOneComponent, SlidesComponent, SlidesRoutingModule]
})
export class SlidesModule {}
