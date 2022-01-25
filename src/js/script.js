// import { Ranger, Interval, Button, Scale, ScaleSpan, Division, DivisionSpan, Settings } from './model.js'
// import { changeMinListener, changeMaxListener, changeStepListener, allChecksListener } from './listeners.js'
// import { getCoords, makeScale } from './scale.js'
// import { Config } from './config.js'
import { Ranger, Interval, Button, Scale, ScaleSpan, Division, DivisionSpan, Settings } from '../js/model.js';
import { changeMinListener, changeMaxListener, changeStepListener, allChecksListener } from '../js/listeners.js';
import { getCoords, makeScale } from '../js/scale.js';
import { Config } from '../js/config.js';
window.onload = sliderInit();
function sliderInit() {
    let config = new Config();
    let runner_number = config.runner_number;
    let min = config.min;
    let max = config.max;
    let step = 1;
    let discrete = config.discrete;
    let orientation = config.orientation;
    let scale_arrs = makeScale(min, max, step);
    let scale_arr = scale_arrs[0]; /* Массив значений шкалы */
    let iteration = scale_arrs[1];
    let iterations_arr = scale_arrs[2];
    let elements = document.querySelectorAll('.zdslider');
    if (elements.length != 0) {
        setStructure(runner_number, min, max, discrete, orientation, scale_arr, iteration, iterations_arr); /* Создание структуры слайдера */
        sliderPositioning(runner_number, orientation); /* Первоначальное размещение слайдера */
    }
    let number_of_sliders = document.querySelectorAll('.zdslider-panel');
    for (let elem of number_of_sliders) {
        elem.addEventListener('click', allChecksListener); /* Слушатель переключателей */
    }
}
function setStructure(runners, min, max, discrete, orientation, scale_arr, iteration, iterations_arr) {
    let elements = document.querySelectorAll('.zdslider');
    let counter = 1; /* Счётчик количества слайдеров для создания атрибутов */
    let i = 0; /*  Счётчик цикла для опр-я номера ranger в массиве */
    for (let elem of elements) {
        if (orientation == 'horizontal') {
        }
        else if (orientation == 'vertical') {
            elem.classList.add('zdslider-vert');
        }
        let ranger = new Ranger(orientation);
        ranger.appendTo(elem);
        // ranger.setAttribute('data-scale_length', scale_arr.length)  /* Для дискретного перемещения */
        let interval = new Interval(orientation);
        let ranger_div = document.querySelectorAll('.ranger')[i];
        interval.appendTo(ranger_div);
        if (runners == 2) {
            let button_1 = new Button(orientation);
            let button_2 = new Button(orientation);
            button_1.setAttribute('data-type', 'btn-first');
            button_2.setAttribute('data-type', 'btn-second');
            button_1.appendTo(ranger_div);
            button_2.appendTo(ranger_div);
        }
        else {
            let button_1 = new Button(orientation);
            button_1.setAttribute('data-type', 'btn-first');
            button_1.appendTo(ranger_div);
        }
        let division = new Division(orientation);
        for (let el of scale_arr) {
            let span = new DivisionSpan(orientation);
            span.appendTo(division);
        }
        division.appendTo(elem);
        let scale = new Scale(orientation);
        for (let el of scale_arr) {
            let span = new ScaleSpan(orientation);
            span.appendTo(scale);
            span.inner_HTML(el);
        }
        scale.appendTo(elem);
        let settings = new Settings(); /* Слой для обмена данными между Моделью и Контроллером, */
        settings.setAttribute('data-inst', counter);
        settings.setAttribute('data-runners', runners); /* Моделью и Представлением */
        settings.setAttribute('data-min', min);
        settings.setAttribute('data-max', max);
        settings.setAttribute('data-discrete', discrete);
        settings.setAttribute('data-orientation', orientation);
        settings.setAttribute('data-tip', 'no');
        settings.setAttribute('data-scale_length', scale_arr.length); /* Для дискретного перемещения */
        settings.setAttribute('data-btn1_coord', 0); /* Координаты первого бегуна */
        settings.setAttribute('data-btn2_coord', ranger_div.offsetWidth); /* Координаты первого бегуна */
        settings.appendTo(elem.parentNode);
        let conf_input_min = document.querySelectorAll('.zdslider-panel__min')[i];
        conf_input_min.setAttribute('data-min', String(min));
        conf_input_min.setAttribute('data-max', String(max));
        conf_input_min.value = String(min);
        conf_input_min.addEventListener('change', changeMinListener);
        let conf_input_max = document.querySelectorAll('.zdslider-panel__max')[i];
        conf_input_max.setAttribute('data-min', String(min));
        conf_input_max.setAttribute('data-max', String(max));
        conf_input_max.value = String(max);
        conf_input_max.addEventListener('change', changeMaxListener);
        let conf_input_step = document.querySelectorAll('.zdslider-panel__step')[i];
        conf_input_step.setAttribute('data-steps', String(iterations_arr));
        conf_input_step.setAttribute('data-iteration', String(iteration));
        conf_input_step.setAttribute('data-current', String(iteration));
        if (iterations_arr.length != 0) {
            conf_input_step.setAttribute('max', String(iterations_arr[0]));
            conf_input_step.setAttribute('min', String(iterations_arr[iterations_arr.length - 1]));
        }
        else { /* Если интервалов для шкалы нет, то делаю инпут неактивным */
            conf_input_step.disabled = true;
        }
        conf_input_step.value = conf_input_step.dataset.iteration;
        conf_input_step.addEventListener('input', changeStepListener);
        counter++;
        i++;
    }
}
function sliderPositioning(runners, orientation) {
    let elements = document.querySelectorAll('.zdslider');
    let i = 0;
    for (let elem of elements) {
        let ranger = document.querySelectorAll('.ranger')[i];
        let interval = document.querySelectorAll('.ranger__interval')[i];
        let button_1 = document.querySelectorAll('[data-type="btn-first"]')[i];
        if (orientation == 'horizontal') {
            interval.style.width = (ranger.offsetWidth) + 'px';
        }
        else if (orientation == 'vertical') {
            interval.style.height = (ranger.offsetHeight) - 5 + 'px'; /* 5 - это ширина риски шкалы */
        }
        if (runners == 1) {
            if (orientation == 'horizontal') {
                button_1.style.marginLeft = (ranger.offsetWidth - button_1.offsetWidth) + 2 + 'px';
                initialButtonPosition(i, runners);
            }
            else if (orientation == 'vertical') {
                button_1.style.marginTop = 0 + 'px';
            }
        }
        if (runners == 2) {
            if (orientation == 'horizontal') {
                button_1.style.marginLeft = '0px';
                let button_2 = document.querySelectorAll('[data-type="btn-second"]')[i];
                button_2.style.marginLeft = (ranger.offsetWidth - button_2.offsetWidth) + 'px';
                initialButtonPosition(i, runners); /* Исходные позиции бегунов сохраняю в конфиге */
            }
            else if (orientation == 'vertical') {
                button_1.style.marginTop = ranger.offsetHeight + 'px';
                let button_2 = document.querySelectorAll('[data-type="btn-second"]')[i];
                button_2.style.marginTop = 0 + 'px';
            }
        }
        i++;
    }
}
function initialButtonPosition(i, runners) {
    let config = document.querySelectorAll('.zdslider-config')[i];
    let btn1 = document.querySelectorAll('[data-type="btn-first"]')[i];
    let initBtn1Pos = getCoords(btn1);
    config.dataset.btn1_init_pos = String(initBtn1Pos.left);
    if (runners == 2) {
        let btn2 = document.querySelectorAll('[data-type="btn-second"]')[i];
        let initBtn2Pos = getCoords(btn2);
        config.dataset.btn2_init_pos = initBtn2Pos.left;
    }
}
