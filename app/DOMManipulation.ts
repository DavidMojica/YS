///<reference path="elements.ts" />

const section1Nav: HTMLElement | null = document.getElementById('section1Nav');
const starButton = new DOMElemets.StarButton("button", "Rewind! ", "", ['fa', 'fa-arrow-down'],[], "font-rubik-doodle");
starButton.display(section1Nav);