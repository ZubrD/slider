// import { getCoords, } from './scale.js'
// import { forTip } from './tipToggler.js'
// import { discreteArray } from './mouse.js'
import { getCoords } from '../js/scale.js'
import { forTip } from '../js/tipToggler.js'
import { discreteArray } from '../js/mouse.js'

export function mouseVertDownBtnFirst ( event: MouseEvent ) {
  let elem = event.target as HTMLElement
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let runner_number: number = Number ( config.dataset.runners )
  if ( runner_number == 1 ) {
    mouseVertDownBtnFirstSingle ( event )       /* если один бегун */
  } else if ( runner_number == 2 ) {
    mouseVertDownBtnFirstDouble ( event )       /* первый бегун (левый) если бегунов два */
  }
}
  
export function mouseVertDownBtnSecond ( event: MouseEvent ) {
  console.log('Вызов из mouseVertDownBtnSecond')
  let elem = event.target as HTMLElement
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number: number = Number ( config.dataset.inst )
  let sler = document.querySelectorAll('.ranger')[sler_number-1] as HTMLElement
  let interval: HTMLElement = sler.querySelector('.ranger__interval')     
  let btn1: HTMLElement = sler.querySelector('[data-type="btn-first"]')
  let btn2: HTMLElement = sler.querySelector('[data-type="btn-second"]')

  let discrete_status: string = config.dataset.discrete
  let interval_number: number = Number ( config.dataset.scale_length ) - 1  /* Для дискретного перемещения */

  let sler_coords = getCoords ( sler ) as DOMRect
  let btn1_coords = getCoords ( btn1 ) as DOMRect
  let btn2_coords = getCoords ( btn2 ) as DOMRect
  let shiftY1: number = event.pageY - btn1_coords.top;
  let shiftY2: number = event.pageY - btn2_coords.top;

  document.onmousemove = function ( event: MouseEvent) {
      let top2: number = event.pageY - shiftY2 - sler_coords.top;
      // let down2 = sler.offsetHeight - btn2.offsetHeight;
      let down2: number = sler.offsetHeight;
      if (localStorage.test) { top2 = Number(localStorage.top2_3); }
      if ( top2 < 0 ) top2 = 0; 
      if (localStorage.test) { top2 = Number(localStorage.top2_4); down2 = Number(localStorage.down2_4) }                                
      if ( top2 > down2 ) top2 = down2;         
      btn2.style.marginTop = top2 + 'px'

      shiftY1 = event.pageY - btn1_coords.top; 
      let top1: number = event.pageY - shiftY1 - sler_coords.top;
      // let down1 = sler.offsetHeight - btn1.offsetHeight;
      let down1: number = sler.offsetHeight;
      if (localStorage.test) { top1 = Number(localStorage.top1_3); }
      if ( top1 < 0 ) top1 = 0;
      if (localStorage.test) { top1 = Number(localStorage.top1_4); down1 = Number(localStorage.down1_4) }
      if ( top1 > down1 ) top1 = down1;            
      let discret_arr: number[] = discreteArray ( interval_number, down2 )

      let range: number = discret_arr[1] - discret_arr[0]
      let integ: number = Math.floor ( top2 )
     
      if ( discrete_status == 'yes' ) {
        for ( let num of discret_arr ) {
          if (localStorage.test) {integ = Number(localStorage.integ); num = Number(localStorage.num); range = Number(localStorage.range);}
          if ( integ >= ( num - range / 2 ) && integ < ( num + range / 2 ) ) {
              if (localStorage.test) { num = Number(localStorage.num1_1); top1 = Number(localStorage.top1_1) }
              if ( num < top1 ) 
              {
                interval.style.height = ( top1-num ) + 'px';
                interval.style.marginTop = num + 'px';
              }
              if (localStorage.test) { num = Number(localStorage.num1_2); top1 = Number(localStorage.top1_2) }
              if (num >= top1) {
                interval.style.height = ( num-top1 ) + 'px';
                interval.style.marginTop = top1 + 'px';                
              }
              btn2.style.marginTop = num + 'px' 

              let coords = sler.offsetHeight - num

              config.dataset.btn2_coord = String ( coords )
              config.dataset.btn2_tip = String ( forTip( elem, coords ) )     /* Передача значения в конфиг */
              btn2.dataset.tip = config.dataset.btn2_tip             /* Значение над бегуном */
          }
        }           
      } else if ( discrete_status == 'no' ) {
          if (localStorage.test) { top1 = Number(localStorage.top1_1); top2 = Number(localStorage.top2_1) }
          if ( top1 > top2 )
          {
            interval.style.height = ( top1 - top2 ) + 'px';
            interval.style.marginTop = top2 + 'px';       
          }
          if (localStorage.test) { top1 = Number(localStorage.top1_2); top2 = Number(localStorage.top2_2) }
          if (top1 <= top2) {
            interval.style.height = ( top2 - top1 ) + 'px';
            interval.style.marginTop = top1 + 'px';                
          }

          let coords: number = sler.offsetHeight - top2

          config.dataset.btn2_coord = String ( coords )
          config.dataset.btn2_tip = String ( forTip( elem, coords ) )     /* Передача значения в конфиг */
          btn2.dataset.tip = config.dataset.btn2_tip             /* Значение над бегуном */
      }   
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };
}
  
