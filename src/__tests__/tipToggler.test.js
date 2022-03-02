/**
 * @jest-environment jsdom
 */

import { showTip, hideTip, forTip, reValueTip } from '../js/tipToggler.js'
import { sliderInit } from '../js/script.js'

test ('Проверка функции showTip из модуля tipToggler.js', () => {

    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()

    let element = document.body.querySelector('.zdslider-panel__check-tip')

    showTip( element, 'horizontal')                 /* Вызываю в первый раз */

    let buttons = document.body.querySelectorAll('.ranger__button')

    for ( let button of buttons ) {
        expect ( button.classList.contains ( 'ranger__button-tip' ) ).toBe ( true )        
    }

    showTip( element, 'vertical')                   /* Вызываю во второй раз */

    let buttons_v = document.body.querySelectorAll('.ranger__button')

    for ( let button of buttons_v ) {      
        expect ( button.classList.contains ( 'ranger-vert__button-tip' ) ).toBe ( true )        
    }    

});

test ('Проверка функции hideTip из модуля tipToggler.js', () => {

    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()

    let element = document.body.querySelector('.zdslider-panel__check-tip');

    hideTip ( element )

    let buttons = document.body.querySelectorAll('.ranger__button')

    for ( let button of buttons ) {
        expect ( button.classList.contains ( 'ranger__button-tip' ) ).toBe ( false )        
        expect ( button.classList.contains ( 'ranger-vert__button-tip' ) ).toBe ( false )        
    }
});

test ('Проверка функции forTip из модуля tipToggler.js', () => {

    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.width = 500

    let element = document.body.querySelector('.ranger__button');

    expect ( forTip (element, 50 ) ).toBe ( 26 )

    config.dataset.orientation = 'vertical'
    config.dataset.height = 500

    expect ( forTip (element, 3 ) ).toBe ( 13 )
});

test ('Проверка функции reValueTip из модуля tipToggler.js', () => {

    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()

    let element = document.body.querySelector('.zdslider-panel__min');
    let input = document.body.querySelector('.zdslider-panel__check-tip');
    input.checked = true        /* Сначала эмулирую постановку флажка, при вызове функции он снимается */
    reValueTip(element)

    expect ( input.checked ).toBe ( false )

    /* ///////////////////////////////////////////////////////////////////////////////////////////////  */

    let buttons = document.body.querySelectorAll('.ranger__button');
     for (let elem of buttons) {
        elem.dataset.tip = '123';   /* Сначала присваиваю некое значение, вызов функции его удаляет */
    }

    reValueTip(element)
    for (let elem of buttons) {
        expect ( elem.dataset.tip ).toBe ( '' )
    }

    /* ///////////////////////////////////////////////////////////////////////////////////////////////  */

    /* Проверить факт вызова функции */
});

