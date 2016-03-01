import {Component,OnInit} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES,ROUTER_PROVIDERS} from 'angular2/router';
import {CevtasHome} from '../cevtas-home/component';
import {CevtasAbout} from '../cevtas-about/component';
import {CevtasPortfolio} from '../cevtas-portfolio/component';
import {CevtasServices} from '../cevtas-services/component';
import {CevtasContact} from '../cevtas-contact/component';

declare var jQuery:any;

@Component({

    selector: 'cevtas-app',
    templateUrl:'app/components/cevtas-app/index.html',
    directives: [
      ROUTER_DIRECTIVES,
    ],

    providers: [
      ROUTER_PROVIDERS
    ]
})

@RouteConfig([
  {
    path: '/',
    name: 'Home',
    component: CevtasHome,
    useAsDefault:true
  },
  {
    path: '/services',
    name: 'Services',
    component: CevtasServices,
  },
  {
    path: '/about',
    name: 'About',
    component: CevtasAbout
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
    component: CevtasPortfolio
  },
  {
    path: '/contact',
    name: 'Contact',
    component: CevtasContact
  }
])

export class CevtasApp implements OnInit{

  ngOnInit() {
    jQuery('.ui.dropdown').dropdown();
  }
}
