import { getCoords, } from './scale.js'
import { forTip } from './tipToggler.js'
import { discreteArray } from './mouse.js'

export function mouseVertDownBtn_1 (event) {
    let runner_number = event.target.parentNode.dataset.runners
    if ( runner_number == 1 ) {
      mouseVertDownBtn_1_Single (event)       /* если один бегун */
    } else if ( runner_number == 2 ) {
      mouseVertDownBtn_1_Double (event)       /* первый бегун (левый) если бегунов два */
    }
  }
  
export function mouseVertDownBtn_2 (event) {
  let sler_number = event.target.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let btn2 = sler.querySelector('[data-type="btn-second"]')

  let target = event.target     /* Для надписи над бегуном */

  let discrete_status = event.target.parentNode.dataset.discrete
  let interval_number = event.target.parentNode.dataset.scale_length - 1  /* Для дискретного перемещения */

  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let btn2_coords = getCoords(btn2)
  let shiftY1 = event.pageY - btn1_coords.top;
  let shiftY2 = event.pageY - btn2_coords.top;

  document.onmousemove = function (event) {
      let top2 = event.pageY - shiftY2 - sler_coords.top;
      let down2 = sler.offsetHeight - btn2.offsetHeight;
      if (top2 < 0) top2 = 0;                                 
      if (top2 > down2) top2 = down2;         
      btn2.style.marginTop = top2 + 'px'
      console.log(top2)

      shiftY1 = event.pageY - btn1_coords.top; 
      let top1 = event.pageY - shiftY1 - sler_coords.top;
      let down1 = sler.offsetHeight - btn1.offsetHeight;
      if (top1 < 0) top1 = 0;
      if (top1 > down1) top1 = down1;            
      
      let discret_arr = discreteArray (interval_number)

      let range = discret_arr[1] - discret_arr[0]
      let integ = Math.floor(top2)
     
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

              btn2.dataset.tip =  forTip(target, num)   /* Значение над бегуном */
          }
        }           
      } else if ( discrete_status == 'no' ) {
          btn2.dataset.tip =  forTip(target, top2)   /* Значение над бегуном */
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
      }   
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };
}
  
function mouseVertDownBtn_1_Single (event) {
  let sler_number = event.target.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let discrete_status = event.target.parentNode.dataset.discrete
  
  let target = event.target     /* Для надписи над бегуном */

  let interval_number = event.target.parentNode.dataset.scale_length - 1  /* Для дискретного перемещения */
  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let shiftX1 = event.pageX - btn1_coords.left; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  document.onmousemove = function (event) {
    let left1 = event.pageX - shiftX1 - sler_coords.left;
    let right1 = sler.offsetWidth - btn1.offsetWidth;   /* 12 - это ширина бегуна */

    if (discrete_status == 'yes') {
      if (left1 < 0) left1 = 0;                                 
      if (left1 > right1) left1 = right1;

      let discret_arr = discreteArray (interval_number)

      let range = discret_arr[1] - discret_arr[0]
      let integ = Math.floor(left1)
      for (let num of discret_arr) {
        if (integ < (num + range / 2) && integ > (num - range / 2) ) {
            btn1.style.marginLeft = num + 'px'  
            interval.style.width = num  + 'px' 

            btn1.dataset.tip =  forTip(target, num)   /* Значение над бегуном */
            
        }
      }           
    } else if ( discrete_status == 'no' ) {
        if (left1 < 0) left1 = 0;                                 
        if (left1 > right1) left1 = right1;    
        btn1.style.marginLeft = left1 + 'px'
        interval.style.width = left1 + 'px'
        
        btn1.dataset.tip =  forTip(target, left1)   /* Значение над бегуном */
    }
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}
  
function mouseVertDownBtn_1_Double (event) {
  let sler_number = event.target.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let btn2 = sler.querySelector('[data-type="btn-second"]')

  let discrete_status = event.target.parentNode.dataset.discrete
  let interval_number = event.target.parentNode.dataset.scale_length - 1  /* Для дискретного перемещения */

  let target = event.target     /* Для надписи над бегуном */
  
  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let btn2_coords = getCoords(btn2)
  let shiftY1 = event.pageY - btn1_coords.top; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  let shiftY2 = event.pageY - btn2_coords.top;

  document.onmousemove = function (event) {
      let top1 = event.pageY - shiftY1 - sler_coords.top;       
      let down1 = sler.offsetHeight - btn1.offsetHeight;  
      shiftY2 = event.pageY - btn2_coords.top; 
      let top2 = event.pageY - shiftY2 - sler_coords.top;
      let down2 = sler.offsetHeight;

      if (top1 < 0) top1 = 0;                                 
      if (top1 > down1) top1 = down1; 

      let discret_arr = discreteArray (interval_number)

      let range = discret_arr[1] - discret_arr[0]
      let integ = Math.floor(top1)

      if (discrete_status == 'yes') {
        
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

              btn1.dataset.tip =  forTip(target, num)   /* Значение над бегуном */
          }
        }           
      } else if ( discrete_status == 'no' ) {
       
          btn1.style.marginTop = top1 + 'px'

          btn1.dataset.tip =  forTip(target, top1)   /* Значение над бегуном */
    
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
      }        
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}

