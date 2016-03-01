import {Component} from 'angular2/core';
import {CevtasSection} from '../cevtas-section/component';

@Component({

    selector: 'cevtas-partners',
    templateUrl:'app/components/cevtas-partners/index.html',
    directives: [
      CevtasSection
    ]
})

export class CevtasPartners { }
