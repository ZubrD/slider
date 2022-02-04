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

test ('Проверка наличия zdslider-vert (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.orientation = 'vertical'
    sliderInit()

    expect ( zdslider.classList.contains ( 'zdslider-vert' ) ).toBe ( true )
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

test ('Проверка наличия экземпляра класса Division (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()
    
    let division = document.body.querySelector('.ranger__scale-division')
    expect ( division.classList.contains('ranger__scale-division') ).toBe( true )
});

test ('Проверка количества делений шкалы (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.min = 16
    sliderInit()
    
    let divisions = document.body.querySelectorAll('.ranger__scale-division-span')
    expect ( divisions.length ).toBe( 3 )
});

test ('Проверка количества подписей делений шкалы (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.min = 9
    sliderInit()
    
    let scale_spans = document.body.querySelectorAll('.ranger__scale-span')
    expect ( scale_spans.length ).toBe( 4 )
});

test ('Проверка наличия экземпляра класса Settings (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()
    
    let settings = document.body.querySelector('.zdslider-config')
    expect ( settings.classList.contains('zdslider-config') ).toBe( true )
});

test ('Проверка наличия экземпляра класса Panel (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()
    
    let panel = document.body.querySelector('.zdslider-panel')
    expect ( panel.classList.contains('zdslider-panel') ).toBe( true )
});

test ('Проверка активного состояния инпута для шага (есть интервалы) (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.min = 10
    sliderInit()
    
    let panel = document.body.querySelector('.zdslider-panel__step')
    expect ( panel.disabled ).toBe( false )
});

test ('Проверка неактивного состояния инпута для шага (нет интервалов) (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.min = 11
    sliderInit()
    
    let panel = document.body.querySelector('.zdslider-panel__step')
    expect ( panel.disabled ).toBe( true )
});

test ('Проверка ширины интервала (script.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    sliderInit()
    
    let interval = document.body.querySelector('.ranger__interval')
    console.log(interval.style.width)
    // expect ( panel.disabled ).toBe( true )
});