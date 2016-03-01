import {Component,HostBinding} from 'angular2/core';
import {CevtasSection} from '../cevtas-section/component';

@Component({

    selector: 'cevtas-hero',

    templateUrl:'app/components/cevtas-hero/index.html',

    properties:['image','header','subHeader','button'],

    directives: [
      CevtasSection
    ]
})

export class CevtasHero {

}
