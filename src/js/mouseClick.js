import { getCoords, } from './scale.js'
import { forTip } from './tipToggler.js'

export function clickMouse (event) {
    let division = event.target.parentNode.parentNode.querySelector('.ranger__scale-division')
  
    if ( event.target == division) {        /* Если клик на риску то будет ошибка */
                                            /* Этот блок только если клик был на .ranger__scale-division */
        const config = event.target.parentNode.parentNode.querySelector('.zdslider-config')
        const buttonsNumber = config.dataset.runners
        const orientation = config.dataset.orientation
  
        const btn1 = event.target.parentNode.querySelector('[data-type="btn-first"]')
        const btn2 = event.target.parentNode.querySelector('[data-type="btn-second"]')
        const interval = event.target.parentNode.querySelector('.ranger__interval')
        const target = event.target.parentNode.querySelector('.ranger__button')
  
        let divisionLeft, divisionTop, numberForTip
          
        if ( orientation == 'horizontal' ) {
          let division_coord = getCoords(division)
          let halfWidth = btn1.offsetWidth / 2                /* Половина ширины бегуна, чтобы выставить его по центру клика */         
  
          if ( event.clientX < event.pageX ) { /* Если левый край слайдера выходит за пределы страницы при увеличении масштаба */
              divisionLeft = event.pageX - event.clientX + division_coord.left
          } else {
              divisionLeft = division_coord.left
          }   
          
          let left = event.pageX - divisionLeft - halfWidth
          let right = division.offsetWidth - btn1.offsetWidth 
  
          if (left < 0) left = 0;               /* Чтобы бегун не выходил за границу слева */                          
          if (left > right) left = right;     /* Чтобы бегун не выходил за границу справа */   
              
          if ( buttonsNumber == 1 ) {
  
              btn1.style.marginLeft = left + 'px'
              interval.style.width = left + 'px' 
              
              config.dataset.btn1_tip = forTip(target, left)     /* Передача значения в конфиг */
              btn1.dataset.tip = config.dataset.btn1_tip          /* Значение над бегуном */
  
          } else if ( buttonsNumber == 2 ) {
              let left1 = config.dataset.btn1_coord
              let left2 = config.dataset.btn2_coord
  
              if ( left < ( division.offsetWidth / 2 ) ) {
                  left1 = left
                  config.dataset.btn1_coord = left            /* Передача текущей координаты в конфиг */
                  btn1.style.marginLeft = left1 + 'px'
  
                  config.dataset.btn1_tip = forTip(target, left)     /* Передача значения в конфиг */
                  btn1.dataset.tip = config.dataset.btn1_tip          /* Значение над бегуном */
              } else {
                  left2 = left
                  config.dataset.btn2_coord = left
                  btn2.style.marginLeft = left2 + 'px'
  
                  config.dataset.btn2_tip = forTip(target, left)     /* Передача значения в конфиг */
                  btn2.dataset.tip = config.dataset.btn2_tip          /* Значение над бегуном */
              }
  
              interval.style.width = (left2-left1) + 'px';
              interval.style.marginLeft = left1 + 'px'; 
  
          }        
        } else if ( orientation == 'vertical' ) {
  
          let division_coord = getCoords(division)
  
          if ( event.clientY < event.pageY ) { /* Если верхний край слайдера выходит за пределы страницы при увеличении масштаба */
            divisionTop = event.pageY - event.clientY + division_coord.top
          } else {
            divisionTop = division_coord.top
          }
  
          let top = event.pageY - divisionTop 
          let bottom = division.offsetHeight 
  
          if ( top < 0 ) top = 0;               /* Чтобы бегун не выходил за границу сверху */                          
          if ( top > bottom ) top = bottom;     /* Чтобы бегун не выходил за границу снизу */ 
  
          if ( buttonsNumber == 1 ) {
            btn1.style.marginTop = top + 'px'
            interval.style.marginTop = top + 'px'
            interval.style.height = division.offsetHeight - top + 'px'
            
            numberForTip = division.offsetHeight - top
            config.dataset.btn1_tip = forTip( target, numberForTip )     /* Передача значения в конфиг */
            btn1.dataset.tip = config.dataset.btn1_tip        /* Значение над бегуном */
  
          } else if ( buttonsNumber == 2 ) {
            let top1 = config.dataset.btn1_coord
            let top2 = config.dataset.btn2_coord

  
            if ( top > ( division.offsetHeight / 2 ) ) {
                top1 = top
                config.dataset.btn1_coord = division.offsetHeight - top            /* Передача текущей координаты в конфиг */
                btn1.style.marginTop = top1 + 'px'
  
                numberForTip = division.offsetHeight - top
                config.dataset.btn1_tip = forTip(target, numberForTip)     /* Передача значения в конфиг */
                btn1.dataset.tip = config.dataset.btn1_tip          /* Значение над бегуном */
                
            } else if ( top < ( division.offsetHeight / 2 ) ) {
                top2 = top
                config.dataset.btn2_coord = division.offsetHeight - top
                btn2.style.marginTop = top2 + 'px'
  
                numberForTip = division.offsetHeight - top
                config.dataset.btn2_tip = forTip(target, numberForTip)     /* Передача значения в конфиг */
                btn2.dataset.tip = config.dataset.btn2_tip          /* Значение над бегуном */
            }
  
            top1 = config.dataset.btn1_coord           /* Проще и правильнее взять из модели */ 
            top2 = config.dataset.btn2_coord   

            interval.style.height = ( top2-top1 ) + 'px';
            interval.style.marginTop = division.offsetHeight - top2 + 'px'; 
          }  
        }
    }
  }