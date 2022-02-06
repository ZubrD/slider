/**
 * @jest-environment jsdom
 */

import { sliderInit } from '../js/script.js'
import { oneRunner, twoRunners } from '../js/runnerToggler.js'

test ('Проверка функции oneRunner() с опцией horizontal (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-runners')
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'horizontal'
    oneRunner(elem)

    expect ( config.dataset.runners ).toBe ( '1' )
});

test ('Проверка функции oneRunner() с опцией vertical (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-runners')
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'vertical'
    oneRunner(elem)

    expect ( config.dataset.runners ).toBe ( '1' )
});

test ('Проверка функции twoRunners() с опцией horizontal (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-runners')
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'horizontal'
    twoRunners(elem)

    expect ( config.dataset.runners ).toBe ( '2' )
});

test ('Проверка функции twoRunners() с опцией vertical (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-runners')
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'vertical'
    twoRunners(elem)

    expect ( config.dataset.runners ).toBe ( '2' )
});

test ('Проверка создания второго бегуна в функции twoRunners() с опцией horizontal (scale.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-runners')
    let config = document.body.querySelector('.zdslider-config')
    let buttons = document.body.querySelectorAll('.ranger__button')
    config.dataset.orientation = 'horizontal'
    twoRunners(elem)

    expect ( buttons.length ).toBe ( 2 )
});