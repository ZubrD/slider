export function showTip (event) {
  let parent = event.target.parentNode.parentNode.childNodes[1]
  let parentRanger = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  let orientation = parent.dataset.orientation
  for (let elem of buttons) {
    if ( orientation == 'horizontal' ) {
      elem.classList.add('ranger__button-tip')
    } else if ( orientation == 'vertical' ) {
      elem.classList.add('ranger-vert__button-tip')
    }
  }
}
  
export function hideTip (event) {
  let parent = event.target.parentNode.parentNode.childNodes[1]
  let parentRanger = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  let orientation = parent.dataset.orientation
  for (let elem of buttons) {
    if ( orientation == 'horizontal' ) {
      elem.classList.remove('ranger__button-tip')
    } else if ( orientation == 'vertical' ) {
      elem.classList.remove('ranger-vert__button-tip')
    }
  }
}

export function forTip (target, coord) {
  let configParent = target.parentNode.parentNode.parentNode.childNodes[3]  /* Для надписи над бегуном */
  let configInputMin = configParent.querySelector('.zdslider-config__min')
  let configInputMax = configParent.querySelector('.zdslider-config__max')
  let configMin = Number(configInputMin.dataset.min)
  let configMax = Number(configInputMax.dataset.max)
  let orientation = target.parentNode.parentNode.dataset.orientation
  if ( orientation == 'horizontal' ) {
    return  Math.round(((configMax - configMin) / 488 ) * (coord)) + configMin
  } else if ( orientation == 'vertical' ) {
    return  Math.round(((configMax - configMin) / 500 ) * (coord)) + configMin
  } 
}

export function reValueTip ( event, parent ) {     /* Изменение значения атрибута tip  при изменении min, max в панели */
  let zdslider = parent.parentNode.childNodes[1]
  let input = parent.querySelector('.zdslider-config__check-tip')
  input.checked = false
  // let min_input = parent.querySelector('.zdslider-config__min')
  // let max_input = parent.querySelector('.zdslider-config__max')  
  // let min_value = Number(min_input.value)
  // let max_value = Number(max_input.value)
  let buttons = zdslider.querySelectorAll('.ranger__button')
  for ( let elem of buttons ) {
    elem.dataset.tip = ''

    // if ( buttons.length == 2) {
    //   let button_1 = zdslider.querySelector('[data-type="btn-first"]')
    //   let button_2 = zdslider.querySelector('[data-type="btn-second"]')

    //   button_1.dataset.tip = min_value
    //   button_2.dataset.tip = max_value
    // } else {
    //   let button_1 = buttons.querySelector('[data-type="btn-first"]')
    //   button_1.dataset.tip = max
    // }
  }
  hideTip( event )
}
