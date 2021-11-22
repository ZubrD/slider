import { Ranger } from './view.js'

window.onload = sliderInit ()

function sliderInit () {
  let elements = document.querySelectorAll('.zdslider');
  if ( elements.length != 0 ) {
    let counter = 1;
    for ( let elem of elements ) {
      let ranger = new Ranger();
      ranger.appendTo(elem)
      ranger.setAttribute ('id', 'r_' + counter);

      let interval = document.createElement('div');
      interval.setAttribute('id', 'int_' + counter);
      interval.classList.add('ranger__interval');
      ranger.append(interval);

      let button_1 = document.createElement('button');
      let button_2 = document.createElement('button');

      button_1.classList.add('ranger__button');
      button_2.classList.add('ranger__button');

      button_1.setAttribute('id', 'b1_' + counter);
      button_2.setAttribute('id', 'b2_' + counter);

      ranger.append(button_1);
      ranger.append(button_2);

      let input_1 = document.createElement('input');
      let input_2 = document.createElement('input');

      input_1.classList.add('ranger__input');
      input_2.classList.add('ranger__input');

      input_1.setAttribute('id', 'i1_' + counter);
      input_2.setAttribute('id', 'i2_' + counter);

      ranger.append(input_1);
      ranger.append(input_2);
      counter ++;
    }   
  } else {
      alert ('Нужно добавить div с классом zdslider');
    }

  
}