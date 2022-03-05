import { getCoords } from '../js/scale.js'
import { forTip } from '../js/tipToggler.js'
import { discreteArray } from '../js/mouse.js'

export function mouseVertDownBtnFirst (event: MouseEvent) {
  let elem = event.target as HTMLElement;
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
  let runner_number: number = Number ( config.dataset.runners );

  if (runner_number === 1) {

    /* если один бегун */
    mouseVertDownBtnFirstSingle(event)       
  } else if ( runner_number === 2 ) {

    /* первый бегун (левый) если бегунов два */
    mouseVertDownBtnFirstDouble(event)       
  }
}
  
export function mouseVertDownBtnSecond (event: MouseEvent) {

  /* TODO Убирать нельзя - это для тестирования !!! */
  console.log('Вызов из mouseVertDownBtnSecond');
  let elem = event.target as HTMLElement;
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
  let slerNumber: number = Number (config.dataset.inst);
  let sler = document.querySelectorAll('.ranger')[slerNumber-1] as HTMLElement;
  let interval: HTMLElement = sler.querySelector('.ranger__interval');     
  let btn1: HTMLElement = sler.querySelector('[data-type="btn-first"]');
  let btn2: HTMLElement = sler.querySelector('[data-type="btn-second"]');

  let discreteStatus: string = config.dataset.discrete

  /* Для дискретного перемещения */
  let intervalNumber: number = Number(config.dataset.scale_length) - 1  

  let slerCoords = getCoords(sler) as DOMRect
  let btn1Coords = getCoords(btn1) as DOMRect
  let btn2Coords = getCoords(btn2) as DOMRect
  let shiftY1: number = event.pageY - btn1Coords.top;
  let shiftY2: number = event.pageY - btn2Coords.top;

  document.onmousemove = function (event: MouseEvent) {
      let top2: number = event.pageY - shiftY2 - slerCoords.top;
      let down2: number = sler.offsetHeight;

      /* Тестирование */
      if (localStorage.test) {
        top2 = Number(localStorage.top2_3);
      }

      if (top2 < 0) top2 = 0; 

      /* Тестирование */
      if (localStorage.test) {
        top2 = Number(localStorage.top2_4);
        down2 = Number(localStorage.down2_4);
      }

      if (top2 > down2) top2 = down2;         

      btn2.style.marginTop = top2 + 'px'
      shiftY1 = event.pageY - btn1Coords.top; 
      let top1: number = event.pageY - shiftY1 - slerCoords.top;
      let down1: number = sler.offsetHeight;

      /* Тестирование */
      if (localStorage.test) {
        top1 = Number(localStorage.top1_3);
      }

      if (top1 < 0) top1 = 0;

      /* Тестирование */
      if (localStorage.test) {
        top1 = Number(localStorage.top1_4);
        down1 = Number(localStorage.down1_4);
      }

      if (top1 > down1) top1 = down1;            

      let discretArr: number[] = discreteArray (intervalNumber, down2);

      let range: number = discretArr[1] - discretArr[0];
      let integ: number = Math.floor(top2);
     
      if ( discreteStatus === 'yes' ) {

        discretArr.forEach((num) => {
          
          /* Тестирование */
          if (localStorage.test) {
            integ = Number(localStorage.integ);
            num = Number(localStorage.num);
            range = Number(localStorage.range);
          }

          if (integ >= (num - range / 2) && integ < (num + range / 2)) {
            
              /* Тестирование */
              if (localStorage.test) {
                num = Number(localStorage.num1_1);
                top1 = Number(localStorage.top1_1);
              }

              if (num < top1) {
                interval.style.height = ( top1-num ) + 'px';
                interval.style.marginTop = num + 'px';
              }

              /* Тестирование */
              if (localStorage.test) {
                num = Number(localStorage.num1_2);
                top1 = Number(localStorage.top1_2);
              }

              if (num >= top1) {
                interval.style.height = ( num-top1 ) + 'px';
                interval.style.marginTop = top1 + 'px';                
              }

              btn2.style.marginTop = num + 'px';
              let coords = sler.offsetHeight - num;
              config.dataset.btn2_coord = String(coords);

              /* Передача значения в конфиг */
              config.dataset.btn2_tip = String(forTip(elem, coords)); 
              
              /* Значение над бегуном */
              btn2.dataset.tip = config.dataset.btn2_tip;             
          }
        })          
      } else if ( discreteStatus === 'no' ) {

          /* Тестирование */
          if (localStorage.test) {
            top1 = Number(localStorage.top1_1);
            top2 = Number(localStorage.top2_1);
          }

          if (top1 > top2) {
            interval.style.height = ( top1 - top2 ) + 'px';
            interval.style.marginTop = top2 + 'px';       
          }

          /* Тестирование */
          if (localStorage.test) {
            top1 = Number(localStorage.top1_2);
            top2 = Number(localStorage.top2_2);
          }

          if (top1 <= top2) {
            interval.style.height = ( top2 - top1 ) + 'px';
            interval.style.marginTop = top1 + 'px';                
          }

          let coords: number = sler.offsetHeight - top2;

          config.dataset.btn2_coord = String(coords);

          /* Передача значения в конфиг */
          config.dataset.btn2_tip = String(forTip(elem, coords)); 
          
          /* Значение над бегуном */
          btn2.dataset.tip = config.dataset.btn2_tip;             
      }   
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };
}
  
