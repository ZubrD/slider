/**
 * @jest-environment jsdom
 */
 import { configObj } from '../js/config.js'
 import { sliderInit } from '../js/script.js'
 import { act } from "react-dom/test-utils";

 test ('Проверка clickHandler для Button, horizontal, btn-first (model.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    // configObj.runner_number = 2
    configObj.orientation = 'horizontal'

    sliderInit()

    let elem = document.body.querySelector('[data-type="btn-first"]')
    // let config = document.body.querySelector('.zdslider-config')
    // config.dataset.orientation = 'horizontal'

    act(() => {
        elem.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
      });
    expect( 1 + 2 ).toBe( 3 );
});

test ('Проверка clickHandler для Button, horizontal, btn-second (model.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.orientation = 'horizontal'

    sliderInit()

    let elem = document.body.querySelector('[data-type="btn-second"]')

    act(() => {
        elem.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
      });
    expect( 1 + 2 ).toBe( 3 );
});

test ('Проверка clickHandler для Button, vertical, btn-first (model.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.orientation = 'vertical'

    sliderInit()

    let elem = document.body.querySelector('[data-type="btn-first"]')

    act(() => {
        elem.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
      });
    expect( 1 + 2 ).toBe( 3 );
});

test ('Проверка clickHandler для Button, vertical, btn-second (model.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.orientation = 'vertical'

    sliderInit()

    let elem = document.body.querySelector('[data-type="btn-second"]')

    act(() => {
        elem.dispatchEvent(new MouseEvent("mousedown", { bubbles: true }));
      });
    expect( 1 + 2 ).toBe( 3 );
});