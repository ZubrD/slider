import { hideTip } from './tipToggler.js'

export function toVertical ( event ) {
    let zdslider = event.target.parentNode.parentNode.childNodes[1]
    let ranger = zdslider.querySelector('.ranger')
    let ranger__interval = zdslider.querySelector('.ranger__interval')
    let ranger_scale = zdslider.querySelector('.ranger__scale')
    let ranger_scale_division = zdslider.querySelector('.ranger__scale-division')
    let ranger_scale_division_spans = zdslider.querySelectorAll('.ranger__scale-division-span')
    let ranger_buttons = zdslider.querySelectorAll('.ranger__button')

    zdslider.dataset.orientation = 'vertical'

    zdslider.classList.add('zdslider-vert')
    ranger.classList.add('ranger-vert')
    ranger__interval.classList.add('ranger-vert__interval')
    ranger_scale.classList.add('ranger-vert__scale')
    ranger_scale_division.classList.add('ranger-vert__scale-division')

    hideTip ( event )                           /* Сброс флага ярлыка */ 
    
    ranger__interval.style.height = (ranger.offsetHeight) + 'px';   
    ranger__interval.style.width = 5 + 'px'
    ranger__interval.style.marginLeft = 0 + 'px'   

    for (let elem of ranger_scale_division_spans) {
        elem.classList.add('ranger-vert__scale-division-span')
    }

    for ( let elem of ranger_buttons) {
        elem.classList.add('ranger-vert__button')
        elem.dataset.tip = ''               /* Сброс значений ярлыков */

        if (ranger_buttons.length == 1) {           /* Количество бегунов */
            elem.style.marginTop = 0 + 'px';
            elem.style.marginLeft = 0 + 'px'
        } else if (ranger_buttons.length == 2) {
            if ( elem.dataset.type == 'btn-first' ) {
                elem.style.marginTop = ranger.offsetHeight + 'px';
                elem.style.marginLeft = 0 + 'px'
            } else if ( elem.dataset.type == 'btn-second' ) {
                elem.style.marginTop = 0 + 'px'
                elem.style.marginLeft = 0 + 'px'
            }
        }        
    }
}

export function toHorizontal (event)  {
    let zdslider = event.target.parentNode.parentNode.childNodes[1]
    let ranger = zdslider.querySelector('.ranger')
    let ranger__interval = zdslider.querySelector('.ranger__interval')
    let ranger_scale = zdslider.querySelector('.ranger__scale')
    let ranger_scale_division = zdslider.querySelector('.ranger__scale-division')
    let ranger_scale_division_spans = zdslider.querySelectorAll('.ranger__scale-division-span')
    let ranger_buttons = zdslider.querySelectorAll('.ranger__button')

    zdslider.dataset.orientation = 'horizontal'

    zdslider.classList.remove('zdslider-vert')
    ranger.classList.remove('ranger-vert')
    ranger__interval.classList.remove('ranger-vert__interval')
    ranger_scale.classList.remove('ranger-vert__scale')
    ranger_scale_division.classList.remove('ranger-vert__scale-division')

    hideTip ( event )                           /* Сброс флага ярлыка */

    ranger__interval.style.width = ranger.offsetWidth + 'px';
    ranger__interval.style.height = 5 + 'px'
    ranger__interval.style.marginTop = 0 + 'px'

    for (let elem of ranger_scale_division_spans) {
        elem.classList.remove('ranger-vert__scale-division-span')
    } 

    for ( let elem of ranger_buttons) {
        elem.classList.remove('ranger-vert__button')
        elem.classList.remove('ranger-vert__button-tip')
        elem.dataset.tip = ''           /* Сброс значений ярлыков. Новые значения из панели */

        if ( ranger_buttons.length == 1 ) {
            elem.style.marginLeft = (ranger.offsetWidth-elem.offsetWidth) + 2 + 'px';
            elem.style.marginTop = 0 + 'px'
        } else if ( ranger_buttons.length == 2 ) {
            if ( elem.dataset.type == 'btn-first' ) {
                elem.style.marginLeft = 0 + 'px'
                elem.style.marginTop = 0 + 'px'
            } else if ( elem.dataset.type == 'btn-second' ) {
                elem.style.marginLeft = (ranger.offsetWidth-elem.offsetWidth) + 'px'; 
                elem.style.marginTop = 0 + 'px'
            }
        }
    }       
}

