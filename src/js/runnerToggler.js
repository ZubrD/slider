import { Ranger, Interval, Button} from './view.js'

export function oneRunner (event, inst) {
    let ranger = event.target.parentNode.parentNode.childNodes[1].firstChild
    let second_button = ranger.querySelector('[data-type="btn-second"]')
    second_button.remove()

    let interval = ranger.querySelector('.ranger__interval')
    let button_1 = ranger.querySelector('[data-type="btn-first"]') 
    interval.style.width = (ranger.offsetWidth) + 'px';
    button_1.style.marginLeft = (ranger.offsetWidth-button_1.offsetWidth) +  'px';
    ranger.setAttribute ('data-runners', 1);
    
  }
  
export function twoRunners (event, inst) {
    let ranger = event.target.parentNode.parentNode.childNodes[1].firstChild
    let button_1 = ranger.querySelector('[data-type="btn-first"]')
    let second_button = new Button ()
    second_button.setAttribute('data-type', 'btn-second');
    second_button.setAttribute('data-inst', inst);
    second_button.appendTo(ranger)

    button_1.style.marginLeft = '0px';
    let second_button_div = ranger.querySelector('[data-type="btn-second"]')
    second_button_div.style.marginLeft = (ranger.offsetWidth-button_1.offsetWidth) + 'px';   
}