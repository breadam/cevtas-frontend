import {Component} from 'angular2/core';
import {CevtasFooterSection} from './section/component';
import {CevtasSection} from '../cevtas-section/component';

@Component({

    selector: 'cevtas-footer',
    templateUrl:'app/components/cevtas-footer/index.html',
    host:{
      'class':'ui four column grid container'
    },

    directives: [
      CevtasFooterSection,
      CevtasSection
    ],

    providers: [
    ]
})

export class CevtasFooter { }
