export function showTip (event) {
  let parent = event.target.parentNode.parentNode.childNodes[1]
  let parentRanger = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  for (let elem of buttons) {
    elem.classList.add('ranger__button-tip')
  }
}
  
export function hideTip () {
  let parent = event.target.parentNode.parentNode.childNodes[1]
  let parentRanger = parent.querySelector('.ranger')
  let buttons = parentRanger.querySelectorAll('.ranger__button')
  for (let elem of buttons) {
    elem.classList.remove('ranger__button-tip')
  }
}