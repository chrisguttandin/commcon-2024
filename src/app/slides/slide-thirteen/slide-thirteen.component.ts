import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'cco-slide-thirteen',
    standalone: true,
    styleUrls: ['./slide-thirteen.component.scss'],
    templateUrl: './slide-thirteen.component.html'
})
export class SlideThirteenComponent {}
