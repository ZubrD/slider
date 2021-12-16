export function showTip (event) {
  let parent = event.target.parentNode.parentNode.childNodes[1]
  let parentRanger = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  for (let elem of buttons) {
    elem.classList.add('ranger__button-tip')
  }
}
  
export function hideTip (event) {
  let parent = event.target.parentNode.parentNode.childNodes[1]
  let parentRanger = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  for (let elem of buttons) {
    elem.classList.remove('ranger__button-tip')
  }
}

export function forTip (target, coord) {
  let configParent = target.parentNode.parentNode.parentNode.childNodes[3]  /* Для надписи над бегуном */
  let configInputMin = configParent.querySelector('.zdslider-config__min')
  let configInputMax = configParent.querySelector('.zdslider-config__max')
  let configMin = Number(configInputMin.dataset.min)
  let configMax = Number(configInputMax.dataset.max)
  let raschet =  Math.floor(((configMax - configMin) / 488 ) * (coord)) + configMin
  return raschet                                                         
}