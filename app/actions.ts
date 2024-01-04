namespace Actions{
    abstract class Animate{
        abstract Animate(element:HTMLElement):void;
        protected RemoveAnimation(element:HTMLElement,name:string, duration:number):void{
            setTimeout(()=>{
                element.classList.remove(name)
            }, duration * 1000)
        };
    }

    export class Slidein extends Animate{
        private name:string = "animate-slidein";
        private duration:number = 3;
        Animate(element:HTMLElement): void {
            element.classList.add(this.name);
            this.RemoveAnimation(element,this.name,this.duration);
        }
    }

    export class FadeIn extends Animate{
        private name:string = "animate-fadein";
        private nameToRemove:string = "opacity-0";
        private duration:number = 3;
        Animate(element: HTMLElement): void {
            element.classList.remove(this.nameToRemove);
            element.classList.add(this.name);
        }

        AnimateDelay(element:HTMLElement, seconds:number): void {
            setTimeout(() => {
                this.Animate(element);
            }, seconds * 1000);
        }
    }


    export function Displace(e:MouseEvent, target:HTMLElement):void{
        e.preventDefault();
        if (target) {
            target.scrollIntoView({
                behavior:"smooth",
                block:"start"
            });
        }
    }
}