//Star button
namespace DOMElemets {
  export class StarButton {
    private button: HTMLButtonElement;

    constructor(type: 'button' | 'submit' | 'reset' = 'button', text: string = 'Default', name: string = '', icon: string[] = [], classes: string[] = []) {
      this.button = document.createElement('button');
      this.button.type = type;
      this.button.name = name;
      this.button.classList.add('btn_star', ...classes);

      this.button.innerText = text;


      const starIcon = document.createElement('i');
      starIcon.classList.add(...icon);
      this.button.appendChild(starIcon);

      for (let i = 1; i <= 6; i++) {
        const starDiv = document.createElement('div');
        starDiv.classList.add(`star-${i}`);

        const starSvg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        starSvg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        starSvg.setAttribute('viewBox', '0 0 784.11 815.53');
        starSvg.setAttribute('style', 'shape-rendering:geometricPrecision; text-rendering:geometricPrecision; image-rendering:optimizeQuality; fill-rule:evenodd; clip-rule:evenodd');
        starSvg.setAttribute('version', '1.1');
        starSvg.setAttribute('xml:space', 'preserve');
        starSvg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');

        const starPath = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        starPath.setAttribute('d', 'M392.05 0c-20.9,210.08 -184.06,378.41 -392.05,407.78 207.96,29.37 371.12,197.68 392.05,407.74 20.93,-210.06 184.09,-378.37 392.05,-407.74 -207.98,-29.38 -371.16,-197.69 -392.06,-407.78z');
        starPath.classList.add('fil0');

        starSvg.appendChild(starPath);
        starDiv.appendChild(starSvg);
        this.button.appendChild(starDiv);
      }
    }

    display(container: HTMLElement | null): void {
      if (container) {
        container.appendChild(this.button);
      }
    }

    remove(container: HTMLElement): void {
      container.removeChild(this.button);
    }
  }
}

