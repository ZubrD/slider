import { getCoords, } from './scale.js'
import { forTip } from './tipToggler.js'

export function mouseDownBtn_1 (event) {
    let config = event.target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
    let runner_number = config.dataset.runners
    if ( runner_number == 1 ) {
      mouseDownBtn_1_Single (event)       /* если один бегун */
    } else if ( runner_number == 2 ) {
      mouseDownBtn_1_Double (event)       /* первый бегун (левый) если бегунов два */
    }
  }
  
export function mouseDownBtn_2 (event) {
  let config = event.target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  // let sler_number = event.target.dataset.inst                    /* Замена на конфиг */
  let sler_number = config.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let btn2 = sler.querySelector('[data-type="btn-second"]')

  let target = event.target     /* Для надписи над бегуном */

  // let discrete_status = event.target.parentNode.dataset.discrete   /* Замена на конфиг */
  let discrete_status = config.dataset.discrete
  let interval_number = event.target.parentNode.dataset.scale_length - 1  /* Для дискретного перемещения */

  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let btn2_coords = getCoords(btn2)
  let shiftX1 = event.pageX - btn1_coords.left;
  let shiftX2 = event.pageX - btn2_coords.left;

  document.onmousemove = function (event) {
      let left2 = event.pageX - shiftX2 - sler_coords.left;
      let right2 = sler.offsetWidth - btn2.offsetWidth;
      if (left2 < 0) left2 = 0;                                 
      if (left2 > right2) left2 = right2;         
      btn2.style.marginLeft = left2 + 'px'

      shiftX1 = event.pageX - btn1_coords.left; 
      let left1 = event.pageX - shiftX1 - sler_coords.left;
      let right1 = sler.offsetWidth - btn1.offsetWidth;
      if (left1 < 0) left1 = 0;
      if (left1 > right1) left1 = right1;            
      
      let discret_arr = discreteArray (interval_number, right1)

      let range = discret_arr[1] - discret_arr[0]
      let integ = Math.floor(left2)
     
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
          btn2.dataset.tip =  forTip(target, left2)   /* Значение над бегуном */
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
  
function mouseDownBtn_1_Single (event) {
  let config = event.target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number = config.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')

  // let discrete_status = event.target.parentNode.dataset.discrete
  let discrete_status = config.dataset.discrete
  
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

      let discret_arr = discreteArray (interval_number, right1)

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
  
function mouseDownBtn_1_Double (event) {
  let config = event.target.parentNode.parentNode.parentNode.querySelector('.zdslider-config')
  let sler_number = config.dataset.inst
  let sler = document.querySelectorAll('.ranger')[sler_number-1]
  let interval = sler.querySelector('.ranger__interval')     
  let btn1 = sler.querySelector('[data-type="btn-first"]')
  let btn2 = sler.querySelector('[data-type="btn-second"]')

  // let discrete_status = event.target.parentNode.dataset.discrete
  let discrete_status = config.dataset.discrete
  let interval_number = event.target.parentNode.dataset.scale_length - 1  /* Для дискретного перемещения */

  let target = event.target     /* Для надписи над бегуном */
  
  let sler_coords = getCoords(sler)
  let btn1_coords = getCoords(btn1)
  let btn2_coords = getCoords(btn2)

  let shiftX1 = event.pageX - btn1_coords.left; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
  let shiftX2 = event.pageX - btn2_coords.left;
  
  document.onmousemove = function (event) {
      let left1 = event.pageX - shiftX1 - sler_coords.left;       
      let right1 = sler.offsetWidth - btn1.offsetWidth;  
      shiftX2 = event.pageX - btn2_coords.left; 
      let left2 = event.pageX - shiftX2 - sler_coords.left;
      let right2 = sler.offsetWidth;

      if (left1 < 0) left1 = 0;                                 
      if (left1 > right1) left1 = right1; 

      let discret_arr = discreteArray (interval_number, right1)

      let range = discret_arr[1] - discret_arr[0]
      let integ = Math.floor(left1)

      if (discrete_status == 'yes') {

        let counter = 0         /* Счётчик для перехода по массиву подписей */
        for (let num of discret_arr) {
          if (integ < (num + range / 2) && integ > (num - range / 2) ) {
              if (num > left2)
              {
                interval.style.width = (num-left2) + 'px';
                interval.style.marginLeft = left2 + 'px';
              }
              else
              {
                interval.style.width = (left2-num) + 'px';
                interval.style.marginLeft = num + 'px';                
              }
              btn1.style.marginLeft = num + 'px'  

              btn1.dataset.tip =  forTip(target, num)   /* Значение над бегуном */
          }
          counter ++
        }           
      } else if ( discrete_status == 'no' ) {
       
          btn1.style.marginLeft = left1 + 'px'

          btn1.dataset.tip =  forTip(target, left1)   /* Значение над бегуном */
    
          shiftX2 = event.pageX - btn2_coords.left; 
          let left2 = event.pageX - shiftX2 - sler_coords.left;
          let right2 = sler.offsetWidth;
          if (left2 < 0) left2 = 0;
          if (left2 > right2) left2 = right2; 
          
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

export function discreteArray (interval_number, length) {
  let interv = length / interval_number   /* если не указать абсолютное значение, бегун будет колебаться */
  let discret_arr = []            
  let arr_count = 0
  discret_arr.push(0)
  for (let i = 0; i < interval_number; i ++) {
      arr_count = arr_count + interv
      discret_arr.push(arr_count)
  }
  return discret_arr
}
