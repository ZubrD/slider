export function showTip ( elem: HTMLElement, orientation: string ) {
  let parent: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider')
  let parentRanger: HTMLElement = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  for (let elem of buttons) {
    if ( orientation == 'horizontal' ) {
      elem.classList.add('ranger__button-tip')
    } else if ( orientation == 'vertical' ) {
      elem.classList.add('ranger-vert__button-tip')
    }
  }
}
  
export function hideTip ( elem: HTMLElement ) {
  let parent: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider')
  let tip: HTMLInputElement = elem.parentNode.querySelector('.zdslider-panel__check-tip')
  tip.checked = false           /* Сбрасываю флаг надписи */
  let parentRanger: HTMLElement = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  for (let elem of buttons) {     /* Удаляю стили ярлыков */
    elem.classList.remove('ranger__button-tip')
    elem.classList.remove('ranger-vert__button-tip')
  }
}

export function forTip ( target: HTMLElement, coord: number ) {
  const config: HTMLElement = target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  const configMin: number = Number(config.dataset.min)
  const configMax: number = Number(config.dataset.max)
  // const ranger_height: number = ( target.parentNode as HTMLElement).offsetHeight
  // const ranger_width: number = ( target.parentNode as HTMLElement ).offsetWidth
  const ranger_height = Number ( config.dataset.height );
  const ranger_width = Number ( config.dataset.width );
  const orientation: string = config.dataset.orientation
  if ( orientation == 'horizontal' ) {
    return  Math.round(((configMax - configMin) / (ranger_width - 12) ) * (coord)) + configMin    
  } else if ( orientation == 'vertical' ) {
    return  Math.round(((configMax - configMin) / ranger_height ) * (coord)) + configMin
  } 
}

export function reValueTip ( element: HTMLElement ) {     /* Изменение значения атрибута tip  при изменении min, max в панели */
  let parent = element.parentNode.parentNode as HTMLElement
  let zdslider: HTMLElement = parent.querySelector('.zdslider');
  let input = parent.querySelector('.zdslider-panel__check-tip') as HTMLInputElement
  input.checked = false

  let buttons = zdslider.querySelectorAll('.ranger__button')
  for ( let elem of buttons ) {
    ( elem as HTMLElement ).dataset.tip = ''
  }
  hideTip( element )
}
