import { mouseDownBtn_1, mouseDownBtn_2 } from './script.js'

export class Ranger {
    constructor ( options ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger' )

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

export class Input {
    constructor ( options ) {
        this.$el = document.createElement ( 'input' )
        this.$el.classList.add ( 'ranger__input' )
    }
    appendTo( parent ) {
        parent.appendChild( this.$el )
    }
    setAttribute( attr, number ) {
        this.$el.setAttribute ( attr, number )
    }
}

export class Config {
    runner_number = 2
}
