// import { getCoords, } from './scale.js'
// import { forTip } from './tipToggler.js'
import { getCoords, } from '../js/scale.js'
import { forTip } from '../js/tipToggler.js'

export function mouseDownBtn_1 ( event: MouseEvent ) {
    let elem = event.target as HTMLElement
    let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
    let runner_number: number = Number ( config.dataset.runners )
    if ( runner_number == 1 ) {
      mouseDownBtn_1_Single ( event )       /* если один бегун */
    } else if ( runner_number == 2 ) {
      mouseDownBtn_1_Double ( event )       /* первый бегун (левый) если бегунов два */
    }
  }
  
export function mouseDownBtn_2 ( event: MouseEvent ) {
  let elem = event.target as HTMLElement    /* Для надписи над бегуном */
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number: number = Number ( config.dataset.inst )
  let sler = document.querySelectorAll('.ranger')[sler_number-1] as HTMLElement
  let interval: HTMLElement = sler.querySelector('.ranger__interval')     
  let btn1: HTMLElement = sler.querySelector('[data-type="btn-first"]')
  let btn2: HTMLElement = sler.querySelector('[data-type="btn-second"]')

  let discrete_status: string = config.dataset.discrete
  let interval_number: number = Number ( config.dataset.scale_length ) - 1  /* Для дискретного перемещения */

  let sler_coords: DOMRect = getCoords ( sler )
  let btn1_coords: DOMRect = getCoords ( btn1 )
  let btn2_coords: DOMRect = getCoords ( btn2 )
  let shiftX1 = event.pageX - btn1_coords.left;
  let shiftX2 = event.pageX - btn2_coords.left;

  document.onmousemove = function (event) {
      let left2: number = event.pageX - shiftX2 - sler_coords.left;
      let right2: number = sler.offsetWidth - btn2.offsetWidth;
      if ( left2 < 0 ) left2 = 0;                                 
      if ( left2 > right2 ) left2 = right2;         
      btn2.style.marginLeft = left2 + 'px'
      config.dataset.btn2_coord = String ( left2 )
      config.dataset.btn2_init_pos = String ( left2 )    /* Дублирую, чтобы бегуны не выпадали за пределы слайдера при изменении ширины окна */

      shiftX1 = event.pageX - btn1_coords.left; 
      let left1: number = event.pageX - shiftX1 - sler_coords.left;
      let right1: number = sler.offsetWidth - btn1.offsetWidth;
      if ( left1 < 0 ) left1 = 0;
      if ( left1 > right1 ) left1 = right1;            
      
      let discret_arr: number[] = discreteArray ( interval_number, right1 )

      let range: number = discret_arr[1] - discret_arr[0]
      let integ: number = Math.floor ( left2 )
     
      if (discrete_status == 'yes') {
        for (let num of discret_arr) {
          if (integ >= (num - range / 2) && integ < (num + range / 2) ) {
              if ( num < left1 ) 
              {
                interval.style.width = (left1-num) + 'px';
                interval.style.marginLeft = num + 'px';
              }
              else
              {
                interval.style.width = (num-left1) + 'px';
                interval.style.marginLeft = left1 + 'px';                
              }
              btn2.style.marginLeft = num + 'px'
              config.dataset.btn2_coord = String ( num ) 
              config.dataset.btn2_init_pos = String ( num )

              config.dataset.btn2_tip = forTip(elem, num)     /* Передача значения в конфиг */
              btn2.dataset.tip = config.dataset.btn2_tip        /* Значение над бегуном */
          }
        }           
      } else if ( discrete_status == 'no' ) {

          config.dataset.btn2_tip = forTip ( elem, left2 )     /* Передача значения в конфиг */
          btn2.dataset.tip = config.dataset.btn2_tip          /* Значение над бегуном */
          if (left1 > left2)
          {
            interval.style.width = (left1-left2) + 'px';
            interval.style.marginLeft = left2 + 'px';       
          }
          else
          {
            interval.style.width = (left2-left1) + 'px';
            interval.style.marginLeft = left1 + 'px';                
          }
      }   
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };
}
  
