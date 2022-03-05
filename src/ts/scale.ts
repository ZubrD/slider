import {
  Scale,
  Division,
  DivisionSpan,
  ScaleSpan} from '../js/model.js'

/* Получение координат элементов слайдера */  
export function getCoords(elem: HTMLElement) {   
    let coords: DOMRect = elem.getBoundingClientRect();
    return {
        top: coords.top as number,
        left: coords.left as number,
    };
}  
  
/* Массив значений для шкалы по умолчанию */  
export function makeScale (min: number, max: number, step: number) {     
  let stepArr: number[] = [];
  let dividersArr: number[] = [];

  /* Массив размера шага */
  let iterationArr: number[] = [];  

  /* Член массива размеров шага */
  let iter: number = 0;            
  let maximus: number = 0;
  let iteration: number = 0;
  let item: number = 0;
  if (step > 0) {
    let range: number = max - min

    /* Получаю массив делителей без остатка */
    for ( let i = 2; i < range/2 + 1; i ++ ){   
      if (range % i) {
          
      } else {
          dividersArr.push( i )
      }
    }

    if ( dividersArr.length > 0 ) {

      /* Определяю наибольшее количество интервалов меньше 10 */ 
      for ( let el of dividersArr ) {              
        if (el < 10) {
          maximus = el;
          iter = range / maximus;

          /* Массив размеров шага шкалы */
          iterationArr.push (iter);    
        } else {

          /* Не применил forEach из-за break */
          break
        }               
      }
    } else {
      stepArr = [min, max];
      return [stepArr, iteration, iterationArr];
    }

    /* Иначе iteration = Infinity */
    if ( maximus === 0 ) {           
      stepArr = [min, max];
      return [stepArr, iteration, iterationArr];
    }

    iteration = range / maximus;

    /* Переопределение - этот участок кода применяется при изменении размера шага через панель */
    if (step > 1) {                           
        iteration = step;                        
        maximus = range / iteration;             
    }

    item = min;
    stepArr.push(min);

    /* Массив значений шкалы */
    for (let i = 0; i < maximus; i ++) {   
      item = item + iteration;
      stepArr.push(item);
    }

  } else {
      stepArr = [min, max];
  }

  return [stepArr, iteration, iterationArr];
}
  
  
export function reScale (scaleArr: number[], currentInst: number) {
  let parents = document.querySelectorAll('.zdslider')

  parents.forEach((parent) => {
    let config: HTMLElement = parent.parentNode.querySelector('.zdslider-config');
    if (Number(config.dataset.inst) == currentInst) {
      let currentRanger: HTMLElement = parent.querySelector('.ranger');
      let currentScale: HTMLElement = parent.querySelector('.ranger__scale');
      let currentDivision: HTMLElement = parent.querySelector('.ranger__scale-division');
      let orientation: string = config.dataset.orientation;
      currentScale.remove();
      currentDivision.remove();
      
      /* Для дискретного перемещения */
      config.dataset.scale_length = String(scaleArr.length);                          
      
      let division = new Division(orientation);
      division.appendTo(parent); 

      scaleArr.forEach((el) => {
        let span = new DivisionSpan(orientation);
        span.appendTo(division);        
      })

      let scale = new Scale(orientation);
      scale.appendTo(parent);

      scaleArr.forEach((el) => {
        let span = new ScaleSpan(orientation);
        span.appendTo(scale);
        span.inner_HTML(el);        
      })
    }    
  })
}
  
/* Изменение инпута переключения шага  */  
export function modifyScaleInput (parent: HTMLElement, iteration: number, iterationsArr: number[]) {   
    let confInputStep: HTMLInputElement = parent.querySelector('.zdslider-panel__step');
    confInputStep.setAttribute ('data-steps', String(iterationsArr));
    confInputStep.setAttribute ('data-iteration', String(iteration))
    confInputStep.setAttribute ('data-current', String(iteration))
    if (iterationsArr.length !== 0) {
        confInputStep.disabled = false; 
        confInputStep.setAttribute ('max', String(iterationsArr[0]));
        confInputStep.setAttribute ('min', String(iterationsArr[iterationsArr.length - 1]));
    } else {      

        /* Если интервалов для шкалы нет, то делаю инпут неактивным */
        confInputStep.disabled = true;
    }
    confInputStep.value = confInputStep.dataset.iteration;
}
  
