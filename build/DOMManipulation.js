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
//Desplazar entre secciones
//Animate section 2 header
const SlideinAction = new Actions.Slidein();
const section2Header = document.getElementById('section2Header');
const section1 = document.getElementById('section1');
const section2 = document.getElementById('section2');
const section3 = document.getElementById('section3');
document.addEventListener('DOMContentLoaded', function () {
    section1Nav === null || section1Nav === void 0 ? void 0 : section1Nav.addEventListener("click", function (e) {
        Actions.Displace(e, section2);
        if (section2Header)
            SlideinAction.Animate(section2Header);
    });
    section2NavB === null || section2NavB === void 0 ? void 0 : section2NavB.addEventListener('click', function (e) {
        Actions.Displace(e, section1);
    });
    section2NavN === null || section2NavN === void 0 ? void 0 : section2NavN.addEventListener('click', function (e) {
        Actions.Displace(e, section3);
    });
});