function mouseVertDownBtnFirstSingle ( event: MouseEvent) {
  console.log('Вызов из mouseVertDownBtnFirstSingle')
  let elem = event.target as HTMLElement
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number: number = Number ( config.dataset.inst )
  let sler = document.querySelectorAll('.ranger')[sler_number-1] as HTMLElement
  let interval: HTMLElement = sler.querySelector('.ranger__interval')     
  let btn1: HTMLElement = sler.querySelector('[data-type="btn-first"]')
  let discrete_status = config.dataset.discrete
  
  let interval_number: number = Number ( config.dataset.scale_length ) - 1  /* Для дискретного перемещения */
  let sler_coords = getCoords ( sler ) as DOMRect
  let btn1_coords = getCoords ( btn1 ) as DOMRect
  let shiftY1: number = event.pageY - btn1_coords.top; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  document.onmousemove = function ( event ) {
    let top1: number = event.pageY - shiftY1 - sler_coords.top;
    let down1: number = sler.offsetHeight ;    /* -5 - чтобы не опускался ниже риски */

    if ( discrete_status == 'yes' ) {
      if (localStorage.test) { top1 = Number(localStorage.top1_1); }
      if ( top1 < 0 ) top1 = 0; 
      if (localStorage.test) { top1 = Number(localStorage.top1_2); down1 = Number(localStorage.down1_2) }                                
      if ( top1 > down1 ) top1 = down1;

      let discret_arr: number[] = discreteArray ( interval_number, down1 )

      let range: number = discret_arr[1] - discret_arr[0]
      let integ: number = Math.floor ( top1 )
      for ( let num of discret_arr ) {
        if (localStorage.test) {integ = Number(localStorage.integ); num = Number(localStorage.num); range = Number(localStorage.range);}
        if ( integ < (num + range / 2 ) && integ > ( num - range / 2 ) ) {
            btn1.style.marginTop = num + 'px'  
            interval.style.marginTop =  num + 'px'
            interval.style.height = sler.offsetHeight - num  + 'px'

            let coords: number = sler.offsetHeight - num            /* Инвертирование значения */

            config.dataset.btn1_coord = String ( coords )
            config.dataset.btn1_tip = String ( forTip ( elem, coords ) )     /* Передача значения в конфиг */
            btn1.dataset.tip = config.dataset.btn1_tip             /* Значение над бегуном */            
        }
      }           
    } else if ( discrete_status == 'no' ) {
        if (localStorage.test) { top1 = Number(localStorage.top1_1); }
        if ( top1 < 0 ) top1 = 0; 
        if (localStorage.test) { top1 = Number(localStorage.top1_2); down1 = Number(localStorage.down1_2) }                                
        if ( top1 > down1 ) top1 = down1;    
        btn1.style.marginTop =  top1 + 'px'
        interval.style.marginTop =  top1 + 'px'
        interval.style.height = sler.offsetHeight - top1 + 'px'

        let coords: number = sler.offsetHeight - top1           /* Инвертирование значения */

        config.dataset.btn1_coord = String ( coords )
        config.dataset.btn1_tip = String ( forTip( elem, coords ) )     /* Передача значения в конфиг */
        btn1.dataset.tip = config.dataset.btn1_tip            /* Значение над бегуном */
    }
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}
  
function mouseVertDownBtnFirstDouble ( event: MouseEvent) {
  console.log('Вызов из mouseVertDownBtnFirstDouble')
  let elem = event.target as HTMLElement
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number: number = Number ( config.dataset.inst )
  let sler = document.querySelectorAll('.ranger')[sler_number-1] as HTMLElement
  let interval: HTMLElement = sler.querySelector('.ranger__interval')     
  let btn1: HTMLElement = sler.querySelector('[data-type="btn-first"]')
  let btn2: HTMLElement = sler.querySelector('[data-type="btn-second"]')

  let discrete_status: string = config.dataset.discrete
  let interval_number: number = Number ( config.dataset.scale_length ) - 1  /* Для дискретного перемещения */
 
  let sler_coords = getCoords ( sler ) as DOMRect
  let btn1_coords = getCoords ( btn1 ) as DOMRect
  let btn2_coords = getCoords ( btn2 ) as DOMRect
  let shiftY1: number = event.pageY - btn1_coords.top; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  let shiftY2: number = event.pageY - btn2_coords.top;

  document.onmousemove = function ( event: MouseEvent ) {
      let top1: number = event.pageY - shiftY1 - sler_coords.top;       
      // let down1 = sler.offsetHeight - btn1.offsetHeight;  
      let down1: number = sler.offsetHeight;  
      shiftY2 = event.pageY - btn2_coords.top; 
      let top2: number = event.pageY - shiftY2 - sler_coords.top;
      let down2: number = sler.offsetHeight;
      if (localStorage.test) { top1 = Number(localStorage.top1_1); }
      if ( top1 < 0 ) top1 = 0;
      if (localStorage.test) { top1 = Number(localStorage.top1_2); down1 = Number(localStorage.down1_2) }                                 
      if ( top1 > down1 ) top1 = down1; 

      let discret_arr: number[] = discreteArray (interval_number, down1)

      let range: number = discret_arr[1] - discret_arr[0]
      let integ: number = Math.floor ( top1 )

      if ( discrete_status == 'yes' ) {
        let counter: number = 0
        for ( let num of discret_arr ) {
          if (localStorage.test) {integ = Number(localStorage.integ); num = Number(localStorage.num); range = Number(localStorage.range);}
          if ( integ < ( num + range / 2 ) && integ > ( num - range / 2 ) ) {
              if (localStorage.test) { num = Number(localStorage.num1_1); top2 = Number(localStorage.top2_1) }
              if ( num > top2 )
              {
                interval.style.height = ( num - top2 ) + 'px';
                interval.style.marginTop = top2 + 'px';
              }
              if (localStorage.test) { num = Number(localStorage.num1_2); top2 = Number(localStorage.top2_2) }
              if (num <= top2) {
                interval.style.height = ( top2 - num ) + 'px';
                interval.style.marginTop = num + 'px';                
              }
              btn1.style.marginTop = num + 'px' 

              let coords: number = sler.offsetHeight - num

              config.dataset.btn1_coord = String ( coords )
              config.dataset.btn1_tip = String ( forTip( elem, coords ) )     /* Передача значения в конфиг */
              btn1.dataset.tip = config.dataset.btn1_tip             /* Значение над бегуном */
          }
          counter ++
        }           
      } else if ( discrete_status == 'no' ) {
          btn1.style.marginTop = top1 + 'px'
          shiftY2 = event.pageY - btn2_coords.top; 
          let top2: number = event.pageY - shiftY2 - sler_coords.top;
          let down2: number = sler.offsetHeight;
          if (localStorage.test) { top2 = Number(localStorage.top2_1); }
          if ( top2 < 0 ) top2 = 0;
          if (localStorage.test) { top2 = Number(localStorage.top2_2); down2 = Number(localStorage.down2_2) }
          if ( top2 > down2 ) top2 = down2; 
          if (localStorage.test) { top1 = Number(localStorage.top1_3); top2 = Number(localStorage.top2_3) }
          if ( top1 > top2 )
          {
            interval.style.height = ( top1 - top2 ) + 'px';
            interval.style.marginTop = top2 + 'px';
          }
          if (localStorage.test) { top1 = Number(localStorage.top1_4); top2 = Number(localStorage.top2_4) }
          if (top1 <= top2) {
            interval.style.height = ( top2 - top1 ) + 'px';
            interval.style.marginTop = top1 + 'px';
          }

          let coords: number = sler.offsetHeight - top1

          config.dataset.btn1_coord = String ( coords )
          config.dataset.btn1_tip = String ( forTip( elem, coords ) )     /* Передача значения в конфиг */
          btn1.dataset.tip = config.dataset.btn1_tip             /* Значение над бегуном */
      }        
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}

