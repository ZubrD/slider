// import { getCoords, } from './scale.js'
// import { forTip } from './tipToggler.js'
import { getCoords, } from '../js/scale.js'
import { forTip } from '../js/tipToggler.js'

export function clickMouse ( event: MouseEvent ) {
    console.log('Вызов из mouseClick')
    let elem = event.target as HTMLElement
    let division: HTMLElement = elem.parentNode.parentNode.querySelector('.ranger__scale-division')
  
    if ( event.target == division) {        /* Если клик на риску то будет ошибка */
                                            /* Этот блок только если клик был на .ranger__scale-division */
        const config: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider-config')
        const buttonsNumber: number = Number ( config.dataset.runners )
        const orientation: string = config.dataset.orientation
  
        const btn1: HTMLElement = elem.parentNode.querySelector('[data-type="btn-first"]')
        const btn2: HTMLElement = elem.parentNode.querySelector('[data-type="btn-second"]')
        const interval: HTMLElement = elem.parentNode.querySelector('.ranger__interval')
        const target: HTMLElement = elem.parentNode.querySelector('.ranger__button')
  
        let divisionLeft: number, divisionTop: number, numberForTip: number
          
        if ( orientation == 'horizontal' ) {
          let division_coord: DOMRect = getCoords ( division )
          let halfWidth: number = btn1.offsetWidth / 2                /* Половина ширины бегуна, чтобы выставить его по центру клика */         
          let clientX = event.clientX
          let pageX = event.pageX
          if (localStorage.test) { clientX = Number(localStorage.client_1); pageX = Number(localStorage.page_1); }
          if ( clientX < pageX ) { /* Если левый край слайдера выходит за пределы страницы при увеличении масштаба */
              divisionLeft = event.pageX - event.clientX + division_coord.left
          } 
          if (localStorage.test) { clientX = Number(localStorage.client_2); pageX = Number(localStorage.page_2); }
          if (clientX >= pageX) {
              divisionLeft = division_coord.left
          }   
          
          let left: number = event.pageX - divisionLeft - halfWidth
          let right: number = division.offsetWidth - btn1.offsetWidth 
          if (localStorage.test) { left = Number(localStorage.left_1); }
          if ( left < 0 ) left = 0;               /* Чтобы бегун не выходил за границу слева */
          if (localStorage.test) { left = Number(localStorage.left_2); right = Number(localStorage.right_2); }                          
          if ( left > right ) left = right;     /* Чтобы бегун не выходил за границу справа */   
              
          if ( buttonsNumber == 1 ) {
  
              btn1.style.marginLeft = left + 'px'
              interval.style.width = left + 'px' 
              
              config.dataset.btn1_tip = forTip ( target, left )     /* Передача значения в конфиг */
              btn1.dataset.tip = config.dataset.btn1_tip          /* Значение над бегуном */
  
          } else if ( buttonsNumber == 2 ) {
              let left1: number = Number ( config.dataset.btn1_coord )
              let left2: number = Number ( config.dataset.btn2_coord )
              let division_offsetWidth = division.offsetWidth
              if (localStorage.test) { left = Number(localStorage.left_3); division_offsetWidth = Number(localStorage.division_3); }
              if (left < (division_offsetWidth / 2)) {
                  left1 = left
                  config.dataset.btn1_coord = String ( left )            /* Передача текущей координаты в конфиг */
                  btn1.style.marginLeft = left1 + 'px'
  
                  config.dataset.btn1_tip = forTip ( target, left )     /* Передача значения в конфиг */
                  btn1.dataset.tip = config.dataset.btn1_tip          /* Значение над бегуном */
              } 
              if (localStorage.test) { left = Number(localStorage.left_4); division_offsetWidth = Number(localStorage.division_4); }
              if (left >= (division_offsetWidth / 2)) {
                  left2 = left
                  config.dataset.btn2_coord = String ( left )
                  btn2.style.marginLeft = left2 + 'px'
  
                  config.dataset.btn2_tip = forTip ( target, left )     /* Передача значения в конфиг */
                  btn2.dataset.tip = config.dataset.btn2_tip          /* Значение над бегуном */
              }
  
              interval.style.width = ( left2-left1 ) + 'px';
              interval.style.marginLeft = left1 + 'px'; 
  
          }        
        } else if ( orientation == 'vertical' ) {
  
          let division_coord: DOMRect = getCoords ( division )
          let clientY = event.clientY
          let pageY = event.pageY
          if (localStorage.test) { clientY = Number(localStorage.client_1); pageY = Number(localStorage.page_1); }
          if (clientY < pageY) { /* Если верхний край слайдера выходит за пределы страницы при увеличении масштаба */
            divisionTop = event.pageY - event.clientY + division_coord.top
          } 
          if (localStorage.test) { clientY = Number(localStorage.client_2); pageY = Number(localStorage.page_2); }
          if (clientY >= pageY) {
            divisionTop = division_coord.top
          }
  
          let top: number = event.pageY - divisionTop 
          let bottom: number = division.offsetHeight 
          if (localStorage.test) { top = Number(localStorage.top_1); }
          if ( top < 0 ) top = 0;               /* Чтобы бегун не выходил за границу сверху */
          if (localStorage.test) { top = Number(localStorage.top_2); bottom = Number(localStorage.bottom_2) }                          
          if ( top > bottom ) top = bottom;     /* Чтобы бегун не выходил за границу снизу */ 
  
          if ( buttonsNumber == 1 ) {
            btn1.style.marginTop = top + 'px'
            interval.style.marginTop = top + 'px'
            interval.style.height = division.offsetHeight - top + 'px'
            
            numberForTip = division.offsetHeight - top
            config.dataset.btn1_tip = forTip( target, numberForTip )     /* Передача значения в конфиг */
            btn1.dataset.tip = config.dataset.btn1_tip        /* Значение над бегуном */
  
          } else if ( buttonsNumber == 2 ) {
            let top1: number = Number ( config.dataset.btn1_coord )
            let top2: number = Number ( config.dataset.btn2_coord )
            let division_offsetHeight = division.offsetHeight
            if (localStorage.test) { top = Number(localStorage.top_3); division_offsetHeight = Number(localStorage.division_3) }
  
            if (top > (division_offsetHeight / 2)) {
                top1 = top
                config.dataset.btn1_coord = String ( division.offsetHeight - top )            /* Передача текущей координаты в конфиг */
                btn1.style.marginTop = top1 + 'px'
  
                numberForTip = division.offsetHeight - top
                config.dataset.btn1_tip = forTip(target, numberForTip)     /* Передача значения в конфиг */
                btn1.dataset.tip = config.dataset.btn1_tip          /* Значение над бегуном */
                
            } 
            if (localStorage.test) { top = Number(localStorage.top_4); division_offsetHeight = Number(localStorage.division_4) }
            if (top < (division_offsetHeight / 2)) {
                top2 = top
                config.dataset.btn2_coord = String ( division.offsetHeight - top )
                btn2.style.marginTop = top2 + 'px'
  
                numberForTip = division.offsetHeight - top
                config.dataset.btn2_tip = forTip ( target, numberForTip )     /* Передача значения в конфиг */
                btn2.dataset.tip = config.dataset.btn2_tip          /* Значение над бегуном */
            }
  
            top1 = Number ( config.dataset.btn1_coord )           /* Проще и правильнее взять из модели */ 
            top2 = Number ( config.dataset.btn2_coord )   

            interval.style.height = ( top2-top1 ) + 'px';
            interval.style.marginTop = division.offsetHeight - top2 + 'px'; 
          }  
        }
    }
  }