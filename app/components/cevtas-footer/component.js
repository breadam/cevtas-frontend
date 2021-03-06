System.register(['angular2/core', './section/component', '../cevtas-section/component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, component_1, component_2;
    var CevtasFooter;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (component_1_1) {
                component_1 = component_1_1;
            },
            function (component_2_1) {
                component_2 = component_2_1;
            }],
        execute: function() {
            CevtasFooter = (function () {
                function CevtasFooter() {
                    this.sections = [
                        {
                            title: 'Scope',
                            items: [
                                {
                                    title: 'Construction & Commission',
                                    link: 'Construction'
                                },
                                {
                                    title: 'Consultancy & Business Development',
                                    link: 'Consultancy'
                                }
                            ]
                        },
                        {
                            title: 'Who we are',
                            items: [
                                {
                                    title: 'Company Overview',
                                    link: 'About'
                                },
                                {
                                    title: 'Culture & Philosophy',
                                    link: 'About'
                                },
                                {
                                    title: 'Certificates',
                                    link: 'About'
                                }
                            ]
                        }
                    ];
                }
                CevtasFooter = __decorate([
                    core_1.Component({
                        selector: 'cevtas-footer',
                        templateUrl: 'app/components/cevtas-footer/index.html',
                        host: {
                            'class': 'ui three column grid container'
                        },
                        directives: [
                            component_1.CevtasFooterSection,
                            component_2.CevtasSection
                        ],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], CevtasFooter);
                return CevtasFooter;
            })();
            exports_1("CevtasFooter", CevtasFooter);
        }
    }
});
//# sourceMappingURL=component.js.map