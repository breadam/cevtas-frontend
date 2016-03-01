System.register(['angular2/core', '../cevtas-hero/component', '../cevtas-section/component', '../cevtas-testimonials/component', '../cevtas-cta/component', '../cevtas-partners/component', '../cevtas-footer/component'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, component_1, component_2, component_3, component_4, component_5, component_6;
    var CevtasContact;
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
            }],
        execute: function() {
            CevtasContact = (function () {
                function CevtasContact() {
                }
                CevtasContact = __decorate([
                    core_1.Component({
                        selector: 'cevtas-contact',
                        templateUrl: 'app/components/cevtas-contact/index.html',
                        host: {
                            'class': 'one column row'
                        },
                        directives: [
                            component_1.CevtasHero,
                            component_2.CevtasSection,
                            component_3.CevtasTestimonials,
                            component_4.CevtasCta,
                            component_5.CevtasPartners,
                            component_6.CevtasFooter
                        ],
                        providers: []
                    }), 
                    __metadata('design:paramtypes', [])
                ], CevtasContact);
                return CevtasContact;
            })();
            exports_1("CevtasContact", CevtasContact);
        }
    }
});
//# sourceMappingURL=component.js.map