import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
    changeDetection: ChangeDetectionStrategy.OnPush,
    selector: 'cco-app',
    templateUrl: './app.component.html'
})
export class AppComponent {}
