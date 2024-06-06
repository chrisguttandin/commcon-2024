import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'cco-slide-nineteen',
    standalone: true,
    templateUrl: './slide-nineteen.component.html'
})
export class SlideNineteenComponent {}
