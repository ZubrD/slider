/**
 * @jest-environment jsdom
 */
import { Config, configObj } from '../js/config.js';
import { sliderInit, setStructure } from '../js/script.js'

//  test ('Проверка исходных установок в script.js', () => {
//     document.body.innerHTML = ''

//     let zdslider = document.createElement('div')
//     zdslider.classList.add('zdslider')
//     document.body.appendChild(zdslider)
//     sliderInit()

//     // let config = document.body.querySelector('.zdslider-config')
    
//     setStructure(1, 10, 150, 'no', 'horizontal', [10, 30, 50, 70, 90, 110, 130,150], 20, [70, 35, 28, 20])
    
//     setStructure(2, 10, 150, 'no', 'vertical', [10, 30, 50, 70, 90, 110, 130,150], 20, [70, 35, 28, 20])
//     expect ( zdslider.classList.contains ( 'zdslider-vert' ) ).toBe ( true )    

//     // setStructure(1, 10, 150, 'no', 'horizontal', [10, 30, 50, 70, 90, 110, 130,150], 20, [70, 35, 28, 20])   /* Один бегун */
//     button_2 = document.body.querySelector('[data-type="btn-second"]')
//     expect ( button_1.dataset.type ).toBe( 'btn-first' )
//     // expect ( button_2 ).toBe( undefined )
// });

test ('Проверка наличия zdslider (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()

    expect ( zdslider.classList.contains ( 'zdslider' ) ).toBe ( true )
});

test ('Проверка наличия экземпляра класса Ranger (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()

    let ranger = document.body.querySelector('.ranger')
    expect ( ranger.classList.contains('ranger') ).toBe( true )
});

test ('Проверка наличия экземпляра класса Interval (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()
    
    let interval = document.body.querySelector('.ranger__interval')
    expect ( interval.classList.contains('ranger__interval') ).toBe( true )
});

test ('Проверка наличия двух бегунов (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2
    sliderInit()
    
    let button_1 = document.body.querySelector('[data-type="btn-first"]')
    let button_2 = document.body.querySelector('[data-type="btn-second"]')
    expect ( button_1.dataset.type ).toBe( 'btn-first' )
    expect ( button_2.dataset.type ).toBe( 'btn-second' )
});

test ('Проверка наличия одного бегуна (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1
    sliderInit()
    
    let button_1 = document.body.querySelector('[data-type="btn-first"]')
    expect ( button_1.dataset.type ).toBe( 'btn-first' )
});