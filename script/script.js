window.onload = sliderInit ()

function sliderInit () {
  elements = document.querySelectorAll('.zdslider');
  if ( elements.length != 0 ) {
    let counter = 1;
    for ( let elem of elements ) {
      sub_div = document.createElement('div');
      sub_div.classList.add('ranger');
      sub_div.setAttribute ('id', 'r_' + counter);
      elem.append(sub_div);

      interval = document.createElement('div');
      interval.setAttribute('id', 'int_' + counter);
      interval.classList.add('ranger__interval');
      sub_div.append(interval);

      button_1 = document.createElement('button');
      button_2 = document.createElement('button');

      button_1.classList.add('ranger__button');
      button_2.classList.add('ranger__button');

      button_1.setAttribute('id', 'b1_' + counter);
      button_2.setAttribute('id', 'b2_' + counter);

      sub_div.append(button_1);
      sub_div.append(button_2);

      input_1 = document.createElement('input');
      input_2 = document.createElement('input');

      input_1.classList.add('ranger__input');
      input_2.classList.add('ranger__input');

      input_1.setAttribute('id', 'i1_' + counter);
      input_2.setAttribute('id', 'i2_' + counter);

      sub_div.append(input_1);
      sub_div.append(input_2);
      counter ++;
    }   
  } else {
      alert ('Нужно добавить div с классом zdslider');
    }

  
}