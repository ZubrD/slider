/**
 * @jest-environment jsdom
 */

import { showTip, hideTip } from '../js/tipToggler.js'

test ('Проверка функции showTip из модуля tipToggler.js', () => {
    document.body.innerHTML = `

        <div class="zdslider-wrapper">
            <div class="zdslider"><div class="ranger" data-type="ranger"><div class="ranger__interval" data-type="interval" style="width: 500px;"></div><button class="ranger__button" data-type="btn-first" style="margin-left: 0px;"></button><button class="ranger__button" data-type="btn-second" style="margin-left: 488px;"></button></div><div class="ranger__scale-division"><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span></div><div class="ranger__scale"><span class="ranger__scale-span">10</span><span class="ranger__scale-span">30</span><span class="ranger__scale-span">50</span><span class="ranger__scale-span">70</span><span class="ranger__scale-span">90</span><span class="ranger__scale-span">110</span><span class="ranger__scale-span">130</span><span class="ranger__scale-span">150</span></div></div>
            <div class="zdslider-panel">
                <input type="checkbox" class="zdslider-panel__check-runners" data-run="run"><label>Бегуны</label><br>
                <input type="checkbox" class="zdslider-panel__check-discete" data-discrete="discrete"><lable>Дискретный</lable><br>
                <input type="checkbox" class="zdslider-panel__check-tip" data-tip="tip"><lable>Ярлык</lable><br>
                <input type="checkbox" class="zdslider-panel__check-orient" data-orient="orient"><lable>Вертикальный</lable>
                <input type="number" class="zdslider-panel__min" data-min="10" data-max="150">
                <input type="number" class="zdslider-panel__max" data-min="10" data-max="150">
                <input type="number" class="zdslider-panel__step" onkeydown="return false" data-steps="70,35,28,20" data-iteration="20" data-current="20" max="70" min="20">
            </div>
        <div class="zdslider-config" data-inst="1" data-runners="2" data-min="10" data-max="150" data-discrete="no" data-orientation="horizontal" data-tip="no" data-scale_length="8" data-btn1_coord="0" data-btn2_coord="500" data-btn1_init_pos="7.986111640930176" data-btn2_init_pos="495.9722595214844"></div></div>

  `;
    let element = document.body.querySelector('.zdslider-panel__check-tip')

    showTip( element, 'horizontal')                 /* Вызываю в первый раз */

    let buttons = document.body.querySelectorAll('.ranger__button')

    for ( let button of buttons ) {
        expect ( button.classList.contains ( 'ranger__button-tip' ) ).toBe ( true )        
    }

    showTip( element, 'vertical')                   /* Вызываю во второй раз */

    let buttons_v = document.body.querySelectorAll('.ranger__button')

    for ( let button of buttons_v ) {      
        expect ( button.classList.contains ( 'ranger-vert__button-tip' ) ).toBe ( true )        
    }    

});

// test ('Проверка функции hideTip из модуля tipToggler.js', () => {
//     document.body.innerHTML = `

//         <div class="zdslider-wrapper">
//             <div class="zdslider"><div class="ranger" data-type="ranger"><div class="ranger__interval" data-type="interval" style="width: 500px;"></div><button class="ranger__button" data-type="btn-first" style="margin-left: 0px;"></button><button class="ranger__button" data-type="btn-second" style="margin-left: 488px;"></button></div><div class="ranger__scale-division"><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span><span class="ranger__scale-division-span"></span></div><div class="ranger__scale"><span class="ranger__scale-span">10</span><span class="ranger__scale-span">30</span><span class="ranger__scale-span">50</span><span class="ranger__scale-span">70</span><span class="ranger__scale-span">90</span><span class="ranger__scale-span">110</span><span class="ranger__scale-span">130</span><span class="ranger__scale-span">150</span></div></div>
//             <div class="zdslider-panel">
//                 <input type="checkbox" class="zdslider-panel__check-runners" data-run="run"><label>Бегуны</label><br>
//                 <input type="checkbox" class="zdslider-panel__check-discete" data-discrete="discrete"><lable>Дискретный</lable><br>
//                 <input type="checkbox" class="zdslider-panel__check-tip" data-tip="tip"><lable>Ярлык</lable><br>
//                 <input type="checkbox" class="zdslider-panel__check-orient" data-orient="orient"><lable>Вертикальный</lable>
//                 <input type="number" class="zdslider-panel__min" data-min="10" data-max="150">
//                 <input type="number" class="zdslider-panel__max" data-min="10" data-max="150">
//                 <input type="number" class="zdslider-panel__step" onkeydown="return false" data-steps="70,35,28,20" data-iteration="20" data-current="20" max="70" min="20">
//             </div>
//         <div class="zdslider-config" data-inst="1" data-runners="2" data-min="10" data-max="150" data-discrete="no" data-orientation="horizontal" data-tip="no" data-scale_length="8" data-btn1_coord="0" data-btn2_coord="500" data-btn1_init_pos="7.986111640930176" data-btn2_init_pos="495.9722595214844"></div></div>

//   `;

//     let element = document.body.querySelector('.zdslider-panel__check-tip');

//     hideTip ( element )

//     let buttons = document.body.querySelectorAll('.ranger__button')

//     for ( let button of buttons ) {
//         let length = button.classList.length
//         expect (button.classList[length - 1]).toBe ('ranger__button-tip')        
//     }

// });

