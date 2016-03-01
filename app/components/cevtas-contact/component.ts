import {Component} from 'angular2/core';
import {CevtasHero} from '../cevtas-hero/component';
import {CevtasSection} from '../cevtas-section/component';
import {CevtasTestimonials} from '../cevtas-testimonials/component';
import {CevtasCta} from '../cevtas-cta/component';
import {CevtasPartners} from '../cevtas-partners/component';
import {CevtasFooter} from '../cevtas-footer/component';

@Component({

    selector: 'cevtas-contact',
    templateUrl:'app/components/cevtas-contact/index.html',
    host:{
      'class':'one column row'
    },

    directives: [
      CevtasHero,
      CevtasSection,
      CevtasTestimonials,
      CevtasCta,
      CevtasPartners,
      CevtasFooter
    ],

    providers: [
    ]
})

export class CevtasContact { }
