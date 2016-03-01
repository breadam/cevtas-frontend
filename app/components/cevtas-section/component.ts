import {Component} from 'angular2/core';

@Component({

    selector: 'cevtas-section',
    templateUrl:'app/components/cevtas-section/index.html',
    properties:['outerWidth','outerHeight','innerWidth','innerHeight','align','image'],
    styles:[
      `
        .outer{
          position:relative;
          background-repeat:no-repeat;
          background-position: center center;
          background-size:cover;
          background-attachment:fixed;
        }

        .inner{
          position:absolute;
          display:inline-block;
          top:50%;
          left:50%;
          transform:translate(-50%,-50%);
        }
      `
    ]
})

export class CevtasSection {

  outerWidth:'100%';
  outerHeight:'600px';
  innerWidth:'auto';
  innerHeight:'auto';
  align:'left';

}
