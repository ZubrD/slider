/**
 * @jest-environment jsdom
 */

import { configObj } from '../js/config.js'
import { sliderInit } from '../js/script.js'
import { act } from "react-dom/test-utils";
import { mouseVertDownBtn_1, mouseVertDownBtn_2 } from '../js/mouseVert.js'

test ('Проверка вызова mouseVertDownBtn_1_Double из функции mouseVertDownBtn_1() для двух бегунов (mouseVert.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2
    configObj.orientation = 'vertical'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-first"]')
    elem.addEventListener('click', mouseVertDownBtn_1)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'no'

    localStorage.setItem('test', 454545);
    localStorage.top1_1 = -100
    localStorage.top1_2 = 100
    localStorage.top1_3 = 100
    localStorage.top1_4 = 0
    localStorage.top2_1 = -100
    localStorage.top2_2 = 100
    localStorage.top2_3 = 0
    localStorage.top2_4 = 1000
    localStorage.down1_2 = 0
    localStorage.down2_2 = 0

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseVertDownBtn_1_Double');
    console.log.mockRestore();
});

test ('Проверка вызова mouseVertDownBtn_1_Double из функции mouseVertDownBtn_1() для двух бегунов (mouseVert.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2
    configObj.orientation = 'vertical'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-first"]')
    elem.addEventListener('click', mouseVertDownBtn_1)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'yes'

    localStorage.setItem('test', 454545);
    localStorage.integ = 445
    localStorage.num = 428.5714285714286
    localStorage.range = 71.42857142857143
    localStorage.num1_1 = 100
    localStorage.num1_2 = 0
    localStorage.top2_1 = 0
    localStorage.top2_2 = 100

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseVertDownBtn_1_Double');
    console.log.mockRestore();
});

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

test ('Проверка вызова mouseVertDownBtn_1_Single из функции mouseVertDownBtn_1() для одного бегуна (mouseVert.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1
    configObj.orientation = 'vertical'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-first"]')
    elem.addEventListener('click', mouseVertDownBtn_1)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'no'

    localStorage.setItem('test', 454545);
    localStorage.top1_1 = -100
    localStorage.top1_2 = 100
    localStorage.down1_2 = 0

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseVertDownBtn_1_Single');
    console.log.mockRestore();
});

test ('Проверка вызова mouseVertDownBtn_1_Single из функции mouseVertDownBtn_1() для одного бегуна, discrete = "yes" (mouseVert.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1
    configObj.orientation = 'vertical'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-first"]')
    elem.addEventListener('click', mouseVertDownBtn_1)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'yes'

    localStorage.setItem('test', 454545);
    localStorage.top1_1 = -100
    localStorage.top1_2 = 100
    localStorage.down1_2 = 0
    localStorage.integ = 58
    localStorage.num = 71.42857142857143
    localStorage.range = 71.42857142857143

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseVertDownBtn_1_Single');
    console.log.mockRestore();
});

///////////////////////////////////////////////////////////////////////////////////////////////////////////

test ('Проверка вызова mouseVertDownBtn_2 для двух бегунов, discrete = "no" (mouseVert.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2
    configObj.orientation = 'vertical'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-second"]')
    elem.addEventListener('click', mouseVertDownBtn_2)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'no'

    localStorage.setItem('test', 454545);
    localStorage.top1_1 = 100
    localStorage.top1_2 = 0
    localStorage.top1_3 = -100
    localStorage.top1_4 = 100
    localStorage.top2_1 = 0
    localStorage.top2_2 = 100
    localStorage.top2_3 = -100
    localStorage.top2_4 = 100
    localStorage.down1_4 = 0
    localStorage.down2_4 = 0

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseVertDownBtn_2');
    console.log.mockRestore();
});

test ('Проверка вызова mouseVertDownBtn_2 для двух бегунов, discrete = "yes" (mouseVert.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2
    configObj.orientation = 'vertical'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-second"]')
    elem.addEventListener('click', mouseVertDownBtn_2)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'yes'

    localStorage.setItem('test', 454545);
    localStorage.integ = 42
    localStorage.num = 71.42857142857143
    localStorage.range = 71.42857142857143
    localStorage.num1_1 = 0
    localStorage.num1_2 = 100
    localStorage.top1_1 = 100
    localStorage.top1_2 = 0

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseVertDownBtn_2');
    console.log.mockRestore();
});