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
    }
    appendTo(parent) {
        parent.appendChild(this.$el)
    }
    setAttribute(attr, number) {
        this.$el.setAttribute(attr, number)
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