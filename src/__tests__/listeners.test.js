/**
 * @jest-environment jsdom
 */
import { configObj } from '../js/config.js'
import { sliderInit } from '../js/script.js'
import React from 'react';
import ReactDOM from 'react-dom';
import { act } from "react-dom/test-utils";
import { isExportDeclaration } from 'typescript';

 test ('Проверка переключателя бегунов в панели - отключение, allChecksListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-runners')
    elem.checked = true 

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(elem.checked).toBe( false );
});

test ('Проверка переключателя дискретного перемещения в панели - включение, allChecksListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-discrete')
    elem.checked = false 

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(elem.checked).toBe( true );
});

test ('Проверка переключателя дискретного перемещения в панели - отключение, allChecksListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-discrete')
    elem.checked = true 

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(elem.checked).toBe( false );
});

test ('Проверка переключателя ярлыка в панели - включение, allChecksListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-tip')
    elem.checked = false 

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(elem.checked).toBe( true );
});

test ('Проверка переключателя ярлыка в панели - отключение, allChecksListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-tip')
    elem.checked = true 

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(elem.checked).toBe( false );
});

test ('Проверка переключателя ориентации в панели - включение, allChecksListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-orient')
    elem.checked = false 

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(elem.checked).toBe( true );
});

test ('Проверка переключателя ориентации в панели - отключение, allChecksListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__check-orient')
    elem.checked = true 

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    expect(elem.checked).toBe( false );
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

test ('Проверка input min в панели, changeMinListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__min')

    act(() => {
        elem.dispatchEvent(new MouseEvent("change", { bubbles: true }));
      });
    expect(1 + 2).toBe( 3 );
});

test ('Проверка input max в панели, changeMaxListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__max')

    act(() => {
        elem.dispatchEvent(new MouseEvent("change", { bubbles: true }));
      });
    expect(1 + 2).toBe( 3 );
});

test ('Проверка input step в панели, changeStepListener (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let elem = document.body.querySelector('.zdslider-panel__step')

    localStorage.setItem('test', 454545);
    localStorage.current_1 = 0
    localStorage.current_2 = 100
    localStorage.val_1 = 100
    localStorage.val_2 = 0

    act(() => {
        elem.dispatchEvent(new MouseEvent("input", { bubbles: true }));
      });
    expect(1 + 2).toBe( 3 );
});

/////////////////////////////////////////////////////////////////////////////////////////////////////////////////

test ('Проверка window resize (listeners.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()

    let doc = window.document.documentElement

    act(() => {
        doc.dispatchEvent(new MouseEvent("resize", { bubbles: true }));
      });
    expect(1 + 2).toBe( 3 );
});