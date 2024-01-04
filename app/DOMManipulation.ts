///<reference path="elements.ts" />
///<reference path="actions.ts" />

//Star buttons
const section1Nav: HTMLElement | null = document.getElementById('section1Nav');
const starButton = new DOMElemets.StarButton("button", "Rewind! ", "", ['fa', 'fa-arrow-down'],[], "font-rubik-doodle");
starButton.display(section1Nav);

//Animate section 2 header
const SlideinAction = new Actions.Slidein();
const section2Header:HTMLSpanElement | null = document.getElementById('section2Header');
section1Nav?.addEventListener('click', function():void{
    if (section2Header) SlideinAction.Animate(section2Header); 
});

//
