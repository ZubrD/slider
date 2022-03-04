import {
  mouseDownBtnFirst,
  mouseDownBtnSecond,
} from '../js/mouse.js'

import {
  mouseVertDownBtnFirst,
  mouseVertDownBtnSecond,
} from '../js/mouseVert.js'

import {clickMouse} from '../js/mouseClick.js'

export class Ranger {
  $el: HTMLElement;

  constructor (orientation: string) {
    this.$el = document.createElement ('div');
    this.$el.classList.add ('ranger');
    this.$el.setAttribute('data-type', 'ranger');

    if (orientation === 'horizontal') {
        
    } else if (orientation === 'vertical') {
      this.$el.classList.add ('ranger-vert');
    }
  }

  appendTo (parent: HTMLElement) {
    parent.appendChild (this.$el);
  }    
}

export class Interval {
  $el: HTMLElement;

  constructor (orientation: string) {
    this.$el = document.createElement ('div');
    this.$el.classList.add ('ranger__interval');
    this.$el.setAttribute('data-type', 'interval');

    if (orientation === 'horizontal') {
        
    } else if (orientation === 'vertical') {
      this.$el.classList.add ('ranger-vert__interval');
    }
  }

  appendTo ( parent: HTMLElement ) {
    parent.appendChild (this.$el);
  }
}

export class Button {
  $el: HTMLElement;

  constructor (orientation: string) {
    this.$el = document.createElement('button');
    this.$el.classList.add('ranger__button');

    if (orientation === 'horizontal') {
        
    } else if (orientation === 'vertical') {
      this.$el.classList.add ('ranger-vert__button');
    }

    this.#setup()
  }

  appendTo (parent: HTMLElement) {
    parent.appendChild(this.$el);
  }

  setAttribute(attr: string, number: string) {
    this.$el.setAttribute(attr, number);
  }

  #setup() {

    /* Только для местных функций */
    this.clickHandler = this.clickHandler.bind(this);        
    this.$el.addEventListener('mousedown', this.clickHandler);
  }

  clickHandler (event: KeyboardEvent) {
    let elem = event.target as HTMLElement;
    const {type} = elem.dataset;
    let config_dataset: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
    const {orientation} = config_dataset.dataset;

    if (orientation === 'horizontal') {

      if (type === 'btn-first') {
        mouseDownBtnFirst(event);
      }

      if (type === 'btn-second') {
        mouseDownBtnSecond(event);
      }        
    }

    if (orientation === 'vertical') {

      if (type === 'btn-first') {
        mouseVertDownBtnFirst(event);
      }

      if (type === 'btn-second') {
        mouseVertDownBtnSecond(event);
      }             
    }
  }
}


export class Scale {
  $el: HTMLElement;

  constructor (orientation: string) {
    this.$el = document.createElement ('div');
    this.$el.classList.add ('ranger__scale');

    if (orientation === 'horizontal') {
        
    } else if (orientation === 'vertical') {
      this.$el.classList.add ('ranger-vert__scale');
    }
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.$el);
  }

  appendChild(child: HTMLElement) {
    this.$el.appendChild(child);
  }
}

export class ScaleSpan {
  $el: HTMLElement

  constructor (orientation: string) {
    this.$el = document.createElement ('span')
    this.$el.classList.add ('ranger__scale-span')

    if (orientation === 'horizontal') {
        
    } else if (orientation === 'vertical') {
      this.$el.classList.add ('ranger-vert__scale-span')
    }
  }

  appendTo( parent: HTMLElement ) {
    parent.appendChild(this.$el)
  }

  inner_HTML(child: string) {
    this.$el.innerHTML = child
  }
}

export class Division {
  $el: HTMLElement;

  constructor (orientation: string) {
    this.$el = document.createElement ('div');
    this.$el.classList.add ('ranger__scale-division');

    if (orientation === 'horizontal') {
        
    } else if (orientation === 'vertical') {
      this.$el.classList.add ('ranger-vert__scale-division');
    }

    this.#setup()
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.$el);
  }

  appendChild(child: HTMLElement) {
    this.$el.appendChild (child);
  }

  #setup() {

    /* Только для местных функций */
    this.clickHandler = this.clickHandler.bind(this);        
    this.$el.addEventListener('click', this.clickHandler);
  }

  clickHandler (event: KeyboardEvent) {
    clickMouse(event);
  }
}

export class DivisionSpan {
  $el: HTMLElement;

  constructor (orientation: string) {
    this.$el = document.createElement ('span');
    this.$el.classList.add ('ranger__scale-division-span');

    if (orientation === 'horizontal') {
        
    } else if (orientation === 'vertical') {
      this.$el.classList.add ('ranger-vert__scale-division-span');
    }
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.$el);
  }
}

export class Panel {
  $panel: HTMLElement;

