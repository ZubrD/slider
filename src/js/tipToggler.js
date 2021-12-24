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
