/**
 * @jest-environment jsdom
 */
    import { configObj } from '../js/config.js'
    import { sliderInit } from '../js/script.js'
    import React from 'react';
    import ReactDOM from 'react-dom';
    //  import { shallow } from 'enzyme';
    import { act } from "react-dom/test-utils";
    import { mouseDownBtnFirst, mouseDownBtnSecond, mouseDownBtnFirstSingle, mouseDownBtnFirstDouble, resetBtnCoord } from '../js/mouse.js'


test ('Проверка вызова mouseDownBtnFirstDouble из функции mouseDownBtn_1() для двух бегунов (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtnFirst)

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtnFirstDouble');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtnFirstSingle из функции mouseDownBtnFirst() для одного бегуна (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});
    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtnFirst)

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
        doc.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      });
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtnFirstSingle');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtnFirstSingle из функции mouseDownBtnFirst() для одного бегуна и дискретного (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});
    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtnFirst)

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
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtnFirstSingle');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtnFirstDouble из функции mouseDownBtnFirst() для двух бегунов и дискретного (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtnFirst)

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
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtnFirstDouble');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtnFirstDouble из функции mouseDownBtnFirst() для двух бегунов и плавного хода (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__button')
    elem.addEventListener('click', mouseDownBtnFirst)

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
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtnFirstDouble');
    console.log.mockRestore();
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

test ('Проверка вызова mouseDownBtnSecond (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-second"]')
    elem.addEventListener('click', mouseDownBtnSecond)

    localStorage.setItem('test', 454545);
    localStorage.left2_1 = -100
    localStorage.left2_2 = 100
    localStorage.right2_1 = 50
    localStorage.left1_1 = -100
    localStorage.left1_2 = 100
    localStorage.right1_1 = 50

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtnSecond');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtnSecond (mouse.js), discrete_status == "yes" ', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-second"]')
    elem.addEventListener('click', mouseDownBtnSecond)
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'yes'

    localStorage.setItem('test', 454545);
    localStorage.integ = 439
    localStorage.num = 418.2857142857143
    localStorage.range = 69.71428571428571
    localStorage.num_1 = 0
    localStorage.num_2 = 10
    localStorage.left1_1 = 10
    localStorage.left1_2 = 0

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtnSecond');
    console.log.mockRestore();
});

test ('Проверка вызова mouseDownBtnSecond (mouse.js), discrete_status == "no" ', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-second"]')
    elem.addEventListener('click', mouseDownBtnSecond)
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.discrete = 'no'

    localStorage.setItem('test', 454545);
    localStorage.left1_1 = 10
    localStorage.left2_1 = 0

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtnSecond');
    console.log.mockRestore();
});

/////////////////////////////////////////////////////////////////////////////////////////

test ('Проверка вызова mouseDownBtnSecond (mouse.js), discrete_status == "no" ', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('[data-type="btn-second"]')
    elem.addEventListener('click', mouseDownBtnSecond)

    let doc = window.document.documentElement

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mousemove", { bubbles: true }));
        doc.dispatchEvent(new MouseEvent("mouseup", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseDownBtnSecond');
    console.log.mockRestore();
});

////////////////////////////////////////////////////////////////////////////////////

test ('Проверка вызова resetBtnCoord (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.zdslider-panel__check-runners')
    elem.addEventListener('click', resetBtnCoord)

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Это resetBtnCoord');
    console.log.mockRestore();
});



test ('Проверка вызова resetBtnCoord (mouse.js)', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.zdslider-panel__check-runners')
    elem.addEventListener('click', resetBtnCoord)
    let config = document.body.querySelector('.zdslider-config')
    config.dataset.orientation = 'vertical'

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Это resetBtnCoord');
    console.log.mockRestore();
});