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
  let tip = event.target.parentNode.querySelector('.zdslider-panel__check-tip')
  tip.checked = false           /* Сбрасываю флаг надписи */
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
  let configInputMin = configParent.querySelector('.zdslider-panel__min')
  let configInputMax = configParent.querySelector('.zdslider-panel__max')
  let configMin = Number(configInputMin.dataset.min)
  let configMax = Number(configInputMax.dataset.max)
  let ranger_height = target.parentNode.offsetHeight
  let orientation = target.parentNode.parentNode.dataset.orientation
  if ( orientation == 'horizontal' ) {
    return  Math.round(((configMax - configMin) / 488 ) * (coord)) + configMin
  } else if ( orientation == 'vertical' ) {
    // return  Math.round(((configMax - configMin) / 500 ) * (coord)) + configMin
    console.log(ranger_height)
    return  Math.round(((configMax - configMin) / ranger_height ) * (coord)) + configMin
  } 
}

export function reValueTip ( event, parent ) {     /* Изменение значения атрибута tip  при изменении min, max в панели */
  // let zdslider = parent.parentNode.childNodes[1]
  let zdslider = parent.parentNode
  let input = parent.querySelector('.zdslider-panel__check-tip')
  input.checked = false

  let buttons = zdslider.querySelectorAll('.ranger__button')
  for ( let elem of buttons ) {
    elem.dataset.tip = ''
  }
  hideTip( event )
}
