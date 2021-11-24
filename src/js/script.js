import { Ranger, Interval, Button, Input } from './view.js'
import {func_alert} from './func_prim_1.js'

window.onload = sliderInit ()

function sliderInit () {
  // func_alert()
  let elements = document.querySelectorAll('.zdslider');
  if ( elements.length != 0 ) {
    let counter = 1;
    let i = 0;         /*  Счётчик цикла для опр-я номера ranger в массиве */
    for ( let elem of elements ) {
        let ranger = new Ranger();
        ranger.appendTo(elem)
        ranger.setAttribute ('id', 'r_' + counter);

        let interval = new Interval();
        let ranger_div = document.querySelectorAll('.ranger')[i]
        interval.setAttribute('id', 'int_' + counter);
        interval.appendTo(ranger_div)

        let button_1 = new Button();
        let button_2 = new Button();

        button_1.setAttribute('id', 'b1_' + counter);
        button_2.setAttribute('id', 'b2_' + counter);

        button_1.appendTo(ranger_div);
        button_2.appendTo(ranger_div);

        let input_1 = new Input();
        let input_2 = new Input();

        input_1.setAttribute('id', 'i1_' + counter);
        input_2.setAttribute('id', 'i2_' + counter);

        input_1.appendTo(ranger_div);
        input_2.appendTo(ranger_div);

        counter ++;
        i ++;
    }   
  } else {
      alert ('Нужно добавить div с классом zdslider');
    }

  
}