/**
 * @jest-environment jsdom
 */
 import { configObj } from '../js/config.js'
 import { sliderInit } from '../js/script.js'
 import { orientationToggler } from '../js/orientToggler.js'

 test ('Проверка функции orientationToggler() с опцией horizontal (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)


    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-orient')
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'horizontal'
    let orientation = config.dataset.orientation
    orientationToggler(elem, orientation)

    expect ( zdslider.classList.contains('zdslider-vert') ).toBe ( false )
});

test ('Проверка функции orientationToggler() с опцией horizontal и одним бегуном (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-orient')
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'horizontal'
    let orientation = config.dataset.orientation
    orientationToggler(elem, orientation)

    expect ( zdslider.classList.contains('zdslider-vert') ).toBe ( false )
});

test ('Проверка функции orientationToggler() с опцией vertical (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-orient')
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'vertical'
    let orientation = config.dataset.orientation
    orientationToggler(elem, orientation)

    expect ( zdslider.classList.contains('zdslider-vert') ).toBe ( true )
});

test ('Проверка функции orientationToggler() с опцией vertical и одним бегуном (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-orient')
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'vertical'
    let orientation = config.dataset.orientation
    orientationToggler(elem, orientation)

    expect ( zdslider.classList.contains('zdslider-vert') ).toBe ( true )
});

test ('Проверка функции orientationToggler() с опцией vertical и двумя бегунами (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-orient')
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'vertical'
    let orientation = config.dataset.orientation
    orientationToggler(elem, orientation)

    expect ( zdslider.classList.contains('zdslider-vert') ).toBe ( true )
});