export function oneRunner ( event: KeyboardEvent ) {
  let elem = event.target as HTMLElement
  let config: HTMLElement = elem.parentNode?.parentNode?.querySelector('.zdslider-config')
  let orientation: string = config.dataset.orientation
  let ranger: HTMLElement = elem.parentNode.parentNode.querySelector('.ranger')
  let interval: HTMLElement = ranger.querySelector('.ranger__interval')
  let button_1: HTMLElement = ranger.querySelector('[data-type="btn-first"]')   
  let button_2: HTMLElement = ranger.querySelector('[data-type="btn-second"]') 

  config.dataset.runners = '1'
  
  button_1.setAttribute('data-tip', '')     /* Обнуляю надпись над бегуном */
  button_2.remove()   

  if ( orientation == 'horizontal' ) {
    interval.style.width = (ranger.offsetWidth) + 'px';
    interval.style.marginLeft = '0px'
    button_1.style.marginLeft = (ranger.offsetWidth-button_1.offsetWidth) +  'px'; 

  } else if ( orientation == 'vertical' ) {
    interval.style.width = 5 + 'px';
    interval.style.height = ranger.offsetHeight + 'px';
    interval.style.marginTop = 0 + 'px'
    button_1.style.marginTop = 0 + 'px';
  }
}