/**
 * @jest-environment jsdom
 */

import { makeScale, reScale, modifyScaleInput } from '../js/scale.js'
import { configObj } from '../js/config.js';
import { sliderInit } from '../js/script.js'

test ('Проверка если maximus == 0 d makeScale() (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()
    configObj.min = 10
    configObj.max =153   
    let result = makeScale(configObj.min, configObj.max, 1) 

    expect ( result ).toStrictEqual ( [ [ 10, 153 ], 0, [] ] )
});

test ('Проверка если step > 1 в makeScale() (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()
    configObj.min = 14
    configObj.max =154 
    let result = makeScale(configObj.min, configObj.max, 28) 

    expect ( result ).toStrictEqual ( [ [ 14, 42, 70, 98, 126, 154 ], 28, [ 70, 35, 28, 20 ] ] )
});

test ('Проверка если step == 0 в makeScale() (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()
    configObj.min = 14
    configObj.max =154 
    let result = makeScale(configObj.min, configObj.max, 0) 

    expect ( result ).toStrictEqual ( [ [ 14, 154 ], 0, [] ] )
});



test ('Проверка reScale() (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()
    reScale([12, 35, 58, 81, 104, 127, 150], 1)
    let division_spans = document.body.querySelectorAll('.ranger__scale-division-span')
    expect ( division_spans.length ).toBe( 7 )
});

test ('Проверка modifyScaleInput() если iterations_arr != 0 (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()
    let parent = document.body.querySelector('.zdslider-panel')
    let iteration = 23
    let iterations_arr = [69, 46, 23]
    modifyScaleInput(parent, iteration, iterations_arr)

    let conf_input_step = document.body.querySelector('.zdslider-panel__step');

    expect ( conf_input_step.disabled ).toBe( false )
});

test ('Проверка modifyScaleInput() если iterations_arr == 0 (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()
    let parent = document.body.querySelector('.zdslider-panel')
    let iteration = 0
    let iterations_arr = []
    modifyScaleInput(parent, iteration, iterations_arr)

    let conf_input_step = document.body.querySelector('.zdslider-panel__step');

    expect ( conf_input_step.disabled ).toBe( true )
});