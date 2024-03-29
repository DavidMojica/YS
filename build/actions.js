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
    class FadeIn extends Animate {
        constructor() {
            super(...arguments);
            this.name = "animate-fadein";
            this.nameToRemove = "opacity-0";
            this.duration = 3;
        }
        Animate(element) {
            element.classList.remove(this.nameToRemove);
            element.classList.add(this.name);
        }
        AnimateDelay(element, seconds) {
            setTimeout(() => {
                this.Animate(element);
            }, seconds * 1000);
        }
    }
    Actions.FadeIn = FadeIn;
    function Displace(e, target) {
        e.preventDefault();
        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    }
    Actions.Displace = Displace;
})(Actions || (Actions = {}));
