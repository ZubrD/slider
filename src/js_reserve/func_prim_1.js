// export function mouseDownBtn_1 (event) {    /* Резервная копия 27.11.2021 перед настройкой одного бегунка */
//   let sler_number = event.target.dataset.inst
//   let sler = document.querySelectorAll('.ranger')[sler_number-1]
//   let interval = document.querySelectorAll('.ranger__interval')[sler_number-1]     
//   let btn1 = document.querySelectorAll('[data-type="btn-first"]')[sler_number-1]
//   let btn2 = document.querySelectorAll('[data-type="btn-second"]')[sler_number-1]

//   let sler_coords = getCoords(sler)
//   let btn1_coords = getCoords(btn1)
//   let btn2_coords = getCoords(btn2)
//   let shiftX1 = event.pageX - btn1_coords.left;
//   let shiftX2 = event.pageX - btn2_coords.left;

//   document.onmousemove = function (event) {
//       let left1 = event.pageX - shiftX1 - sler_coords.left;
//       let right1 = sler.offsetWidth - btn1.offsetWidth;
//       if (left1 < 0) left1 = 0;                                 
//       if (left1 > right1) left1 = right1;         
//       btn1.style.marginLeft = left1 + 'px'

//       shiftX2 = event.pageX - btn2_coords.left; 
//       let left2 = event.pageX - shiftX2 - sler_coords.left;
//       let right2 = sler.offsetWidth - btn2.offsetWidth;
//       if (left2 < 0) left2 = 0;
//       if (left2 > right2) left2 = right2;            
       
//       let per_min = 0;
//       let per_max = 0;

//       if (left1 > left2)
//       {
//         interval.style.width = (left1-left2) + 'px';
//         interval.style.marginLeft = left2 + 'px';
         
//         per_min = left2*100/(sler.offsetWidth-btn1.offsetWidth);
//         per_max = left1*100/(sler.offsetWidth-btn1.offsetWidth);
//       }
//       else
//       {
//         interval.style.width = (left2-left1) + 'px';
//         interval.style.marginLeft = left1 + 'px';                
        
//         per_min = left1*100/(sler.offsetWidth-btn1.offsetWidth);
//         per_max = left2*100/(sler.offsetWidth-btn1.offsetWidth);
//       }
//       //   inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
//       //   inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
//   }

//   document.onmouseup = function() {
//       document.onmousemove = document.onmouseup = null;
//   };
// }

// function reScale ( new_scale_arr, current_inst ) {
//   let scale_arr = new_scale_arr[0]
//   let current_ranger = document.querySelectorAll('.ranger__scale')
//   for ( let elem of current_ranger ) {
//     if ( elem.dataset.inst == current_inst ) {
//       let parent = elem.parentNode

//       elem.remove()

//       let scale = new Scale ();
//       scale.setAttribute ( 'data-inst', current_inst )
//       // scale.setAttribute ( 'data-min', scale_arr [0] )
//       // scale.setAttribute ( 'data-max', scale_arr [ scale_arr.length - 1 ] )
//       // scale.setAttribute ( 'data-scale', scale_arr )  /* Не пригодилось, может удалить */
//       for ( let el of scale_arr ) {
//         let span = document.createElement ( 'span' )
//         span.classList.add ( 'ranger__scale-span' )
//         span.innerHTML = el
//         scale.appendChild ( span )
//       }
//       scale.appendTo ( parent );
//     }
//   }
  
// }



// import { Ranger, Interval, Button} from './view.js'

// export function oneRunner (event, inst) {
//     console.log(event.target.parentNode.parentNode.childNodes[1].firstChild)

//     event.target.parentNode.parentNode.childNodes[1].firstChild.remove()
  
//     let zdslider = document.querySelectorAll('.zdslider')[inst-1]
//     let division_div = document.querySelectorAll('.ranger__scale-division')[inst-1]
//     let ranger = new Ranger();
//     ranger.appendTo(zdslider)
//     ranger.setAttribute ('data-inst', inst);
//     ranger.setAttribute ('data-runners', 1);
//     let ranger_div = zdslider.querySelector('.ranger')
//     zdslider.insertBefore(ranger_div, division_div)
  
//     let interval = new Interval();
//     interval.setAttribute('data-inst', inst);
//     interval.appendTo(ranger_div)
  
//     let button_1 = new Button();
//     button_1.setAttribute('data-type', 'btn-first');
//     button_1.setAttribute('data-inst', inst);
//     button_1.appendTo(ranger_div);
  
//     let interval_div = ranger_div.querySelector('.ranger__interval')
//     let button_1_div = ranger_div.querySelector('[data-type="btn-first"]') 
//     interval_div.style.width = (ranger_div.offsetWidth) + 'px';
//     button_1_div.style.marginLeft = (ranger_div.offsetWidth-button_1_div.offsetWidth) +  'px';
//   }
  
// export function twoRunners (event, inst) {
//     event.target.parentNode.parentNode.childNodes[1].firstChild.remove()
  
//     let zdslider = document.querySelectorAll('.zdslider')[inst-1]
//     let division_div = document.querySelectorAll('.ranger__scale-division')[inst-1]
//     let ranger = new Ranger();
//     ranger.appendTo(zdslider)
//     ranger.setAttribute ('data-inst', inst);
//     ranger.setAttribute ('data-runners', 2);
//     let ranger_div = zdslider.querySelector('.ranger')
//     zdslider.insertBefore(ranger_div, division_div)
  
