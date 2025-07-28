import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'cco-slide-nine',
    styleUrls: ['./slide-nine.component.scss'],
    templateUrl: './slide-nine.component.html'
})
export class SlideNineComponent {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    public input = Array.from({ length: 900 }, (_, index) => ({ x: index, y: (Math.sin((index / 75) * Math.PI) + 1) * 50 + 39 }));

    // eslint-disable-next-line unicorn/consistent-function-scoping
    public inputWithFeedback = Array.from({ length: 900 }, (_, index) => ({
        x: index,
        y: ((Math.sin((index / 75) * Math.PI) + Math.sin((index / 150) * Math.PI)) / 2 + 1) * 50 + 39
    }));

    // eslint-disable-next-line unicorn/consistent-function-scoping
    public output = Array.from({ length: 900 }, (_, index) => ({ x: index, y: (Math.sin((-index / 150) * Math.PI) + 1) * 50 + 239 }));
}
