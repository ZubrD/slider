import { getCoords, } from './script.js'

export function mouseDownBtn_1 (event) {
    let runner_number = event.target.parentNode.dataset.runners
    if ( runner_number == 1 ) {
      mouseDownBtn_1_Single (event)
    } else if ( runner_number == 2 ) {
      mouseDownBtn_1_Double (event)
    }
  }
  
  export function mouseDownBtn_2 (event) {
    let sler_number = event.target.dataset.inst
    let sler = document.querySelectorAll('.ranger')[sler_number-1]
    let interval = sler.querySelector('.ranger__interval')     
    let btn1 = sler.querySelector('[data-type="btn-first"]')
    let btn2 = sler.querySelector('[data-type="btn-second"]')
  
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
  
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
  }
  
  function mouseDownBtn_1_Single (event) {
    let sler_number = event.target.dataset.inst
    let sler = document.querySelectorAll('.ranger')[sler_number-1]
    let interval = sler.querySelector('.ranger__interval')     
    let btn1 = sler.querySelector('[data-type="btn-first"]')
    let discrete_status = event.target.parentNode.dataset.discrete
   
  
    let interval_number = event.target.parentNode.dataset.scale_length - 1  /* Для дискретного перемещения */
    let sler_coords = getCoords(sler)
    let btn1_coords = getCoords(btn1)
    let shiftX1 = event.pageX - btn1_coords.left; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                  /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
    document.onmousemove = function (event) {
      let left1 = event.pageX - shiftX1 - sler_coords.left;
      
      // let right1 = sler.offsetWidth - btn1.offsetWidth;
      let right1 = sler.offsetWidth - 12;

      if (discrete_status == 'yes') {
        if (left1 < 0) left1 = 0;                                 
        if (left1 > right1) left1 = right1;

        let interv = 490 / interval_number
        let discret_arr = []
        let arr_count = 0
        discret_arr.push(0)
        for (let i = 0; i < interval_number; i ++) {
            arr_count = arr_count + interv
            discret_arr.push(arr_count)
        }
        let range = discret_arr[1] - discret_arr[0]
        let integ = Math.floor(left1)
        for (let num of discret_arr) {
          if (integ < (num + range / 2) && integ > (num - range / 2) ) {
              btn1.style.marginLeft = num + 'px'  
              interval.style.width = num  + 'px'           
          }
        }           
      } else if ( discrete_status == 'no' ) {
          if (left1 < 0) left1 = 0;                                 
          if (left1 > right1) left1 = right1;    
          btn1.style.marginLeft = left1 + 'px'
          interval.style.width = left1 + 'px'  
      }
  
      

  
    }
  //   document.onmousemove = function (event) {
  //     let left1 = event.pageX - shiftX1 - sler_coords.left;
  //     let right1 = sler.offsetWidth - btn1.offsetWidth;
  //     if (left1 < 0) left1 = 0;                                 
  //     if (left1 > right1) left1 = right1;         
  //     btn1.style.marginLeft = left1 + 'px'
  //     interval.style.width = left1 + 'px'
  // }
  
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };  
  }
  
  function mouseDownBtn_1_Double (event) {
    let sler_number = event.target.dataset.inst
    let sler = document.querySelectorAll('.ranger')[sler_number-1]
    let interval = sler.querySelector('.ranger__interval')     
    let btn1 = sler.querySelector('[data-type="btn-first"]')
    let btn2 = sler.querySelector('[data-type="btn-second"]')
  
    let sler_coords = getCoords(sler)
    let btn1_coords = getCoords(btn1)
    let btn2_coords = getCoords(btn2)
    let shiftX1 = event.pageX - btn1_coords.left; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
                                                  /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
    let shiftX2 = event.pageX - btn2_coords.left;
  
    document.onmousemove = function (event) {
        let left1 = event.pageX - shiftX1 - sler_coords.left;
        // let right1 = sler.offsetWidth - btn1.offsetWidth;
        let right1 = sler.offsetWidth - 12;
        if (left1 < 0) left1 = 0;                                 
        if (left1 > right1) left1 = right1;         
        btn1.style.marginLeft = left1 + 'px'
  
        shiftX2 = event.pageX - btn2_coords.left; 
        let left2 = event.pageX - shiftX2 - sler_coords.left;
        // let right2 = sler.offsetWidth - btn2.offsetWidth;
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
  
    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };  
  }