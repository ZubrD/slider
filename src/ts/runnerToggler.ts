import { Button } from '../js/model.js'

export function oneRunner ( elem: HTMLElement ) {
  let config: HTMLElement = elem.parentNode?.parentNode?.querySelector('.zdslider-config');
  let orientation: string = config.dataset.orientation;
  let ranger: HTMLElement = elem.parentNode.parentNode.querySelector('.ranger');
  let interval: HTMLElement = ranger.querySelector('.ranger__interval');
  let button1: HTMLElement = ranger.querySelector('[data-type="btn-first"]');  
  let button2: HTMLElement = ranger.querySelector('[data-type="btn-second"]');

  config.dataset.runners = '1';
  
  /* Обнуляю надпись над бегуном */
  button1.setAttribute('data-tip', '');     
  button2.remove();   

  if ( orientation == 'horizontal' ) {
    interval.style.width = (ranger.offsetWidth) + 'px';
    interval.style.marginLeft = '0px';
    button1.style.marginLeft = (ranger.offsetWidth-button1.offsetWidth) +  'px'; 
  } else if ( orientation == 'vertical' ) {
    interval.style.width = 5 + 'px';
    interval.style.height = ranger.offsetHeight + 'px';
    interval.style.marginTop = 0 + 'px';
    button1.style.marginTop = 0 + 'px';
  }
}
  
export function twoRunners (elem: HTMLElement, inst: string) {
    let config: HTMLElement = elem.parentNode?.parentNode?.querySelector('.zdslider-config');
    let orientation: string = config.dataset.orientation;
    let ranger: HTMLElement = elem.parentNode.parentNode.querySelector('.ranger');

    config.dataset.runners = '2';

    let button1: HTMLElement = ranger.querySelector('[data-type="btn-first"]')

    /* Обнуляю надпись над бегуном */
    button1.setAttribute('data-tip', '');         

    let secondButton = new Button ();
    secondButton.setAttribute('data-type', 'btn-second');
    secondButton.setAttribute('data-inst', inst);

    /* Обнуляю надпись над бегуном */
    secondButton.setAttribute('data-tip', '');     
    secondButton.appendTo(ranger);

    let button2: HTMLElement = ranger.querySelector('[data-type="btn-second"]');
    let interval: HTMLElement = ranger.querySelector('.ranger__interval');

    if ( orientation == 'horizontal' ) {
      interval.style.width = ranger.offsetWidth + 'px';
      button1.style.marginLeft = '0px';
      button2.style.marginLeft = (ranger.offsetWidth-button1.offsetWidth) + 'px'; 
    } else if ( orientation == 'vertical' ) {
      interval.style.width = 5 + 'px';
      interval.style.height = ranger.offsetHeight + 'px';
      interval.style.marginTop = 0 + 'px'
      button1.style.marginTop = ranger.offsetHeight +  'px';
      button2.classList.add('ranger-vert__button');
      button2.style.marginTop = 0 + 'px';
    }
}