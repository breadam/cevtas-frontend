System.register(['angular2/core', 'angular2/router', '../cevtas-home/component', '../cevtas-about/component', '../cevtas-portfolio/component', '../cevtas-services/component', '../cevtas-construction/component', '../cevtas-consultancy/component', '../cevtas-contact/component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, router_1, component_1, component_2, component_3, component_4, component_5, component_6, component_7;
    var CevtasApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (router_1_1) {
                router_1 = router_1_1;
            },
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (component_2_1) {
                component_2 = component_2_1;
            },
            function (component_3_1) {
                component_3 = component_3_1;
            },
            function (component_4_1) {
                component_4 = component_4_1;
            },
            function (component_5_1) {
                component_5 = component_5_1;
            },
            function (component_6_1) {
                component_6 = component_6_1;
            },
            function (component_7_1) {
                component_7 = component_7_1;
            }],
        execute: function() {
            CevtasApp = (function () {
                function CevtasApp() {
                }
                CevtasApp.prototype.ngOnInit = function () {
                    jQuery('.ui.dropdown').dropdown();
                };
                CevtasApp = __decorate([
                    core_1.Component({
                        selector: 'cevtas-app',
                        templateUrl: 'app/components/cevtas-app/index.html',
                        directives: [
                            router_1.ROUTER_DIRECTIVES,
                        ],
                        providers: [
                            router_1.ROUTER_PROVIDERS
                        ]
                    }),
                    router_1.RouteConfig([
                        {
                            path: '/',
                            name: 'Home',
                            component: component_1.CevtasHome,
                            useAsDefault: true
                        },
                        {
                            path: '/services',
                            name: 'Services',
                            component: component_4.CevtasServices,
                        },
                        {
                            path: '/about',
                            name: 'About',
                            component: component_2.CevtasAbout
                        },
                        {
                            path: '/portfolio',
                            name: 'Portfolio',
                            component: component_3.CevtasPortfolio
                        },
                        {
                            path: '/contact',
                            name: 'Contact',
                            component: component_7.CevtasContact
                        },
                        {
                            path: '/construction',
                            name: 'Construction',
                            component: component_5.CevtasConstruction
                        },
                        {
                            path: '/consultancy',
                            name: 'Consultancy',
                            component: component_6.CevtasConsultancy
                        }
                    ]), 
                    __metadata('design:paramtypes', [])
                ], CevtasApp);
                return CevtasApp;
            })();
            exports_1("CevtasApp", CevtasApp);
        }
    }
});
//# sourceMappingURL=component.js.map