function mouseVertDownBtnFirstSingle(event: MouseEvent) {

  /* TODO Убирать нельзя - это для тестирования !!! */
  console.log('Вызов из mouseVertDownBtnFirstSingle');
  let elem = event.target as HTMLElement;
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
  let slerNumber: number = Number(config.dataset.inst);
  let sler = document.querySelectorAll('.ranger')[slerNumber-1] as HTMLElement;
  let interval: HTMLElement = sler.querySelector('.ranger__interval');     
  let btn1: HTMLElement = sler.querySelector('[data-type="btn-first"]');
  let discreteStatus = config.dataset.discrete;
  
  /* Для дискретного перемещения */
  let intervalNumber: number = Number ( config.dataset.scale_length ) - 1;  
  let slerCoords = getCoords(sler) as DOMRect;
  let btn1Coords = getCoords(btn1) as DOMRect;

  /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
  /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка */
  let shiftY1: number = event.pageY - btn1Coords.top; 
                                                
  document.onmousemove = function (event) {
    let top1: number = event.pageY - shiftY1 - slerCoords.top;
    let down1: number = sler.offsetHeight ;    

    if ( discreteStatus === 'yes' ) {

      /* Тестирование */
      if (localStorage.test) {
        top1 = Number(localStorage.top1_1);
      }

      if (top1 < 0) top1 = 0; 

      /* Тестирование */
      if (localStorage.test) {
        top1 = Number(localStorage.top1_2);
        down1 = Number(localStorage.down1_2);
      }

      if (top1 > down1) top1 = down1;

      let discretArr: number[] = discreteArray(intervalNumber, down1);

      let range: number = discretArr[1] - discretArr[0];
      let integ: number = Math.floor(top1);

      discretArr.forEach((num) => {

        /* Тестрование */
        if (localStorage.test) {
          integ = Number(localStorage.integ);
          num = Number(localStorage.num);
          range = Number(localStorage.range);
        }

        if (integ < (num + range / 2) && integ > (num - range / 2)) {
            btn1.style.marginTop = num + 'px';  
            interval.style.marginTop =  num + 'px'
            interval.style.height = sler.offsetHeight - num  + 'px';

            /* Инвертирование значения */
            let coords: number = sler.offsetHeight - num;            

            config.dataset.btn1_coord = String(coords);

            /* Передача значения в конфиг */
            config.dataset.btn1_tip = String(forTip(elem, coords));  
            
            /* Значение над бегуном */
            btn1.dataset.tip = config.dataset.btn1_tip;                         
        }        
      })         
    } else if (discreteStatus === 'no') {

        /* Тестрование */
        if (localStorage.test) {
          top1 = Number(localStorage.top1_1);
        }

        if (top1 < 0) top1 = 0; 

        /* Тестрование */
        if (localStorage.test) {
          top1 = Number(localStorage.top1_2);
          down1 = Number(localStorage.down1_2);
        }

        if (top1 > down1) top1 = down1;    

        btn1.style.marginTop =  top1 + 'px';
        interval.style.marginTop =  top1 + 'px';
        interval.style.height = sler.offsetHeight - top1 + 'px';

        /* Инвертирование значения */
        let coords: number = sler.offsetHeight - top1;           

        config.dataset.btn1_coord = String(coords);

        /* Передача значения в конфиг */
        config.dataset.btn1_tip = String(forTip(elem, coords)); 
        
        /* Значение над бегуном */
        btn1.dataset.tip = config.dataset.btn1_tip;            
    }
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}
  
function mouseVertDownBtnFirstDouble (event: MouseEvent) {

  /* TODO Убирать нельзя - это для тестирования !!! */
  console.log('Вызов из mouseVertDownBtnFirstDouble');
  let elem = event.target as HTMLElement;
  let config: HTMLElement = elem.parentNode.parentNode.parentNode.querySelector('.zdslider-config');
  let slerNumber: number = Number(config.dataset.inst);
  let sler = document.querySelectorAll('.ranger')[slerNumber-1] as HTMLElement;
  let interval: HTMLElement = sler.querySelector('.ranger__interval');     
  let btn1: HTMLElement = sler.querySelector('[data-type="btn-first"]');
  let btn2: HTMLElement = sler.querySelector('[data-type="btn-second"]');

  let discreteStatus: string = config.dataset.discrete;
  let intervalNumber: number = Number ( config.dataset.scale_length ) - 1  /* Для дискретного перемещения */
 
  let slerCoords = getCoords(sler) as DOMRect
  let btn1Coords = getCoords(btn1) as DOMRect
  let btn2Coords = getCoords(btn2) as DOMRect

  /* Если не учитывать, то будет при первом перемещении бегунка скачок на эту величину */
  /* Это смещение клика от левого края бегунка, изменяется от 0 до ширины бегунка */
  let shiftY1: number = event.pageY - btn1Coords.top; 
                                                
  let shiftY2: number = event.pageY - btn2Coords.top;

  document.onmousemove = function (event: MouseEvent) {
      let top1: number = event.pageY - shiftY1 - slerCoords.top;       
      let down1: number = sler.offsetHeight;  
      shiftY2 = event.pageY - btn2Coords.top; 
      let top2: number = event.pageY - shiftY2 - slerCoords.top;
      let down2: number = sler.offsetHeight;

      /* Тестирование */
      if (localStorage.test) {
        top1 = Number(localStorage.top1_1);
      }

      if (top1 < 0) top1 = 0;

      /* Тестирование */
      if (localStorage.test) {
        top1 = Number(localStorage.top1_2);
        down1 = Number(localStorage.down1_2);
      }

      if (top1 > down1) top1 = down1; 

      let discretArr: number[] = discreteArray (intervalNumber, down1);

      let range: number = discretArr[1] - discretArr[0];
      let integ: number = Math.floor(top1);

      if ( discreteStatus === 'yes' ) {
        let counter: number = 0;

        discretArr.forEach((num) => {

          /* Тестирование */
          if (localStorage.test) {
            integ = Number(localStorage.integ);
            num = Number(localStorage.num);
            range = Number(localStorage.range);
          }

          if (integ < (num + range / 2) && integ > (num - range / 2)) {

              /* Тестирование */
              if (localStorage.test) {
                num = Number(localStorage.num1_1);
                top2 = Number(localStorage.top2_1);
              }

              if (num > top2) {
                interval.style.height = ( num - top2 ) + 'px';
                interval.style.marginTop = top2 + 'px';
              }

              /* Тестирование */
              if (localStorage.test) {
                num = Number(localStorage.num1_2);
                top2 = Number(localStorage.top2_2);
              }

              if (num <= top2) {
                interval.style.height = ( top2 - num ) + 'px';
                interval.style.marginTop = num + 'px';                
              }

              btn1.style.marginTop = num + 'px' 
              let coords: number = sler.offsetHeight - num;

              config.dataset.btn1_coord = String(coords);

              /* Передача значения в конфиг */
              config.dataset.btn1_tip = String(forTip(elem, coords)); 
              
              /* Значение над бегуном */
              btn1.dataset.tip = config.dataset.btn1_tip;             
          }
          counter += 1          
        })          
      } else if (discreteStatus === 'no') {
          btn1.style.marginTop = top1 + 'px'
          shiftY2 = event.pageY - btn2Coords.top; 
          let top2: number = event.pageY - shiftY2 - slerCoords.top;
          let down2: number = sler.offsetHeight;

          /* Тестирование */
          if (localStorage.test) {
            top2 = Number(localStorage.top2_1);
          }

          if (top2 < 0) top2 = 0;

          /* Тестирование */
          if (localStorage.test) {
            top2 = Number(localStorage.top2_2);
            down2 = Number(localStorage.down2_2);
          }

          if (top2 > down2) top2 = down2; 

          /* Тестирование */
          if (localStorage.test) {
            top1 = Number(localStorage.top1_3);
            top2 = Number(localStorage.top2_3);
          }

          if (top1 > top2) {
            interval.style.height = ( top1 - top2 ) + 'px';
            interval.style.marginTop = top2 + 'px';
          }

          /* Тестирование */
          if (localStorage.test) {
            top1 = Number(localStorage.top1_4);
            top2 = Number(localStorage.top2_4);
          }

          if (top1 <= top2) {
            interval.style.height = (top2 - top1) + 'px';
            interval.style.marginTop = top1 + 'px';
          }

          let coords: number = sler.offsetHeight - top1;

          config.dataset.btn1_coord = String(coords);

          /* Передача значения в конфиг */
          config.dataset.btn1_tip = String(forTip(elem, coords));
          
          /* Значение над бегуном */
          btn1.dataset.tip = config.dataset.btn1_tip;             
      }        
  }

  document.onmouseup = function() {
      document.onmousemove = document.onmouseup = null;
  };  
}

