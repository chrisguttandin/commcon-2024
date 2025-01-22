import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'cco-slide-twenty-four',
    styleUrls: ['./slide-twenty-four.component.scss'],
    templateUrl: './slide-twenty-four.component.html'
})
export class SlideTwentyFourComponent {}
