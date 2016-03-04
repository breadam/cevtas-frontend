System.register(['angular2/core'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var CevtasSection;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            CevtasSection = (function () {
                function CevtasSection() {
                    this.outerWidth = '100%';
                    this.outerHeight = '600px';
                    this.innerWidth = 'auto';
                    this.innerHeight = 'auto';
                    this.align = 'left';
                }
                CevtasSection = __decorate([
                    core_1.Component({
                        selector: 'cevtas-section',
                        templateUrl: 'app/components/cevtas-section/index.html',
                        properties: ['outerWidth', 'outerHeight', 'innerWidth', 'innerHeight', 'align', 'image', 'background'],
                        styles: [
                            "\n        .outer{\n          position:relative;\n          background-repeat:no-repeat;\n          background-position: center center;\n          background-size:cover;\n        }\n\n        .inner{\n          position:absolute;\n          display:inline-block;\n          top:50%;\n          left:50%;\n          transform:translate(-50%,-50%);\n        }\n      "
                        ]
                    }), 
                    __metadata('design:paramtypes', [])
                ], CevtasSection);
                return CevtasSection;
            })();
            exports_1("CevtasSection", CevtasSection);
        }
    }
});
//# sourceMappingURL=component.js.map