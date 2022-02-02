/**
 * @jest-environment jsdom
 */

import { showTip, hideTip, forTip, toggleTheme } from '../js/tipToggler.js'
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

    expect ( forTip (element, 50 ) ).toBe ( 24 )

    config.dataset.orientation = 'vertical'
    config.dataset.height = 500

    expect ( forTip (element, 3 ) ).toBe ( 11 )
});

