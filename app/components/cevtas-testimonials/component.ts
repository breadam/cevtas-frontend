import {Component} from 'angular2/core';
import {CevtasSection} from '../cevtas-section/component';

@Component({

    selector: 'cevtas-testimonials',
    templateUrl:'app/components/cevtas-testimonials/index.html',
    properties:['quote','from'],
    directives: [
      CevtasSection
    ]
})

export class CevtasTestimonials { }
