import {Component} from 'angular2/core';
import {CevtasSection} from '../../cevtas-section/component';

@Component({

    selector: 'cevtas-footer-section',
    templateUrl:'app/components/cevtas-footer/section/index.html',
    host:{
      'class':'column'
    },

    properties:['title','items'],

    directives: [
      CevtasSection
    ],

    providers: [
    ]
})

export class CevtasFooterSection { }
