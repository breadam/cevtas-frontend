import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {CevtasSection} from '../../cevtas-section/component';

@Component({

    selector: 'cevtas-footer-section',
    templateUrl:'app/components/cevtas-footer/section/index.html',
    host:{
      'class':'column'
    },

    properties:['title','items'],

    directives: [
      CevtasSection,
      RouterLink
    ],

    providers: [
    ]
})

export class CevtasFooterSection { }
