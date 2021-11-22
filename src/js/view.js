export class Ranger {
    constructor (options) {
        this.$floor = document.createElement('div')
        this.$floor.classList.add('ranger')
    }
    appendTo(parent) {
        parent.appendChild(this.$floor)
    }
    setAttribute(attr, number) {
        this.$floor.setAttribute(attr, number)
    }
    append(child) {
        this.$floor.append(child)
    }
}

