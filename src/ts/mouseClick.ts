import {getCoords} from '../js/scale.js'
import {forTip} from '../js/tipToggler.js'

export function clickMouse (event: MouseEvent) {

  /* TODO Убирать нельзя - это для тестирования !!! */
    console.log('Вызов из mouseClick');
    let elem = event.target as HTMLElement;
    let division: HTMLElement = elem.parentNode.parentNode.querySelector('.ranger__scale-division');
  
    /* FIXIT Если клик на риску то ничего не произойдёт */
    /* Этот блок только если клик был на .ranger__scale-division */
    if (event.target === division) {                                
        const config: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider-config');
        const buttonsNumber: number = Number (config.dataset.runners);
        const orientation: string = config.dataset.orientation;
  
        const btn1: HTMLElement = elem.parentNode.querySelector('[data-type="btn-first"]');
        const btn2: HTMLElement = elem.parentNode.querySelector('[data-type="btn-second"]');
        const interval: HTMLElement = elem.parentNode.querySelector('.ranger__interval');
        const target: HTMLElement = elem.parentNode.querySelector('.ranger__button');
  
        let divisionLeft: number, divisionTop: number, numberForTip: number;
          
        if (orientation === 'horizontal') {
          let divisionCoord: DOMRect = getCoords(division);

          /* Половина ширины бегуна, чтобы выставить его по центру клика */
          let halfWidth: number = btn1.offsetWidth / 2;                         
          let clientX = event.clientX;
          let pageX = event.pageX;

          /* Тестирование */
          if (localStorage.test) {
            clientX = Number(localStorage.client_1);
            pageX = Number(localStorage.page_1);
          }

          /* Если левый край слайдера выходит за пределы страницы при увеличении масштаба */
          if (clientX < pageX) { 
              divisionLeft = event.pageX - event.clientX + divisionCoord.left
          } 

          /* Тестирование */
          if (localStorage.test) {
            clientX = Number(localStorage.client_2);
            pageX = Number(localStorage.page_2);
          }

          if (clientX >= pageX) {
              divisionLeft = divisionCoord.left;
          }   
          
          let left: number = event.pageX - divisionLeft - halfWidth;
          let right: number = division.offsetWidth - btn1.offsetWidth; 

          /* Тестирование */
          if (localStorage.test) {
            left = Number(localStorage.left_1);
          }

          /* Чтобы бегун не выходил за границу слева */
          if (left < 0) left = 0;   
          
          /* Тестирование */
          if (localStorage.test) {
            left = Number(localStorage.left_2);
            right = Number(localStorage.right_2);
          } 
          
          /* Чтобы бегун не выходил за границу справа */
          if (left > right) left = right;        
              
          if ( buttonsNumber === 1 ) {
  
              btn1.style.marginLeft = left + 'px';
              interval.style.width = left + 'px'; 

              /* Передача значения в конфиг */
              config.dataset.btn1_tip = forTip(target, left);
              
              /* Значение над бегуном */
              btn1.dataset.tip = config.dataset.btn1_tip;          
  
          } else if ( buttonsNumber === 2 ) {
              let left1: number = Number(config.dataset.btn1_coord);
              let left2: number = Number(config.dataset.btn2_coord);
              let division_offsetWidth = division.offsetWidth;

              /* Тестирование */
              if (localStorage.test) {
                left = Number(localStorage.left_3);
                division_offsetWidth = Number(localStorage.division_3);
              }

              if (left < (division_offsetWidth / 2)) {
                  left1 = left

                  /* Передача текущей координаты в конфиг */
                  config.dataset.btn1_coord = String(left);            
                  btn1.style.marginLeft = left1 + 'px';
  
                  /* Передача значения в конфиг */
                  config.dataset.btn1_tip = forTip(target, left); 
                  
                  /* Значение над бегуном */
                  btn1.dataset.tip = config.dataset.btn1_tip;          
              } 

              /* Тестирование */
              if (localStorage.test) {
                left = Number(localStorage.left_4);
                division_offsetWidth = Number(localStorage.division_4);
              }
             
              if (left >= (division_offsetWidth / 2)) {
                  left2 = left;
                  config.dataset.btn2_coord = String(left);
                  btn2.style.marginLeft = left2 + 'px';
  
                  /* Передача значения в конфиг */
                  config.dataset.btn2_tip = forTip(target, left);
                  
                  /* Значение над бегуном */
                  btn2.dataset.tip = config.dataset.btn2_tip;          
              }
  
              interval.style.width = ( left2-left1 ) + 'px';
              interval.style.marginLeft = left1 + 'px'; 
          }        
        } else if ( orientation === 'vertical' ) {
          let division_coord: DOMRect = getCoords(division);
          let clientY = event.clientY;
          let pageY = event.pageY;

          /* Тестирование */
          if (localStorage.test) {
            clientY = Number(localStorage.client_1);
            pageY = Number(localStorage.page_1);
          }

          /* Если верхний край слайдера выходит за пределы страницы при увеличении масштаба */
          if (clientY < pageY) { 
            divisionTop = event.pageY - event.clientY + division_coord.top;
          } 

          /* Тестирование */
          if (localStorage.test) {
            clientY = Number(localStorage.client_2);
            pageY = Number(localStorage.page_2);
          }
          
          if (clientY >= pageY) {
            divisionTop = division_coord.top;
          }
  
          let top: number = event.pageY - divisionTop; 
          let bottom: number = division.offsetHeight;
          
          /* Тестирование */
          if (localStorage.test) {
            top = Number(localStorage.top_1);
          }
          
          /* Чтобы бегун не выходил за границу сверху */
          if ( top < 0 ) top = 0;  
          
          /* Тестирование */
          if (localStorage.test) {
            top = Number(localStorage.top_2);
            bottom = Number(localStorage.bottom_2);
          }                          
          
          /* Чтобы бегун не выходил за границу снизу */ 
          if ( top > bottom ) top = bottom;     
  
          if ( buttonsNumber === 1 ) {
            btn1.style.marginTop = top + 'px';
            interval.style.marginTop = top + 'px';
            interval.style.height = division.offsetHeight - top + 'px';
            
            numberForTip = division.offsetHeight - top;

            /* Передача значения в конфиг */
            config.dataset.btn1_tip = forTip(target, numberForTip); 
            
            /* Значение над бегуном */
            btn1.dataset.tip = config.dataset.btn1_tip;        
  
          } else if ( buttonsNumber === 2 ) {
            let top1: number = Number(config.dataset.btn1_coord);
            let top2: number = Number(config.dataset.btn2_coord);
            let divisionOffsetHeight = division.offsetHeight;

            /* Тестирование */
            if (localStorage.test) {
              top = Number(localStorage.top_3);
              divisionOffsetHeight = Number(localStorage.division_3);
            }
  
            if (top > (divisionOffsetHeight / 2)) {
                top1 = top;

                /* Передача текущей координаты в конфиг */
                config.dataset.btn1_coord = String ( division.offsetHeight - top );            
                btn1.style.marginTop = top1 + 'px';
  
                numberForTip = division.offsetHeight - top;

                /* Передача значения в конфиг */
                config.dataset.btn1_tip = forTip(target, numberForTip); 
                
                /* Значение над бегуном */
                btn1.dataset.tip = config.dataset.btn1_tip;          
                
            } 

            /* Тестирование */
            if (localStorage.test) {
              top = Number(localStorage.top_4);
              divisionOffsetHeight = Number(localStorage.division_4);
            }

            if (top < (divisionOffsetHeight / 2)) {
                top2 = top;
                config.dataset.btn2_coord = String(division.offsetHeight - top);
                btn2.style.marginTop = top2 + 'px';
  
                numberForTip = division.offsetHeight - top;

                /* Передача значения в конфиг */
                config.dataset.btn2_tip = forTip ( target, numberForTip );  
                
                /* Значение над бегуном */
                btn2.dataset.tip = config.dataset.btn2_tip;          
            }
  
            /* Проще и правильнее взять из модели */
            top1 = Number(config.dataset.btn1_coord);            
            top2 = Number(config.dataset.btn2_coord);   

            interval.style.height = (top2-top1) + 'px';
            interval.style.marginTop = division.offsetHeight - top2 + 'px'; 
          }  
        }
    }
  }