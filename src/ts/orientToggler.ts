import { hideTip } from '../js/tipToggler.js'

export function orientationToggler (elem: HTMLElement, orientation: string) {
    let zdslider = elem.parentNode.parentNode.querySelector('.zdslider') as HTMLElement;
    let ranger: HTMLElement = zdslider.querySelector('.ranger');
    let rangerInterval: HTMLElement = zdslider.querySelector('.ranger__interval');
    let rangerScale: HTMLElement = zdslider.querySelector('.ranger__scale');
    let rangerScaleDivision: HTMLElement = zdslider.querySelector('.ranger__scale-division');
    let rangerScaleDivisionSpans = zdslider.querySelectorAll('.ranger__scale-division-span');
    let rangerButtons = zdslider.querySelectorAll('.ranger__button');
    let config: HTMLElement = elem.parentNode.parentNode.querySelector('.zdslider-config');

    /* Сброс флага ярлыка */
    hideTip ( elem )                           

    if (orientation === 'vertical') {
        zdslider.classList.add('zdslider-vert');
        ranger.classList.add('ranger-vert');
        rangerInterval.classList.add('ranger-vert__interval');
        rangerScale.classList.add('ranger-vert__scale');
        rangerScaleDivision.classList.add('ranger-vert__scale-division');

        rangerInterval.style.height = (ranger.offsetHeight) + 'px';   
        rangerInterval.style.width = 5 + 'px';
        rangerInterval.style.marginLeft = 0 + 'px'; 
        config.dataset.width = String (ranger.offsetWidth);
        config.dataset.height = String (ranger.offsetHeight);

        rangerScaleDivisionSpans.forEach((elem) => {
          elem.classList.add('ranger-vert__scale-division-span');
        })
       
        for (let elem of rangerButtons) {
            elem.classList.add('ranger-vert__button');

            /* Сброс значений ярлыков */
            (elem as HTMLElement).dataset.tip = '';               
    
            /* Количество бегунов */
            if (rangerButtons.length === 1) {           
                (elem as HTMLElement).style.marginTop = 0 + 'px';
                (elem as HTMLElement).style.marginLeft = 0 + 'px';
            } else if (rangerButtons.length === 2) {

                if ((elem as HTMLElement).dataset.type === 'btn-first') {
                    (elem as HTMLElement).style.marginTop = ranger.offsetHeight + 'px';
                    (elem as HTMLElement).style.marginLeft = 0 + 'px';
                } else if ((elem as HTMLElement).dataset.type === 'btn-second') {
                    (elem as HTMLElement).style.marginTop = 0 + 'px';
                    (elem as HTMLElement).style.marginLeft = 0 + 'px';
                }
            }        
        }
    } else if (orientation === 'horizontal') {
        zdslider.classList.remove('zdslider-vert');
        ranger.classList.remove('ranger-vert');
        rangerInterval.classList.remove('ranger-vert__interval');
        rangerScale.classList.remove('ranger-vert__scale');
        rangerScaleDivision.classList.remove('ranger-vert__scale-division');

        /* Переопределение стиля интервала после определения класса */
        rangerInterval.style.width = ranger.offsetWidth + 'px';       
        rangerInterval.style.height = 5 + 'px';
        rangerInterval.style.marginTop = 0 + 'px';
        config.dataset.width = String (ranger.offsetWidth);
        config.dataset.height = String (ranger.offsetHeight);

        rangerScaleDivisionSpans.forEach((elem) => {
          elem.classList.remove('ranger-vert__scale-division-span');
        })

        rangerButtons.forEach((elem) => {
          elem.classList.remove('ranger-vert__button');
          elem.classList.remove('ranger-vert__button-tip');
          (elem as HTMLElement).dataset.tip = '';           

          /* Сброс значений ярлыков. Новые значения из панели */
          if (rangerButtons.length === 1) {
              (elem as HTMLElement).style.marginLeft = (ranger.offsetWidth - (elem as HTMLElement).offsetWidth) + 2 + 'px';
              (elem as HTMLElement).style.marginTop = 0 + 'px';
          } else if (rangerButtons.length === 2) {

              if ((elem as HTMLElement).dataset.type === 'btn-first') {
                  (elem as HTMLElement).style.marginLeft = 0 + 'px';
                  (elem as HTMLElement).style.marginTop = 0 + 'px';
              } else if ((elem as HTMLElement).dataset.type === 'btn-second') {
                  (elem as HTMLElement).style.marginLeft = (ranger.offsetWidth - (elem as HTMLElement).offsetWidth) + 'px'; 
                  (elem as HTMLElement).style.marginTop = 0 + 'px';
              }
          }
        })
    }
}