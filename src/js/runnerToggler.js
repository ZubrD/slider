import { Button } from './model.js'
import { reValueTip } from './tipToggler.js'

export function oneRunner (event) {
    let zdslider = event.target.parentNode.parentNode.childNodes[1]
    let orientation = zdslider.dataset.orientation
    let ranger = event.target.parentNode.parentNode.childNodes[1].firstChild
    let interval = ranger.querySelector('.ranger__interval')
    let button_1 = ranger.querySelector('[data-type="btn-first"]')   
    let button_2 = ranger.querySelector('[data-type="btn-second"]') 

    ranger.setAttribute ('data-runners', 1);
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
  
export function twoRunners (event, inst) {
    let zdslider = event.target.parentNode.parentNode.childNodes[1]
    let orientation = zdslider.dataset.orientation
    let ranger = event.target.parentNode.parentNode.childNodes[1].firstChild
    ranger.setAttribute('data-runners', 2)
    let button_1 = ranger.querySelector('[data-type="btn-first"]')
    button_1.setAttribute('data-tip', '')         /* Обнуляю надпись над бегуном */
    let second_button = new Button ()
    second_button.setAttribute('data-type', 'btn-second');
    second_button.setAttribute('data-inst', inst);
    second_button.setAttribute('data-tip', '');     /* Обнуляю надпись над бегуном */
    second_button.appendTo(ranger)
    let button_2 = ranger.querySelector('[data-type="btn-second"]')
    let interval = ranger.querySelector('.ranger__interval')

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