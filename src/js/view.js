import { mouseDownBtn_1, mouseDownBtn_2 } from './mouse.js'

export class Ranger {
    constructor ( options ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger' )
        this.$el.setAttribute('data-type', 'ranger')

    }
    appendTo ( parent ) {
        parent.appendChild ( this.$el )
    }
    setAttribute ( attr, number ) {
        this.$el.setAttribute ( attr, number )
    }
    append ( child ) {
        this.$el.append ( child )
    }
}

export class Interval {
    constructor ( options ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger__interval' )
        this.$el.setAttribute('data-type', 'interval')
    }
    appendTo ( parent ) {
        parent.appendChild ( this.$el )
    }
    setAttribute ( attr, number ) {
        this.$el.setAttribute( attr, number )
    }
    append ( child ) {
        this.$el.append( child )
    }
}

export class Button {
    constructor ( options ) {
        this.$el = document.createElement( 'button' )
        this.$el.classList.add( 'ranger__button' )

        this.#setup()
    }
    appendTo ( parent ) {
        parent.appendChild( this.$el )
    }
    setAttribute( attr, number ) {
        this.$el.setAttribute( attr, number )
    }

    #setup() {
        this.clickHandler = this.clickHandler.bind( this )        /* Только для местных функций */
        this.$el.addEventListener( 'mousedown', this.clickHandler )
    }

    clickHandler ( event ) {
       const { type } = event.target.dataset
        if ( type === 'btn-first' ) {
            mouseDownBtn_1( event )
        } else if (type === 'btn-second') {
            mouseDownBtn_2( event )
        }
    }
}


export class Scale {
    constructor ( options ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger__scale' )
    }
    appendTo( parent ) {
        parent.appendChild( this.$el )
    }
    appendChild( child ) {
        this.$el.appendChild ( child )
    }
    setAttribute( attr, number ) {
        this.$el.setAttribute ( attr, number )
    }
}

export class Division {
    constructor ( options ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger__scale-division' )
    }
    appendTo( parent ) {
        parent.appendChild( this.$el )
    }
    appendChild( child ) {
        this.$el.appendChild ( child )
    }
    setAttribute( attr, number ) {
        this.$el.setAttribute ( attr, number )
    }
}

export class Config {
    runner_number = 2
    // step = 1
    min = 16
    max = 101
    discrete = 'yes'
}

export class Panel {
    constructor () {
        this.$runners_check = document.querySelector('.zdslider-config')

        this.#setup()
    }
    #setup() {
        this.clickHandler = this.clickHandler.bind( this )        /* Только для местных функций */
        this.$runners_check.addEventListener( 'click', this.clickHandler )
    }
    clickHandler(event) {
        let { run } = event.target.dataset 
        console.log(run)
    }
}
