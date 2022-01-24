// import { Button } from './model.js'
import { Button } from '../js/model.js'

export function oneRunner ( event: KeyboardEvent ) {
  let elem = event.target as HTMLElement
  let config: HTMLElement = elem.parentNode?.parentNode?.querySelector('.zdslider-config')
  let orientation: string = config.dataset.orientation
  let ranger: HTMLElement = elem.parentNode.parentNode.querySelector('.ranger')
  let interval: HTMLElement = ranger.querySelector('.ranger__interval')
  let button_1: HTMLElement = ranger.querySelector('[data-type="btn-first"]')   
  let button_2: HTMLElement = ranger.querySelector('[data-type="btn-second"]') 

  config.dataset.runners = '1'
  
  button_1.setAttribute('data-tip', '')     /* Обнуляю надпись над бегуном */
  button_2.remove()   

  if ( orientation == 'horizontal' ) {
    interval.style.width = (ranger.offsetWidth) + 'px';
    interval.style.marginLeft = '0px'
    button_1.style.marginLeft = (ranger.offsetWidth-button_1.offsetWidth) +  'px'; 

  } else if ( orientation == 'vertical' ) {
    interval.style.width = 5 + 'px';
    interval.style.height = ranger.offsetHeight + 'px';
    interval.style.marginTop = 0 + 'px'
    button_1.style.marginTop = 0 + 'px';
  }
}
  
export function twoRunners (event: KeyboardEvent, inst: string) {
    let elem = event.target as HTMLElement
    let config: HTMLElement = elem.parentNode?.parentNode?.querySelector('.zdslider-config')
    let orientation: string = config.dataset.orientation
    let ranger: HTMLElement = elem.parentNode.parentNode.querySelector('.ranger')

    config.dataset.runners = '2'

    let button_1: HTMLElement = ranger.querySelector('[data-type="btn-first"]')
    button_1.setAttribute('data-tip', '')         /* Обнуляю надпись над бегуном */

    let second_button = new Button ()
    second_button.setAttribute('data-type', 'btn-second');
    second_button.setAttribute('data-inst', inst);
    second_button.setAttribute('data-tip', '');     /* Обнуляю надпись над бегуном */
    second_button.appendTo(ranger)

    let button_2: HTMLElement = ranger.querySelector('[data-type="btn-second"]')
    let interval: HTMLElement = ranger.querySelector('.ranger__interval')

    if ( orientation == 'horizontal' ) {
      interval.style.width = ranger.offsetWidth + 'px';
      button_1.style.marginLeft = '0px';
      button_2.style.marginLeft = (ranger.offsetWidth-button_1.offsetWidth) + 'px'; 
    } else if ( orientation == 'vertical' ) {
      interval.style.width = 5 + 'px';
      interval.style.height = ranger.offsetHeight + 'px';
      interval.style.marginTop = 0 + 'px'
      button_1.style.marginTop = ranger.offsetHeight +  'px';

      button_2.classList.add('ranger-vert__button')
      button_2.style.marginTop = 0 + 'px'
    }
}