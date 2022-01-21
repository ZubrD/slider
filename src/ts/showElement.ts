export function showElement( event: KeyboardEvent ) {
    let elem = event.target as HTMLElement
    let sub_elem: HTMLElement = elem.parentNode?.parentNode?.querySelector('.ranger')
    let datas = sub_elem.dataset.type
    console.log( datas )
}

