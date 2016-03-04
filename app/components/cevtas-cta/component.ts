import {Component} from 'angular2/core';
import {RouterLink} from 'angular2/router';

import {CevtasSection} from '../cevtas-section/component';

@Component({

    selector: 'cevtas-cta',
    templateUrl:'app/components/cevtas-cta/index.html',
    directives: [
      CevtasSection,
      RouterLink
    ]
})

export class CevtasCta { }
