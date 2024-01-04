"use strict";
var Actions;
(function (Actions) {
    class Animate {
        RemoveAnimation(element, name, duration) {
            setTimeout(() => {
                element.classList.remove(name);
            }, duration * 1000);
        }
        ;
    }
    class Slidein extends Animate {
        constructor() {
            super(...arguments);
            this.name = "animate-slidein";
            this.duration = 3;
        }
        Animate(element) {
            element.classList.add(this.name);
            this.RemoveAnimation(element, this.name, this.duration);
        }
    }
    Actions.Slidein = Slidein;
})(Actions || (Actions = {}));
