import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LandingComponent } from './landing.component';
import { CalendarSchedulingComponent } from './components/calendar-scheduling/calendar-scheduling.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: LandingComponent },
        { path: 'schedule', component: CalendarSchedulingComponent }
    ])],
    exports: [RouterModule]
})
export class LandingRoutingModule { }