export function orientationToggler ( event, orientation ) {
    let zdslider = event.target.parentNode.parentNode.childNodes[1]
    zdslider.dataset.orientation = orientation                          /* ЭТОГО БЫТЬ НЕ ДОЛЖНО!!!!!! ВСЁ - В КОНФИГ!!!!! */
    let ranger = zdslider.querySelector('.ranger')
    let ranger__interval = zdslider.querySelector('.ranger__interval')
    let ranger_scale = zdslider.querySelector('.ranger__scale')
    let ranger_scale_division = zdslider.querySelector('.ranger__scale-division')
    let ranger_scale_division_spans = zdslider.querySelectorAll('.ranger__scale-division-span')
    let ranger_buttons = zdslider.querySelectorAll('.ranger__button')

    hideTip ( event )                           /* Сброс флага ярлыка */

    if ( orientation == 'vertical' ) {

        zdslider.classList.add('zdslider-vert')
        ranger.classList.add('ranger-vert')
        ranger__interval.classList.add('ranger-vert__interval')
        ranger_scale.classList.add('ranger-vert__scale')
        ranger_scale_division.classList.add('ranger-vert__scale-division')

        ranger__interval.style.height = (ranger.offsetHeight) + 'px';   
        ranger__interval.style.width = 5 + 'px'
        ranger__interval.style.marginLeft = 0 + 'px'        
        for (let elem of ranger_scale_division_spans) {
            elem.classList.add('ranger-vert__scale-division-span')
        }

        for ( let elem of ranger_buttons) {
            elem.classList.add('ranger-vert__button')
            elem.dataset.tip = ''               /* Сброс значений ярлыков */
    
            if (ranger_buttons.length == 1) {           /* Количество бегунов */
                elem.style.marginTop = 0 + 'px';
                elem.style.marginLeft = 0 + 'px'
            } else if (ranger_buttons.length == 2) {
                if ( elem.dataset.type == 'btn-first' ) {
                    elem.style.marginTop = ranger.offsetHeight + 'px';
                    elem.style.marginLeft = 0 + 'px'
                } else if ( elem.dataset.type == 'btn-second' ) {
                    elem.style.marginTop = 0 + 'px'
                    elem.style.marginLeft = 0 + 'px'
                }
            }        
        }

    } else if ( orientation == 'horizontal' ) {

        zdslider.classList.remove('zdslider-vert')
        ranger.classList.remove('ranger-vert')
        ranger__interval.classList.remove('ranger-vert__interval')
        ranger_scale.classList.remove('ranger-vert__scale')
        ranger_scale_division.classList.remove('ranger-vert__scale-division')

        ranger__interval.style.width = ranger.offsetWidth + 'px';       /* Переопределение стиля интервала после определения класса */
        ranger__interval.style.height = 5 + 'px'
        ranger__interval.style.marginTop = 0 + 'px'

        for (let elem of ranger_scale_division_spans) {
            elem.classList.remove('ranger-vert__scale-division-span')
        }
        
        for ( let elem of ranger_buttons) {
            elem.classList.remove('ranger-vert__button')
            elem.classList.remove('ranger-vert__button-tip')
            elem.dataset.tip = ''           /* Сброс значений ярлыков. Новые значения из панели */
    
            if ( ranger_buttons.length == 1 ) {
                elem.style.marginLeft = (ranger.offsetWidth-elem.offsetWidth) + 2 + 'px';
                elem.style.marginTop = 0 + 'px'
            } else if ( ranger_buttons.length == 2 ) {
                if ( elem.dataset.type == 'btn-first' ) {
                    elem.style.marginLeft = 0 + 'px'
                    elem.style.marginTop = 0 + 'px'
                } else if ( elem.dataset.type == 'btn-second' ) {
                    elem.style.marginLeft = (ranger.offsetWidth-elem.offsetWidth) + 'px'; 
                    elem.style.marginTop = 0 + 'px'
                }
            }
        } 
    }

}