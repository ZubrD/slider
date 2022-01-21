import { getCoords, } from './scale.js'
import { forTip } from './tipToggler.js'
import { discreteArray } from './mouse.js'

export function mouseVertDownBtn_1 (event) {
    let config = event.target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
    let runner_number = config.dataset.runners
    if ( runner_number == 1 ) {
      mouseVertDownBtn_1_Single (event)       /* если один бегун */
    } else if ( runner_number == 2 ) {
      mouseVertDownBtn_1_Double (event)       /* первый бегун (левый) если бегунов два */
    }
  }
  
export function mouseVertDownBtn_2 (event) {
  let config = event.target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number = config.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let btn2 = sler.querySelector('[data-type="btn-second"]')

  let target = event.target     /* Для надписи над бегуном */

  let discrete_status = config.dataset.discrete
  let interval_number = config.dataset.scale_length - 1  /* Для дискретного перемещения */

  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let btn2_coords = getCoords(btn2)
  let shiftY1 = event.pageY - btn1_coords.top;
  let shiftY2 = event.pageY - btn2_coords.top;

  document.onmousemove = function (event) {
      let top2 = event.pageY - shiftY2 - sler_coords.top;
      // let down2 = sler.offsetHeight - btn2.offsetHeight;
      let down2 = sler.offsetHeight;
      if (top2 < 0) top2 = 0;                                 
      if (top2 > down2) top2 = down2;         
      btn2.style.marginTop = top2 + 'px'

      shiftY1 = event.pageY - btn1_coords.top; 
      let top1 = event.pageY - shiftY1 - sler_coords.top;
      // let down1 = sler.offsetHeight - btn1.offsetHeight;
      let down1 = sler.offsetHeight;
      if (top1 < 0) top1 = 0;
      if (top1 > down1) top1 = down1;            
      let discret_arr = discreteArray (interval_number, down2)

      let range = discret_arr[1] - discret_arr[0]
      let integ = Math.floor(top2)
     
      if (discrete_status == 'yes') {
        for (let num of discret_arr) {
          if (integ >= (num - range / 2) && integ < (num + range / 2) ) {
              if ( num < top1 ) 
              {
                interval.style.height = (top1-num) + 'px';
                interval.style.marginTop = num + 'px';
              }
              else
              {
                interval.style.height = (num-top1) + 'px';
                interval.style.marginTop = top1 + 'px';                
              }
              btn2.style.marginTop = num + 'px' 

              let coords = sler.offsetHeight - num

              config.dataset.btn2_coord = coords
              config.dataset.btn2_tip = forTip( target, coords )     /* Передача значения в конфиг */
              btn2.dataset.tip = config.dataset.btn2_tip             /* Значение над бегуном */
          }
        }           
      } else if ( discrete_status == 'no' ) {
          
          if (top1 > top2)
          {
            interval.style.height = (top1-top2) + 'px';
            interval.style.marginTop = top2 + 'px';       
          }
          else
          {
            interval.style.height = (top2-top1) + 'px';
            interval.style.marginTop = top1 + 'px';                
          }

          let coords = sler.offsetHeight - top2

          config.dataset.btn2_coord = coords
          config.dataset.btn2_tip = forTip( target, coords )     /* Передача значения в конфиг */
          btn2.dataset.tip = config.dataset.btn2_tip             /* Значение над бегуном */
      }   
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };
}
  
