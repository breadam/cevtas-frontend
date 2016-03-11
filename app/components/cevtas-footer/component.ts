import {Component} from 'angular2/core';
import {CevtasFooterSection} from './section/component';
import {CevtasSection} from '../cevtas-section/component';

@Component({

    selector: 'cevtas-footer',
    templateUrl:'app/components/cevtas-footer/index.html',
    host:{
      'class':'ui three column grid container'
    },

    directives: [
      CevtasFooterSection,
      CevtasSection
    ],

    providers: [
    ]
})

export class CevtasFooter {

  private sections = [
    {
      title:'Scope',
      items:[
        {
          title:'Construction & Commission',
          link:'Construction'
        },
        {
          title:'Consultancy & Business Development',
          link:'Consultancy'
        }
      ]
    },
    {
      title:'Who we are',
      items:[
        {
          title:'Company Overview',
          link:'About'
        },
        {
          title:'Culture & Philosophy',
          link:'About'
        },
        {
          title:'Certificates',
          link:'About'
        }
      ]
    }
  ];

}
