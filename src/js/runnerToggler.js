// import { Button } from './model.js'
import { Button } from '../js/model.js';
export function oneRunner(elem) {
    var _a, _b;
    let config = (_b = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.querySelector('.zdslider-config');
    let orientation = config.dataset.orientation;
    let ranger = elem.parentNode.parentNode.querySelector('.ranger');
    let interval = ranger.querySelector('.ranger__interval');
    let button_1 = ranger.querySelector('[data-type="btn-first"]');
    let button_2 = ranger.querySelector('[data-type="btn-second"]');
    config.dataset.runners = '1';
    button_1.setAttribute('data-tip', ''); /* Обнуляю надпись над бегуном */
    button_2.remove();
    if (orientation == 'horizontal') {
        interval.style.width = (ranger.offsetWidth) + 'px';
        interval.style.marginLeft = '0px';
        button_1.style.marginLeft = (ranger.offsetWidth - button_1.offsetWidth) + 'px';
    }
    else if (orientation == 'vertical') {
        interval.style.width = 5 + 'px';
        interval.style.height = ranger.offsetHeight + 'px';
        interval.style.marginTop = 0 + 'px';
        button_1.style.marginTop = 0 + 'px';
    }
}
export function twoRunners(elem, inst) {
    var _a, _b;
    let config = (_b = (_a = elem.parentNode) === null || _a === void 0 ? void 0 : _a.parentNode) === null || _b === void 0 ? void 0 : _b.querySelector('.zdslider-config');
    let orientation = config.dataset.orientation;
    let ranger = elem.parentNode.parentNode.querySelector('.ranger');
    config.dataset.runners = '2';
    let button_1 = ranger.querySelector('[data-type="btn-first"]');
    button_1.setAttribute('data-tip', ''); /* Обнуляю надпись над бегуном */
    let second_button = new Button();
    second_button.setAttribute('data-type', 'btn-second');
    second_button.setAttribute('data-inst', inst);
    second_button.setAttribute('data-tip', ''); /* Обнуляю надпись над бегуном */
    second_button.appendTo(ranger);
    let button_2 = ranger.querySelector('[data-type="btn-second"]');
    let interval = ranger.querySelector('.ranger__interval');
    if (orientation == 'horizontal') {
        interval.style.width = ranger.offsetWidth + 'px';
        button_1.style.marginLeft = '0px';
        button_2.style.marginLeft = (ranger.offsetWidth - button_1.offsetWidth) + 'px';
    }
    else if (orientation == 'vertical') {
        interval.style.width = 5 + 'px';
        interval.style.height = ranger.offsetHeight + 'px';
        interval.style.marginTop = 0 + 'px';
        button_1.style.marginTop = ranger.offsetHeight + 'px';
        button_2.classList.add('ranger-vert__button');
        button_2.style.marginTop = 0 + 'px';
    }
}