//     let interval = new Interval();
//     interval.setAttribute('data-inst', inst);
//     interval.appendTo(ranger_div)
  
//     let button_1 = new Button();
//     let button_2 = new Button();
//     button_1.setAttribute('data-type', 'btn-first');
//     button_1.setAttribute('data-inst', inst);
//     button_1.appendTo(ranger_div);
//     button_2.setAttribute('data-type', 'btn-second');
//     button_2.setAttribute('data-inst', inst);
//     button_2.appendTo(ranger_div);
  
//     let interval_div = ranger_div.querySelector('.ranger__interval')
//     let button_1_div = ranger_div.querySelector('[data-type="btn-first"]') 
//     let button_2_div = ranger_div.querySelector('[data-type="btn-second"]') 
//     interval_div.style.width = (ranger_div.offsetWidth) + 'px';  
//     button_1_div.style.marginLeft = '0px';
//     button_2_div.style.marginLeft = (ranger_div.offsetWidth-button_1_div.offsetWidth) + 'px';  
// }



  //   document.onmousemove = function (event) {
  //     let left1 = event.pageX - shiftX1 - sler_coords.left;
  //     let right1 = sler.offsetWidth - btn1.offsetWidth;
  //     if (left1 < 0) left1 = 0;                                 
  //     if (left1 > right1) left1 = right1;         
  //     btn1.style.marginLeft = left1 + 'px'
  //     interval.style.width = left1 + 'px'
  // }


//   function mouseDownBtn_1_Double (event) {
//     let sler_number = event.target.dataset.inst
//     let sler = document.querySelectorAll('.ranger')[sler_number-1]
//     let interval = sler.querySelector('.ranger__interval')     
//     let btn1 = sler.querySelector('[data-type="btn-first"]')
//     let btn2 = sler.querySelector('[data-type="btn-second"]')

//     let discrete_status = event.target.parentNode.dataset.discrete
//     let interval_number = event.target.parentNode.dataset.scale_length - 1  /* Для дискретного перемещения */
//     console.log(interval_number)
//     console.log(discrete_status)
  
//     let sler_coords = getCoords(sler)
//     let btn1_coords = getCoords(btn1)
//     let btn2_coords = getCoords(btn2)
//     let shiftX1 = event.pageX - btn1_coords.left; /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
//                                                   /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка 20 */
//     let shiftX2 = event.pageX - btn2_coords.left;
  
//     document.onmousemove = function (event) {
//         let left1 = event.pageX - shiftX1 - sler_coords.left;
//         // let right1 = sler.offsetWidth - btn1.offsetWidth;
//         let right1 = sler.offsetWidth - 12;
//         if (left1 < 0) left1 = 0;                                 
//         if (left1 > right1) left1 = right1;         
//         btn1.style.marginLeft = left1 + 'px'
  
//         shiftX2 = event.pageX - btn2_coords.left; 
//         let left2 = event.pageX - shiftX2 - sler_coords.left;
//         // let right2 = sler.offsetWidth - btn2.offsetWidth;
//         let right2 = sler.offsetWidth;
//         if (left2 < 0) left2 = 0;
//         if (left2 > right2) left2 = right2; 
         
//         if (left1 > left2)
//         {
//           interval.style.width = (left1-left2) + 'px';
//           interval.style.marginLeft = left2 + 'px';
//         }
//         else
//         {
//           interval.style.width = (left2-left1) + 'px';
//           interval.style.marginLeft = left1 + 'px';                
//         }
//     }
  
//     document.onmouseup = function() {
//         document.onmousemove = document.onmouseup = null;
//     };  
//   }


// export function mouseDownBtn_2 (event) {
//   let sler_number = event.target.dataset.inst
//   let sler = document.querySelectorAll('.ranger')[sler_number-1]
//   let interval = sler.querySelector('.ranger__interval')     
//   let btn1 = sler.querySelector('[data-type="btn-first"]')
//   let btn2 = sler.querySelector('[data-type="btn-second"]')

//   let discrete_status = event.target.parentNode.dataset.discrete
//   let interval_number = event.target.parentNode.dataset.scale_length - 1  /* Для дискретного перемещения */
//   console.log(interval_number)

//   let sler_coords = getCoords(sler)
//   let btn1_coords = getCoords(btn1)
//   let btn2_coords = getCoords(btn2)
//   let shiftX1 = event.pageX - btn1_coords.left;
//   let shiftX2 = event.pageX - btn2_coords.left;

//   document.onmousemove = function (event) {
//       let left2 = event.pageX - shiftX2 - sler_coords.left;
//       let right2 = sler.offsetWidth - btn2.offsetWidth;
//       if (left2 < 0) left2 = 0;                                 
//       if (left2 > right2) left2 = right2;         
//       btn2.style.marginLeft = left2 + 'px'

//       shiftX1 = event.pageX - btn1_coords.left; 
//       let left1 = event.pageX - shiftX1 - sler_coords.left;
//       let right1 = sler.offsetWidth - btn1.offsetWidth;
//       if (left1 < 0) left1 = 0;
//       if (left1 > right1) left1 = right1;            
        
//       if (left1 > left2)
//       {
//         interval.style.width = (left1-left2) + 'px';
//         interval.style.marginLeft = left2 + 'px';       
//       }
//       else
//       {
//         interval.style.width = (left2-left1) + 'px';
//         interval.style.marginLeft = left1 + 'px';                
//       }
//   }

//   document.onmouseup = function() {
//       document.onmousemove = document.onmouseup = null;
//   };
// }
const a = 10
a = a + 10
console.log(a)