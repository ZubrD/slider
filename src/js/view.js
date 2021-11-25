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
        this.clickHandler = this.clickHandler.bind(this)
        this.$el.addEventListener('click', this.clickHandler)
        this.$slider = document.querySelector('.ranger')
        this.$button = document.querySelector('[id="b1_1"]')
        // this.$el.addEventListener('mousedown', this.getCoords)
    }
    clickHandler (event) {
    //    console.log(event.target.id)
       const {type} = event.target.dataset
        if (type === 'btn-first') {
            // console.log('Первая кнопка', event.target.id, this.$button)
            
        } else if (type === 'btn-second') {
            // console.log('Вторая кнопка', event.target.id, this.$button_2)
            this.getCoords(this.$slider)
        }
    }
    getCoords(elem) {
        let coords = elem.getBoundingClientRect();
        return {
            top: coords.top,
            left: coords.left
        };
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