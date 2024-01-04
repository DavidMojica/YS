"use strict";
///<reference path="elements.ts" />
///<reference path="actions.ts" />
//Star buttons
const section1Nav = document.getElementById('section1Nav');
const section1NavButton = new DOMElemets.StarButton("button", "Rewind! ", "", ['fa', 'fa-arrow-down']);
section1NavButton.display(section1Nav);
const section2NavB = document.getElementById('section2NavB');
const section2NavButtonBack = new DOMElemets.StarButton("button", "Volver ", "", ['fa', 'fa-arrow-up']);
section2NavButtonBack.display(section2NavB);
const section2NavN = document.getElementById('section2NavN');
const section2NavButtonNext = new DOMElemets.StarButton("button", "Noviembre", "", ["fa", "fa-arrow-down"]);
section2NavButtonNext.display(section2NavN);
const section3NavB = document.getElementById('section3NavB');
const section3NavButtonBack = new DOMElemets.StarButton("button", "Volver ", "", ['fa', 'fa-arrow-up']);
section3NavButtonBack.display(section3NavB);
const section3NavN = document.getElementById('section3NavN');
const section3NavButtonNext = new DOMElemets.StarButton("button", "Continuar ", "", ['fa', 'fa-arrow-down']);
section3NavButtonNext.display(section3NavN);
const section4NavB = document.getElementById('section4NavB');
const section4NavButtonNext = new DOMElemets.StarButton('button', "Volver", "", ['fa', 'fa-arrow-up']);
section4NavButtonNext.display(section4NavB);
//Desplazar entre secciones
//Animate section 2 header
const SlideinAction = new Actions.Slidein();
const FadeInAction = new Actions.FadeIn();
const section2Header = document.getElementById('section2Header');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
const section4 = document.getElementById('section4');
document.addEventListener('DOMContentLoaded', function () {
    section1Nav === null || section1Nav === void 0 ? void 0 : section1Nav.addEventListener("click", function (e) {
        Actions.Displace(e, section2);
        if (section2Header)
            SlideinAction.Animate(section2Header);
        if (section2NavN)
            FadeInAction.AnimateDelay(section2NavN, 3);
    });
    section2NavB === null || section2NavB === void 0 ? void 0 : section2NavB.addEventListener('click', function (e) {
        Actions.Displace(e, section1);
    });
    section2NavN === null || section2NavN === void 0 ? void 0 : section2NavN.addEventListener('click', function (e) {
        Actions.Displace(e, section3);
    });
    section3NavB === null || section3NavB === void 0 ? void 0 : section3NavB.addEventListener('click', function (e) {
        Actions.Displace(e, section2);
    });
    section3NavN === null || section3NavN === void 0 ? void 0 : section3NavN.addEventListener('click', function (e) {
        Actions.Displace(e, section4);
    });
    section4NavB === null || section4NavB === void 0 ? void 0 : section4NavB.addEventListener('click', function (e) {
        Actions.Displace(e, section3);
    });
});
