import { ChangeDetectionStrategy, Component } from '@angular/core';
import { PrismComponent } from '../prism/prism.component';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    imports: [PrismComponent],
    selector: 'cco-slide-eleven',
    standalone: true,
    styleUrls: ['./slide-eleven.component.scss'],
    templateUrl: './slide-eleven.component.html'
})
export class SlideElevenComponent {
    // eslint-disable-next-line unicorn/consistent-function-scoping
    public input = Array.from({ length: 900 }, (_, index) => ({ x: index, y: (Math.sin((index / 75) * Math.PI) + 1) * 50 + 39 }));

    // eslint-disable-next-line unicorn/consistent-function-scoping
    public inputWithoutFeedback = Array.from({ length: 900 }, (_, index) => ({
        x: index,
        y:
            ((Math.sin((index / 75) * Math.PI) + Math.sin((index / 150) * Math.PI) + Math.sin(Math.PI - (index / 150) * Math.PI)) / 3 + 1) *
                50 +
            39
    }));
}