function mouseVertDownBtn_1_Single (event) {
  let config = event.target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number = config.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let discrete_status = config.dataset.discrete
  
  let target = event.target     /* Для надписи над бегуном */

  let interval_number = config.dataset.scale_length - 1  /* Для дискретного перемещения */
  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let shiftY1 = event.pageY - btn1_coords.top; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  document.onmousemove = function (event) {
    let top1 = event.pageY - shiftY1 - sler_coords.top;
    let down1 = sler.offsetHeight ;    /* -5 - чтобы не опускался ниже риски */

    if (discrete_status == 'yes') {
      if (top1 < 0) top1 = 0;                                 
      if (top1 > down1) top1 = down1;

      let discret_arr = discreteArray (interval_number, down1)

      let range = discret_arr[1] - discret_arr[0]
      let integ = Math.floor(top1)
      for (let num of discret_arr) {
        if (integ < (num + range / 2) && integ > (num - range / 2) ) {
            btn1.style.marginTop = num + 'px'  
            interval.style.marginTop =  num + 'px'
            interval.style.height = sler.offsetHeight - num  + 'px'

            let coords = sler.offsetHeight - num            /* Инвертирование значения */

            config.dataset.btn1_coord = coords
            config.dataset.btn1_tip = forTip( target, coords )     /* Передача значения в конфиг */
            btn1.dataset.tip = config.dataset.btn1_tip             /* Значение над бегуном */            
        }
      }           
    } else if ( discrete_status == 'no' ) {
        if (top1 < 0) top1 = 0;                                 
        if (top1 > down1) top1 = down1;    
        btn1.style.marginTop =  top1 + 'px'
        interval.style.marginTop =  top1 + 'px'
        interval.style.height = sler.offsetHeight - top1 + 'px'

        let coords = sler.offsetHeight - top1           /* Инвертирование значения */

        config.btn1_coord = coords
        config.dataset.btn1_tip = forTip( target, coords )     /* Передача значения в конфиг */
        btn1.dataset.tip = config.dataset.btn1_tip            /* Значение над бегуном */
    }
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}
  
function mouseVertDownBtn_1_Double (event) {
  let config = event.target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number = config.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let btn2 = sler.querySelector('[data-type="btn-second"]')

  let discrete_status = config.dataset.discrete
  let interval_number = config.dataset.scale_length - 1  /* Для дискретного перемещения */

  let target = event.target     /* Для надписи над бегуном */
  
  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let btn2_coords = getCoords(btn2)
  let shiftY1 = event.pageY - btn1_coords.top; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  let shiftY2 = event.pageY - btn2_coords.top;

  document.onmousemove = function (event) {
      let top1 = event.pageY - shiftY1 - sler_coords.top;       
      // let down1 = sler.offsetHeight - btn1.offsetHeight;  
      let down1 = sler.offsetHeight;  
      shiftY2 = event.pageY - btn2_coords.top; 
      let top2 = event.pageY - shiftY2 - sler_coords.top;
      let down2 = sler.offsetHeight;

      if (top1 < 0) top1 = 0;                                 
      if (top1 > down1) top1 = down1; 

      let discret_arr = discreteArray (interval_number, down1)

      let range = discret_arr[1] - discret_arr[0]
      let integ = Math.floor(top1)

      if (discrete_status == 'yes') {
        let counter = 0
        for (let num of discret_arr) {
          if (integ < (num + range / 2) && integ > (num - range / 2) ) {
              if (num > top2)
              {
                interval.style.height = (num-top2) + 'px';
                interval.style.marginTop = top2 + 'px';
              }
              else
              {
                interval.style.height = (top2-num) + 'px';
                interval.style.marginTop = num + 'px';                
              }
              btn1.style.marginTop = num + 'px' 

              let coords = sler.offsetHeight - num

              config.dataset.btn1_coord = coords
              config.dataset.btn1_tip = forTip( target, coords )     /* Передача значения в конфиг */
              btn1.dataset.tip = config.dataset.btn1_tip             /* Значение над бегуном */
          }
          counter ++
        }           
      } else if ( discrete_status == 'no' ) {
       
          btn1.style.marginTop = top1 + 'px'

          
    
          shiftY2 = event.pageY - btn2_coords.top; 
          let top2 = event.pageY - shiftY2 - sler_coords.top;
          let down2 = sler.offsetHeight;
          if (top2 < 0) top2 = 0;
          if (top2 > down2) top2 = down2; 
          
          if (top1 > top2)
          {
            interval.style.height = (top1-top2) + 'px';
            interval.style.marginTop = top2 + 'px';
          }
          else
          {
            interval.style.height = (top2-top1) + 'px';
            interval.style.marginTop = top1 + 'px';
          }

          let coords = sler.offsetHeight - top1

          config.dataset.btn1_coord = coords
          config.dataset.btn1_tip = forTip( target, coords )     /* Передача значения в конфиг */
          btn1.dataset.tip = config.dataset.btn1_tip             /* Значение над бегуном */
      }        
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}

