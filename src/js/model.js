import { mouseDownBtn_1, mouseDownBtn_2 } from './mouse.js'
import { mouseVertDownBtn_1, mouseVertDownBtn_2 } from './mouseVert.js'

export class Ranger {
    constructor ( orientation ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger' )
        this.$el.setAttribute('data-type', 'ranger')
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert' )
        }
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
    constructor ( orientation ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger__interval' )
        this.$el.setAttribute('data-type', 'interval')
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__interval' )
        }
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
    constructor ( orientation ) {
        this.$el = document.createElement( 'button' )
        this.$el.classList.add( 'ranger__button' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__button' )
        }

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
       const { orientation } = event.target.parentNode.parentNode.dataset
       if ( orientation == 'horizontal') {
            if ( type === 'btn-first' ) {
                mouseDownBtn_1( event )
            } else if (type === 'btn-second') {
                mouseDownBtn_2( event )
            }        
       } else if ( orientation == 'vertical' ) {
            if ( type === 'btn-first' ) {
                mouseVertDownBtn_1( event )
            } else if (type === 'btn-second') {
                mouseVertDownBtn_2( event )
            }             
       }
    }
}


export class Scale {
    constructor ( orientation ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger__scale' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__scale' )
        }
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

export class ScaleSpan {
    constructor ( orientation ) {
        this.$el = document.createElement ( 'span' )
        this.$el.classList.add ( 'ranger__scale-span' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__scale-span' )
        }
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
    inner_HTML(child) {
        this.$el.innerHTML = child
    }
}

export class Division {
    constructor ( orientation ) {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'ranger__scale-division' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__scale-division' )
        }
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

export class DivisionSpan {
    constructor ( orientation ) {
        this.$el = document.createElement ( 'span' )
        this.$el.classList.add ( 'ranger__scale-division-span' )
        if ( orientation == 'horizontal' ) {
            
        } else if ( orientation == 'vertical' ) {
            this.$el.classList.add ( 'ranger-vert__scale-division-span' )
        }
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

export class Panel {
    constructor () {
        this.$runners_check = document.querySelector('.zdslider-panel')

        this.#setup()
    }
    #setup() {
        this.clickHandler = this.clickHandler.bind( this )        /* Только для местных функций */
        this.$runners_check.addEventListener( 'click', this.clickHandler )
    }
    clickHandler(event) {
        let { run } = event.target.dataset 
    }
}

export class Settings {
    constructor () {
        this.$el = document.createElement ( 'div' )
        this.$el.classList.add ( 'zdslider-config' )
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
