import { Ranger, Interval, Button} from './view.js'

export function oneRunner (event, inst) {
    event.target.parentNode.parentNode.childNodes[1].firstChild.remove()
  
    let zdslider = document.querySelectorAll('.zdslider')[inst-1]
    let division_div = document.querySelectorAll('.ranger__scale-division')[inst-1]
    let ranger = new Ranger();
    ranger.appendTo(zdslider)
    ranger.setAttribute ('data-inst', inst);
    ranger.setAttribute ('data-runners', 1);
    let ranger_div = zdslider.querySelector('.ranger')
    zdslider.insertBefore(ranger_div, division_div)
  
    let interval = new Interval();
    interval.setAttribute('data-inst', inst);
    interval.appendTo(ranger_div)
  
    let button_1 = new Button();
    button_1.setAttribute('data-type', 'btn-first');
    button_1.setAttribute('data-inst', inst);
    button_1.appendTo(ranger_div);
  
    let interval_div = ranger_div.querySelector('.ranger__interval')
    let button_1_div = ranger_div.querySelector('[data-type="btn-first"]') 
    interval_div.style.width = (ranger_div.offsetWidth) + 'px';
    button_1_div.style.marginLeft = (ranger_div.offsetWidth-button_1_div.offsetWidth) +  'px';
  }
  
export function twoRunners (event, inst) {
    event.target.parentNode.parentNode.childNodes[1].firstChild.remove()
  
    let zdslider = document.querySelectorAll('.zdslider')[inst-1]
    let division_div = document.querySelectorAll('.ranger__scale-division')[inst-1]
    let ranger = new Ranger();
    ranger.appendTo(zdslider)
    ranger.setAttribute ('data-inst', inst);
    ranger.setAttribute ('data-runners', 2);
    let ranger_div = zdslider.querySelector('.ranger')
    zdslider.insertBefore(ranger_div, division_div)
  
    let interval = new Interval();
    interval.setAttribute('data-inst', inst);
    interval.appendTo(ranger_div)
  
    let button_1 = new Button();
    let button_2 = new Button();
    button_1.setAttribute('data-type', 'btn-first');
    button_1.setAttribute('data-inst', inst);
    button_1.appendTo(ranger_div);
    button_2.setAttribute('data-type', 'btn-second');
    button_2.setAttribute('data-inst', inst);
    button_2.appendTo(ranger_div);
  
    let interval_div = ranger_div.querySelector('.ranger__interval')
    let button_1_div = ranger_div.querySelector('[data-type="btn-first"]') 
    let button_2_div = ranger_div.querySelector('[data-type="btn-second"]') 
    interval_div.style.width = (ranger_div.offsetWidth) + 'px';  
    button_1_div.style.marginLeft = '0px';
    button_2_div.style.marginLeft = (ranger_div.offsetWidth-button_1_div.offsetWidth) + 'px';  
}