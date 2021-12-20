export function toVertical (event) {
    let zdslider = event.target.parentNode.parentNode.childNodes[1]
    let ranger = zdslider.querySelector('.ranger')
    let ranger__interval = zdslider.querySelector('.ranger__interval')
    let ranger_scale = zdslider.querySelector('.ranger__scale')
    let ranger_scale_division = zdslider.querySelector('.ranger__scale-division')
    let ranger_scale_division_spans = zdslider.querySelectorAll('.ranger__scale-division-span')
    let ranger_buttons = zdslider.querySelectorAll('.ranger__button')
    zdslider.setAttribute('data-orientation', 'vertical')
    zdslider.classList.add('zdslider-vert')
    ranger.classList.add('ranger-vert')
    ranger__interval.classList.add('ranger-vert__interval')
    ranger_scale.classList.add('ranger-vert__scale')
    ranger_scale_division.classList.add('ranger-vert__scale-division')
    for (let elem of ranger_scale_division_spans) {
        elem.classList.add('ranger-vert__scale-division-span')
    }
    for ( let elem of ranger_buttons) {
        elem.classList.add('ranger-vert__button')
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
    zdslider.setAttribute('data-orientation', 'horizontal')
    zdslider.classList.remove('zdslider-vert')
    ranger.classList.remove('ranger-vert')
    ranger__interval.classList.remove('ranger-vert__interval')
    ranger_scale.classList.remove('ranger-vert__scale')
    ranger_scale_division.classList.remove('ranger-vert__scale-division')
    for (let elem of ranger_scale_division_spans) {
        elem.classList.remove('ranger-vert__scale-division-span')
    } 
    for ( let elem of ranger_buttons) {
        elem.classList.remove('ranger-vert__button')
    }       
}