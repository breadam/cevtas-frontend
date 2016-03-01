import {Component} from 'angular2/core';
import {CevtasSection} from '../cevtas-section/component';

@Component({

    selector: 'cevtas-cta',
    templateUrl:'app/components/cevtas-cta/index.html',
    directives: [
      CevtasSection
    ]
})

export class CevtasCta { }