  $runCheckbox: HTMLElement;
  $discreteCheckbox: HTMLElement;
  $tipCheckbox: HTMLElement;
  $orientCheckbox: HTMLElement;
  $minNumber: HTMLElement;
  $maxNumber: HTMLElement;
  $stepNumber: HTMLElement;
  
  $runLabel: HTMLElement;
  $discreteLabel: HTMLElement;
  $tipLabel: HTMLElement;
  $orientLabel: HTMLElement;
  $minLable: HTMLElement;
  $maxLabel: HTMLElement;
  $stepLabel: HTMLElement;

  constructor () {
    this.$panel = document.createElement('div');
    this.$panel.classList.add('zdslider-panel');
    
    this.$runCheckbox = document.createElement('input');
    this.$runCheckbox.classList.add('zdslider-panel__check-runners');
    this.$runCheckbox.setAttribute('type', 'checkbox');
    this.$runCheckbox.setAttribute('data-run', 'run');

    this.$discreteCheckbox = document.createElement('input');
    this.$discreteCheckbox.classList.add('zdslider-panel__check-discrete');
    this.$discreteCheckbox.setAttribute('type', 'checkbox');
    this.$discreteCheckbox.setAttribute('data-discrete', 'discrete');

    this.$tipCheckbox = document.createElement('input');
    this.$tipCheckbox.classList.add('zdslider-panel__check-tip');
    this.$tipCheckbox.setAttribute('type', 'checkbox');
    this.$tipCheckbox.setAttribute('data-tip', 'tip');

    this.$orientCheckbox = document.createElement('input');
    this.$orientCheckbox.classList.add('zdslider-panel__check-orient');
    this.$orientCheckbox.setAttribute('type', 'checkbox');
    this.$orientCheckbox.setAttribute('data-orient', 'orient');

    this.$minNumber = document.createElement('input');
    this.$minNumber.classList.add('zdslider-panel__min');
    this.$minNumber.setAttribute('type', 'number');

    this.$maxNumber = document.createElement('input');
    this.$maxNumber.classList.add('zdslider-panel__max');
    this.$maxNumber.setAttribute('type', 'number');

    this.$stepNumber = document.createElement('input');
    this.$stepNumber.classList.add('zdslider-panel__step');
    this.$stepNumber.setAttribute('type', 'number');
    this.$stepNumber.setAttribute('onkeydown', 'return false');

    this.$runLabel = document.createElement('label');
    this.$runLabel.innerHTML = '1 Бегун';

    this.$discreteLabel = document.createElement('label');
    this.$discreteLabel.innerHTML = 'Дискретный';

    this.$tipLabel = document.createElement('label');
    this.$tipLabel.innerHTML = 'Ярлык';

    this.$orientLabel = document.createElement('label');
    this.$orientLabel.innerHTML = 'Вертикальный';

    this.$minLable = document.createElement('label');
    this.$minLable.innerHTML = 'Минимум';

    this.$maxLabel = document.createElement('label');
    this.$maxLabel.innerHTML = 'Максимум';

    this.$stepLabel = document.createElement('label');
    this.$stepLabel.innerHTML = 'Шаг';

    this.$panel.appendChild(this.$runCheckbox);
    this.$panel.appendChild(this.$runLabel);
    this.$panel.appendChild(document.createElement('br'));

    this.$panel.appendChild(this.$discreteCheckbox);
    this.$panel.appendChild(this.$discreteLabel);
    this.$panel.appendChild(document.createElement('br'));

    this.$panel.appendChild(this.$tipCheckbox);
    this.$panel.appendChild(this.$tipLabel);
    this.$panel.appendChild(document.createElement('br'));

    this.$panel.appendChild(this.$orientCheckbox);
    this.$panel.appendChild(this.$orientLabel);
    this.$panel.appendChild(document.createElement('br'));

    this.$panel.appendChild(this.$minNumber);
    this.$panel.appendChild(this.$minLable);
    this.$panel.appendChild(document.createElement('br'));

    this.$panel.appendChild(this.$maxNumber);
    this.$panel.appendChild(this.$maxLabel);
    this.$panel.appendChild(document.createElement('br'));
    
    this.$panel.appendChild(this.$stepNumber);
    this.$panel.appendChild(this.$stepLabel);
    this.$panel.appendChild(document.createElement('br'));

    this.#setup();
  }

  #setup() {

    /* Только для местных функций */
    this.clickHandler = this.clickHandler.bind(this);        
    this.$panel.addEventListener('click', this.clickHandler);
  }

  clickHandler(event: KeyboardEvent) {
    let elem = event.target as HTMLElement;
    let {run} = elem.dataset; 
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.$panel);
  }
}

export class Settings {
  $el: HTMLElement;

  constructor () {
    this.$el = document.createElement ('div');
    this.$el.classList.add ('zdslider-config');
  }

  appendTo(parent: HTMLElement) {
    parent.appendChild(this.$el);
  }

  setAttribute(attr: string, number: string) {
    this.$el.setAttribute (attr, number);
  }
}
