export function showTip ( event, orientation ) {
  let parent = event.target.parentNode.parentNode.querySelector('.zdslider')
  let parentRanger = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  for (let elem of buttons) {
    if ( orientation == 'horizontal' ) {
      elem.classList.add('ranger__button-tip')
    } else if ( orientation == 'vertical' ) {
      elem.classList.add('ranger-vert__button-tip')
    }
  }
}
  
export function hideTip ( event, orientation ) {
  let parent = event.target.parentNode.parentNode.querySelector('.zdslider')
  let tip = event.target.parentNode.querySelector('.zdslider-panel__check-tip')
  tip.checked = false           /* Сбрасываю флаг надписи */
  let parentRanger = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  for (let elem of buttons) {
    if ( orientation == 'horizontal' ) {
      elem.classList.remove('ranger__button-tip')
    } else if ( orientation == 'vertical' ) {
      elem.classList.remove('ranger-vert__button-tip')
    }
  }
}

export function forTip (target, coord) {
  const config = target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  const configMin = Number(config.dataset.min)
  const configMax = Number(config.dataset.max)
  const ranger_height = target.parentNode.offsetHeight
  const ranger_width = target.parentNode.offsetWidth
  const orientation = config.dataset.orientation
  if ( orientation == 'horizontal' ) {
    return  Math.round(((configMax - configMin) / (ranger_width - 12) ) * (coord)) + configMin    
  } else if ( orientation == 'vertical' ) {
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
