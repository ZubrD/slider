export function toVertical (event) {
    event.target.dataset.orient = 'vertical'
    let ranger = event.target.parentNode.parentNode.childNodes[1].firstChild
    ranger.classList.add('ranger-vert')
    // console.log(event.target.parentNode.parentNode.childNodes[1].firstChild)
}

export function toHorizontal (event)  {
    event.target.dataset.orient = 'horizontal'
    let ranger = event.target.parentNode.parentNode.childNodes[1].firstChild
    ranger.classList.remove('ranger-vert')    
}