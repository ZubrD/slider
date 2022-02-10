/**
 * @jest-environment jsdom
 */

 import { configObj } from '../js/config.js'
 import { sliderInit } from '../js/script.js'
 import { act } from "react-dom/test-utils";
 import { clickMouse } from '../js/mouseClick.js'

 test ('Проверка вызова mouseClick (mouseClick.js) runner_number = 2, orientation = "horizontal"', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2
    configObj.orientation = 'horizontal'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__scale-division')
    elem.addEventListener('click', clickMouse)

    let config = document.body.querySelector('.zdslider-config')

    localStorage.setItem('test', 454545);
    localStorage.client_1 = 0
    localStorage.client_2 = 100
    localStorage.page_1 = 100
    localStorage.page_2 = 0
    localStorage.left_1 = -100
    localStorage.left_2 = 100
    localStorage.left_3 = 0
    localStorage.left_4 = 100
    localStorage.right_2 = 0
    localStorage.division_3 = 100
    localStorage.division_4 = 50

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseClick');
    console.log.mockRestore();
});

test ('Проверка вызова mouseClick (mouseClick.js) runner_number = 1, orientation = "horizontal"', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1
    configObj.orientation = 'horizontal'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__scale-division')
    elem.addEventListener('click', clickMouse)

    let config = document.body.querySelector('.zdslider-config')

    localStorage.setItem('test', 454545);

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseClick');
    console.log.mockRestore();
});

///////////////////////////////////////////////////////////////////////////////////////////////////

test ('Проверка вызова mouseClick (mouseClick.js) runner_number = 2, orientation = "vertical"', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 2
    configObj.orientation = 'vertical'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__scale-division')
    elem.addEventListener('click', clickMouse)

    let config = document.body.querySelector('.zdslider-config')

    localStorage.setItem('test', 454545);
    localStorage.client_1 = 0
    localStorage.client_2 = 100
    localStorage.page_1 = 100
    localStorage.page_2 = 0
    localStorage.top_1 = -100
    localStorage.top_2 = 100
    localStorage.top_3 = 100
    localStorage.top_4 = 0
    localStorage.bottom_2 = 0
    localStorage.division_3 = 50
    localStorage.division_4 = 100

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseClick');
    console.log.mockRestore();
});

test ('Проверка вызова mouseClick (mouseClick.js) runner_number = 1, orientation = "vertical"', () => {
    document.body.innerHTML = ''
    let zdslider = document.createElement('div')
    zdslider.classList.add('zdslider')
    document.body.appendChild(zdslider)
    configObj.runner_number = 1
    configObj.orientation = 'vertical'

    sliderInit()
    jest.spyOn(console, 'log').mockImplementation(() => {});

    let elem = document.body.querySelector('.ranger__scale-division')
    elem.addEventListener('click', clickMouse)

    let config = document.body.querySelector('.zdslider-config')

    localStorage.setItem('test', 454545);

    act(() => {
        elem.dispatchEvent(new MouseEvent("click", { bubbles: true }));
      });
    
    expect(console.log).toHaveBeenCalledWith('Вызов из mouseClick');
    console.log.mockRestore();
});