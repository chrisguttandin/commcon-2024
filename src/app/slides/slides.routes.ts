import { Routes } from '@angular/router';
import { SlideTwentySixComponent } from './slide-twenty-six/slide-twenty-six.component';
import { SlideTwentyFiveComponent } from './slide-twenty-five/slide-twenty-five.component';
import { SlideTwentyFourComponent } from './slide-twenty-four/slide-twenty-four.component';
import { SlideTwentyThreeComponent } from './slide-twenty-three/slide-twenty-three.component';
import { SlideTwentyTwoComponent } from './slide-twenty-two/slide-twenty-two.component';
import { SlideTwentyOneComponent } from './slide-twenty-one/slide-twenty-one.component';
import { SlideTwentyComponent } from './slide-twenty/slide-twenty.component';
import { SlideNineteenComponent } from './slide-nineteen/slide-nineteen.component';
import { SlideEighteenComponent } from './slide-eighteen/slide-eighteen.component';
import { SlideSeventeenComponent } from './slide-seventeen/slide-seventeen.component';
import { SlideSixteenComponent } from './slide-sixteen/slide-sixteen.component';
import { SlideFifteenComponent } from './slide-fifteen/slide-fifteen.component';
import { SlideFourteenComponent } from './slide-fourteen/slide-fourteen.component';
import { SlideThirteenComponent } from './slide-thirteen/slide-thirteen.component';
import { SlideTwelveComponent } from './slide-twelve/slide-twelve.component';
import { SlideElevenComponent } from './slide-eleven/slide-eleven.component';
import { SlideTenComponent } from './slide-ten/slide-ten.component';
import { SlideNineComponent } from './slide-nine/slide-nine.component';
import { SlideEightComponent } from './slide-eight/slide-eight.component';
import { SlideSevenComponent } from './slide-seven/slide-seven.component';
import { SlideSixComponent } from './slide-six/slide-six.component';
import { SlideOneComponent } from './slide-one/slide-one.component';
import { SlideTwoComponent } from './slide-two/slide-two.component';
import { SlideThreeComponent } from './slide-three/slide-three.component';
import { SlideFourComponent } from './slide-four/slide-four.component';
import { SlideFiveComponent } from './slide-five/slide-five.component';
import { SlidesComponent } from './slides.component';

export const routes: Routes = [
    {
        children: [
            {
                component: SlideOneComponent,
                path: '1'
            },
            {
                component: SlideTwoComponent,
                path: '2'
            },
            {
                component: SlideThreeComponent,
                path: '3'
            },
            {
                component: SlideFourComponent,
                path: '4'
            },
            {
                component: SlideFiveComponent,
                path: '5'
            },
            {
                component: SlideSixComponent,
                path: '6'
            },
            {
                component: SlideSevenComponent,
                path: '7'
            },
            {
                component: SlideEightComponent,
                path: '8'
            },
            {
                component: SlideNineComponent,
                path: '9'
            },
            {
                component: SlideTenComponent,
                path: '10'
            },
            {
                component: SlideElevenComponent,
                path: '11'
            },
            {
                component: SlideTwelveComponent,
                path: '12'
            },
            {
                component: SlideThirteenComponent,
                path: '13'
            },
            {
                component: SlideFourteenComponent,
                path: '14'
            },
            {
                component: SlideFifteenComponent,
                path: '15'
            },
            {
                component: SlideSixteenComponent,
                path: '16'
            },
            {
                component: SlideSeventeenComponent,
                path: '17'
            },
            {
                component: SlideEighteenComponent,
                path: '18'
            },
            {
                component: SlideNineteenComponent,
                path: '19'
            },
            {
                component: SlideTwentyComponent,
                path: '20'
            },
            {
                component: SlideTwentyOneComponent,
                path: '21'
            },
            {
                component: SlideTwentyTwoComponent,
                path: '22'
            },
            {
                component: SlideTwentyThreeComponent,
                path: '23'
            },
            {
                component: SlideTwentyFourComponent,
                path: '24'
            },
            {
                component: SlideTwentyFiveComponent,
                path: '25'
            },
            {
                component: SlideTwentySixComponent,
                path: '26'
            },
            {
                path: '**',
                redirectTo: '1'
            }
        ],
        component: SlidesComponent,
        path: ''
    }
];
