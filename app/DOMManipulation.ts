///<reference path="elements.ts" />
///<reference path="actions.ts" />

//Star buttons
const section1Nav: HTMLElement | null = document.getElementById('section1Nav');
const section1NavButton = new DOMElemets.StarButton("button", "Rewind! ", "", ['fa', 'fa-arrow-down']);
section1NavButton.display(section1Nav);

const section2NavB:HTMLElement | null = document.getElementById('section2NavB');
const section2NavButtonBack = new DOMElemets.StarButton("button", "Volver ", "", ['fa', 'fa-arrow-up'])
section2NavButtonBack.display(section2NavB);


//Desplazar entre secciones
//Animate section 2 header
const SlideinAction = new Actions.Slidein();
const section2Header:HTMLSpanElement | null = document.getElementById('section2Header');
const section1: HTMLDivElement | null = document.getElementById('section1') as HTMLDivElement;
const section2: HTMLDivElement | null = document.getElementById('section2') as HTMLDivElement;

document.addEventListener('DOMContentLoaded', function():void{
    section1Nav?.addEventListener("click", function(e):void{
        Actions.Displace(e,section2);
        if (section2Header) SlideinAction.Animate(section2Header); 
    });

    

});
