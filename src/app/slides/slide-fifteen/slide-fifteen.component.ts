import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'cco-slide-fifteen',
    styleUrls: ['./slide-fifteen.component.scss'],
    templateUrl: './slide-fifteen.component.html'
})
export class SlideFifteenComponent {}
