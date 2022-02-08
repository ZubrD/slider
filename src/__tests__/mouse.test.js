/**
 * @jest-environment jsdom
 */
    import { configObj } from '../js/config.js'
    import { sliderInit } from '../js/script.js'
    import React from 'react';
    import ReactDOM from 'react-dom';
    //  import { shallow } from 'enzyme';
    import { act } from "react-dom/test-utils";
    import { mouseDownBtn_1, mouseDownBtn_2, mouseDownBtn_1_Single, mouseDownBtn_1_Double } from '../js/mouse.js'


test ('Проверка вызова mouseDownBtn_1_Double из функции mouseDownBtn_1() для двух бегунов (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtn_1)

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtn_1_Double');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtn_1_Single из функции mouseDownBtn_1() для одного бегуна (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});
    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtn_1)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'no'
    localStorage.setItem('test', 454545);
    localStorage.left1_1 = -100
    localStorage.left1_2 = 100
    localStorage.right1_1 = 50

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
      });
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtn_1_Single');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtn_1_Single из функции mouseDownBtn_1() для одного бегуна и дискретного (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});
    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtn_1)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'yes'

    localStorage.setItem('test', 454545);
    localStorage.left1_1 = -100
    localStorage.left1_2 = 100
    localStorage.right1_1 = 50

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
      });
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtn_1_Single');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtn_1_Double из функции mouseDownBtn_1() для двух бегунов и дискретного (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtn_1)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'yes'
    localStorage.setItem('test', 454545);
    localStorage.left1_1 = -100
    localStorage.left1_2 = 10000

    localStorage.integ = 59
    localStorage.num = 69.7142857142857
    localStorage.num_2 = 500.7142857142857
    localStorage.range = 69.71428571428571
    localStorage.left2 = 487.9861478805542

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtn_1_Double');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtn_1_Double из функции mouseDownBtn_1() для двух бегунов и плавного хода (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtn_1)

    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'no'
    localStorage.setItem('test', 454545);
    localStorage.left1_1 = 100
    localStorage.left2_1 = -10
    localStorage.left2_2 = 20
    localStorage.left2_3 = 20
    localStorage.right2_1 = 10

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtn_1_Double');
    console.log.mockRestore();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

test ('Проверка вызова mouseDownBtn_2 (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-second"]')
    elem.addEventListener('click', mouseDownBtn_2)

    localStorage.setItem('test', 454545);
    localStorage.left2_1 = -100

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtn_2');
    console.log.mockRestore();
});