function mouseDownBtn_1_Single ( event: MouseEvent) {
  let elem = event.target as HTMLElement
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number: number = Number ( config.dataset.inst )
  let sler = document.querySelectorAll('.ranger')[sler_number-1] as HTMLElement
  let interval: HTMLElement = sler.querySelector('.ranger__interval')     
  let btn1: HTMLElement = sler.querySelector('[data-type="btn-first"]')

  let discrete_status: string = config.dataset.discrete

  let interval_number: number = Number ( config.dataset.scale_length ) - 1  /* Для дискретного перемещения */
  let sler_coords: DOMRect = getCoords ( sler )
  let btn1_coords: DOMRect = getCoords ( btn1 )
  let shiftX1: number = event.pageX - btn1_coords.left; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  document.onmousemove = function ( event: MouseEvent) {
    let left1: number = event.pageX - shiftX1 - sler_coords.left;
    let right1: number = sler.offsetWidth - btn1.offsetWidth;   /* 12 - это ширина бегуна */

    if ( discrete_status == 'yes' ) {
      if ( left1 < 0 ) left1 = 0;                                 
      if ( left1 > right1 ) left1 = right1;

      let discret_arr = discreteArray (interval_number, right1)

      let range: number = discret_arr[1] - discret_arr[0]
      let integ: number = Math.floor( left1 )
      for ( let num of discret_arr ) {
        if ( integ < ( num + range / 2 ) && integ > ( num - range / 2 ) ) {
            btn1.style.marginLeft = num + 'px'  
            interval.style.width = num  + 'px'
            config.dataset.btn1_coord = String ( num )
            config.dataset.btn1_init_pos = String ( num ) /* Дублирую, чтобы бегуны не выпадали за пределы слайдера при изменении ширины окна */

            config.dataset.btn1_tip = forTip(elem, num)     /* Передача значения в конфиг */
            btn1.dataset.tip = config.dataset.btn1_tip        /* Значение над бегуном */
        }
      }           
    } else if ( discrete_status == 'no' ) {
        if (left1 < 0) left1 = 0;                                 
        if (left1 > right1) left1 = right1;    
        btn1.style.marginLeft = left1 + 'px'
        interval.style.width = left1 + 'px'
        config.dataset.btn1_coord = String ( left1 )
        config.dataset.btn1_init_pos = String ( left1 )
        
        config.dataset.btn1_tip = forTip ( elem, left1 )     /* Передача значения в конфиг */
        btn1.dataset.tip = config.dataset.btn1_tip          /* Значение над бегуном */
    }
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}
  
function mouseDownBtn_1_Double ( event: MouseEvent ) {
  let elem = event.target as HTMLElement
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number: number = Number ( config.dataset.inst )
  let sler = document.querySelectorAll('.ranger')[sler_number-1] as HTMLElement
  let interval: HTMLElement = sler.querySelector('.ranger__interval')     
  let btn1: HTMLElement = sler.querySelector('[data-type="btn-first"]')
  let btn2: HTMLElement = sler.querySelector('[data-type="btn-second"]')

  let discrete_status: string = config.dataset.discrete
  let interval_number: number = Number ( config.dataset.scale_length ) - 1  /* Для дискретного перемещения */
 
  let sler_coords: DOMRect = getCoords(sler)
  let btn1_coords: DOMRect = getCoords(btn1)
  let btn2_coords: DOMRect = getCoords(btn2)

  let shiftX1: number = event.pageX - btn1_coords.left; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  let shiftX2: number = event.pageX - btn2_coords.left;
  
  document.onmousemove = function ( event: MouseEvent ) {
      let left1: number = event.pageX - shiftX1 - sler_coords.left;       
      let right1: number = sler.offsetWidth - btn1.offsetWidth;  
      shiftX2 = event.pageX - btn2_coords.left; 
      let left2: number = event.pageX - shiftX2 - sler_coords.left;
      let right2: number = sler.offsetWidth;

      if ( left1 < 0 ) left1 = 0;                                 
      if ( left1 > right1 ) left1 = right1; 

      let discret_arr: number[] = discreteArray (interval_number, right1)

      let range: number = discret_arr[1] - discret_arr[0]
      let integ: number = Math.floor( left1 )

      if ( discrete_status == 'yes' ) {

        let counter: number = 0         /* Счётчик для перехода по массиву подписей */
        for ( let num of discret_arr ) {
          if ( integ < ( num + range / 2 ) && integ > ( num - range / 2 ) ) {
              if ( num > left2 )
              {
                interval.style.width = ( num-left2 ) + 'px';
                interval.style.marginLeft = left2 + 'px';
              }
              else
              {
                interval.style.width = (left2-num) + 'px';
                interval.style.marginLeft = num + 'px';                
              }
              btn1.style.marginLeft = num + 'px'
              config.dataset.btn1_coord = String ( num )
              config.dataset.btn1_init_pos = String ( num )  

              config.dataset.btn1_tip = forTip ( elem, num )     /* Передача значения в конфиг */
              btn1.dataset.tip = config.dataset.btn1_tip        /* Извлечение из конфига значения над бегуном */
          }
          counter ++
        }           
      } else if ( discrete_status == 'no' ) {
       
          btn1.style.marginLeft = left1 + 'px'
          config.dataset.btn1_coord = String ( left1 )
          config.dataset.btn1_init_pos = String ( left1 )

          config.dataset.btn1_tip = forTip ( elem, left1 )     /* Передача значения в конфиг */
          btn1.dataset.tip = config.dataset.btn1_tip          /* Значение над бегуном */
    
          shiftX2 = event.pageX - btn2_coords.left; 
          let left2: number = event.pageX - shiftX2 - sler_coords.left;
          let right2: number = sler.offsetWidth;
          if ( left2 < 0 ) left2 = 0;
          if ( left2 > right2 ) left2 = right2; 
          
          if ( left1 > left2 )
          {
            interval.style.width = ( left1-left2 ) + 'px';
            interval.style.marginLeft = left2 + 'px';
          }
          else
          {
            interval.style.width = ( left2-left1 ) + 'px';
            interval.style.marginLeft = left1 + 'px';
        
          }
      }        
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}

export function discreteArray ( interval_number: number, length: number ) {
  let interv: number = length / interval_number   /* если не указать абсолютное значение, бегун будет колебаться */
  let discret_arr: number[] = []            
  let arr_count: number = 0
  discret_arr.push ( 0 )
  for ( let i = 0; i < interval_number; i ++ ) {
      arr_count = arr_count + interv
      discret_arr.push ( arr_count )
  }
  return discret_arr
}


export function resetBtnCoord ( event: MouseEvent ) {
  let elem = event.target as HTMLElement
  const config: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider-config')
  const ranger: HTMLElement = elem.parentNode.parentNode.querySelector('.ranger')
  const orientation: string = config.dataset.orientation
  config.dataset.btn1_coord = String ( 0 )
  if ( orientation == 'horizontal' ) {
    config.dataset.btn2_coord = String ( ranger.offsetWidth )
    config.dataset.btn2_init_pos = String ( ranger.offsetWidth )
  } else if ( orientation == 'vertical' ) {
    config.dataset.btn2_coord = String ( ranger.offsetHeight )
  }
  
}