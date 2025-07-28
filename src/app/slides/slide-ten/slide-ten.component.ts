import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'cco-slide-ten',
    styleUrls: ['./slide-ten.component.scss'],
    templateUrl: './slide-ten.component.html'
})
export class SlideTenComponent {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    public inputWithoutFeedback = Array.from({ length: 900 }, (_, index) => ({
        x: index,
        y: (Math.sin((index / 75) * Math.PI) + Math.sin((index / 150) * Math.PI) + Math.sin((-index / 150) * Math.PI) + 1) * 50 + 39
    }));
}
