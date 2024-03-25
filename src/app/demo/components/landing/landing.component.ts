import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LayoutService } from 'src/app/layout/service/app.layout.service';

@Component({
    selector: 'app-landing',
    templateUrl: './landing.component.html'
})
export class LandingComponent {
    talents = [
        {heading: 'Resume Review', description: 'Refine your resume for maximum impact and effectiveness in the job market.', duration: '45 mins', cost: '$0'},
        {heading: 'Mock Interview', description: 'Sharpen your interview skills with practice sessions and constructive feedback.', duration: '45 mins', cost: '$0'},
        {heading: 'SOP Review', description: 'Refine your Statement of Purpose (SOP) to stand out with precision and clarity.', duration: '45 mins', cost: '$0'},
        {heading: 'Career Guidance', description: 'Navigate your professional journey with personalized advice and strategic planning.', duration: '45 mins', cost: '$0'},
        {heading: 'Design Mentorship', description: 'Refine your design skills with personalized mentorship tailored to your goals.', duration: '45 mins', cost: '$0'},
        {heading: 'Coding Consultancy', description: 'Navigate coding challenges with personalized guidance tailored to you.', duration: '45 mins', cost: '$0'}
        
    ];
    visible = false;
    contribute = false;
    constructor(public layoutService: LayoutService, public router: Router) { }
    

    navToScheduling() {
        this.router.navigate([this.router.url, 'schedule'])
    }
}
