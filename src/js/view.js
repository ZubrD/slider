import { getCoords } from './script.js'

export class Ranger {
    constructor (options) {
        this.$el = document.createElement('div')
        this.$el.classList.add('ranger')

    }
    appendTo(parent) {
        parent.appendChild(this.$el)
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number)
    }
    append(child) {
        this.$el.append(child)
    }
}

export class Interval {
    constructor (options) {
        this.$el = document.createElement('div')
        this.$el.classList.add('ranger__interval')
    }
    appendTo(parent) {
        parent.appendChild(this.$el)
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number)
    }
    append(child) {
        this.$el.append(child)
    }
}

export class Button {
    constructor (options) {
        this.$el = document.createElement('button')
        this.$el.classList.add('ranger__button')

        this.#setup()
    }
    appendTo(parent) {
        parent.appendChild(this.$el)
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number)
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind(this)        /* Только для местных функций */
        this.$el.addEventListener('mousedown', this.clickHandler)
        // this.$el.addEventListener('mousedown', mouseDown)
    }

    clickHandler (event) {
       const {type} = event.target.dataset
        if (type === 'btn-first') {
            console.log('Первая кнопка', event.target.dataset.inst)
            mouseDownBtn_1(event)
        } else if (type === 'btn-second') {
            mouseDownBtn_2(event)
        }
    }
}

export class Input {
    constructor (options) {
        this.$el = document.createElement('input')
        this.$el.classList.add('ranger__input')
    }
    appendTo(parent) {
        parent.appendChild(this.$el)
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number)
    }
}

function mouseDownBtn_1 (event) {
    let sler_number = event.target.dataset.inst
    let sler = document.querySelectorAll('.ranger')[sler_number-1]
    let interval = document.querySelectorAll('.ranger__interval')[sler_number-1]     
    let btn1 = document.querySelectorAll('[data-type="btn-first"]')[sler_number-1]
    let btn2 = document.querySelectorAll('[data-type="btn-second"]')[sler_number-1]

    let sler_coords = getCoords(sler)
    let interval_coords = getCoords(interval)                       /* ??? */
    let btn1_coords = getCoords(btn1)
    let btn2_coords = getCoords(btn2)
    let shiftX1 = event.pageX - btn1_coords.left;
    let shiftX2 = event.pageX - btn2_coords.left;
    // console.log(shiftX1)

    document.onmousemove = function (event) {
        let left1 = event.pageX - shiftX1 - sler_coords.left;
        let right1 = sler.offsetWidth - btn1.offsetWidth;
        if (left1 < 0) left1 = 0;                                 
        if (left1 > right1) left1 = right1;         
        btn1.style.marginLeft = left1 + 'px'

        shiftX2 = event.pageX - btn2_coords.left; 
        let left2 = event.pageX - shiftX2 - sler_coords.left;
        let right2 = sler.offsetWidth - btn2.offsetWidth;
        if (left2 < 0) left2 = 0;
        if (left2 > right2) left2 = right2;            
         
        let per_min = 0;
        let per_max = 0;

        if (left1 > left2)
        {
          interval.style.width = (left1-left2) + 'px';
          interval.style.marginLeft = left2 + 'px';
           
          per_min = left2*100/(sler.offsetWidth-btn1.offsetWidth);
          per_max = left1*100/(sler.offsetWidth-btn1.offsetWidth);
        }
        else
        {
          interval.style.width = (left2-left1) + 'px';
          interval.style.marginLeft = left1 + 'px';                
          
          per_min = left1*100/(sler.offsetWidth-btn1.offsetWidth);
          per_max = left2*100/(sler.offsetWidth-btn1.offsetWidth);
        }
        //   inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
        //   inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
    }

    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
}

function mouseDownBtn_2 (event) {
    let sler_number = event.target.dataset.inst
    let sler = document.querySelectorAll('.ranger')[sler_number-1]
    let interval = document.querySelectorAll('.ranger__interval')[sler_number-1]     
    let btn1 = document.querySelectorAll('[data-type="btn-first"]')[sler_number-1]
    let btn2 = document.querySelectorAll('[data-type="btn-second"]')[sler_number-1]

    let sler_coords = getCoords(sler)
    let interval_coords = getCoords(interval)                       /* ??? */
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
         
        let per_min = 0;
        let per_max = 0;

        if (left1 > left2)
        {
          interval.style.width = (left1-left2) + 'px';
          interval.style.marginLeft = left2 + 'px';       
          per_min = left2*100/(sler.offsetWidth-btn1.offsetWidth);
          per_max = left1*100/(sler.offsetWidth-btn1.offsetWidth);
        }
        else
        {
          interval.style.width = (left2-left1) + 'px';
          interval.style.marginLeft = left1 + 'px';                
          per_min = left1*100/(sler.offsetWidth-btn1.offsetWidth);
          per_max = left2*100/(sler.offsetWidth-btn1.offsetWidth);
        }
        //   inpt1.value= (parseInt(min)+Math.round((max-min)*per_min/100));
        //   inpt2.value= (parseInt(min)+Math.round((max-min)*per_max/100)); 
    }

    document.onmouseup = function() {
        document.onmousemove = document.onmouseup = null;
    };
}