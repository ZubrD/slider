// import { Scale, Division, DivisionSpan, ScaleSpan} from './model.js'
import { Scale, Division, DivisionSpan, ScaleSpan } from '../js/model.js';
export function getCoords(elem) {
    let coords = elem.getBoundingClientRect();
    return {
        top: coords.top,
        left: coords.left
    };
}
export function makeScale(min, max, step) {
    let step_arr = [];
    let dividers_arr = [];
    let iteration_arr = []; /* Массив размера шага */
    let iter = 0; /* Член массива размеров шага */
    let maximus = 0;
    let iteration = 0;
    let item = 0;
    if (step > 0) {
        let range = max - min;
        for (let i = 2; i < range / 2 + 1; i++) { /* Получаю массив делителей без остатка */
            if (range % i) {
            }
            else {
                dividers_arr.push(i);
            }
        }
        // console.log('dividers_arr: ', dividers_arr)
        if (dividers_arr.length > 0) {
            for (let el of dividers_arr) { /* Определяю наибольшее количество интервалов меньше 10 */
                if (el < 10) {
                    maximus = el;
                    iter = range / maximus;
                    iteration_arr.push(iter); /* Массив размеров шага шкалы */
                }
                else {
                    break;
                }
            }
        }
        else {
            step_arr = [min, max];
            return [step_arr, iteration, iteration_arr];
        }
        if (maximus == 0) { /* Иначе iteration = Infinity */
            step_arr = [min, max];
            return [step_arr, iteration, iteration_arr];
        }
        // console.log('range: ', range)
        // console.log('maximus: ', maximus)
        iteration = range / maximus;
        if (step > 1) { /* Переопределение - этот участок кода */
            iteration = step; /* применяется при изменении размера */
            maximus = range / iteration; /* шага через панель */
        }
        // console.log('iteration: ', iteration)
        // console.log('iteration_arr: ', iteration_arr)
        item = min;
        step_arr.push(min);
        for (let i = 0; i < maximus; i++) { /* Массив значений шкалы */
            item = item + iteration;
            step_arr.push(item);
        }
    }
    else {
        step_arr = [min, max];
    }
    return [step_arr, iteration, iteration_arr];
}
export function reScale(scale_arr, current_inst) {
    let parents = document.querySelectorAll('.zdslider');
    for (let parent of parents) {
        let config = parent.parentNode.querySelector('.zdslider-config');
        if (Number(config.dataset.inst) == current_inst) {
            let current_ranger = parent.querySelector('.ranger');
            let current_scale = parent.querySelector('.ranger__scale');
            let current_division = parent.querySelector('.ranger__scale-division');
            let orientation = config.dataset.orientation;
            current_scale.remove();
            current_division.remove();
            config.dataset.scale_length = String(scale_arr.length); /* Для дискретного перемещения */
            // current_ranger.setAttribute( 'data-scale_length', scale_arr.length )    /* Для дискретного перемещения */
            let division = new Division(orientation);
            division.appendTo(parent);
            for (let el of scale_arr) {
                let span = new DivisionSpan(orientation);
                span.appendTo(division);
            }
            let scale = new Scale(orientation);
            scale.appendTo(parent);
            for (let el of scale_arr) {
                let span = new ScaleSpan(orientation);
                span.appendTo(scale);
                span.inner_HTML(el);
            }
        }
    }
}
export function modifyScaleInput(parent, new_scale_arr) {
    let conf_input_step = parent.querySelector('.zdslider-panel__step');
    let iterations_arr = new_scale_arr[2];
    let iteration = new_scale_arr[1];
    conf_input_step.setAttribute('data-steps', String(iterations_arr));
    conf_input_step.setAttribute('data-iteration', String(iteration));
    conf_input_step.setAttribute('data-current', String(iteration));
    if (iterations_arr.length != 0) {
        conf_input_step.disabled = false;
        conf_input_step.setAttribute('max', String(iterations_arr[0]));
        conf_input_step.setAttribute('min', String(iterations_arr[iterations_arr.length - 1]));
    }
    else { /* Если интервалов для шкалы нет, то делаю инпут неактивным */
        conf_input_step.disabled = true;
    }
    conf_input_step.value = conf_input_step.dataset.iteration;
}
