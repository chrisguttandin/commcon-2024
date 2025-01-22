import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'cco-slide-twenty-five',
    templateUrl: './slide-twenty-five.component.html'
})
export class SlideTwentyFiveComponent {}
