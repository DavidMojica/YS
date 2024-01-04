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
}